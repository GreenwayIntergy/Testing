const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../PageObject/LoginPageObj');
let context;
let page;

test.beforeAll(async ({ browser }) => {

  context = await browser.newContext();
  page = await context.newPage();
  // start login into applicatioon
  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  const LoginResult = await loginPage.validLogin('prajwal.verma@jktech.com', 'MicroB@01020');
  expect(LoginResult).toBeTruthy();

  //goto the main application page
  await page.getByLabel('Go to page 2').click();

  //find the General Disclosure And open
  await page.getByRole('button', { name: 'View', exact: true }).nth(1).click();
  await page.getByRole('button', { name: 'General Disclosure 30 Subsections' }).click();
});

test('Organization Details', async () => {
  
  await page.getByRole('button', { name: 'Oganization Details' }).click();
  await page.getByRole('button', { name: '2.1.a.1 Legal name' }).click();
  await page.waitForLoadState('networkidle');

  //Filling the organization details

  // filling legal name
  await page.getByPlaceholder('Enter text here').fill('');
  await page.getByPlaceholder('Enter text here').fill('AB Comment');
  await page.locator('button:nth-child(2)').first().click();

  // filling business name
  await page.getByPlaceholder('Enter text here').fill('');
  await page.getByPlaceholder('Enter text here').fill('AB Comment');

  // filling Nature of ownership
  await page.locator('button:nth-child(2)').first().click();
  await page.getByPlaceholder('Enter value here').waitFor();
  await page.getByPlaceholder('Enter value here').click();
  await page.getByRole('option', { name: 'Association' }).click();
  await page.locator('button:nth-child(2)').first().click();

  // Filling Location of headq
  await page.waitForLoadState('networkidle');
  await page.getByPlaceholder('Enter Address 1').fill('Adres1');
  await page.getByPlaceholder('Enter Address 2').fill('adres2');
  await page.getByPlaceholder('Enter City').fill('meerut');
  await page.locator('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').first().click();
  await page.getByRole('option', { name: 'India', exact: true }).click();
  await page.locator('div:nth-child(6) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click();
  await page.getByRole('option', { name: 'Uttar Pradesh' }).click();
  await page.getByPlaceholder('Enter Zip code').fill('250002');
  await page.getByRole('button', { name: 'Add' }).first().click();
  await page.locator('button:nth-child(2)').first().click();

  // Filling operation location
  await page.locator('.MuiGrid-root > div:nth-child(3)').first().locator("[role='button']").click();
  await page.getByRole('option', { name: 'American Samoa' }).click();
  await page.getByRole('option', { name: 'Antigua and Barbuda' }).click();
  await page.keyboard.press("Escape");

  // adding commet
  await page.getByPlaceholder('Type something here…').fill('test cmnt');
  await page.getByRole('main').locator('button').nth(3).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('.jodit-wysiwyg').fill('');
  await page.locator('.jodit-wysiwyg').fill('helo cmnt');
  await page.getByText('close').click();
});

test.only('Sustainability Reporting', async () => {
  await page.getByRole('button', { name: 'Sustainability Reporting' }).click();
  await page.getByRole('button', { name: '2.2.a.1 Sustainability reporting' }).click();
  await page.waitForLoadState('networkidle');

  //Filling the organization details
  await page.getByPlaceholder('Enter a value').fill('value1');
  await page.getByRole('button', { name: 'Add' }).first().click();
  await page.locator('li').filter({ hasText: 'value1' }).getByRole('checkbox').check();
  await page.locator('li').filter({ hasText: 'value1' }).getByRole('button').first().click();
  await page.getByPlaceholder('Enter a value').fill('value2');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('li').filter({ hasText: 'value2' }).getByRole('button').nth(1).click();
  await page.locator('button:nth-child(2)').first().click();
  await page.getByPlaceholder('Enter a value').fill('value1');
  await page.getByRole('button', { name: 'Add' }).first().click();
  await page.locator('li').filter({ hasText: 'value1' }).getByRole('checkbox').check();
  await page.locator('li').filter({ hasText: 'value1' }).getByRole('button').first().click();
  await page.getByPlaceholder('Enter a value').fill('value2');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('li').filter({ hasText: 'value2' }).getByRole('button').nth(1).click();
  await page.locator('button:nth-child(2)').first().click();
  await page.locator('.jodit-wysiwyg').fill('https://www.apple.com/newsroom/pdfs/FY21_Q2_Consolidated_Financiadsdw ');
  await page.locator('button:nth-child(2)').first().click();
  await page.locator('div').filter({ hasText: /^Yes$/ }).click();
  await page.locator('.jodit-wysiwyg').click();
  await page.locator('.jodit-wysiwyg').click();
  await page.locator('.jodit-wysiwyg').fill('Investment in new business strategies and acquisitions could disrupt the Company\'s ongoing business, present risks not originally contemplated and materially adversely affect the Company\'s business, reputation, results of operations and financial condition. The Company has invested, and in the future may invest, in new business strategies or acquisitions. Such endeavors may involve significant risks and uncertainties, including distraction of management from current operations, greater-than-expected liabilities and expenses, economic, political, legal and regulatory challenges associsdwated with operating in new businesses, regions or countries, inadequate return on capital, potential impairment of tangible and intangible assets, and significant write-offs. Investment and acquisition transactions are exposed to additional risks, including failing to obtain required regulatory approvals on a timely basis or at all, or the imposition of onerous conditions that could delay or prevent the Company from completing a transaction or otherwise limit the Company\'s ability to fully realize the anticipated benefits of a transaction.');
  await page.locator('button:nth-child(2)').first().click();
  await page.locator('.jodit-wysiwyg').click();
  await page.locator('.jodit-wysiwyg').fill('Investment in new business strategies and acquisitions could disrupt the Company\'s ongoing business, present risks not originally contemplated and materially adversely affect the Company\'s business, reputation, results of operations and financial condition. The Company has invested, and in the future may invest, in new business strategies or acquisitions. Such endeavors may involve significant risks and uncertainties, including distraction of management from current operations, greater-than-expected liabilities and expenses, economic, political, legal and regulatory challenges associdsawated with operating in new businesses, regions or countries, inadequate return on capital, potential impairment of tangible and intangible assets, and significant write-offs. Investment and acquisition transactions are exposed to additional risks, including failing to obtain required regulatory approvals on a timely basis or at all, or the imposition of onerous conditions that could delay or prevent the Company from completing a transaction or otherwise limit the Company\'s ability to fully realize the anticipated benefits of a transaction.');
  await page.locator('button:nth-child(2)').first().click();
  await page.locator('div').filter({ hasText: /^http:\/\/www\.swlearning\.com\/accounting\/stickney\/tenth_edition\/minority\.pdf$/ }).click();
  await page.locator('div').filter({ hasText: /^http:\/\/www\.swlearning\.com\/accounting\/stickney\/tenth_edition\/minority\.pdf$/ }).fill('http://www.swlearning.com/accounting/stickney/tenth_edition/minority.pdf\n\ndsdw');
  await page.locator('button:nth-child(2)').first().click();
  await page.locator('.jodit-wysiwyg').click();
  await page.locator('.jodit-wysiwyg').fill('csavee');
  await page.locator('.MuiInputBase-root').first().click();
  await page.getByPlaceholder('Type something here…').fill('comment');
  await page.locator('.comments > .MuiBox-root > .MuiButtonBase-root').click();
});

test('Reporting Period', async ({ page }) => {
  
  await page.getByRole('button', { name: 'Reporting period' }).click();
  await page.getByRole('button', { name: '2.3.a.1 Sustainability reporting' }).click();
  await page.getByLabel('Start Date').click();
  await page.getByLabel('Start Date').press('Control+a');
  await page.getByLabel('Start Date').fill('23/01/2');
  await page.getByLabel('End Date').click();
  await page.getByLabel('End Date').press('Control+a');
  await page.getByLabel('End Date').fill('23/01/3');
  await page.getByPlaceholder('Type something here…').click();
  await page.getByPlaceholder('Type something here…').fill('testing');
  await page.locator('.comments > .MuiBox-root > .MuiButtonBase-root').click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('.jodit-wysiwyg').click();
  await page.locator('.jodit-wysiwyg').fill('helo');
  await page.getByText('close').click();
  await page.locator('button:nth-child(2)').first().click();
  await page.getByLabel('Start Date').click();
  await page.getByLabel('Start Date').press('Control+a');
  await page.getByLabel('Start Date').fill('02/03/2');
  await page.getByLabel('End Date').click();
  await page.getByLabel('End Date').press('Control+a');
  await page.getByLabel('End Date').fill('02/03/3');
  await page.getByPlaceholder('Type something here…').click();
  await page.getByPlaceholder('Type something here…').fill('testing');
  await page.locator('.comments > .MuiBox-root > .MuiButtonBase-root').click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('.jodit-wysiwyg').click();
  await page.locator('.jodit-wysiwyg').fill('heelo');
  await page.getByText('close').click();
  await page.locator('button:nth-child(2)').first().click();
  await page.getByPlaceholder('MM/DD/YYYY').click();
  await page.getByPlaceholder('MM/DD/YYYY').press('Control+a');
  await page.getByPlaceholder('MM/DD/YYYY').fill('02/03/2');
  await page.getByPlaceholder('Type something here…').click();
  await page.getByPlaceholder('Type something here…').fill('testing');
  await page.locator('.comments > .MuiBox-root > .MuiButtonBase-root').click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('.jodit-wysiwyg').click();
  await page.locator('.jodit-wysiwyg').fill('testing');
  await page.getByText('close').click();
  await page.locator('button:nth-child(2)').first().click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('Prajawal');
  await page.getByPlaceholder('Position').click();
  await page.getByPlaceholder('Position').fill('Testing');
  await page.getByPlaceholder('Phone Number').click();
  await page.getByPlaceholder('Phone Number').fill('9897406792');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('prajwal.verma@jktech.ccom');
  await page.getByPlaceholder('Address').click();
  await page.getByPlaceholder('Address').fill('meerut');
  await page.getByRole('button', { name: 'Add' }).first().click();
  await page.getByPlaceholder('Type something here…').click();
  await page.getByPlaceholder('Type something here…').fill('testing');
  await page.locator('.comments > .MuiBox-root > .MuiButtonBase-root').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.locator('.jodit-wysiwyg').click();
  await page.locator('.jodit-wysiwyg').fill('testing');
  await page.getByText('close').click();
});