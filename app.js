var app = angular.module('testApp', ['ui.tree', 'ngRoute', 'ngAnimate']);

app.controller('RecipeApp', ['$scope', function ($scope) {
  $scope.recipes = [{
		title: "Chewie Chocolate Chip Cookies",
		type: 'recipe', 
		formVisible: false,
		author: "Tony Nguyen", 
		image: "http://s3.amazonaws.com/gmi-digital-library/2ea0aafc-2942-4134-947f-847c043411ae.jpg", 
		description: "Crisp edges, chewy middles.", 
		totalTime: 30,
		score: 0, 
		vessels: [{
			vesselName: 'small mixing bowl',
			type: 'vessel',
			formVisible: false,
			time: 7,
			actions: [{
				actionName: "mix in",
				type: 'action',
				formVisible: false,
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
			formVisible: false,
			time: 20,
			actions: [{
				actionName: "slowly mix in",
				type: 'action',
				formVisible: false,
				ingredients: [{
					ingredientName: 'sugar',
					type: 'ingredient',					
     			imperialQuantity: 1.5,
					imperialUnits: "cup",
				}]
			},{ 
				actionName: "blend in",
				type: 'action',
				formVisible: false,
				ingredients: [{
					ingredientName: 'flour',
					type: 'ingredient',					
     			imperialQuantity: 2,
					imperialUnits: "cup",
				}]
			}]
		}]
	}];

  $scope.toggleForm = function (scope) {
  	var nodeData = scope.$modelValue;
  	if (nodeData) {
  		nodeData.formVisible = !nodeData.formVisible;
  	}
  };

	$scope.formVisible = false;
  $scope.toggleVesselForm = function () {
  	$scope.formVisible = !$scope.formVisible;
  };

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
  	if (this.newVessel.vesselName !== '' && this.newVessel.time !== '') {
  		this.newVessel.type = 'vessel';
  		this.formVisible = false;
  		this.newVessel.actions = [];
			this.recipe.vessels.push(this.newVessel);
  		this.newVessel = '';  		
  	}
  };
  $scope.addAction = function () {
   	if (this.newAction.actionName !== ''){
   		this.newAction.type = 'action';
   		this.formVisible = false;
   		this.newAction.ingredients = [];
			this.vessel.actions.push(this.newAction);
  		this.newAction = '';  		
  	}
  };
  $scope.addIngredient = function () {
  	if (this.newIngredient.ingredientName !== ''){
  		// TODO add other parts of ingredients 
  		this.newIngredient.type = 'ingredient';
			this.action.ingredients.push(this.newIngredient);
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





	


