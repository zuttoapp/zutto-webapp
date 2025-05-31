function VenueCard({ venue }) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ))
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-6">
      <div className="flex items-start gap-4">
        <div 
          className={`w-16 h-16 rounded-lg flex-shrink-0 flex items-center justify-center text-2xl ${venue.bgColor}`}
        >
          {venue.icon || venue.name.charAt(0)}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{venue.name}</h3>
            <span className="text-sm font-medium text-gray-600">{venue.distance}</span>
          </div>
          
          <p className="text-gray-600 mb-3">{venue.location}</p>
          
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1">
              {renderStars(venue.rating)}
              <span className="text-sm text-gray-500 ml-1">({venue.reviews})</span>
            </div>
            
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {venue.category}
            </span>
            
            {venue.sponsored && (
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                Sponsored
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VenueCard 