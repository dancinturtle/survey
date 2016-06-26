beltExamTwo.factory('PollFactory', function($http){
  var factory = {};
  var allPolls = [];
  var currentPoll;
  factory.createPoll = function(poll, callback){
    $http.post('/createpoll', poll).success(function(res){
      console.log("Factory resp", res);
      callback(res);
    })
  }

  factory.index = function(callback){
    $http.get('/polls').success(function(res){
      allPolls = res;
      callback(allPolls);
    })
  }
  factory.getPoll = function(id, callback){
    $http.get('/polls/'+id).success(function(res){
      currentPoll = res;
      callback(currentPoll);
    })
  }
  factory.updateVoteCount = function(poll, callback){
    console.log("Factory", poll);
    $http.put('/updatePoll/'+poll._id, poll).success(function(res){
      callback(res);
    })
  }
  factory.deletepoll = function(id, callback){
    console.log("factory id to delete", id);
    $http.delete('/deletePoll/'+id).success(function(res){
      callback(res.message);
    })
  }



  return factory;
})//closes pollfactory
