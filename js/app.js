var myModule = angular.module('Reservations', []);

myModule.controller('MainCtrl', function($scope) { 
	
	var buildIndex = function(source, property) {
		var tempArray = [];
		for(var i = 0, len = source.length; i < len; ++i) {
			tempArray[source[i][property]] = source[i];
		}
		return tempArray;
	};
	
	
	$scope.name = 'Andy';
	$scope.currentRoom;
	
	$scope.setCurrentRoom = function(room) {
		$scope.currentRoom = room;
		$scope.currentType = $scope.typesIndex[room.type];
	};
	
	$scope.setCurrentType = function(type) {
		if(typeof $scope.currentRoom !== 'undefined') {
			$scope.currentRoom.type = type.name;
		}
	};
	
	$scope.addRoom = function() {
		$scope.rooms.push({
			code:'Add Room',
			description:'puppy room.',
			type: 'Room Type'
		});
	};
	
	$scope.rooms = [
	     {code:'Room 001',
	      description:'Description pending.',
	      criteria:'Criteria pending.',
	      status:'To Do',
	      type:'Single',
	      reporter:'Lukas Ruebbelke',
	      assignee:'Brian Ford'},
	      
	     {code:'Room 002',
	      description:'Description pending.',
	      criteria:'Criteria pending.',
	      status:'To Do',
	      type:'Single',
	      reporter:'Lukas Ruebbelke',
	      assignee:'Brian Ford'},
	      
	     {code:'Room 003',
	      description:'Description pending.',
	      criteria:'Criteria pending.',
	      status:'To Do',
	      type:'Single',
	      reporter:'Lukas Ruebbelke',
	      assignee:'Brian Ford'},
	      
	     {code:'Room 004',
	      description:'Description pending.',
	      criteria:'Criteria pending.',
	      status:'To Do',
	      type:'Single',
	      reporter:'Lukas Ruebbelke',
	      assignee:'Brian Ford'},
	      
	     {code:'Room 005',
	      description:'Description pending.',
	      criteria:'Criteria pending.',
	      status:'To Do',
	      type:'Single',
	      reporter:'Lukas Ruebbelke',
	      assignee:'Brian Ford'}
	 ];
	
	$scope.statuses = [
		{name:'Back Log'},
		{name:'To Do'},
		{name:'In Progress'},
		{name:'Code Review'},
		{name:'QA Review'},
		{name:'Verified'},
		{name:'Done'}
	];
	
	$scope.types = [
		{name:'Single'},
		{name:'Double'},
		{name:'Suite'}
	];	
	
	$scope.typesIndex = buildIndex($scope.types, 'name');
		
});