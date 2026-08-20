# 💱 Real-Time Currency Converter

A responsive **Real-Time Currency Converter** built with **React.js** and **Vite**. The application allows users to convert an amount from one currency to another using exchange-rate data fetched from an API.


## 📸 Preview

> Add a screenshot of your Currency Converter here.

```text
Screenshot will be added soon.
```

## ✨ Features

* 🌍 Convert between multiple currencies
* 💱 Fetch exchange-rate information from an API
* 🔄 Swap the source and target currencies
* 💰 Enter a custom amount for conversion
* ⚡ Fast and responsive UI
* 📱 Responsive design for different screen sizes
* ♻️ Reusable React components
* 🎣 Custom React Hook for fetching currency information
* 🚀 Built with Vite for fast development and builds

## 🛠️ Technologies Used

* **React.js** — UI development
* **Vite** — Development server and build tool
* **JavaScript (ES6+)** — Application logic
* **HTML5** — Structure
* **Tailwindcss** — Styling
* **REST API** — Currency exchange-rate data
* **ESLint** — Code quality and linting
* **Git & GitHub** — Version control

## 📂 Project Structure

```text
Currency-Convertor/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── InputBox.jsx
│   │   └── index.js
│   │
│   ├── hooks/
│   │   └── usecurrencyinfo.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## ⚙️ Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Kuljeetchaudhary/Currency-Convertor.git
```

### 2. Navigate to the Project

```bash
cd Currency-Convertor
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal, usually:

```text
http://localhost:5173/
```

Open that URL in your browser.

## 🔌 API Integration

This project uses a currency exchange-rate API to fetch real-time conversion rates.

The API endpoint accepts a **3-letter currency code** at the end of the URL.

### Example

```text
https://your-api-url.com/v1/currencies/USD.json
```

Here:

* `USD` → Base currency
* `EUR` → Another supported currency
* `INR` → Indian Rupee

The application dynamically changes the currency code in the API URL based on the selected currency.

For example:

```text
USD → /USD.json
INR → /INR.json
EUR → /EUR.json
```

### 🔐 API Key

The API key is kept private and is **not included in this repository**.

If you are running the project locally and the API requires a key.

```
```

```
```

> **Note:** Never commit your `.env` file or expose your private API key in a public GitHub repository.


## 🧩 React Concepts Used

This project helped practice several important React concepts:

* Functional Components
* Props
* State Management with `useState`
* Side Effects with `useEffect`
* Custom Hooks
* Event Handling
* Controlled Inputs
* Component Reusability
* API Integration
* Conditional Rendering

## 📚 What I Learned

While building this project, I practiced:

* Working with React and Vite
* Creating reusable components
* Creating and using custom hooks
* Fetching data from an external API
* Handling API responses
* Managing application state
* Working with currency conversion logic
* Building a responsive user interface
* Using Git and GitHub for version control

## 🔮 Future Improvements

Some improvements I may add in the future:


* [ ] Add currency flags
* [ ] Add conversion history
* [ ] Add loading indicators
* [ ] Add better error handling
* [ ] Add historical exchange-rate charts
* [ ] Deploy the application online

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

If you would like to contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push the branch
6. Create a Pull Request

## 📄 License

This project is created for **learning and educational purposes**.

## 👨‍💻 Author

### Kuljeet 

Computer Science & Engineering Student | React.js & MERN Stack Learner

* 🐙 GitHub: [Kuljeetchaudhary](https://github.com/Kuljeetchaudhary)
  

---

⭐ If you found this project useful, consider giving the repository a star!
