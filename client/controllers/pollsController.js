beltExamTwo.controller('PollsController', function($scope, PollFactory, UserFactory, $location){

$scope.message = false;
UserFactory.shareUser(function(data){
  $scope.currentUser = data;
  if(!$scope.currentUser){
    $location.url('/');
  }
  console.log("Polls Controller current user", $scope.currentUser);
})

$scope.addPoll = function(){
  $scope.message = false;
  $scope.newPoll.name = $scope.currentUser.name;
  PollFactory.createPoll($scope.newPoll, function(data){
    $scope.message = data;
    if($scope.message == "Success"){
      $location.url('/dashboard');
    }
  })
}




}) //closes PollsController
