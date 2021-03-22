const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai');

require('chromedriver');

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

// allows to fill out entry date and time fields (reused function in al test cases).
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
	const entryAMRadio = await driver.findElement(By.css('[name="StartingTimeAMPM"][value="AM"]'));
	const entryPMRadio = await driver.findElement(By.css('[name="StartingTimeAMPM"][value="PM"]'));
	if (entryAMPM === "AM") {
		entryAMRadio.click();
		entryAMRadio.sendKeys();
	} else if (entryAMPM === "PM") {
		entryPMRadio.click();
		entryPMRadio.sendKeys();
	}
};

// allows to fill out leaving date and time fields (reused function in al test cases).
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
	const leavingAMRadio = await driver.findElement(By.css('[name="LeavingTimeAMPM"][value="AM"]'));
	const leavingPMRadio = await driver.findElement(By.css('[name="LeavingTimeAMPM"][value="PM"]'));
	if (leavingAMPM === "AM") {
		leavingAMRadio.click();
		leavingAMRadio.sendKeys();
	} else if (leavingAMPM === "PM") {
		leavingPMRadio.click();
		leavingPMRadio.sendKeys();
	}
};


// valet parking feature
Given('I am calculating the valet parking cost', {timeout: 6 * 1000}, async function () {
    await driver.get('https://www.shino.de/parkcalc/index.php');
});

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

Then('The estimated valet parking cost should be {string}', {timeout: 60 * 1000}, async function (rate) {
	const result = await driver.findElement(By.css('span')).getText();
	expect(result).to.equal(rate);
});


// short-term parking feature
Given('I am calculating the short-term parking cost', {timeout: 6 * 1000}, async function () {
    await driver.get('https://www.shino.de/parkcalc/index.php');
});

When('I ask how much is for the short-term parking from {string} {string} {string} to {string} {string} {string}', async function (entryDate, entryTime, entryAMPM, leavingDate, leavingTime, leavingAMPM) {
	// select valet parking value
	const parkingLotSelect = await driver.findElement(By.id('ParkingLot'));
	await parkingLotSelect.sendKeys(Key.SPACE, 'short-term', Key.SPACE);

	await fillEntryDateAndTime(entryDate, entryTime, entryAMPM);

	await fillLeavingDateAndTime(leavingDate, leavingTime, leavingAMPM);

	// submit info
	const calculateButton = await driver.findElement(By.name('Submit'));
	await calculateButton.submit();
});

Then('The estimated short-term parking cost should be {string}', {timeout: 60 * 1000}, async function (rate) {
	const result = await driver.findElement(By.css('span')).getText();
	expect(result).to.equal(rate);
});


// long-term garage parking feature
Given('I am calculating the long-term garage parking cost', {timeout: 6 * 1000}, async function () {
    await driver.get('https://www.shino.de/parkcalc/index.php');
});

When('I ask how much is for the long-term garage parking from {string} {string} {string} to {string} {string} {string}', async function (entryDate, entryTime, entryAMPM, leavingDate, leavingTime, leavingAMPM) {
	// select valet parking value
	const parkingLotSelect = await driver.findElement(By.id('ParkingLot'));
	await parkingLotSelect.sendKeys(Key.SPACE, 'long-term garage', Key.SPACE);

	await fillEntryDateAndTime(entryDate, entryTime, entryAMPM);

	await fillLeavingDateAndTime(leavingDate, leavingTime, leavingAMPM);

	// submit info
	const calculateButton = await driver.findElement(By.name('Submit'));
	await calculateButton.submit();
});

Then('The estimated long-term garage parking cost should be {string}', {timeout: 60 * 1000}, async function (rate) {
	const result = await driver.findElement(By.css('span')).getText();
	expect(result).to.equal(rate);
});


// long-term surface parking feature
Given('I am calculating the long-term surface parking cost', {timeout: 6 * 1000}, async function () {
    await driver.get('https://www.shino.de/parkcalc/index.php');
});

When('I ask how much is for the long-term surface parking from {string} {string} {string} to {string} {string} {string}', async function (entryDate, entryTime, entryAMPM, leavingDate, leavingTime, leavingAMPM) {
	// select valet parking value
	const parkingLotSelect = await driver.findElement(By.id('ParkingLot'));
	await parkingLotSelect.sendKeys(Key.SPACE, 'long-term surface', Key.SPACE);

	await fillEntryDateAndTime(entryDate, entryTime, entryAMPM);

	await fillLeavingDateAndTime(leavingDate, leavingTime, leavingAMPM);

	// submit info
	const calculateButton = await driver.findElement(By.name('Submit'));
	await calculateButton.submit();
});

Then('The estimated long-term surface parking cost should be {string}', {timeout: 60 * 1000}, async function (rate) {
	const result = await driver.findElement(By.css('span')).getText();
	expect(result).to.equal(rate);
});


// economy surface parking feature
Given('I am calculating the economy lot parking cost', {timeout: 6 * 1000}, async function () {
    await driver.get('https://www.shino.de/parkcalc/index.php');
});

When('I ask how much is for the economy lot parking from {string} {string} {string} to {string} {string} {string}', async function (entryDate, entryTime, entryAMPM, leavingDate, leavingTime, leavingAMPM) {
	// select valet parking value
	const parkingLotSelect = await driver.findElement(By.id('ParkingLot'));
	await parkingLotSelect.sendKeys(Key.SPACE, 'economy', Key.SPACE);

	await fillEntryDateAndTime(entryDate, entryTime, entryAMPM);

	await fillLeavingDateAndTime(leavingDate, leavingTime, leavingAMPM);

	// submit info
	const calculateButton = await driver.findElement(By.name('Submit'));
	await calculateButton.submit();
});

Then('The estimated economy lot parking cost should be {string}', {timeout: 60 * 1000}, async function (rate) {
	const result = await driver.findElement(By.css('span')).getText();
	expect(result).to.equal(rate);
});


// close tests
AfterAll(async function(){
    await driver.quit();
});