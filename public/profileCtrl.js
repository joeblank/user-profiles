angular.module('userProfiles')
.controller('profileCtrl', function( $scope, userInfo ) {
	$scope.currentUser = userInfo.nono;
	$scope.friends = userInfo.friends;
});
