var users = require('../controllers/users.js');
var polls = require('../controllers/polls.js');

module.exports = function(app){

  app.get('/findUser/:name', function(req, res){
    console.log("routes", req.params.name);
    var name = req.params.name;
  	users.findUser(name, req, res)
  });

  app.post('/adduser', function(req, res){
    users.create(req, res);
  })

  app.get('/users', function(req, res){
    users.index(req, res)
  })

  app.post('/createpoll', function(req, res){
    polls.create(req, res)
  })

  app.get('/polls', function(req, res){
    polls.index(req, res)
  })

  app.get('/polls/:id', function(req, res){
    polls.findPoll(req, res);
  })

  app.put('/updatePoll/:id', function(req, res){
    polls.updateVoteCount(req, res);
  })
  app.delete('/deletePoll/:id', function(req, res){
    console.log("routes,", req.params.id);
    polls.delete(req, res);
  })

} //closes module.exports
