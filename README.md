# 💱 Real-Time Currency Converter

A responsive **Real-Time Currency Converter** built with **React.js** and **Vite**. The application allows users to convert an amount from one currency to another using exchange-rate data fetched from a public currency API.

## 📸 Preview

> Add a screenshot of the application here.

**Screenshot coming soon...**

## ✨ Features

- 🌍 Convert between multiple currencies
- 💱 Fetch real-time exchange-rate data
- 🔄 Swap source and target currencies
- 💰 Enter a custom amount for conversion
- ⚡ Fast and responsive interface
- 📱 Responsive design for different screen sizes
- ♻️ Reusable React components
- 🎣 Custom React Hook for fetching currency information
- 🚀 Fast development and builds with Vite

## 🛠️ Technologies Used

- **React.js** — Frontend library
- **Vite** — Development server and build tool
- **JavaScript (ES6+)** — Application logic
- **HTML5** — Page structure
- **Tailwind CSS** — Styling
- **REST API** — Currency exchange-rate data
- **ESLint** — Code quality and linting
- **Git & GitHub** — Version control

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

Open the URL in your browser to use the application.

## 🔌 API Integration

This project uses the **Fawaz Ahmed Currency API** to retrieve currency exchange-rate data.

### API Endpoint

The application dynamically changes the currency code in the API URL based on the selected currency.

```text
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
```

### Example

If the selected currency is `USD`:

```text
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
```

If the selected currency is `INR`:

```text
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json
```

Other examples:

```text
USD → /usd.json
INR → /inr.json
EUR → /eur.json
GBP → /gbp.json
```

The API data is fetched using a custom React Hook:

```text
src/hooks/usecurrencyinfo.js
```

The hook uses JavaScript's `fetch()` method to retrieve exchange-rate data and stores the response using React's `useState`.

### 🔐 API Key

This project **does not require an API key**.

## 🧩 React Concepts Used

This project helped me practice several important React concepts:

- Functional Components
- Props
- State Management with `useState`
- Side Effects with `useEffect`
- Custom Hooks
- Event Handling
- Controlled Inputs
- Component Reusability
- API Integration
- Conditional Rendering

## 📚 What I Learned

While building this project, I practiced:

- Building applications with React and Vite
- Creating reusable React components
- Creating and using custom hooks
- Fetching data from an external API
- Handling API responses
- Managing application state
- Implementing currency conversion logic
- Creating responsive user interfaces
- Working with Tailwind CSS
- Using Git and GitHub for version control

## 🔮 Future Improvements

- [ ] Add currency flags
- [ ] Add conversion history
- [ ] Add loading indicators
- [ ] Improve error handling
- [ ] Add historical exchange-rate charts
- [ ] Add dark mode
- [ ] Deploy the application online

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

To contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push your branch
6. Create a Pull Request

## 📄 License

This project was created for **learning and educational purposes**.


**Computer Science & Engineering Student | React.js & MERN Stack Learner**



---

⭐ If you found this project useful, consider giving the repository a star!# 💱 Real-Time Currency Converter
