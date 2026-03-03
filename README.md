# 🚗 CarRental — React + Tailwind CSS

A fully responsive **Car Rental** web application built with **React.js**, **Tailwind CSS**, and **Vite**. Features a modern dark UI with smooth animations, dynamic vehicle filters, a booking search bar, and a fully functional contact form.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.3.2-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.4.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📸 Preview

You Can See : https://car-rental-sepia-gamma.vercel.app/

> A dark-themed, fully responsive car rental website with blue accent colors and smooth hover animations.

---

## ✨ Features

- 🧭 **Sticky Navbar** — transparent on top, solid background with blur on scroll + mobile hamburger menu
- 🏠 **Hero Section** — animated floating car image, stats counter, and a booking search bar
- 🚘 **Featured Vehicles** — car card grid with live category filter (All / Sedan / SUV / Luxury / Electric)
- ✅ **Why Choose Us** — feature highlights with icon hover effects
- 📋 **How It Works** — 4-step process with numbered step icons
- 📊 **Stats Banner** — bold numbers showcasing platform achievements
- 💬 **Testimonials** — customer review cards with star ratings
- 📱 **Download App** — App Store & Google Play CTA section
- 📬 **Contact Form** — fully controlled React form with state management
- 🔗 **Footer** — quick links, services, social icons, and newsletter subscription
- ⬆️ **Back to Top** — floating button that appears on scroll
- 📱 **Fully Responsive** — works seamlessly on mobile, tablet, and desktop

---

## 🗂️ Project Structure

```
car-rental/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                   # React DOM entry point
    ├── App.jsx                    # Root component — assembles all sections
    ├── index.css                  # Global styles + Tailwind directives
    └── components/
        ├── Navbar.jsx             # Fixed navbar with scroll background + mobile menu
        ├── Hero.jsx               # Hero banner + floating car + booking search bar
        ├── FeaturedVehicles.jsx   # Vehicle cards grid with category filter tabs
        ├── WhyChooseUs.jsx        # Features section with image and icon list
        ├── HowItWorks.jsx         # 4-step rental process
        ├── StatsBanner.jsx        # Highlighted stats strip
        ├── Testimonials.jsx       # Customer reviews with star ratings
        ├── DownloadApp.jsx        # Mobile app download CTA
        ├── Contact.jsx            # Contact info + controlled form
        ├── Footer.jsx             # Footer with links, socials & newsletter
        └── BackToTop.jsx          # Scroll-to-top floating button
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/car-rental.git
   cd car-rental
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React.js](https://reactjs.org/) | UI component library |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Vite](https://vitejs.dev/) | Fast build tool & dev server |
| [Font Awesome 6](https://fontawesome.com/) | Icon library |
| [Google Fonts — Outfit](https://fonts.google.com/specimen/Outfit) | Typography |

---

## 🎨 Design

- **Theme:** Dark (slate-900 base)
- **Accent Color:** `#3B82F6` (Blue-500)
- **Hover Color:** `#1D4ED8` (Blue-700)
- **Font:** Outfit (Google Fonts)
- **Icons:** Font Awesome 6.5.0

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.3.2",
    "vite": "^4.4.0"
  }
}
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- Design inspired by [GreatStack](https://car-rental-gs.vercel.app/)
- Car images from [Unsplash](https://unsplash.com/)
- Avatar images from [RandomUser.me](https://randomuser.me/)

---

<p align="center">Made with ❤️ using React & Tailwind CSS</p>
