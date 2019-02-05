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
