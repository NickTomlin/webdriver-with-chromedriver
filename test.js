var webdriver = require('selenium-webdriver');
var path = require('path');
var assert = require('assert');
var chromeDriverPath = require('chromedriver').path;
// webdriver looks in a directory, so we need to point to the directory
// that the executable lives in, not the executable itself
process.env.PATH += ':' + path.dirname(chromeDriverPath);
var webdriver = require("selenium-webdriver");

var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
driver.findElement(webdriver.By.name('btnG')).click();
driver.wait(function() {
 return driver.getTitle().then(function(title) {
   return title === 'webdriver - Google Search';
 });
}, 1000);

driver.quit();
