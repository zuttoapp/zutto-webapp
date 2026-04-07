import { Link } from 'react-router-dom';
import Header from '@/components/header';
import { useAuth } from '@/contexts/auth-context';

function ComingSoonPage({ title }) {
  const { isBusiness } = useAuth();
  const dashboardHref = isBusiness ? '/business-dashboard' : '/dashboard';

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-purple-50 to-blue-50 font-nunito">
      <Header showLogout />
      <div className="pt-28 px-4 text-center max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 font-nunito">{title}</h1>
        <p className="text-gray-600 mb-8 font-nunito">This section is coming soon.</p>
        <Link
          to={dashboardHref}
          className="text-emerald-600 font-semibold font-nunito hover:underline"
        >
          Back to dashboard
        </Link>
      </div>
    </div>
  );
}

export default ComingSoonPage;
