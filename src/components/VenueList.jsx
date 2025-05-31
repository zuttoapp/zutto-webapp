import VenueCard from './VenueCard'

function VenueList({ venues, resultCount }) {
  return (
    <div className="mb-4">
      <p className="text-gray-600 text-sm mb-4">Showing {resultCount} results</p>
      <div className="space-y-4">
        {venues.map((venue, index) => (
          <VenueCard key={index} venue={venue} />
        ))}
      </div>
    </div>
  )
}

export default VenueList 