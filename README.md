# 🚀 Firm Explorer

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Fast%20Build-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active-success)

**Firm Explorer** is a modern web application that allows users to search companies and explore key information about them in one place.

Users can view company summaries, official links, and basic company details through a clean and interactive interface.

This project demonstrates **React UI development, API integration, structured data handling, and search UX design.**

---

# 🌐 Live Demo

You can view the live project here:

```
https://your-vercel-link.vercel.app
```

*(Deploy easily using Vercel or Netlify)*

---

# ✨ Features

### 🔍 Smart Company Search

Search companies with real-time suggestions.

### 🧠 Friendly UX

If users search with empty input, the app shows fun messages instead of errors.

### 🏢 Company Profile Page

Each company page displays:

* Logo
* Company name
* Wikipedia summary
* Structured company details

### 🔗 Quick Links

Direct access to company platforms:

* Website
* Wikipedia
* LinkedIn
* GitHub
* YouTube
* Instagram
* Careers

### 🎨 Modern UI

Includes:

* Gradient background
* Glassmorphism cards
* Clean centered layout
* Responsive design

### 🌙 Dark Mode

Toggle between light and dark UI.

---

# 🖼️ Screenshots

### Home Page

![Home Screenshot](screenshots/home.png)

### Company Profile

![Company Screenshot](screenshots/company.png)

*(Add screenshots inside a `/screenshots` folder)*

---

# 🛠️ Tech Stack

### Frontend

* React
* Vite
* React Router

### Styling

* CSS
* Glassmorphism UI

### APIs

* Wikipedia API (company summary)
* Clearbit Logo API (company logos)

---

# 📂 Project Structure

```
firm-explorer
│
├── public
│
├── src
│   ├── assets
│
│   ├── components
│   │   ├── Navbar
│   │   ├── SearchBar
│   │   ├── CompanyCard
│   │   ├── SocialLinks
│   │   └── CompanyNews
│   │
│   ├── pages
│   │   ├── Home
│   │   └── CompanyPage
│   │
│   ├── data
│   │   └── companies.json
│   │
│   ├── services
│   │   └── companyApi.js
│   │
│   ├── utils
│   │   └── helpers.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```
git clone https://github.com/YOUR_USERNAME/firm-explorer.git
```

Navigate to the project

```
cd firm-explorer
```

Install dependencies

```
npm install
```

Run the development server

```
npm run dev
```

Visit

```
http://localhost:5173
```

---

# 📊 Example Company Dataset

Company data is stored in `companies.json`.

Example:

```json
{
  "name": "Google",
  "domain": "google.com",
  "industry": "Technology",
  "founded": 1998,
  "hq": "Mountain View, California",
  "employees": "180000+"
}
```

---

# 🚀 Future Improvements

Planned upgrades include:

* 🔎 Fuzzy search suggestions
* 📈 Stock market data integration
* 📰 Company news section
* 📺 Latest YouTube videos
* 🌍 Larger company dataset
* 📊 Company statistics dashboard

---

# 🤝 Contributing

Contributions are welcome.

Steps:

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Submit a pull request

---

# 📜 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Shivank Kumar**

CSE Student exploring Software Engineering, Systems and Data Applications.

GitHub:

```
https://github.com/YOUR_USERNAME
```
