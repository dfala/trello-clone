angular.module('Trello')

.controller('MainController', function ($scope, dataService) {
  dataService.getAllData()
  .then(function (response) {
    $scope.lists = response.data;
    console.warn(response);
  })
  .catch(function (err) {
    console.error(err);
  });


  $scope.addTask = function (listIndex, newTask) {
    if (!newTask) return;
    
    dataService.addTask(listIndex, newTask)
    .then(function (response) {
      console.warn(response)
      $scope.lists[listIndex].tasks.push(response.data);
    })
    .catch(function(err) {
      console.error(err);
    })
  };
});
