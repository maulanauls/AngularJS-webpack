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