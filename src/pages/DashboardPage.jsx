import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'

function DashboardPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleLogout = () => {
    console.log('User logged out')
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-purple-50 to-blue-50 font-nunito">
      {/* Header Component with Logout */}
      <Header showLogout={true} onLogoutClick={handleLogout} />

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 font-nunito">Business Dashboard</h1>
            <p className="text-xl text-gray-600 font-nunito">Manage your business presence on Zutto</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/40 hover:shadow-2xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-3xl">
                  👥
                </div>
                <span className="text-3xl font-bold text-gray-900 font-nunito">127</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-nunito">Total Check-ins</h3>
              <p className="text-gray-600 font-nunito">+12% from last month</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/40 hover:shadow-2xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center text-3xl">
                  ⭐
                </div>
                <span className="text-3xl font-bold text-gray-900 font-nunito">4.8</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-nunito">Average Rating</h3>
              <p className="text-gray-600 font-nunito">Based on 89 reviews</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/40 hover:shadow-2xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-3xl">
                  📈
                </div>
                <span className="text-3xl font-bold text-gray-900 font-nunito">23</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-nunito">New Followers</h3>
              <p className="text-gray-600 font-nunito">This week</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/40 hover:shadow-2xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-3xl">
                  🎯
                </div>
                <span className="text-3xl font-bold text-gray-900 font-nunito">85%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-nunito">Engagement Rate</h3>
              <p className="text-gray-600 font-nunito">Above average</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-nunito">Quick Actions</h2>
              <div className="space-y-4">
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-200 font-nunito">
                  📝 Update Business Info
                </button>
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-4 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-200 font-nunito">
                  📸 Add Photos
                </button>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-200 font-nunito">
                  📊 View Analytics
                </button>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-200 font-nunito">
                  🎉 Create Event
                </button>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/40">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-nunito">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-emerald-50/80 rounded-2xl">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold font-nunito">
                    M
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 font-nunito">Maria checked in</p>
                    <p className="text-gray-600 text-sm font-nunito">2 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-purple-50/80 rounded-2xl">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold font-nunito">
                    C
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 font-nunito">Carlos left a review</p>
                    <p className="text-gray-600 text-sm font-nunito">15 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-blue-50/80 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold font-nunito">
                    A
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 font-nunito">Ana shared your business</p>
                    <p className="text-gray-600 text-sm font-nunito">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Demo */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/40">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-nunito">Navigation Demo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button 
                onClick={() => navigate('/')}
                className="bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-200 font-nunito"
              >
                🏠 Back to Home
              </button>
              <button 
                onClick={() => navigate('/search')}
                className="bg-purple-500 hover:bg-purple-600 text-white py-4 rounded-2xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-200 font-nunito"
              >
                🔍 Search Page
              </button>
              <button 
                onClick={() => navigate('/business/demo')}
                className="bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-2xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-200 font-nunito"
              >
                🏪 Business Profile
              </button>
            </div>
          </div>

          {/* Debug Info */}
          <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 font-nunito">Dashboard Debug</h3>
            <div className="space-y-2 text-gray-600 font-nunito">
              <p><strong>Page:</strong> Business Dashboard</p>
              <p><strong>User:</strong> Demo Business Owner</p>
              <p><strong>Status:</strong> Demo Mode</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage 