//importerar beroenden || selenium.test
const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jest.setTimeout(1000 * 60 * 5); // 5 minuter

// Det här körs innan vi kör testerna för att säkerställa att Firefox är igång
beforeAll(async () => {
console.log(fileUnderTest);
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

// Allra sist avslutar vi Firefox igen
afterAll(async() => {
    await driver.quit();
}, defaultTimeout);

//test från johan: kontrollerar om stacken är tom
test('The stack should be empty in the beginning', async () => {
	let stack = await driver.findElement(By.id('top_of_stack')).getText();
	expect(stack).toEqual("n/a");
});

//mitt test med selenium || Kontrollerar om funktionen push och pop fungerar som de ska i utfall av 100 (operation kan justeras efter behov)
test('push and pop operations with large dataset', async () => {
    var operations = 100;
    
    //push x (100) operations
    for (let i=0; i < operations; i++) {
        await pushValue("Value + i");
    }

    // pop x (100) operations
    for (let i=0; i < operations; i++) {
        await popValue();
    }

    //Kontrollerar om stack är tom efter alla operationer
    let isEmpty = await isStackEmpty();
    expect(isEmpty).toBe(true);

});

describe('Clicking "Pusha till stacken"', () => {
	it('should open a prompt box', async () => {
		let push = await driver.findElement(By.id('push'));
		await push.click();
		let alert = await driver.switchTo().alert();
		await alert.sendKeys("Bananer");
		await alert.accept();
	});
});
