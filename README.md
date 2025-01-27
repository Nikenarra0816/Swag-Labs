**SWAG LABS AUTOMATION TEST - PLAYWRIGHT (JAVASCRIPT) 🎉**

**Description**

This project aims to automate the testing of the Swag Labs web application (https://www.saucedemo.com/) using Playwright with JavaScript. The tests are performed to ensure the core functionality of the application works properly. This project supports cross-browser testing using Playwright.

**Key Features**

✅ Authentication
✅ Add Product to Cart
✅ Checkout

**Requirements**

✅ Node.js (version 14.x or later)
✅ Playwright
✅ Git

**SETUP AND INSTALLATION 🎉**

Follow the steps below:

**1. Clone the Repository**

First, clone the repository using the following git command:

👉🏼 git clone https://github.com/Nikenarra0816/SwagLabs

👉🏼 cd Swag-Labs

**2. Install Dependencies**

Install all necessary dependencies, including Playwright, by running the following command:

👉🏼 npm install

**3. Install Browsers for Playwright**

Playwright requires browsers to run tests. Install the necessary browsers with the following command:

👉🏼 npx playwright install

**RUNNING TESTS 🎉**

**1. Run All Tests in All Browsers**

To run the automated tests in all supported browsers (Chromium, Firefox, WebKit), run the following command:

👉🏼 npx playwright test

**2. Run Tests in a Specific Browser**

If you want to run tests in a specific browser, you can use one of the following commands:

Chromium ➡️ npx playwright test --project=chromium

Firefox ➡️ npx playwright test --project=firefox

WebKit ➡️ npx playwright test --project=webkit
