var app = angular.module('practiceApp', []);

app.controller('SwitchController', ['$scope', function ($scope) {
    $scope.items = ['AGENTS', 'HELP'];
    $scope.selection = $scope.items[0];
    $scope.itemIndex = 0;

    $scope.switch = function (index) {
        $scope.selection = $scope.items[index];
        $scope.itemIndex = index;
    };
}]);

app.controller('AgentlistController', ['$scope','$http', function ($scope,$http) {
    $scope.AgentItems =
        [
            {
                title: "agent02.thoughtworks.com", category: 'idle', ip: '192.168.1.2',
                resources: ['ubuntu', 'firefox']
            },
            {
                title: "agent03.thoughtworks.com", category: 'building', ip: '192.168.1.3',
                resources: ['ubuntu', 'chrome', 'mysql']
            },
            {
                title: "agent04.thoughtworks.com", category: 'building', ip: '192.168.1.4',
                resources: ['ie', 'mysql']
            },
            {
                title: "agent05.thoughtworks.com", category: 'idle', ip: '192.168.1.5',
                resources: ['ubuntu']
            }
        ];
    $scope.remove = function(resource,item){
        //console.log(resource);
        //console.log(item);
        var indexOfItem = $scope.AgentItems.indexOf(item);
        //console.log(indexOfItem);
        var index = $scope.AgentItems[indexOfItem].resources.indexOf(resource);
        //console.log(index);
        $scope.AgentItems[indexOfItem].resources.splice(index,1);
    }

    $scope.sendRec = function(data,item){
        var indexOfItem = $scope.AgentItems.indexOf(item);
        var newdata = data.split(',');
        console.log(newdata);
        for (var i = 0; i < newdata.length; i++){
            $scope.AgentItems[indexOfItem].resources.push(newdata[i]);
        }
    };
}]);



app.filter('sumByKey', function () {
    return function (data, key) {
        if (typeof (data) === 'undefined' || typeof (key) === 'undefined') {
            return 0;
        }
        var sum = 0;
        for (var i = data.length - 1; i >= 0; i--) {
            if(data[i].category== key){sum ++;}
        }
        return sum;
    };
});

app.directive('contentView', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/content-view.html'
    }
});