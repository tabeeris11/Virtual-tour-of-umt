const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
   cnic:  
   { type: String,
     required: true 
    },
    fullname: 
    { type: String, 
    required: true },

    email: 
    { type: String, 
    required: true },
 
     phoneNumber:
      { type: String, 
        required: true }
});

module.exports = mongoose.model('Student', studentSchema);
