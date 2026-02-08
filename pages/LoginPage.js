export class LoginPage {
  constructor(page) {
    this.page = page;

    this.emailInput = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.errorMessage = page.locator('.login-form p');
  }

  async navigate() {
    await this.page.goto('https://automationexercise.com/login');
  }

  async login(email, password) {
    if (email !== null) {
      await this.emailInput.fill(email);
    }
    if (password !== null) {
      await this.passwordInput.fill(password);
    }
    await this.loginButton.click();
  }

  async getEmailValidationMessage() {
    return await this.emailInput.evaluate(el => el.validationMessage);
  }

  async getPasswordValidationMessage() {
    return await this.passwordInput.evaluate(el => el.validationMessage);
  }
}
