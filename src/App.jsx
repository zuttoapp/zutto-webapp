import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './i18n' // Initialize i18n
import LandingPage from './pages/LandingPage'
import SearchPage from './pages/SearchPage'
import BusinessProfilePage from './pages/BusinessProfilePage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
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
        <Route 
          path="/" 
          element={
            <AnimatedPage>
              <LandingPage />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/search" 
          element={
            <AnimatedPage>
              <SearchPage />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/business/:id" 
          element={
            <AnimatedPage>
              <BusinessProfilePage />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/login" 
          element={
            <AnimatedPage>
              <LoginPage />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <AnimatedPage>
              <DashboardPage />
            </AnimatedPage>
          } 
        />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <div className="relative">
        <AnimatedRoutes />
      </div>
    </Router>
  )
}

export default App
