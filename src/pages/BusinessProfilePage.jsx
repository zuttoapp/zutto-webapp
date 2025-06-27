import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../contexts/AuthContext'
import Header from '../components/Header'

function BusinessProfilePage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { user, updateProfile } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    description: user?.description || '',
    category: user?.category || '',
    address: user?.address || '',
    phone: user?.phone || '',
    hours: user?.hours || {
      monday: { open: '09:00', close: '17:00' },
      tuesday: { open: '09:00', close: '17:00' },
      wednesday: { open: '09:00', close: '17:00' },
      thursday: { open: '09:00', close: '17:00' },
      friday: { open: '09:00', close: '17:00' },
      saturday: { open: '10:00', close: '15:00' },
      sunday: { open: '10:00', close: '15:00' }
    },
    amenities: user?.amenities || []
  })
  const [newAmenity, setNewAmenity] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleHoursChange = (day, field, value) => {
    setFormData(prev => ({
      ...prev,
      hours: {
        ...prev.hours,
        [day]: {
          ...prev.hours[day],
          [field]: value
        }
      }
    }))
  }

  const handleAddAmenity = () => {
    if (newAmenity.trim() && !formData.amenities.includes(newAmenity.trim())) {
      setFormData(prev => ({
        ...prev,
        amenities: [...prev.amenities, newAmenity.trim()]
      }))
      setNewAmenity('')
    }
  }

  const handleRemoveAmenity = (amenity) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.filter(a => a !== amenity)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const result = await updateProfile(formData)
      if (result.success) {
        setIsEditing(false)
      } else {
        setError(result.error || 'Failed to update profile')
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
      <Header showLogout={true} />

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden mb-8 border border-white/40">
            <div className="h-48 bg-gradient-to-r from-emerald-400 to-blue-500 relative">
              {/* Business Logo */}
              <div className="absolute -bottom-16 left-8">
                <div className="w-32 h-32 rounded-full bg-white p-1 shadow-xl">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl">
                    {user?.businessName?.charAt(0) || '🏪'}
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-20 pb-8 px-8">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2 font-nunito">{user?.businessName}</h1>
                  <p className="text-gray-600 font-nunito">{user?.email}</p>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-200 font-nunito"
                >
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Profile Info */}
            <div className="md:col-span-2 space-y-8">
              {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600">
                      {error}
                    </div>
                  )}

                  <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2 font-nunito">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-nunito"
                      rows="4"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-nunito"
                      placeholder="(787) 555-0123"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 font-nunito">
                      Business Hours
                    </label>
                    <div className="space-y-2">
                      {Object.entries(formData.hours).map(([day, hours]) => (
                        <div key={day} className="flex items-center gap-4">
                          <span className="w-24 text-gray-600 font-nunito capitalize">{day}</span>
                          <input
                            type="time"
                            value={hours.open}
                            onChange={(e) => handleHoursChange(day, 'open', e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-nunito"
                          />
                          <span className="text-gray-600 font-nunito">to</span>
                          <input
                            type="time"
                            value={hours.close}
                            onChange={(e) => handleHoursChange(day, 'close', e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-nunito"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 font-nunito">
                      Amenities
                    </label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={newAmenity}
                        onChange={(e) => setNewAmenity(e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-nunito"
                        placeholder="Add an amenity..."
                      />
                      <button
                        type="button"
                        onClick={handleAddAmenity}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-200 font-nunito"
                      >
                        Add
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800"
                        >
                          {amenity}
                          <button
                            type="button"
                            onClick={() => handleRemoveAmenity(amenity)}
                            className="ml-2 text-emerald-600 hover:text-emerald-800"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-emerald-200 font-nunito disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-nunito">Description</h3>
                    <p className="text-gray-600 font-nunito">{formData.description || 'No description yet'}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-nunito">Category</h3>
                    <p className="text-gray-600 font-nunito">{formData.category || 'No category set'}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-nunito">Address</h3>
                    <p className="text-gray-600 font-nunito">{formData.address || 'No address set'}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-nunito">Phone</h3>
                    <p className="text-gray-600 font-nunito">{formData.phone || 'No phone number set'}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-nunito">Business Hours</h3>
                    <div className="space-y-2">
                      {Object.entries(formData.hours).map(([day, hours]) => (
                        <div key={day} className="flex items-center gap-4">
                          <span className="w-24 text-gray-600 font-nunito capitalize">{day}</span>
                          <span className="text-gray-600 font-nunito">
                            {hours.open} - {hours.close}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-nunito">Amenities</h3>
                    <div className="flex flex-wrap gap-2">
                      {formData.amenities.length > 0 ? (
                        formData.amenities.map((amenity, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800"
                          >
                            {amenity}
                          </span>
                        ))
                      ) : (
                        <p className="text-gray-600 font-nunito">No amenities added yet</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Stats Sidebar */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-white/40">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 font-nunito">Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-nunito">Total Check-ins</span>
                    <span className="text-2xl font-bold text-emerald-600 font-nunito">{user?.checkIns || 0}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-nunito">Active Rewards</span>
                    <span className="text-2xl font-bold text-emerald-600 font-nunito">{user?.activeRewards?.length || 0}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-nunito">Reviews</span>
                    <span className="text-2xl font-bold text-emerald-600 font-nunito">{user?.reviews?.length || 0}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-white/40">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 font-nunito">Recent Activity</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 font-nunito">No recent activity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessProfilePage 