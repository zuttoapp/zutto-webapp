import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Check for stored auth token on mount
    const token = localStorage.getItem('auth_token')
    if (token) {
      // TODO: Validate token with backend
      // For now, we'll just set a mock user
      setUser({
        id: '1',
        email: 'demo@example.com',
        name: 'Demo User',
        role: 'user',
        profile: {
          avatar: null,
          bio: '',
          location: '',
          interests: [],
          checkIns: 0,
          points: 0,
          badges: [],
          favoriteBusinesses: []
        }
      })
    }
    setLoading(false)
  }, [])

  const login = async (email, password, userType) => {
    try {
      // TODO: Replace with actual API call
      // Mock successful login
      const mockUser = {
        id: '1',
        email,
        name: userType === 'business' ? 'Demo Business' : 'Demo User',
        role: userType,
        profile: userType === 'business' ? {
          businessName: 'Demo Business',
          description: '',
          category: '',
          address: '',
          phone: '',
          hours: {},
          photos: [],
          checkIns: 0,
          reviews: [],
          rating: 0
        } : {
          avatar: null,
          bio: '',
          location: '',
          interests: [],
          checkIns: 0,
          points: 0,
          badges: [],
          favoriteBusinesses: []
        }
      }
      
      // Store token
      localStorage.setItem('auth_token', 'mock_token')
      setUser(mockUser)
      navigate(userType === 'business' ? '/business-dashboard' : '/dashboard')
      return { success: true }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: error.message }
    }
  }

  const signup = async (email, password, name, userType, additionalData) => {
    try {
      // TODO: Replace with actual API call
      // Mock successful signup
      const mockUser = {
        id: '1',
        email,
        name,
        role: userType,
        profile: userType === 'business' ? {
          businessName: additionalData.businessName,
          description: additionalData.description || '',
          category: additionalData.category || '',
          address: additionalData.address || '',
          phone: additionalData.phone || '',
          hours: additionalData.hours || {},
          photos: [],
          checkIns: 0,
          reviews: [],
          rating: 0
        } : {
          avatar: null,
          bio: '',
          location: '',
          interests: [],
          checkIns: 0,
          points: 0,
          badges: [],
          favoriteBusinesses: []
        }
      }
      
      // Store token
      localStorage.setItem('auth_token', 'mock_token')
      setUser(mockUser)
      navigate(userType === 'business' ? '/business-dashboard' : '/dashboard')
      return { success: true }
    } catch (error) {
      console.error('Signup error:', error)
      return { success: false, error: error.message }
    }
  }

  const updateProfile = async (profileData) => {
    try {
      // TODO: Replace with actual API call
      setUser(prev => ({
        ...prev,
        profile: {
          ...prev.profile,
          ...profileData
        }
      }))
      return { success: true }
    } catch (error) {
      console.error('Profile update error:', error)
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    localStorage.removeItem('auth_token')
    setUser(null)
    navigate('/')
  }

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    updateProfile,
    isAuthenticated: !!user,
    isBusiness: user?.role === 'business'
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 