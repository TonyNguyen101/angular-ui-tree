var app = angular.module('testApp', ['ui.tree', 'ngRoute']);

app.controller('RecipeApp', ['$scope', function ($scope) {
  $scope.recipes = [{
		title: "Chewie Chocolate Chip Cookies",
		type: 'recipe', 
		author: "Tony Nguyen", 
		image: "http://s3.amazonaws.com/gmi-digital-library/2ea0aafc-2942-4134-947f-847c043411ae.jpg", 
		description: "Crisp edges, chewy middles.", 
		score: 0, 
		vessels: [{
			vesselName: 'small mixing bowl',
			type: 'vessel',
			actions: [{
				actionName: "mix in",
				type: 'action',
				ingredients: [{
					ingredientName: 'chocolate chips',
					type: 'ingredient',
     			imperialQuantity: 4.5,
					imperialUnits: "oz",
					}, {
					ingredientName: 'butter',
					type: 'ingredient',
     			imperialQuantity: 4.5,
					imperialUnits: "stick",
				}]
			}]
		},{
			vesselName: 'large mixing bowl',
			type: 'vessel',
			actions: [{
				actionName: "slowly mix in",
				type: 'action',
				ingredients: [{
					ingredientName: 'sugar',
					type: 'ingredient',					
     			imperialQuantity: 1.5,
					imperialUnits: "cup",
				}]
			},{ 
				actionName: "blend in",
				type: 'action',
				ingredients: [{
					ingredientName: 'flour',
					type: 'ingredient',					
     			imperialQuantity: 2,
					imperialUnits: "cup",
				}]
			}]
		}]
	}];
  
	$scope.movementOptions = {
		accept: function (sourceNodeScope, destNodeScope, destIndex) {
			var srcType = sourceNodeScope.$element.attr('data-type');
			var dstType = destNodeScope.$element.attr('data-type');
			console.log("source type " + srcType);
			console.log("dest type " + dstType);
			console.log(destIndex);
			if ((srcType === "action" && dstType === "vessel") || 
				(srcType === "ingredient" && dstType === "action") || 
				(srcType === "vessel" && dstType === "recipe") ){
				return true;
			} else {
				return false;
			}
		} 
	};

	// Steal node ID format
 	$scope.newSubItem = function (scope) {
    console.log(scope);
    var nodeData = scope.$modelValue;
    nodeData.nodes.push({
      id: nodeData.id * 10 + nodeData.nodes.length,
      title: nodeData.title + '.' + (nodeData.nodes.length + 1),
      nodes: []
    });
  };

  $scope.addVessel = function () {
  	if (this.newVessel){
  		this.newVessel.type = 'vessel';
  		this.newVessel.actions = [];
			this.recipe.vessels.push(this.newVessel);
			console.log(this);
  		this.newVessel = '';  		
  	}
  };
  $scope.addAction = function () {
   	if (this.newAction){
   		this.newAction.type = 'action';
   		this.newAction.ingredients = [];
			this.vessel.actions.push(this.newAction);
			console.log(this);
  		this.newAction = '';  		
  	}
  };
  $scope.addIngredient = function () {
  	if (this.newIngredient){
  		// TODO add other parts of ingredients 
  		this.newIngredient.type = 'ingredient';
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



	


