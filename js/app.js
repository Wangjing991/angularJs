
// 模块（module）angularjs提供的全局函数去创建模块;
var app=angular.module("shop",["cFilters","ngRoute"]);

// 自定义指令
app.directive("cartInfo",function(){
	return {
		restrict:"CAEM", //限定使用场所C只显示class，A使用属性类型的,E使用标签类型的,M代表注释形式，默认支持AE(即不写restrict时候显示)
		// replace:true, //替换注释的内容显示
		transclude:true,
	
		templateUrl:"template/template.html"
	}
})

app.controller("mainCtrl",function($scope,$http){ //定义控制器，两个参数，一参控制器名称，二参函数
	
	$scope.cartData=[];
	$scope.count=0;
	$scope.total=0;
	$scope.getCartCount=function(){
		$scope.count=0;
		$scope.total=0;
		for(var i=0;i<$scope.cartData.length;i++){
			$scope.count+=$scope.cartData[i].count
			$scope.total+=$scope.cartData[i].count*$scope.cartData[i].price;
		}
		return $scope.count;
	}
	// $http({method:"GET",url:"php/product.php"}).success(function(data,status,config,header){
	// 	console.log(data,status,config,header);
	// 	$scope.products=data;
	// 	$scope.changeClassOfSelectedPage=function(page){
	// 		return $scope.currentPage==page?"btn-primary":"";
	// 	}
		
	// 	$scope.getProductsOfPage = function(pageNumber){
	// 		$scope.currentPage=pageNumber;
	// 		var array=[];
	// 		for(var i=(pageNumber-1)*3;i<Math.min(pageNumber*3,$scope.categoryProducts.length);i++){
	// 			array.push($scope.categoryProducts[i]);
	// 		}
	// 		$scope.pageProducts= array;
	// 	}
		
	// 	$scope.selectCategory=function(category){

	// 		var categoryProducts=[];
	// 		if (category=="all") {
	// 			$scope.choosedCategory="all";
	// 			categoryProducts=$scope.products;
	// 		}else {
	// 			$scope.choosedCategory=category;
	// 			for(var i=0;i<$scope.products.length;i++){
	// 				if ($scope.products[i].category == category) {
	// 					categoryProducts.push($scope.products[i]);
	// 				}
	// 			}
	// 		}
	// 		$scope.categoryProducts=categoryProducts;
	// 		$scope.getProductsOfPage(1);

	// 	}
	// 	$scope.selectCategory("all");
	// 	$scope.changeClassOfCategory=function(category){
	// 		return $scope.choosedCategory==category?"btn-primary":"";
	// 	}
	// 	$scope.getPageNumbers=function(){
	// 		var count=Math.ceil($scope.categoryProducts.length/3);
	// 		var pages=[]
	// 		for(var i=0;i<count;i++){
	// 			pages.push(i+1);
	// 		}
	// 		return pages;
	// 	}


		
	// })

	
});
	app.config(function($routeProvider){
		$routeProvider.when("/products",{templateUrl:"product.html"});
		$routeProvider.when("/checkout",{templateUrl:"checkout.html"});
		$routeProvider.otherwise("/products",{templateUrl:"product.html"});
	})
// var filters = angular.module("filters",[])

// app.filter("unique",function(){
// 	return function(data,propertyName){
// 		if (angular.isArray(data)) {
// 			var resultArray=[];
// 			var obj={};
// 			// console.log(data.length,"length")
// 			for(var i=0;i<data.length;i++){
// 				var category=data[i][propertyName]
// 				if (angular.isUndefined(obj[category])) {
// 					obj[category]=true;
// 					resultArray.push(category);
// 				}
// 			}
// 			console.log(resultArray)
// 			return resultArray;
// 		}else{
// 			return [];
// 		}
		
// 	}
// });