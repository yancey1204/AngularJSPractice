var app = angular.module('practiceApp',[]);

app.controller('SwitchController',['$scope',function($scope){
    $scope.items =[{name:'AGENTS'},{name:'HELP'}];
    $scope.selection = $scope.items[0];

    $scope.switch= function(){

    };

}]);