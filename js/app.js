var myModule = angular.module('Reservations', ['wtrRestServices']);

myModule.factory('kennelresModel', function() {
	var getTypes = function() {
		var tempArray = [
	        {name:'Single'},
	        {name:'Double'},
	        {name:'Suite'}
	       ];	
		return tempArray;
	};
	
	var getRooms = function() {
		var tempArray = [
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
		return tempArray;
	};
	return {
		getTypes: getTypes,
		getRooms	: getRooms
	};
	        	
});

myModule.factory('kennelresHelper', function() {
	var buildIndex = function(source, property) {
		var tempArray = [];
		for(var i = 0, len = source.length; i < len; ++i) {
			tempArray[source[i][property]] = source[i];
		}
		return tempArray;
	};
	return {
		buildIndex: buildIndex
	};
});

myModule.controller('MainCtrl', function($window, $scope, kennelresHelper, kennelresModel, Users) { 
	
	$scope.name = 'Andy';
	$scope.currentRoom;
	//$scope.users = {};
	
	$scope.types = kennelresModel.getTypes();
	$scope.rooms = kennelresModel.getRooms();
	
	$scope.users = Users.get({org: 'mh'});
	$window.alert($scope.users.$promise);
	
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
	
	$scope.getUsers = function(org) {
		$scope.users = Users.query(org);
	};
	
	
	
	$scope.typesIndex = kennelresHelper.buildIndex(kennelresModel.getTypes(), 'name');
		
});