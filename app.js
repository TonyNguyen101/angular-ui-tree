var app = angular.module('testApp', ['ui.tree', 'ngRoute']);

app.controller('RecipeApp', ['$scope', function ($scope) {
  $scope.recipe = {
		title: "Chewie Chocolate Chip Cookies", 
		author: "Tony Nguyen", 
		image: "http://s3.amazonaws.com/gmi-digital-library/2ea0aafc-2942-4134-947f-847c043411ae.jpg", 
		description: "Crisp edges, chewy middles.", 
		score: 0, 
		vessels: [{
			vesselName: 'small mixing bowl',
			actions: [{
				actionName: "mix in",
				ingredients: [{
					ingredientName: 'chocolate chips',
					vesselId: "blank",
     			imperialQuantity: 4.5,
					imperialUnits: "oz",
					metricQuantity: 3.5,
					metricUnits: "gram",
					ingredientId: 1,
					// Hover to show details
					details: "some futher details"
					}, {
					ingredientName: 'butter',
					vesselId: "blank",
     			imperialQuantity: 4.5,
					imperialUnits: "stick",
					metricQuantity: 3.5,
					metricUnits: "stick",
					ingredientId: 2,
					// Hover to show details
					details: "some futher details"
				}]
			}]
		},{
			vesselName: 'large mixing bowl',
			actions: [{
				actionName: "slowly mix in",
				ingredients: [{
					ingredientName: 'sugar',
					vesselId: "blank",
     			imperialQuantity: 1.5,
					imperialUnits: "cup",
					metricQuantity: 21,
					metricUnits: "gram",
					ingredientId: 4,
					// Hover to show details
					details: "some futher details"
				}]
			},{ 
				actionName: "blend in",
				ingredients: [{
					ingredientName: 'flour',
					vesselId: "blank",
     			imperialQuantity: 2,
					imperialUnits: "cup",
					metricQuantity: 32,
					metricUnits: "gram",
					ingredientId: 3,
					// Hover to show details
					details: "some futher details"
				}]
			}]
		}]
	};
  
  $scope.addVessel = function () {
  	if (this.newVessel){
  		this.newVessel.actions = [];
			this.recipe.vessels.push(this.newVessel);
			console.log(this);
  		this.newVessel = '';  		
  	}
  };
  $scope.addAction = function () {
   	if (this.newAction){
   		this.newAction.ingredients = [];
			this.vessel.actions.push(this.newAction);
			console.log(this);
  		this.newAction = '';  		
  	}
  };
  $scope.addIngredient = function () {
  	if (this.newIngredient){
			this.action.ingredients.push(this.newIngredient);
			console.log(this);
  		this.newIngredient = '';  		
  	}
  };
  
  $scope.vesselConfig = {
      group: { name: 'vesselGroup', pull: true, put: true },
      animation: 50,
      ghostClass: "sortable-ghost", 
      onSort: function (evt){
      	console.log("something sorted!" + evt);
      }
  };
  $scope.actionConfig = {
      group: { name: 'actionGroup', pull: true, put: true },
      animation: 50,
      ghostClass: "sortable-ghost", 
      onSort: function (evt){
      	console.log("vesselAction");
      }
  };
  $scope.ingredientConfig = {
      group: { name: 'ingredientGroup', pull: true, put: true },
      animation: 50,
      ghostClass: "sortable-ghost", 
      onSort: function (evt){
      	console.log("actionIngredient");
      }
  };
}]);


/* global $ */
// 'use strict';
// $(document).ready(function() {
// 	// Vessel Section
// 	$('.layout_sections').sortable({
// 		containerSelector: '.layout_sections',
// 		itemSelector: '.layout_section',
// 		handle: '.layout_section_drag',
// 		onStart: function (evt){
//     	console.log("vessel sorted!" + evt);
//     }
// 	});

// 	$('.layout_section').sortable("{onStart}", function (evt) {
// 		console.log(evt);
// 	});

// 	// Action Section
// 	$('.layout_rows').sortable({
// 		group: 'layout_rows',
// 		containerSelector: '.layout_rows',
// 		itemSelector: '.layout_row',
// 		handle: '.layout_row_drag',
// 		onStart: function (evt){
//     	console.log("action sorted!" + evt);
//     }
// 	});
// 	// Ingredient Section
// 	$('.layout_modules').sortable({
// 		group: 'layout_modules',
// 		onStart: function (evt){
//     	console.log("ingredient sorted!" + evt);
//     }
// 	});
// 	// $('.layout_column_edit').on('click', function() {
// 	// 	window.alert('column options (id, class)');
// 	// });
// 	// $('.layout_column_add_module').on('click', function() {
// 	// 	window.alert('add module dialog (module selection)');
// 	// });
// 	// $('.layout_column_add_row').on('click', function() {
// 	// 	window.alert('add row dialog (row layout selection)');
// 	// });
// 	// $('.layout_column_add_section').on('click', function() {
// 	// 	window.alert('adds a section to the list');
// 	// });
// });



	


