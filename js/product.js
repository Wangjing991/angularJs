var app=angular.module("shop");
// module创建模块，还可以获取模块
app.controller("productsCtrl",function($scope,$http){
	var pageNum=9;
	$http({method:"GET",url:"php/product.php"}).success(function(data,status,config,header){
		console.log(data,status,config,header);
		$scope.products=data;

		$scope.changeClassOfSelectedPage=function(page){
			return $scope.currentPage==page?"btn-primary":"";
		}
		
		$scope.getProductsOfPage = function(pageNumber){
			$scope.currentPage=pageNumber;
			var array=[];
			for(var i=(pageNumber-1)*pageNum;i<Math.min(pageNumber*pageNum,$scope.categoryProducts.length);i++){
				array.push($scope.categoryProducts[i]);
			}
			$scope.pageProducts= array;
		}
		
		$scope.selectCategory=function(category){
			console.log(category);
			var categoryProducts=[];
			if (category=="all") {
				$scope.choosedCategory="all";
				categoryProducts=$scope.products;
			}else {
				$scope.choosedCategory=category;
				for(var i=0;i<$scope.products.length;i++){
					if ($scope.products[i].style == category) {
						categoryProducts.push($scope.products[i]);
					}
				}
			}

			$scope.categoryProducts=categoryProducts;
			$scope.getProductsOfPage(1);

		}
		$scope.selectCategory("all");
		$scope.changeClassOfCategory=function(category){
			return $scope.choosedCategory==category?"btn-primary":"";
		}
		$scope.getPageNumbers=function(){
			var count=Math.ceil($scope.categoryProducts.length/pageNum);
			var pages=[]
			for(var i=0;i<count;i++){
				pages.push(i+1);
			}
			return pages;
		}
		// $scope.cartData=[];
		$scope.addToCart=function(product){
			var hasThisProduct=false;//假定购物车没有这个商品
			// console.log(product);
			for(var i=0;i<$scope.cartData.length;i++){
				if ($scope.cartData[i].id==product.id) {
					$scope.cartData[i].count++;
					hasThisProduct=true;
					break;
				}
			}
			if (hasThisProduct==false) {
				$scope.cartData.push({id:product.id,name:product.title,price:product.price,count:1})
			}
			console.log($scope.cartData);
		}

		


	})


})