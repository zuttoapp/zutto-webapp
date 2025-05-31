import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './i18n' // Initialize i18n
import LandingPage from './pages/LandingPage'
import SearchPage from './pages/SearchPage'
import BusinessProfilePage from './pages/BusinessProfilePage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/business/:id" element={<BusinessProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  )
}

export default App
