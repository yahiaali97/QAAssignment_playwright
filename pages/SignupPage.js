export class SignUpPage {
  constructor(page) {
    this.page = page;

    // Step 1: Signup
    this.nameInput = page.locator('input[data-qa="signup-name"]');
    this.emailInput = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');

    // Step 2: Account Information
    this.titleMr = page.locator('#id_gender1');
    this.passwordInput = page.locator('#password');
    this.dayDropdown = page.locator('#days');
    this.monthDropdown = page.locator('#months');
    this.yearDropdown = page.locator('#years');

    // Address Information
    this.firstNameInput = page.locator('#first_name');
    this.lastNameInput = page.locator('#last_name');
    this.addressInput = page.locator('#address1');
    this.countryDropdown = page.locator('#country');
    this.stateInput = page.locator('#state');
    this.cityInput = page.locator('#city');
    this.zipcodeInput = page.locator('#zipcode');
    this.mobileInput = page.locator('#mobile_number');

    this.createAccountButton = page.locator('button[data-qa="create-account"]');
    this.accountCreatedMessage = page.locator('h2[data-qa="account-created"]');
  }

  async navigate() {
    await this.page.goto('https://automationexercise.com/login');
  }

  async startSignup(name, email) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupButton.click();
  }

  async fillAccountDetails(user) {
    await this.titleMr.check();
    await this.passwordInput.fill(user.password);
    await this.dayDropdown.selectOption(user.day);
    await this.monthDropdown.selectOption(user.month);
    await this.yearDropdown.selectOption(user.year);

    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.addressInput.fill(user.address);
    await this.countryDropdown.selectOption(user.country);
    await this.stateInput.fill(user.state);
    await this.cityInput.fill(user.city);
    await this.zipcodeInput.fill(user.zipcode);
    await this.mobileInput.fill(user.mobile);
  }

  async submitSignup() {
    await this.createAccountButton.click();
  }
}