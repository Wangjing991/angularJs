var filters = angular.module("cFilters",[]);
filters.filter("unique",function(){
	return function(data,propertyName){
		if (angular.isArray(data)) {
			var resultArray=[];
			// var obj={};
			for (var i=0;i<data.length;i++){
				var category=data[i][propertyName];
				// if (angular.isUndefined(obj[category])) {
				// 	obj[category]=true;
				// 	resultArray.push(category);
				// }
				if (resultArray.indexOf(category)<0) {
					resultArray.push(category);
				}
			}
			return resultArray;
		}
		else
		{
			return [];
		}
	}
})


		
