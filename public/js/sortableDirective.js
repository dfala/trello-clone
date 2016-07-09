angular.module('Trello')

.directive('sortable', function ($timeout) {
	return {
		restrict: 'E',
		link: function (scope, elem, attrs) {
      $timeout(function () {
        $( ".cards" ).sortable({
          placeholder: "card-placeholder",
          connectWith: '.row > .list',
          update: function (event, ui) {
            console.log(event);
          }
        });
      }, 500);
		}
	}
})
