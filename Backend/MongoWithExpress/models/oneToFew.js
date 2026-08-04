const mongoose = require('mongoose');

const oneToFewSchema = new mongoose.Schema({
    username: String,
    addresses: [
        {
            location: String,
            city: String
        }
    ]
});

const OneToFew = mongoose.model('otfSchema',oneToFewSchema,'otfSchema');

const addUsers = async ()=>{
    let user1 = new OneToFew({
        username: 'MehulVerma',
        addresses: [
            {
                location:'abc',
                city: 'Mohali'
            },
           {
                location:'xyz',
                city: 'Mumbai'
            }
        ]
    });

    console.log(user1);
    await user1.save();
    
}



module.exports = addUsers;