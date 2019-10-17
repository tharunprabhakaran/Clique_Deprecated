const express = require('express')
const pupil = require('../model/pupil');
const bcrypt = require('bcrypt');
const cannister = require('../config/cannister')
const router = express.Router();

/****** Registering Managment  Users  ******/
router.post('/register', async (req,res) => {
   const userList = req.body.payLoad;
   let i = 0;
    for (const user of userList) {
      //check email exists or not
      const emailExist = await pupil.findOne({email : user.email});
      if(emailExist){
            cannister.metadata.service = 'Registration';
            cannister.metadata.timeStamp = Date.now();
            cannister.metadata.subService = 'ManagementSignUp';
            cannister.metadata.payLoadType = 'JSON'
            cannister.payLoad[i] = { "Serial Number": i+1, "email" : user.email , "Desc" : "Please retry from the data beloging to this no"};
            cannister.payLoadType = "JSON";
            cannister.error.code = "ERR001";
            cannister.error.description = "student already Exists";
            return res.status(400).json(cannister);
        }
        //Hash passwords
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password,salt)
        
        //Create a new Management user
        const newuser = new pupil({
            name : user.name,
            dob : user.dob,
            gender : user.gender,
            school : user.school,
            grade : user.grade,
            section : user.section,
            country : user.country,
            city : user.city,
            address : user.address,
            phoneUno : user.phone1,
            phonedos : user.phone2,
            bloodgroup : user.bloodgroup,
            coordinates : user.coordinates,
            allergies : user.allergies,
            medicalcondition : user.medicalcondition,
            schoolid : user.schoolid,
            pupilid : user.pupilid,
            email : user.email,
            password : hashPassword
        });
        // Adding the Teacher to table
        try{
            const savedUser = await newuser.save();
        } catch(err){
            console.log(err);
            cannister.metadata.service = 'Registration';
            cannister.metadata.timeStamp = Date.now();
            cannister.metadata.subService = 'ManagementSignUp';
            cannister.metadata.payLoadType = 'JSON'
            cannister.payLoad[i] = { "Serial Number": i+1, "email" : user.email , "desc" : "Please retry from the data beloging to this no"};
            cannister.payLoadType = "JSON";
            cannister.error.code = "ERR001";
            cannister.error.description = "Unable to save user. Please Try again";
            return res.status(400).json(cannister);
            
        }
        //Adding each saved management user to payload
        cannister.payLoad[i] = { "Serial Number": i+1 , "email" : user.email, "desc" : "added to db!!"};
        i = i +1;
    }
  
    cannister.metadata.service = 'Registration';
    cannister.metadata.timeStamp = Date.now();
    cannister.metadata.subService = 'ManagementSignUp';
    cannister.metadata.payLoadType = 'JSON'
    cannister.payLoadType = "JSON";
    cannister.error.code = "SUCC001";
    cannister.error.description = "All users are saved";
    return res.status(200).json(cannister);
});


module.exports = router;