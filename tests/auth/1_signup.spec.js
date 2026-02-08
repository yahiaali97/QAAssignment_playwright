import { test, expect } from '@playwright/test';
import { SignUpPage } from '../../pages/SignUpPage';
import users from '../../test-data/users.json';

test('Successful user sign-up using valid data', async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  const user = users.validUser;
  const email = `test${Date.now()}@mail.com`;

  await signUpPage.navigate();
  await signUpPage.startSignup(user.name, email);
  await signUpPage.fillAccountDetails(user);
  await signUpPage.submitSignup();

  // Assertion: account created successfully
  await expect(signUpPage.accountCreatedMessage)
    .toHaveText('Account Created!');
});