angular.module('housing.result', [])
.controller('ResultController', function($scope, $sce, Service, GoogleMap) {
	$scope.results = []; // array of result from server
	// craigslist is the mock data
	$scope.craigslist = craigslist;
	var temp = craigslist;
	$scope.yelp = yelp;
	var resultInit = function() {
		for (var key in craigslist) {
			for (var i = 0; i < craigslist[key].length; i++) {
				var text = craigslist[key][i].title
				console.log(craigslist[key][i].title);
				$scope.craigslist[key][i].title = $sce.trustAsHtml(temp[key][i].title);
			}
		}
	};
	resultInit();
	// GoogleMap.googleMapsInitialize(craigslist, 'tenderloin');
	// var pageInit = function() {
	// 	// Service.getResult()
	// 	// .then(function(results) {
	// 	// 	for (var i = 0; i < results.length; i++) {
	// 	// 		$scope.results.push(results[i]);
				
	// 	// 	}
	// 	// });

	// 	for (var i = 0; i < results.length; i++) {
	// 		$scope.results.push(results[i]);
	// 	}
	// }
	// pageInit();
})

