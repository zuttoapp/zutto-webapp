import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../contexts/AuthContext'
import Header from '../components/Header'

function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()
  const { login, signup } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [userType, setUserType] = useState('user') // 'user' or 'business'
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    businessName: '',
    description: '',
    category: '',
    address: '',
    phone: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleUserTypeChange = (type) => {
    setUserType(type)
    setFormData({
      email: '',
      password: '',
      name: '',
      businessName: '',
      description: '',
      category: '',
      address: '',
      phone: ''
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const from = location.state?.from?.pathname || (userType === 'user' ? '/profile' : '/business-profile')
      
      if (isLogin) {
        const result = await login(formData.email, formData.password, userType)
        if (result.success) {
          navigate(from, { replace: true })
        } else {
          setError(result.error || 'Failed to login')
        }
      } else {
        const additionalData = userType === 'user' 
          ? { name: formData.name }
          : {
              businessName: formData.businessName,
              description: formData.description,
              category: formData.category,
              address: formData.address,
              phone: formData.phone
            }
        
        const result = await signup(formData.email, formData.password, userType, additionalData)
        if (result.success) {
          navigate(from, { replace: true })
        } else {
          setError(result.error || 'Failed to sign up')
        }
      }
    } catch (err) {
      setError('An unexpected error occurred')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-purple-50 to-blue-50 font-nunito">
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          {/* User Type Selection */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 mb-8 border border-white/40">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center font-nunito">
              {isLogin ? 'Welcome Back!' : 'Join Zutto'}
            </h2>
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => handleUserTypeChange('user')}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg font-nunito ${
                  userType === 'user'
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-emerald-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Regular User
              </button>
              <button
                onClick={() => handleUserTypeChange('business')}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg font-nunito ${
                  userType === 'business'
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-emerald-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Business
              </button>
            </div>
          </div>

          {/* Login/Signup Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/40">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600">
                  {error}
                </div>
              )}

              {!isLogin && userType === 'user' && (
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 font-nunito">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-nunito"
                    placeholder="John Doe"
                  />
                </div>
              )}

              {!isLogin && userType === 'business' && (
                <>
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-2 font-nunito">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-nunito"
                      placeholder="Juan's Grill"
                    />
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2 font-nunito">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-nunito"
                      rows="3"
                      placeholder="Tell us about your business..."
                    />
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2 font-nunito">
                      Category
                    </label>
                    <input
                      type="text"
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-nunito"
                      placeholder="Restaurant, Cafe, etc."
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2 font-nunito">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-nunito"
                      placeholder="123 Main St, San Juan, PR"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 font-nunito">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-nunito"
                      placeholder="(787) 555-0123"
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 font-nunito">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-nunito"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2 font-nunito">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-nunito"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-emerald-200 font-nunito disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-emerald-600 hover:text-emerald-700 font-semibold font-nunito"
              >
                {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
              </button>
            </div>
          </div>

          {/* Social Login */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4 font-nunito">Or continue with</p>
            <div className="flex justify-center gap-4">
              <button className="p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <span className="text-2xl">🌐</span>
              </button>
              <button className="p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <span className="text-2xl">📱</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage 