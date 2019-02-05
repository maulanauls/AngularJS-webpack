webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	angular.module('dashboard', []);

	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(7);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(2);

	angular.module('dashboard').directive('yepNope', __webpack_require__(4));

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	function YepNopeDirective() {
	  return {
	    restrict: 'E',
	    link: function (scope, element, attrs) {
	      scope.$watch(attrs.check, function (val) {
	        var words = val ? 'yep' : 'nope';
	        element.text(words);
	      });
	    }
	  }
	}

	module.exports = YepNopeDirective;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(2);

	angular.module('dashboard').service('GithubStatusService', __webpack_require__(6));

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	GithubStatusService.$inject = ["$http"];
	function GithubStatusService($http) {
	  var _this = this;
	  _this.getStatus = function getStatus() {
	    return $http({
	      method: "GET",
	      url: "http://localhost:3000/api/v1/articles",
	      jsonpCallbackParam: appendTransform(
	        $http.defaults.transformResponse,
	        function(value) {
	          return value.status === "good";
	          // console.log(value.status);
	          // alert(value.status);
	        }
	      )
	    });
	  };
	}

	function appendTransform(defaults, transform) {
	  defaults = angular.isArray(defaults) ? defaults : [defaults];
	  return defaults.concat(transform);
	}

	module.exports = GithubStatusService;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(2);

	angular.module('dashboard').controller('dashboardController', __webpack_require__(8));

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	DashboardController.$inject = ['GithubStatusService'];
	function DashboardController(gh) {
	    var _this = this;
	  _this.github = '';
	    gh.getStatus().then(
	      function successCallback(response) {
	        // this callback will be called asynchronously
	        // when the response is available
	        _this.github = response;
	        console.log(response);
	        // alert(response);
	      },
	      function errorCallback(response) {
	        // called asynchronously if an error occurs
	        // or server returns response with an error status.
	      }
	    );
	}

	module.exports = DashboardController;

/***/ })
]);