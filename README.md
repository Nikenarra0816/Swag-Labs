**Swag Labs Automation Test - Playwright (JavaScript) 🎉**

**Deskripsi**

Proyek ini bertujuan untuk mengotomatiskan pengujian aplikasi web Swag Labs (https://www.saucedemo.com/) menggunakan Playwright dengan bahasa JavaScript. 
Pengujian dilakukan untuk memastikan fungsionalitas utama aplikasi berjalan dengan baik. 
Proyek ini mendukung pengujian lintas browser menggunakan Playwright.

**Fitur Utama**

✅ Authentication
✅ Add Product to Cart
✅ Checkout

**Persyaratan**

✅ Node.js (versi 14.x atau lebih baru)
✅ Playwright 
✅ Git 



**SETUP DAN INSTALASI** 🎉

Ikuti langkah - langkah dibawah ini :

**1. Clone Repositori**

Pertama, clone repositori menggunakan perintah git berikut:

👉🏼 git clone https://github.com/Nikenarra0816/Swag-Labs.git

👉🏼 cd Swag-Labs

**2. Install Dependensi**

Install semua dependensi yang diperlukan, termasuk Playwright, dengan menjalankan perintah berikut:

👉🏼 npm install

**3. Install Browser untuk Playwright**

Playwright memerlukan browser untuk menjalankan pengujian. Install browser yang diperlukan dengan perintah berikut:

👉🏼 npx playwright install




**MENJALANKAN PENGUJIAN** 🎉

**1. Menjalankan semua pengujian di Semua Browser**

Untuk menjalankan pengujian otomatis di semua browser yang didukung (Chromium, Firefox, WebKit), jalankan perintah berikut:

👉🏼 npx playwright test

**2. Menjalankan Pengujian di Browser Tertentu**

Jika ingin menjalankan pengujian hanya di satu browser tertentu, dapat menggunakan salah satu perintah berikut:

**Chromium** ➡️ npx playwright test --project=chromium

**Firefox** ➡️ npx playwright test --project=firefox

**WebKit** ➡️ npx playwright test --project=webkit
