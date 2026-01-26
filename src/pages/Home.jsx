import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import {
  Camera,
  Shield,
  Cpu,
  MonitorSmartphone,
  Users,
  Headphones,
  Wrench
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'CCTV Solutions',
      description: 'Advanced surveillance systems with AI-powered analytics for complete security monitoring.',
      features: ['HD & 4K Cameras', 'Remote Monitoring', 'Motion Detection', '24/7 Recording'],
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-700',
      link: '/cctv'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with enterprise-grade security solutions and threat monitoring.',
      features: ['Network Security', 'Data Encryption', 'Threat Detection', 'Security Audits'],
      gradient: 'bg-gradient-to-br from-green-500 to-green-700',
      link: '/cybersecurity'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Device Repairs',
      description: 'Expert repair services for all devices including smartphones, laptops, and tablets.',
      features: ['Same-Day Service', 'Genuine Parts', 'Warranty Included', 'Data Recovery'],
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-700',
      link: '/device-repairs'
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6" />,
      title: 'End-User Computing',
      description: 'Comprehensive IT support and computing solutions for businesses and individuals.',
      features: ['IT Support', 'Software Setup', 'Hardware Installation', 'Troubleshooting'],
      gradient: 'bg-gradient-to-br from-orange-500 to-orange-700',
      link: '/end-user-computing'
    },
  ];

  const features = [
    {
      title: 'Expert Technicians',
      description: 'Certified professionals with years of experience in tech repair and security systems.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Quick Turnaround',
      description: 'Most repairs completed within 24 hours with our efficient service process.',
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support for all your urgent repair needs.',
      icon: <Headphones className="w-6 h-6" />
    },
  ];

  const repairGallery = [
    // {
    //   title: 'Smartphone Screen Repair',
    //   image: 'https://images.unsplash.com/photo-1581091870627-3b29b34c93e9'
    // },
    {
      title: 'Laptop Hardware Diagnostics',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04'
    },
    // {
    //   title: 'Tablet Repair & Testing',
    //   image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d4'
    // },
    {
      title: 'Motherboard Soldering',
      image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051'
    },
    {
      title: 'Battery Replacement',
      image: 'https://images.unsplash.com/photo-1580894908361-967195033215'
    },
    {
      title: 'Data Recovery Process',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45'
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tech solutions tailored to meet your specific needs with excellence and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Repair Visual Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Wrench className="w-7 h-7 text-primary-600" />
              <h2 className="text-4xl font-bold text-gray-900">
                Device Repair <span className="text-gradient">Gallery</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A look inside our repair process — precision tools, expert hands, and real results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {repairGallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover-lift"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/10 to-primary-600/10 mb-6">
                  <div className="text-primary-600">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Secure Your Tech?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Get in touch with our experts for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all">
                  Contact Us Now
                </button>
              </Link>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-primary-600 rounded-xl font-semibold border border-white/30 shadow-lg hover:shadow-xl transition-all">
                Call: (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
