import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'

function SearchPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Mock data for demonstration
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'restaurant', name: 'Restaurants' },
    { id: 'cafe', name: 'Cafes' },
    { id: 'retail', name: 'Retail' },
    { id: 'entertainment', name: 'Entertainment' },
    { id: 'service', name: 'Services' }
  ]

  const mockBusinesses = [
    {
      id: 1,
      name: 'Juan\'s Grill',
      category: 'restaurant',
      description: 'Authentic Puerto Rican cuisine in a cozy atmosphere.',
      rating: 4.5,
      checkIns: 234,
      distance: '0.5 miles'
    },
    {
      id: 2,
      name: 'Café del Sol',
      category: 'cafe',
      description: 'Artisanal coffee and fresh pastries.',
      rating: 4.8,
      checkIns: 156,
      distance: '0.8 miles'
    },
    {
      id: 3,
      name: 'Local Market',
      category: 'retail',
      description: 'Fresh local produce and handmade crafts.',
      rating: 4.2,
      checkIns: 89,
      distance: '1.2 miles'
    }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-purple-50 to-blue-50 font-nunito">
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border border-white/40">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for businesses..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-nunito"
                />
                <button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-200 font-nunito"
                >
                  Search
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                      selectedCategory === category.id
                        ? 'bg-emerald-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </form>
          </div>

          {/* Results Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockBusinesses.map(business => (
              <div
                key={business.id}
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/40 cursor-pointer transition-all transform hover:scale-105"
                onClick={() => navigate(`/business/${business.id}`)}
              >
                <div className="h-48 bg-gradient-to-r from-emerald-400 to-blue-500 relative">
                  {/* Business Image would go here */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-emerald-600">
                    {business.distance}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 font-nunito">{business.name}</h3>
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-gray-600 font-nunito">{business.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 font-nunito">{business.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 font-nunito">
                    <span>{business.checkIns} check-ins</span>
                    <span className="capitalize">{business.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage 