import { useTranslation } from 'react-i18next'
import Header from '../components/Header'

function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-purple-50 to-blue-50 font-nunito">
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold text-gray-900 mb-6 font-nunito">
              {t('about.title', 'About Zutto')}
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-nunito font-light">
              {t('about.subtitle', 'Connecting communities with local businesses through meaningful experiences')}
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-12 mb-16 border border-white/40">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 font-nunito">
                {t('about.mission.title', 'Our Mission')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-nunito">
                {t('about.mission.text', 'At Zutto, we believe in the power of local communities. Our mission is to create meaningful connections between people and their neighborhood businesses, fostering a sustainable ecosystem where everyone thrives.')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-nunito">
                    {t('about.mission.values.community', 'Community First')}
                  </h3>
                  <p className="text-gray-600 font-nunito">
                    {t('about.mission.values.communityText', 'Building stronger local connections')}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-nunito">
                    {t('about.mission.values.innovation', 'Innovation')}
                  </h3>
                  <p className="text-gray-600 font-nunito">
                    {t('about.mission.values.innovationText', 'Creating new ways to support local businesses')}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-nunito">
                    {t('about.mission.values.sustainability', 'Sustainability')}
                  </h3>
                  <p className="text-gray-600 font-nunito">
                    {t('about.mission.values.sustainabilityText', 'Promoting long-term local economic growth')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-gradient-to-br from-emerald-500 to-blue-600 rounded-3xl shadow-xl p-12 mb-16 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 font-nunito">
                {t('about.impact.title', 'Our Impact')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 font-nunito">500+</div>
                  <p className="text-lg font-nunito">
                    {t('about.impact.businesses', 'Local Businesses')}
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 font-nunito">10k+</div>
                  <p className="text-lg font-nunito">
                    {t('about.impact.users', 'Active Users')}
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 font-nunito">25k+</div>
                  <p className="text-lg font-nunito">
                    {t('about.impact.checkins', 'Check-ins')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-12 mb-16 border border-white/40">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 font-nunito">
                {t('about.team.title', 'Our Team')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl font-nunito">
                    JD
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 font-nunito">
                      {t('about.team.founder.name', 'John Doe')}
                    </h3>
                    <p className="text-emerald-600 mb-2 font-nunito">
                      {t('about.team.founder.role', 'Founder & CEO')}
                    </p>
                    <p className="text-gray-600 font-nunito">
                      {t('about.team.founder.bio', 'Passionate about building communities and supporting local businesses.')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl font-nunito">
                    JS
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 font-nunito">
                      {t('about.team.cto.name', 'Jane Smith')}
                    </h3>
                    <p className="text-emerald-600 mb-2 font-nunito">
                      {t('about.team.cto.role', 'CTO')}
                    </p>
                    <p className="text-gray-600 font-nunito">
                      {t('about.team.cto.bio', 'Tech enthusiast focused on creating seamless user experiences.')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl shadow-xl p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 font-nunito">
                {t('about.contact.title', 'Get in Touch')}
              </h2>
              <p className="text-xl mb-8 font-nunito">
                {t('about.contact.text', 'Have questions or want to learn more? We\'d love to hear from you!')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@zutto.com"
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors font-nunito"
                >
                  {t('about.contact.email', 'Email Us')}
                </a>
                <a
                  href="https://twitter.com/zutto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors font-nunito"
                >
                  {t('about.contact.twitter', 'Follow Us')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage 