var myModule = angular.module('Reservations', []);

myModule.controller('MainCtrl', function($scope) { 
	$scope.name = 'Andy';
	$scope.currentRoom;
	
	$scope.setCurrentRoom = function(room) {
		$scope.currentRoom = room;
	};
	
	$scope.addRoom = function() {
		$scope.rooms.push({
			code:'Add Room',
			description:'puppy room.'
		});
	};
	
	$scope.rooms = [
	     {code:'Room 001',
	      description:'Description pending.',
	      criteria:'Criteria pending.',
	      status:'To Do',
	      type:'Feature',
	      reporter:'Lukas Ruebbelke',
	      assignee:'Brian Ford'},
	      
	     {code:'Room 002',
	      description:'Description pending.',
	      criteria:'Criteria pending.',
	      status:'To Do',
	      type:'Feature',
	      reporter:'Lukas Ruebbelke',
	      assignee:'Brian Ford'},
	      
	     {code:'Room 003',
	      description:'Description pending.',
	      criteria:'Criteria pending.',
	      status:'To Do',
	      type:'Feature',
	      reporter:'Lukas Ruebbelke',
	      assignee:'Brian Ford'},
	      
	     {code:'Room 004',
	      description:'Description pending.',
	      criteria:'Criteria pending.',
	      status:'To Do',
	      type:'Feature',
	      reporter:'Lukas Ruebbelke',
	      assignee:'Brian Ford'},
	      
	     {code:'Room 005',
	      description:'Description pending.',
	      criteria:'Criteria pending.',
	      status:'To Do',
	      type:'Feature',
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
		{name:'Feature'},
		{name:'Enhancement'},
		{name:'Bug'},
		{name:'Spike'}
	];
});