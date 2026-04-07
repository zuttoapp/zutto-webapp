import { Link, useParams } from 'react-router-dom';
import Header from '@/components/header';

const BUSINESSES = {
  1: {
    name: "Juan's Grill",
    category: 'restaurant',
    description: 'Authentic Puerto Rican cuisine in a cozy atmosphere.',
    rating: 4.5,
    checkIns: 234,
    distance: '0.5 miles',
  },
  2: {
    name: 'Café del Sol',
    category: 'cafe',
    description: 'Artisanal coffee and fresh pastries.',
    rating: 4.8,
    checkIns: 156,
    distance: '0.8 miles',
  },
  3: {
    name: 'Local Market',
    category: 'retail',
    description: 'Fresh local produce and handmade crafts.',
    rating: 4.2,
    checkIns: 89,
    distance: '1.2 miles',
  },
  demo: {
    name: 'Demo Business',
    category: 'restaurant',
    description: 'Preview how your business appears to visitors on Zutto.',
    rating: 4.9,
    checkIns: 320,
    distance: '—',
  },
};

function BusinessPublicPage() {
  const { id } = useParams();
  const business = id ? BUSINESSES[id] : null;

  if (!business) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-purple-50 to-blue-50 font-nunito">
        <Header />
        <div className="pt-28 px-4 text-center max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 font-nunito">Business not found</h1>
          <Link to="/search" className="text-emerald-600 font-semibold font-nunito hover:underline">
            Back to search
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-purple-50 to-blue-50 font-nunito">
      <Header />
      <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/40">
            <div className="h-48 bg-gradient-to-r from-emerald-400 to-blue-500 relative">
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-emerald-600 font-nunito">
                {business.distance}
              </div>
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 font-nunito">{business.name}</h1>
              <p className="text-sm uppercase tracking-wide text-emerald-600 font-semibold mb-4 font-nunito">
                {business.category}
              </p>
              <p className="text-gray-600 mb-6 font-nunito">{business.description}</p>
              <div className="flex flex-wrap gap-6 text-sm text-gray-700 font-nunito">
                <span>
                  <span className="text-yellow-500 mr-1">★</span>
                  {business.rating} rating
                </span>
                <span>{business.checkIns} check-ins</span>
              </div>
              <div className="mt-8">
                <Link
                  to="/search"
                  className="inline-flex text-emerald-600 font-semibold font-nunito hover:underline"
                >
                  ← Back to search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessPublicPage;
