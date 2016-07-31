var app = angular.module("shop");
app.controller("checkoutCtrl",function($scope){
	console.log($scope.cartData)
	$scope.delete=function(product){
		for (var i=0;i<$scope.cartData.length;i++) {
			$scope.cartData.splice(i,1)
			break;
		}
	}
})