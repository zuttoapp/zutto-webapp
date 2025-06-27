import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './i18n' // Initialize i18n
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import LandingPage from './pages/LandingPage'
import SearchPage from './pages/SearchPage'
import BusinessProfilePage from './pages/BusinessProfilePage'
import LoginPage from './pages/LoginPage'
import UserProfilePage from './pages/UserProfilePage'
import Dashboard from './pages/Dashboard'
import AboutPage from './pages/AboutPage'
import './App.css'

// Simple, subtle page transition
const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
}

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.2
}

// Simple animated page wrapper
function AnimatedPage({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

// Routes component with location for AnimatePresence
function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route 
          path="/" 
          element={
            <AnimatedPage>
              <LandingPage />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/about" 
          element={
            <AnimatedPage>
              <AboutPage />
            </AnimatedPage>
          } 
        />

        {/* Protected Routes */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <AnimatedPage>
                <UserProfilePage />
              </AnimatedPage>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/business-profile" 
          element={
            <ProtectedRoute>
              <AnimatedPage>
                <BusinessProfilePage />
              </AnimatedPage>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <AnimatedPage>
                <Dashboard />
              </AnimatedPage>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AnimatedRoutes />
      </AuthProvider>
    </Router>
  )
}

export default App
