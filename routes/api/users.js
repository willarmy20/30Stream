const express = require('express');
const router = express.Router();

/* POST add users. */
router.post('/register', function(req, res, next) {
  //check for all required fields
  if(!req.body.name|| !req.body.email || !req.body.password){
    res.status(404).json({
      error:'please included all required fields'
    })
    return
  }
     //check for duplicaten user emails
      models.User.findAll({
        where:{
          email: req.body.email
        }
      }).then(users =>{
        //if there is a existing user
        if(users.length){
          //send response
          res.status(404).json({
            error: 'user already exists'
          })
        }else{
          //hash pasword
          bcrypt.hash(req.body.password, 10).then(hash =>{
            //use hash to create a new user
            models.User.create({
              name:req.body.name,
              email:req.body.email,
              password: hash
            }).then(user=>{
              //response with sucess new user
              res.json(user)
            })
          })
        }
      })
});

module.exports = router;
