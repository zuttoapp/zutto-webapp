import { useState } from 'react'

function SearchSection({ onSearch, onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState('Near')
  const [searchTerm, setSearchTerm] = useState('')

  const filters = ['Near', 'Hot', 'Deals']

  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
    onFilterChange?.(filter)
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    onSearch?.(e.target.value)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Find Places</h2>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <input 
            type="text" 
            placeholder="Search for restaurants, cafes, activities..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute right-4 top-3 text-gray-400">
            🔍
          </div>
        </div>
        
        <div className="flex gap-2">
          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeFilter === filter 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchSection 