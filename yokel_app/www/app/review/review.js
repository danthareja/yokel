'use strict';

angular.module('yokelApp')
  .config(function($stateProvider){
    $stateProvider
      .state('review', {
        url: '/review', //Maybe include business ID here somehow? Down the road..
        templateUrl: './app/review/review.html',
      });
  })
  .factory('GestureFunc',function($state){
  	var funcs = {};
  	funcs.onSwipeRight = function(){
  	  $state.go('business');
  	};
  	return funcs;
  });
