beltExamTwo.factory('UserFactory', function($http){
  var factory = {};
  var currentuser;
  var users = [];



  factory.findCurrentUser = function(name, callback){
    console.log("Factory", name)
    $http.get('/findUser/'+name).success(function(res){
      currentuser = res;
      currentuser = currentuser[0];
      console.log("Our current user", currentuser);
      callback(res);
    })
  }//closes index

  factory.create = function(user, callback){
      $http.post('/adduser', user).success(function(res){
        callback(res.message);
      })
    }
  factory.shareUser = function(callback){
    callback(currentuser);
  }

  factory.index = function(callback){
    $http.get('/users').success(function(res){
      users = res;
      callback(users);
    })
  }//closes index

  return factory;
})//closes User Factory
