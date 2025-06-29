# 🌟 Zutto - Gamify your local experience

A modern React web application that connects people with authentic local experiences in Puerto Rico. Zutto helps users discover hidden gems, support local businesses, and build meaningful community connections.

![Zutto Landing Page](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![Vite](https://img.shields.io/badge/Vite-6.3.5-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-cyan)

## ✨ Features

### 🎯 Core Functionality
- **Local Discovery**: Find authentic local experiences, cafes, art studios, and live music venues
- **QR Check-ins**: Simple QR code scanning to connect with businesses
- **Live Activity Feed**: Real-time updates on what's happening in your community
- **Mood-based Search**: Discover places based on your current vibe
- **Bilingual Support**: Full English and Spanish localization

### 🎨 User Experience
- **Responsive Design**: Seamless experience across mobile, tablet, and desktop
- **Modern UI**: Beautiful gradient backgrounds, animations, and glassmorphism effects
- **Accessibility**: WCAG compliant with proper contrast and navigation
- **Performance**: Optimized loading and smooth animations

### 🏢 Business Features
- **Business Dashboard**: Tools for local businesses to manage their presence
- **Analytics**: Insights into customer engagement and check-ins
- **Profile Management**: Easy setup and customization of business profiles

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/zutto-webapp.git
   cd zutto-webapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
npm run preview
```

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.1.0** - Modern React with latest features
- **Vite 6.3.5** - Lightning-fast build tool and dev server
- **React Router 7.6.1** - Client-side routing

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Google Fonts** - Quicksand & Nunito font families
- **Custom Animations** - CSS keyframes and Tailwind animations

### Internationalization
- **react-i18next 15.5.2** - Complete i18n solution
- **i18next-browser-languagedetector** - Automatic language detection

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS & Autoprefixer** - CSS processing
- **Vite Plugin React** - Fast refresh and HMR

## 📁 Project Structure

```
zutto-webapp/
├── public/                 # Static assets
│   ├── components/         # Reusable UI components
│   │   ├── Header.jsx     # Navigation header
│   │   └── LanguageToggle.jsx
│   ├── pages/             # Page components
│   │   ├── LandingPage.jsx    # Main landing page
│   │   ├── SearchPage.jsx     # Search functionality
│   │   ├── BusinessProfilePage.jsx
│   │   ├── LoginPage.jsx
│   │   └── DashboardPage.jsx
│   ├── i18n.js           # Internationalization config
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies and scripts
```

## 🌐 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | LandingPage | Main landing page with hero section and features |
| `/search` | SearchPage | Discover local experiences |
| `/business/:id` | BusinessProfilePage | Individual business profiles |
| `/login` | LoginPage | User authentication |
| `/dashboard` | DashboardPage | Business owner dashboard |

## 🎨 Design System

### Colors
- **Primary**: Emerald (green) - `emerald-500`
- **Secondary**: Purple - `purple-500`
- **Accent**: Blue - `blue-500`
- **Backgrounds**: Gradient combinations of primary colors

### Typography
- **Headings**: Quicksand font family
- **Body Text**: Nunito font family
- **Responsive**: Mobile-first approach with breakpoints

### Components
- **Glassmorphism**: Backdrop blur effects with transparency
- **Animations**: Smooth hover effects and transitions
- **Cards**: Rounded corners with shadows and hover states

## 🌍 Internationalization

The app supports English and Spanish with automatic language detection:

- **English**: Default language
- **Spanish**: Complete translation for Puerto Rican market
- **Dynamic Switching**: Toggle between languages instantly
- **Browser Detection**: Automatically detects user's preferred language

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

### Mobile-First Approach
- Base styles target mobile devices
- Progressive enhancement for larger screens
- Touch-friendly interface elements
- Optimized performance on mobile networks

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Code Style
- ESLint configuration for React best practices
- Consistent component structure
- Tailwind CSS for styling
- Functional components with hooks

### Performance Optimizations
- Vite's fast HMR for development
- Code splitting with React Router
- Optimized images and assets
- Minimal bundle size

## 🚀 Deployment

### Build Process
1. Run `npm run build` to create production build
2. Files are generated in `dist/` directory
3. Deploy `dist/` folder to your hosting platform

### Hosting Recommendations
- **Vercel** - Optimal for React/Vite apps
- **Netlify** - Easy deployment with git integration
- **GitHub Pages** - Free hosting for open source projects

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and structure
- Add appropriate comments for complex logic
- Test responsive design on multiple devices
- Ensure accessibility standards are met

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS approach
- **Vite** - For the lightning-fast development experience
- **Puerto Rico** - For the inspiration and local community

---

**Made with ❤️ for the Puerto Rican community**

*Connecting people with authentic local experiences, one check-in at a time.*
