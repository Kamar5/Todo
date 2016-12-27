var app = angular.module('app', ['ui.bootstrap']);

app.controller('appCtrl', ['$scope', function ($scope) {

	$scope.showTodo = 'active';
	$scope.todos = [
		{
			name: 'learn arabic',
			description: 'I will learn spanish in month by studing every day',
			isDone: false
		},
		{
			name: 'learn driving',
			description: 'I will learn driving by practicing in parking lot',
			isDone: true
		}
	]

	$scope.addTodo = function () {

		if($scope.name.lenght === 0 || $scope.name == ''){
			return true;
		}

		$scope.todos.push({
			name: $scope.name,
			description: $scope.description,
			isDone: false
		});
		$scope.name = '';
		$scope.description ='';
		
	}

	$scope.removeToDo = function(todo){
		var index = $scope.todos.indexOf(todo);
  		$scope.todos.splice(index, 1); 
	}
	

	$scope.showTodoCheck = function (showTodo, todo) {
		if(showTodo === 'active'){
			return !!todo.isDone;
		}else if(showTodo === 'done'){
			return !!!todo.isDone;
		}else{
			return todo.isDone;
		}
	}
}])