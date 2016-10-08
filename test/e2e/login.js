var path = require('path')

describe('login', function() {

  xit('should show authentication', function() {
      browser.get('/')
      expect(element(by.model('login.username')).isPresent()).toBe(true);
      expect(element(by.model('login.password')).isPresent()).toBe(true);
      expect(element(by.id('login.submit')).isPresent()).toBe(true);
  })

  xit('should authenticate', function() {
      // browser.get('/')
      //
      // element(by.model('login.username')).sendKeys('vitor')
      // element(by.model('login.password')).sendKeys('vitor')
      // element(by.id('login.submit')).click()
      // //browser.pause()
      // expect(element(by.id('resources')).isPresent()).toBe(true)
  })

  xit('should not authenticate', function() {
      browser.get('/')

      //element(by.id('login.submit')).click();
      //expect(element(by.class('ui vertical buttons').count()).toEqual(0)
  })

})
