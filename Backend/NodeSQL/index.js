const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');

const app = express();
const port = 6969;

app.use(express.urlencoded({ extended: true })); // for form data
app.use(express.json()); // for JSON (optional but good)

app.listen(port, ()=>{
    console.log(`server is live at http://localhost:${port}/`);
});

app.set("view engine","ejs");

function getRandomUser() {
    return {
        id: faker.string.uuid(),
        username: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
}

// console.log(getRandomUser());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'college',
    password: 'root'
});

// console.dir(connection);

// connection.query("SHOW TABLES",(err,result)=>{
//     console.log(result);
//     for(i of result){
//         console.log(i.Tables_in_college);
//     }
// });



const data = [];
for(let i = 0; i < 100; i++){
    data.push(getRandomUser());
    // console.log(data[i]);
}

const q = "INSERT INTO user (id,username,email,password) VALUES ?;";

connection.query(q,[data],async(error,result)=>{
    // console.log(result);
});

try{
    connection.query("SELECT * FROM user;",(err,result)=>{
    if(err) throw err;
    console.log(result);
});
} catch(err) {
    console.log(err);
}

app.get('/',(req,res)=>{
    connection.query(
    "SELECT COUNT(username) AS count FROM user",
    (error, result) => {
        res.send(result[0].count.toString());
    }
        );
});


app.get('/home', (req, res) => {
    connection.query(
        "SELECT * FROM user;",
        (error, result) => {
            if (error) {
                console.error(error);
                return res.send("DB Error");
            }
            // console.log(result);

            res.render("home", { result });
            // res.send(result);
        }
    );
});

app.get('/user',(req,res)=>{
    res.render("user");
});

app.post('/user',(req,res)=>{
    console.log(req.body);
    let info = [req.body.id,req.body.username,req.body.email,req.body.password];
    connection.query("insert into user (id,username,email,password) values (?,?,?,?)",info,(error,result)=>{
        console.log(result);
    });
    res.redirect("/home");
});

app.post('/delete', (req, res) => {
    const id = req.body.id;

    connection.query(
        "DELETE FROM user WHERE id = ?",
        [id],
        (error, result) => {
            if (error) {
                console.log(error);
                return res.send("Error deleting user");
            }

            if (result.affectedRows === 0) {
                return res.send("No user found with that ID");
            }

            res.redirect('/home');
        }
    );
});


app.get('/edit/:id', (req, res) => {
    const { id } = req.params;

    connection.query(
        "SELECT * FROM user WHERE id = ?",
        [id],
        (error, result) => {
            if (error) {
                console.log(error);
                return res.send("DB Error");
            }

            if (result.length === 0) {
                return res.send("User not found");
            }

            res.render("edit", { user: result[0] });
        }
    );
});

app.post('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;

    connection.query(
        "UPDATE user SET username = ?, email = ?, password = ? WHERE id = ?",
        [username, email, password, id],
        (error, result) => {
            if (error) {
                console.log(error);
                return res.send("Update failed");
            }

            res.redirect("/home");
        }
    );
});