beltExamTwo.controller('PollTakingController', function($scope, PollFactory, UserFactory, $routeParams){
  console.log("Route params!!", $routeParams);

  PollFactory.getPoll($routeParams.id, function(data){
    $scope.currentPoll = data[0];
    console.log("Poll to take", $scope.currentPoll)
  })

  $scope.vote = function(option){
    console.log(option);
    if(option == 1){
      $scope.currentPoll.vote1 ++;
    }
    else if(option == 2){
      $scope.currentPoll.vote2 ++;
    }
    else if(option == 3){
      $scope.currentPoll.vote3 ++;
    }
    else {
      $scope.currentPoll.vote4 ++;
    }
    PollFactory.updateVoteCount($scope.currentPoll, function(data){
      console.log(data);
    });
  }



}) //closes polltakingcontroller
