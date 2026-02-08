import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import users from '../../test-data/users.json';

test.describe('Login Feature – All Scenarios', () => {

  test('TS_001 – Successful login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      users.validUser.email,
      users.validUser.password
    );

    await expect(page).toHaveURL('https://automationexercise.com/');
  });

  test('TS_002 – Login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      users.invalidPasswordUser.email,
      users.invalidPasswordUser.password
    );

    await expect(loginPage.errorMessage)
      .toContainText('Your email or password is incorrect');
  });

  test('TS_003 – Login with invalid email', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      users.invalidEmailUser.email,
      users.invalidEmailUser.password
    );

    await expect(loginPage.errorMessage)
      .toContainText('Your email or password is incorrect');
  });

  test('TS_004 – Login with empty email and password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('', '');

    const emailValidation = await loginPage.getEmailValidationMessage();
    expect(emailValidation).toBe('Please fill out this field.');
  });

  test('TS_005 – Login with empty email', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('', users.validUser.password);

    const emailValidation = await loginPage.getEmailValidationMessage();
    expect(emailValidation).toBe('Please fill out this field.');
  });

  test('TS_006 – Login with empty password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(users.validUser.email, '');

    const passwordValidation = await loginPage.getPasswordValidationMessage();
    expect(passwordValidation).toBe('Please fill out this field.');
  });

});
