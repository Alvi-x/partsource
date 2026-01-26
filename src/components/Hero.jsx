import { ArrowRight, ShieldCheck, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-primary-100/20" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/30 mb-6 animate-fade-in">
            <ShieldCheck className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">Trusted Since 2010</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text text-transparent">
              Expert Tech Repair
            </span>
            <br />
            <span className="text-gray-900">With Precision & Care</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Professional repair services for all your tech needs. From CCTV installation to 
            cybersecurity solutions, we deliver excellence with cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link to="/services">
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-primary-600 rounded-xl font-semibold border border-white/30 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300">
                View Our Services
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Zap className="w-8 h-8" />, value: '24/7', label: 'Emergency Support' },
              { icon: <ShieldCheck className="w-8 h-8" />, value: '99.9%', label: 'Satisfaction Rate' },
              { icon: <Clock className="w-8 h-8" />, value: '<2h', label: 'Average Response Time' },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500/10 to-primary-600/10 mb-4 mx-auto">
                  <div className="text-primary-600">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;