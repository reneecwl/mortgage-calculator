# 🏡 Mortgage Calculator

A responsive mortgage calculator built with React and SCSS. Enter your mortgage amount, term, interest rate, and payment type to get instant results.

[![React](https://img.shields.io/badge/Built_with-React-blue?logo=react)](https://react.dev/) [![SCSS](https://img.shields.io/badge/Styled_with-SCSS-pink?logo=sass)](https://sass-lang.com/) [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🌐 Live Demo

👉 [Check out the live app](https://your-deployment-link.com)

<!-- Replace with your actual deployed URL -->

---

## 🚀 Features

- 💰 Calculates monthly repayments and interest-only payments
- 🧮 Uses accurate mortgage formulas (annuity and interest-only)
- 🔍 Form validation with error styling
- ♻️ Reset form with a single click
- 🧩 Modular components for easy maintenance

---

## 🧠 How It Works

1. User enters:

   - Mortgage amount
   - Term in years
   - Annual interest rate
   - Payment type: `Repayments` or `Interest Only`

2. Form validates entries and displays feedback

3. Calculations:

   - **Repayments:** Uses annuity formula
   - **Interest Only:** Based on principal × rate ÷ 12

4. Results are displayed dynamically

---

## 🗂️ Project Structure

```
├── assets/ # (Optional: icons, images)
├── components/
│ ├── Form/
│ │ ├── Form.jsx
│ │ └── Form.scss
│ ├── PaymentBox/
│ │ ├── PaymentBox.jsx
│ │ └── PaymentBox.scss
│ └── Result/
│ ├── Result.jsx
│ └── Result.scss
├── styles/
│ └── (Global or utility SCSS)
├── App.jsx
├── App.scss
└── main.jsx
```

---

## 🛠️ Tech Stack

- **React** – Functional components & hooks
- **SCSS** – Modular styling
- **Vite** – Fast development environment

---

## 📸 Screenshots

---

## 🧪 Future Enhancements

- Improve mobile UX and responsiveness
- Support more currencies and localization
- Save calculations to localStorage

---

## 📦 Getting Started

Clone the repo and run locally:

```bash
git clone https://github.com/your-username/mortgage-calculator.git
cd mortgage-calculator
npm install
npm run dev
```
