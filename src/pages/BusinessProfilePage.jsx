import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'

function BusinessProfilePage() {
  const { businessId } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()

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
          {/* Business Header */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden mb-12 border border-white/40">
            <div className="h-80 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center relative">
              <span className="text-9xl">🍽️</span>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 font-semibold font-nunito">Currently Open</span>
                </div>
              </div>
            </div>
            <div className="p-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-4 font-nunito">Juan's Grill</h1>
                  <p className="text-xl text-gray-600 mb-6 font-nunito">Authentic Puerto Rican cuisine in the heart of Old San Juan</p>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400 text-2xl">⭐</span>
                      <span className="text-xl font-semibold text-gray-900 font-nunito">4.8</span>
                      <span className="text-gray-500 font-nunito">(127 reviews)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-500 text-xl">👥</span>
                      <span className="text-gray-700 font-nunito">5 people checked in today</span>
                    </div>
                  </div>
                </div>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-emerald-200 font-nunito">
                  Check In Here
                </button>
              </div>
            </div>
          </div>

          {/* Check-in Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-nunito">Quick Check-in</h2>
              <div className="space-y-4">
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-200 font-nunito">
                  🍽️ Dining Experience
                </button>
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-4 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-200 font-nunito">
                  🎵 Live Music Night
                </button>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-200 font-nunito">
                  🍹 Happy Hour
                </button>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-nunito">Business Info</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <span className="text-gray-700 font-nunito">123 Calle del Cristo, Old San Juan</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🕒</span>
                  <span className="text-gray-700 font-nunito">Open until 10:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <span className="text-gray-700 font-nunito">(787) 555-0123</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌐</span>
                  <span className="text-emerald-600 font-nunito">www.juansgrill.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-12 border border-white/40">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-nunito">Recent Activity</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-emerald-50/80 rounded-2xl hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl font-nunito">
                  M
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 font-nunito">Maria checked in for Dining Experience</p>
                  <p className="text-gray-600 font-nunito">2 minutes ago</p>
                </div>
                <span className="text-2xl">🍽️</span>
              </div>

              <div className="flex items-center gap-4 p-6 bg-purple-50/80 rounded-2xl hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl font-nunito">
                  C
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 font-nunito">Carlos checked in for Live Music Night</p>
                  <p className="text-gray-600 font-nunito">15 minutes ago</p>
                </div>
                <span className="text-2xl">🎵</span>
              </div>

              <div className="flex items-center gap-4 p-6 bg-blue-50/80 rounded-2xl hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl font-nunito">
                  A
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 font-nunito">Ana checked in for Happy Hour</p>
                  <p className="text-gray-600 font-nunito">1 hour ago</p>
                </div>
                <span className="text-2xl">🍹</span>
              </div>
            </div>
          </div>

          {/* Debug Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 font-nunito">Business Profile Debug</h3>
            <div className="space-y-2 text-gray-600 font-nunito">
              <p><strong>Business ID:</strong> {businessId}</p>
              <p><strong>Page:</strong> Business Profile</p>
              <p><strong>Status:</strong> Demo Mode</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessProfilePage 