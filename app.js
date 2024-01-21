(function () {
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
      $scope.checkLunch = function () {
        // Reset messages
        $scope.message = '';
        $scope.errorMessage = '';

        // Check for empty input
        if (!$scope.lunchItems) {
          $scope.errorMessage = 'Please enter data first';
          return;
        }

        // Split items by commas and filter out empty items
        var items = $scope.lunchItems.split(',').filter(function (item) {
          return item.trim() !== '';
        });

        // Check the number of items
        if (items.length <= 3) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Too much!';
        }
      };
    }
    
})()