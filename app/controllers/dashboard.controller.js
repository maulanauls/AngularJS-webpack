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