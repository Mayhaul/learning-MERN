const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

function getRandomUser() {
    return {
        userId: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past()
    };
}
console.log(getRandomUser());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'college',
    password: 'root'
});

// console.dir(connection);

connection.query("SHOW TABLES",(err,result)=>{
    console.log(result);
    for(i of result){
        console.log(i.Tables_in_college);
    }
});

try{
    connection.query("SELECT username FROM user WHERE username like 'M%'",(err,result)=>{
    if(err) throw err;
    console.log(result);
});
} catch(err) {
    console.log(err);
}
