import VenueCard from '@/components/venue-card';

function VenueList({ venues, resultCount, onVenueSelect }) {
  return (
    <div className="mb-4">
      <p className="text-gray-600 text-sm mb-4">Showing {resultCount} results</p>
      <div className="space-y-4">
        {venues.map((venue, index) => (
          <VenueCard key={venue.id ?? index} venue={venue} onSelect={onVenueSelect} />
        ))}
      </div>
    </div>
  );
}

export default VenueList;
