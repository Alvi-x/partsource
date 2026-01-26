import GlassCard from '../components/GlassCard';
import { Camera, Video, Shield, Zap, Eye, Smartphone, Cloud, AlertCircle } from 'lucide-react';

const CCTV = () => {
  const features = [
    { icon: <Camera className="w-6 h-6" />, title: 'HD & 4K Cameras', description: 'Crystal clear video quality for detailed monitoring' },
    { icon: <Video className="w-6 h-6" />, title: '24/7 Recording', description: 'Continuous surveillance with cloud storage options' },
    { icon: <Shield className="w-6 h-6" />, title: 'Weatherproof', description: 'Designed to withstand all weather conditions' },
    { icon: <Zap className="w-6 h-6" />, title: 'Night Vision', description: 'Clear monitoring even in low-light conditions' },
    { icon: <Eye className="w-6 h-6" />, title: 'Motion Detection', description: 'Smart alerts for suspicious activity' },
    { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile Access', description: 'Monitor your property from anywhere' },
  ];

  const packages = [
    {
      name: 'Basic',
      price: '$499',
      features: ['4 HD Cameras', 'Local Storage', 'Mobile App', 'Basic Motion Detection'],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Professional',
      price: '$899',
      features: ['8 HD Cameras', 'Cloud Storage', 'Advanced Analytics', '24/7 Monitoring', 'Smart Alerts'],
      gradient: 'from-blue-600 to-blue-700',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,499',
      features: ['16+ 4K Cameras', 'Unlimited Cloud', 'AI Analytics', 'Professional Installation', 'Priority Support'],
      gradient: 'from-blue-700 to-blue-800'
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">CCTV</span> & Surveillance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced security camera systems with AI-powered analytics for complete peace of mind.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <GlassCard key={index}>
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 mb-6">
                <div className="text-blue-600">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </GlassCard>
          ))}
        </div>

        {/* Packages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Surveillance <span className="text-gradient">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect security solution for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="relative">
                {pkg.popular && (
                  <div className="z-10 absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <GlassCard className={`h-full ${pkg.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-6">
                      {pkg.price}
                      <span className="text-lg text-gray-600">/setup</span>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3 text-gray-700">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-3 bg-gradient-to-r ${pkg.gradient} text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300`}>
                      Select Package
                    </button>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <GlassCard className="max-w-4xl mx-auto">
          <div className="text-center">
            <AlertCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need Custom Surveillance Solution?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our security experts for a tailored CCTV system design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
                Get Free Site Survey
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-blue-600 rounded-xl font-semibold border border-white/30 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default CCTV;