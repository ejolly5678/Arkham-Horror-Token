'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /easy when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/easy");
  });


  describe('easy', function() {

    beforeEach(function() {
      browser.get('index.html#!/easy');
    });


    it('should render easy when user navigates to /easy', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('standard', function() {

    beforeEach(function() {
      browser.get('index.html#!/standard');
    });


    it('should render standard when user navigates to /standard', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
