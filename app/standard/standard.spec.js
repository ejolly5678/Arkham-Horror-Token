'use strict';

describe('myApp.standard module', function() {

  beforeEach(module('myApp.standard'));

  describe('standard controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var standardCtrl = $controller('standardCtrl');
      expect(standardCtrl).toBeDefined();
    }));

  });
});
