beltExamTwo.controller('DashboardController', function($scope, UserFactory, PollFactory, $location){

  $scope.allPolls = [];

  UserFactory.shareUser(function(data){
    $scope.currentUser = data;
    if(!$scope.currentUser){
      $location.url('/');
    }
    console.log("Dashboard's current user", $scope.currentUser);
  })

  $scope.getAllPolls = function(){
    PollFactory.index(function(data){
      $scope.allPolls = data;
      for(i=0; i<$scope.allPolls.length; i++){
        //format the date for all polls
        var date = new Date($scope.allPolls[i].createdAt);
        $scope.allPolls[i].createdAt = date.toDateString();
        //determine whether they're owned by currentuser or not.
        if($scope.allPolls[i].name == $scope.currentUser.name){
          $scope.allPolls[i].owned = true;
        }
      }
      console.log("all the polls after manipulations", $scope.allPolls)

    })
  }
  
  $scope.getAllPolls();

  $scope.deletepoll = function(id){
    PollFactory.deletepoll(id, function(data){
      console.log(data);
    })
    $scope.getAllPolls();
  }

}); //closes DashboardController
