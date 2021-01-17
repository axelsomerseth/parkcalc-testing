const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai');

require('chromedriver');

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

Given('I am calculating the parking cost', async function () {
    await driver.get('https://www.shino.de/parkcalc/index.php');
});

const fillEntryDateAndTime = async function (entryDate, entryTime, entryAMPM) {
	// entryDate
	const entryDateElem = await driver.findElement(By.id('StartingDate'));
	entryDateElem.clear();
	entryDateElem.sendKeys(entryDate);
	// entryTime
	const entryTimeElem = await driver.findElement(By.id('StartingTime'));
	entryTimeElem.clear();
	entryTimeElem.sendKeys(entryTime);
	// entryAMPM
	const entryAMPMElem = await driver.findElement(By.name('StartingTimeAMPM'));
	entryAMPMElem.sendKeys(entryAMPM);
};

const fillLeavingDateAndTime = async function (leavingDate, leavingTime, leavingAMPM) {
	// leavingDate
	const leavingDateElem = await driver.findElement(By.id('LeavingDate'));
	leavingDateElem.clear();
	leavingDateElem.sendKeys(leavingDate);
	// leavingTime
	const leavingTimeElem = await driver.findElement(By.id('LeavingTime'));
	leavingTimeElem.clear();
	leavingTimeElem.sendKeys(leavingTime);
	// leavingAMPM
	const leavingAMPMElem = await driver.findElement(By.name('LeavingTimeAMPM'));
	leavingAMPMElem.sendKeys(leavingAMPM);
}

When('I ask how much is for the valet parking from {string} {string} {string} to {string} {string} {string}', async function (entryDate, entryTime, entryAMPM, leavingDate, leavingTime, leavingAMPM) {
	// select valet parking value
	const parkingLotSelect = await driver.findElement(By.id('ParkingLot'));
	await parkingLotSelect.sendKeys(Key.SPACE);

	await fillEntryDateAndTime(entryDate, entryTime, entryAMPM);

	await fillLeavingDateAndTime(leavingDate, leavingTime, leavingAMPM);

	// submit info
	const calculateButton = await driver.findElement(By.name('Submit'));
	await calculateButton.submit();
});

Then('The estimated parking cost should be {string}', {timeout: 60 * 1000}, async function (rate) {
	const result = await driver.findElement(By.css('span')).getText();
	expect(result).to.equal(rate);
});

AfterAll(async function(){
    await driver.quit();
});