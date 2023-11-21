
class LoginPage {

    constructor(page)
    {
        this.page = page;
    }

    async goTo()
    {
        await this.page.goto('http://localhost:4200/');
    }

    async validLogin(username, password)
    {
        const page1Promise = this.page.waitForEvent('popup');
        // start login into applicatioon
        await this.page.getByLabel('Login').click();
        const page1 = await page1Promise;
        await page1.getByPlaceholder('someone@example.com').fill(username);
        await page1.getByRole('button', { name: 'Next' }).click();
        await page1.getByPlaceholder('Password').fill(password);
        await page1.getByRole('button', { name: 'Sign in' }).click();
        await page1.getByLabel('Don\'t show this again').check();
        await page1.getByRole('button', { name: 'Yes' }).click();
        return true;
    }
}

module.exports = {LoginPage};