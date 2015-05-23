var app = angular.module('practiceApp',[]);

app.controller('SwitchController',['$scope',function($scope){
    $scope.items =['AGENTS','HELP'];
    $scope.selection = $scope.items[0];

    $scope.switch= function(index){
        $scope.selection = $scope.items[index];
    };

}]);