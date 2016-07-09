angular.module('Trello')

.directive('sortable', function () {
	return {
		restrict: 'E',
		link: function (scope, elem, attrs) {

		    $( ".column" ).sortable({
		      connectWith: ".list",
		      handle: ".list",
		      placeholder: "list",
		      activate: function (event, ui) {
		      	$(ui.item).addClass('active-dragging');
		      },
		      deactivate: function (event, ui) {
		      	$(ui.item).removeClass('active-dragging');
		      },
		      update: function (event, ui) {


		      }
		    });

		}
	}
})
