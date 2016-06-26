var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
// var User = mongoose.model('User');
module.exports = (function(){
  return {


  create: function(req, res){
    console.log("IN THE BACK END", req.body);
    var poll = new Poll({
      name: req.body.name,
      question: req.body.question,
      option1: req.body.option1,
      option2: req.body.option2,
      option3: req.body.option3,
      option4: req.body.option4,
      vote1: 0,
      vote2: 0,
      vote3: 0,
      vote4: 0
    });
    poll.save(function(err){
      if(err){
        if(err.errors.question){
          res.json(err.errors.question.message);
        }
        else if(err.errors.option1){
          res.json(err.errors.option1.message);
        }
        else if(err.errors.option2){
          res.json(err.errors.option2.message);
        }
        else if(err.errors.option3){
          res.json(err.errors.option3.message);
        }
        else{
          res.json(err.errors.option4.message);
        }
      }
      else {
        res.json("Success");
      }
    })//closes poll.save
  },//closes create

  index: function(req, res){
    Poll.find({}, function(err, polls){
      if(err){
        res.json(err)
      }
      else {
      res.json(polls);
      }
  	})//closes poll.find
  },//closes index

  findPoll: function(req, res){
    Poll.find({_id:req.params.id}, function(err, poll){
      if(err){
        res.json(err);
      }
      else {
        res.json(poll);
      }
    })//closes poll.fild
  },//closes findPoll

  updateVoteCount: function(req, res){
    console.log("In the back end params", req.params.id);
    console.log("In the back end,", req.body.vote1);
    Poll.update({_id: req.params.id}, {$set: {vote1: req.body.vote1, vote2: req.body.vote2, vote3: req.body.vote3, vote4: req.body.vote4}},   function(err){
      if(err){
        res.json(err)
      }
      else {
        res.json({message: "Updated!"})
      }
    })
  },//closes updateVoteCount

  delete: function(req, res){
    Poll.remove({_id:req.params.id}, function(err){
      if(err){
        res.json(err);
      }
      else {
        res.json({message: "Successfully deleted."})
      }
    })
  }//closes delete

}//closes return
})();//closes module.exports
