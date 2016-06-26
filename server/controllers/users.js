var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
  return {

  findUserforProfile: function(req,res){
    User.find({name: req.params.name}, function(err, user){
      if(err){
        console.log("Major error");
        res.json(err)
      }
      else {
        console.log("Here's what I got", user);
        res.json(user);
      }
    })
  },

  findUser: function(name, req,res){
    User.find({name: name}, function(err, user){
      if(err){
        console.log("Major error");
        res.json(err)
      }
      else {
        console.log("Here's what I got", user);
      res.json(user);
      }
    })

  },//closes findUser
  create: function(req, res){
    var user = new User({
      name: req.body.name,
      bucketlist: []
    });
    user.save(function(err){
      if(err){
        res.json({message: "There was an error!"})
      }
      else {
        res.json({message: "Successfully added "+ req.body.name});
      }
    })//closes user.save
  },//closes create

  index: function(req,res){
  	User.find({}, function(err, users){
      if(err){
        res.json(err)
      }
      else {
      res.json(users);
      }
  	});//closes index
  }
}//closes return
})();//closes module.exports
