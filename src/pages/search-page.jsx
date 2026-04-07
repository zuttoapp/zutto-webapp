import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/header';
import SearchSection from '@/components/search-section';
import VenueList from '@/components/venue-list';

const categoryBg = {
  restaurant: 'bg-emerald-100',
  cafe: 'bg-amber-100',
  retail: 'bg-purple-100',
  entertainment: 'bg-blue-100',
  service: 'bg-gray-100',
};

const MOCK_BUSINESSES = [
  {
    id: 1,
    name: "Juan's Grill",
    category: 'restaurant',
    description: 'Authentic Puerto Rican cuisine in a cozy atmosphere.',
    rating: 4.5,
    checkIns: 234,
    distance: '0.5 miles',
  },
  {
    id: 2,
    name: 'Café del Sol',
    category: 'cafe',
    description: 'Artisanal coffee and fresh pastries.',
    rating: 4.8,
    checkIns: 156,
    distance: '0.8 miles',
  },
  {
    id: 3,
    name: 'Local Market',
    category: 'retail',
    description: 'Fresh local produce and handmade crafts.',
    rating: 4.2,
    checkIns: 89,
    distance: '1.2 miles',
  },
];

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'restaurant', name: 'Restaurants' },
  { id: 'cafe', name: 'Cafes' },
  { id: 'retail', name: 'Retail' },
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'service', name: 'Services' },
];

function SearchPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredBusinesses = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return MOCK_BUSINESSES.filter((b) => {
      const matchesQuery =
        !q || b.name.toLowerCase().includes(q) || b.description.toLowerCase().includes(q);
      const matchesCategory = selectedCategory === 'all' || b.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const venuesForList = useMemo(
    () =>
      filteredBusinesses.map((b) => ({
        id: b.id,
        name: b.name,
        distance: b.distance,
        location: b.description,
        rating: Math.min(5, Math.round(b.rating)),
        reviews: b.checkIns,
        category: b.category,
        bgColor: categoryBg[b.category] || 'bg-gray-100',
        icon: '📍',
      })),
    [filteredBusinesses],
  );

  const handleVenueSelect = (venue) => {
    if (venue?.id != null) {
      navigate(`/business/${venue.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-purple-50 to-blue-50 font-nunito">
      <Header />

      <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 mb-8 border border-white/40">
            <SearchSection onSearch={setSearchQuery} />
            <div className="flex flex-wrap gap-2 mt-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 font-nunito ${
                    selectedCategory === category.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <VenueList
            venues={venuesForList}
            resultCount={venuesForList.length}
            onVenueSelect={handleVenueSelect}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
