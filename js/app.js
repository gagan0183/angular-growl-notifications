var notifyApp = angular.module('notifyApp',['angular-growl','ngAnimate']); //create an angular module
notifyApp.config(['growlProvider', function (growlProvider) {
  growlProvider.globalTimeToLive(2000);
  growlProvider.globalDisableCountDown(true);
}]);
notifyApp.controller('notifyCtrl',['$scope','growl',function($scope, growl){
    $scope.showWarning = function(){
        growl.warning('This is warning message.',{title: 'Warning!'});
    }
    $scope.showError = function(){
        growl.error('This is error message.',{title: 'Error!'});
    }
    $scope.showSuccess = function(){
        growl.success('This is success message.',{title: 'Success!'});
    }
    $scope.showInfo = function(){
        growl.info('This is an info message.',{title: 'Info!'});
    }
    $scope.showAll = function(){
        growl.warning('This is warning message.',{title: 'Warning!'});
        growl.error('This is error message.',{title: 'Error!'});
        growl.success('This is success message.',{title: 'Success!'});
        growl.info('This is an info message.',{title: 'Info!'});
    }
}]);