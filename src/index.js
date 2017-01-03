(function(){var module=angular.module("ng.jsoneditor",[]);module.constant("ngJsoneditorConfig",{});module.directive("ngJsoneditor",["ngJsoneditorConfig","$timeout",function(ngJsoneditorConfig,$timeout){var defaults=ngJsoneditorConfig||{};return{restrict:"A",require:"ngModel",scope:{options:"=",ngJsoneditor:"=",preferText:"="},link:function($scope,element,attrs,ngModel){var debounceTo,debounceFrom;var editor;var internalTrigger=false;if(!angular.isDefined(window.JSONEditor)){throw new Error("Please add the jsoneditor.js script first!")}function _createEditor(options){var settings=angular.extend({},defaults,options);var theOptions=angular.extend({},settings,{change:function(){if(typeof debounceTo!=="undefined"){$timeout.cancel(debounceTo)}debounceTo=$timeout(function(){if(editor){internalTrigger=true;var error=undefined;try{ngModel.$setViewValue($scope.preferText===true?editor.getText():editor.get());}catch(err){error=err;}if(settings&&settings.hasOwnProperty("change")){settings.change(error);}}},settings.timeout||100);}});element.html("");var instance=new JSONEditor(element[0],theOptions);if($scope.ngJsoneditor instanceof Function){$timeout(function(){$scope.ngJsoneditor(instance)})}return instance}$scope.$watch("options",function(newValue,oldValue){for(var k in newValue){if(newValue.hasOwnProperty(k)){var v=newValue[k];if(newValue[k]!==oldValue[k]){if(k==="mode"){editor.setMode(v)}else if(k==="name"){editor.setName(v)}else{editor=_createEditor(newValue);$scope.updateJsonEditor();return}}}}},true);$scope.$on("$destroy",function(){});$scope.updateJsonEditor=function(newValue){if(internalTrigger){internalTrigger=false;return;}if(typeof debounceFrom!=="undefined"){$timeout.cancel(debounceFrom)}debounceFrom=$timeout(function(){if($scope.preferText===true&&!angular.isObject(ngModel.$viewValue)){editor.setText(ngModel.$viewValue||"{}")}else{editor.set(ngModel.$viewValue||{})}},$scope.options.timeout||100)};editor=_createEditor($scope.options);if($scope.options.hasOwnProperty("expanded")){$timeout($scope.options.expanded?function(){editor.expandAll()}:function(){editor.collapseAll()},($scope.options.timeout||100)+100)}ngModel.$render=$scope.updateJsonEditor;$scope.$watch(function(){return ngModel.$modelValue},$scope.updateJsonEditor,true)}}}])})();


angular.module('app', [
  'templates',
  'ngMaterial',
  'md.data.table',
  'ngColorThis',
  'ng.jsoneditor'
])

.config([
  '$sceProvider', '$mdThemingProvider', 
  function($sceProvider, $mdThemingProvider) {
    $sceProvider.enabled(false)
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark()
}])

angular.module('ngColorThis', []).factory('Color', function () {
  
  function convert(string, saltParam) {
    var _ = 0;
    var r = _.r;
    var g = _.g;
    var b = _.b;
    var rOffset = _.rOffset;
    var gOffset = _.gOffset;
    var bOffset = _.bOffset;
    var output = '';
    var salt = saltParam ? parseInt(saltParam) : -5;
    string = string.toString();
    for (var i = string.length - 1; i >= 0; i--) {
      var charAt = string.charCodeAt(i).toString().split('');
      for (var x = charAt.length - 1; x >= 0; x--) {
        var y = charAt[x] - salt;
        if (y < 4) y = parseInt(y) + 4;
        output += Math.pow(y * Math.round(y / 2), 8);
      }
    }
    if (output.length % 3 === 0) output = output.split('').reverse().join('')
    rOffset = Math.floor(output.length / 3)
    gOffset = rOffset * 2
    bOffset = output.length - 3
    r = toVal(output[rOffset], output[rOffset + 1], output[rOffset + 2])
    g = toVal(output[gOffset], output[gOffset + 1], output[gOffset + 2])
    b = toVal(output[bOffset], output[bOffset + 1], output[bOffset + 2])
    return {
      red: r,
      green: g,
      blue: b
    }
  }

  function toVal(a, b, c) {
    var together = parseInt(a + b + c);
    while (together > 255) {
      together = Math.round(together / 5);
    }return together;
  }

  function rgbToCSS(red, green, blue) {
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  }

  return {
    convert: convert,
    toVal: toVal,
    rgbToCSS: rgbToCSS
  };
})

.directive('colorThis', ["Color", function (Color) {
  return {
    restrict: 'A',
    scope: {
      color: '=color',
      salt: '=colorSalt'
    },
    link: function link(scope, element, attrs, fn) {
      scope.$watch('color', function (newValue, oldValue) {
        if (newValue) {
          (function () {
            var rgb = Color.convert(newValue);
            var css = Color.rgbToCSS(rgb.red, rgb.green, rgb.blue, 50);
            attrs.colorThis.split(' ').forEach(function (selector) {
              element.css(selector, css);
            });
          })();
        }
      }, false);
    }
  };
}]);
