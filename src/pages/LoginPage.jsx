import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'

function LoginPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignInClick = () => {
    navigate('/login')
  }

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { email, password })
    // In a real app, you'd handle authentication here
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-purple-50 to-blue-50 font-nunito relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse delay-2000"></div>
      </div>

      {/* Header Component */}
      <Header onSignInClick={handleSignInClick} />

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-md mx-auto">
          {/* Login Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/40">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 font-nunito">Welcome Back</h1>
              <p className="text-gray-600 font-nunito">Sign in to discover local experiences</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 font-nunito">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-nunito"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2 font-nunito">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-nunito"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-emerald-200 font-nunito"
              >
                Sign In
              </button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500 font-nunito">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors font-nunito">
                  <span className="text-xl mr-2">🔍</span>
                  Google
                </button>
                <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors font-nunito">
                  <span className="text-xl mr-2">📘</span>
                  Facebook
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 font-nunito">
                Don't have an account?{' '}
                <button className="text-emerald-600 hover:text-emerald-700 font-semibold font-nunito">
                  Sign up
                </button>
              </p>
            </div>
          </div>

          {/* Debug Info */}
          <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 font-nunito">Login Demo</h3>
            <div className="space-y-2 text-gray-600 font-nunito">
              <p><strong>Page:</strong> Login</p>
              <p><strong>Status:</strong> Demo Mode</p>
              <p><strong>Note:</strong> Any email/password will work for demo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage 