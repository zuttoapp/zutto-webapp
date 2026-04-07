import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth-context';
import Header from '@/components/header';
import ProgressCard from '@/components/progress-card';
import BottomNavigation from '@/components/bottom-navigation';

function Dashboard() {
  const navigate = useNavigate();
  const { user, isBusiness } = useAuth();

  const handleBottomTab = (tabId) => {
    const paths = {
      home: '/dashboard',
      rewards: '/rewards',
      location: '/search',
      profile: '/profile',
      search: '/search',
    };
    const path = paths[tabId];
    if (path) navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-purple-50 to-blue-50 font-nunito pb-24">
      <Header showLogout={true} />

      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border border-white/40">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 font-nunito">
              Welcome back, {isBusiness ? user?.businessName : user?.name}!
            </h1>
            <p className="text-gray-600 font-nunito">
              {isBusiness
                ? 'Manage your business profile and track customer engagement.'
                : 'Discover local businesses and earn rewards for your visits.'}
            </p>
          </div>

          {!isBusiness ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 mb-8 border border-white/40">
              <ProgressCard />
            </div>
          ) : null}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quick Stats */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-white/40">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 font-nunito">Quick Stats</h2>
              <div className="space-y-4">
                {isBusiness ? (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-nunito">Total Check-ins</span>
                      <span className="text-2xl font-bold text-emerald-600 font-nunito">
                        {user?.profile?.checkIns || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-nunito">Active Rewards</span>
                      <span className="text-2xl font-bold text-emerald-600 font-nunito">
                        {user?.profile?.activeRewards?.length || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-nunito">Reviews</span>
                      <span className="text-2xl font-bold text-emerald-600 font-nunito">
                        {user?.profile?.reviews?.length || 0}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-nunito">Check-ins</span>
                      <span className="text-2xl font-bold text-emerald-600 font-nunito">
                        {user?.profile?.checkIns || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-nunito">Points</span>
                      <span className="text-2xl font-bold text-emerald-600 font-nunito">
                        {user?.profile?.points || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-nunito">Badges</span>
                      <span className="text-2xl font-bold text-emerald-600 font-nunito">
                        {user?.profile?.badges?.length || 0}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-white/40">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 font-nunito">
                Recent Activity
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 font-nunito">No recent activity</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-white/40">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 font-nunito">
                Quick Actions
              </h2>
              <div className="space-y-4">
                {isBusiness ? (
                  <>
                    <button
                      onClick={() => navigate('/business-profile')}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-200 font-nunito"
                    >
                      Edit Business Profile
                    </button>
                    <button
                      onClick={() => navigate('/rewards')}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-200 font-nunito"
                    >
                      Manage Rewards
                    </button>
                    <button
                      onClick={() => navigate('/analytics')}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-200 font-nunito"
                    >
                      View Analytics
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => navigate('/profile')}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-200 font-nunito"
                    >
                      Edit Profile
                    </button>
                    <button
                      onClick={() => navigate('/discover')}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-200 font-nunito"
                    >
                      Discover Businesses
                    </button>
                    <button
                      onClick={() => navigate('/rewards')}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-200 font-nunito"
                    >
                      View Rewards
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation onTabChange={handleBottomTab} />
    </div>
  );
}

export default Dashboard;
