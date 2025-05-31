import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'

function SearchPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')
  
  const category = searchParams.get('category')
  const mood = searchParams.get('mood')

  const handleSignInClick = () => {
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-purple-50 to-blue-50 font-nunito">
      {/* Header Component */}
      <Header onSignInClick={handleSignInClick} />

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Search Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 font-nunito">
              Discover Local Gems
            </h1>
            <p className="text-xl text-gray-600 font-nunito">
              Find unique experiences in your area
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for places, experiences, or vibes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 text-lg rounded-2xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all shadow-lg font-nunito"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-xl transition-colors font-nunito font-semibold">
                Search
              </button>
            </div>
          </div>

          {/* Sample Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100">
              <div className="w-full h-48 bg-gradient-to-br from-orange-200 to-red-300 rounded-xl mb-4 flex items-center justify-center text-4xl">
                🍽️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-nunito">Local Bistro</h3>
              <p className="text-gray-600 mb-4 font-nunito">Cozy neighborhood restaurant with farm-to-table cuisine</p>
              <div className="flex items-center justify-between">
                <span className="text-emerald-600 font-semibold font-nunito">4.8 ⭐</span>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors font-nunito">
                  Check In
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100">
              <div className="w-full h-48 bg-gradient-to-br from-purple-200 to-pink-300 rounded-xl mb-4 flex items-center justify-center text-4xl">
                🎨
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-nunito">Art Gallery</h3>
              <p className="text-gray-600 mb-4 font-nunito">Contemporary local artists showcase</p>
              <div className="flex items-center justify-between">
                <span className="text-emerald-600 font-semibold font-nunito">4.6 ⭐</span>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors font-nunito">
                  Check In
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100">
              <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-xl mb-4 flex items-center justify-center text-4xl">
                ☕
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-nunito">Coffee Roasters</h3>
              <p className="text-gray-600 mb-4 font-nunito">Specialty coffee with local beans</p>
              <div className="flex items-center justify-between">
                <span className="text-emerald-600 font-semibold font-nunito">4.9 ⭐</span>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors font-nunito">
                  Check In
                </button>
              </div>
            </div>
          </div>

          {/* Debug Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 font-nunito">Search Parameters</h3>
            <div className="space-y-2 text-gray-600 font-nunito">
              <p><strong>Category:</strong> {category || 'None'}</p>
              <p><strong>Mood:</strong> {mood || 'None'}</p>
              <p><strong>Search Term:</strong> {searchTerm || 'None'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage 