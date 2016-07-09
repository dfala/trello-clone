angular.module('Trello')

.directive('sortable', function ($timeout) {
	return {
		restrict: 'E',
		link: function (scope, elem, attrs) {
      $timeout(function () {
        // $( ".row" ).sortable({
        //   placeholder: "list-placeholder"
        // });

        $( ".cards" ).sortable({
          placeholder: "card-placeholder",
          connectWith: '.row > .list'
        });
      }, 500);
		}
	}
})
