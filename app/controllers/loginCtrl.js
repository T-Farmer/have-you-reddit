console.log(Login control...)

app.controller("LoginCtrl", function($scope, $location, AuthFactory){
  $scope.login = () =>  AuthFactory
  .login($scope.email, $scope.password)
    .then(() => {
      $location.url("/");
      $scope.$apply();
    });

});
