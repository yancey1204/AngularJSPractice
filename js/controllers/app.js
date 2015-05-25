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

app.controller('AgentlistController', ['$scope', function ($scope) {
    $scope.AgentItems = [{
        title: "agent02.thoughtworks.com", category: 'idle', ip: '192.168.1.2', resources: ['ubuntu', 'firefox']
    }, {
        title: "agent03.thoughtworks.com",
        category: 'building',
        ip: '192.168.1.3',
        resources: ['ubuntu', 'chrome', 'mysql']
    }, {
        title: "agent04.thoughtworks.com", category: 'building', ip: '192.168.1.4', resources: ['ie', 'mysql']
    }, {
        title: "agent05.thoughtworks.com", category: 'idle', ip: '192.168.1.5', resources: ['ubuntu']
    }];

    $scope.remove = function (resource, item) {
        var indexOfItem = $scope.AgentItems.indexOf(item);
        var index = $scope.AgentItems[indexOfItem].resources.indexOf(resource);
        $scope.AgentItems[indexOfItem].resources.splice(index, 1);
    }
    $scope.sendRec = function (data, item) {
        var indexOfItem = $scope.AgentItems.indexOf(item);
        var newdata = data.split(',');
        console.log(newdata);
        for (var i = 0; i < newdata.length; i++) {
            $scope.AgentItems[indexOfItem].resources.push(newdata[i]);
        }
        indexOfItem = null;
        newdata = {};
    };
}]);

app.controller('AgentitemController',['$scope',function($scope){
    $scope.getClassByIndex = function (index) {
        var data = $scope.AgentItems[index].category;
        if (data == 'building') {
            return 'building';
        }
        else if (data == 'idle') {
            return 'idle';
        }
        data = null;
    }

    $scope.toggle = function (index) {
        console.log(index);
        for (var i = 0; i < $scope.AgentItems.length; i++) {
            $scope.AgentItems[i].showAddPanel = false;
        }
        return $scope.AgentItems[index].showAddPanel = true;
    }

    $scope.CangeToIdle = function (index) {
        var data = $scope.AgentItems[index];
        data.category = 'idle';
        console.log(data.category);
    }
}]);

app.filter('sumByKey', function () {
    return function (data, key) {
        if (typeof (data) === 'undefined' || typeof (key) === 'undefined') {
            return 0;
        }
        var sum = 0;
        for (var i = data.length - 1; i >= 0; i--) {
            if (data[i].category == key) {
                sum++;
            }
        }
        return sum;
    };
});
app.filter('capitalize', function () {
    return function (data, scope) {
        if (data != null)
            data = data.toLowerCase();
        return data.substring(0, 1).toUpperCase() + data.substring(1);
    }
});

app.directive('leftContent', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/left-content.html'
    }
});
app.directive('rightContent', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/right-content.html'
    }
});