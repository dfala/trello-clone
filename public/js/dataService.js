angular.module('Trello')

.factory('dataService', function ($http) {
  var service = {};

  service.getAllData = function () {
    return $http.get('/api/data');
  };

  service.addTask = function (listIndex, newTask) {
    return $http.put('/api/list/' + listIndex, {text: newTask});
  };

  return service;
})
