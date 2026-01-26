import { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import {
  Camera,
  Shield,
  Cpu,
  MonitorSmartphone,
  Server,
  Wifi,
  X
} from 'lucide-react';

/* =======================
   DATA CONFIG
======================= */

const SERVICES = [
  {
    id: 'cctv',
    icon: <Camera className="w-6 h-6" />,
    title: 'CCTV & Surveillance',
    description: 'Complete security camera systems with remote monitoring and AI analytics.',
    features: ['4K Camera Installation', 'Remote Access', 'Motion Detection', 'Cloud Storage'],
    gradient: 'bg-gradient-to-br from-blue-500 to-blue-700',
    link: '/cctv'
  },
  {
    id: 'cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    title: 'Cybersecurity Services',
    description: 'Protect your business from cyber threats with advanced security solutions.',
    features: ['Network Protection', 'Data Encryption', 'Security Audits', 'Incident Response'],
    gradient: 'bg-gradient-to-br from-green-500 to-green-700',
    link: '/cybersecurity'
  },
  {
    id: 'repairs',
    icon: <Cpu className="w-6 h-6" />,
    title: 'Device Repair & Maintenance',
    description: 'Expert repair services for all electronic devices and equipment.',
    features: ['Quick Diagnostics', 'Genuine Parts', 'Data Recovery', 'Warranty Service'],
    gradient: 'bg-gradient-to-br from-purple-500 to-purple-700',
    link: '/device-repairs'
  },
  {
    id: 'euc',
    icon: <MonitorSmartphone className="w-6 h-6" />,
    title: 'End-User Computing',
    description: 'Comprehensive IT support and computing solutions for modern workplaces.',
    features: ['Desktop Support', 'Software Deployment', 'Hardware Setup', 'User Training'],
    gradient: 'bg-gradient-to-br from-orange-500 to-orange-700',
    link: '/end-user-computing'
  },
  {
    id: 'network',
    icon: <Server className="w-6 h-6" />,
    title: 'Network Solutions',
    description: 'Reliable network infrastructure design, implementation, and management.',
    features: ['Network Design', 'Wireless Solutions', 'VPN Setup', 'Performance Optimization'],
    gradient: 'bg-gradient-to-br from-red-500 to-red-700',
    link: '/services'
  },
  {
    id: 'infrastructure',
    icon: <Wifi className="w-6 h-6" />,
    title: 'IT Infrastructure',
    description: 'Complete IT infrastructure services for businesses of all sizes.',
    features: ['Server Setup', 'Cloud Migration', 'Disaster Recovery', 'IT Consulting'],
    gradient: 'bg-gradient-to-br from-cyan-500 to-cyan-700',
    link: '/services'
  }
];

const REPAIR_IMAGES = [
  {
    id: 'precision',
    title: 'Precision Device Repair',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45'
  },
  {
    id: 'diagnostics',
    title: 'Laptop Diagnostics',
    image: 'https://images.unsplash.com/photo-1580894908361-967195033215'
  },
  {
    id: 'hardware',
    title: 'Hardware Repair',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051'
  },
  {
    id: 'screen',
    title: 'Screen Replacement',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04'
  }
];

/* =======================
   COMPONENT
======================= */

const Services = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tech solutions designed to keep your business running smoothly and securely.
          </p>
        </header>

        {/* ================= SERVICES GRID ================= */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </section>

        {/* ================= PROCESS ================= */}
        <section className="mt-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to delivering exceptional service and results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We understand your needs and requirements' },
              { step: '02', title: 'Planning', description: 'Design tailored solutions for your business' },
              { step: '03', title: 'Implementation', description: 'Expert execution with minimal disruption' },
              { step: '04', title: 'Support', description: 'Ongoing maintenance and 24/7 support' }
            ].map(item => (
              <div key={item.step} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= REPAIR SHOWCASE ================= */}
        <section className="mt-32 mb-32">
          <div className="mb-14 max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900">
              Repair <span className="text-gradient">Excellence</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every repair is handled with precision tools, expert hands, and obsessive attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Image */}
            <button
              aria-label="Open repair image"
              onClick={() => setActiveImage(REPAIR_IMAGES[0])}
              className="relative lg:col-span-2 overflow-hidden rounded-3xl group"
            >
              <img
                src={REPAIR_IMAGES[0].image}
                alt={REPAIR_IMAGES[0].title}
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
              <span className="absolute bottom-6 left-6 text-white text-2xl font-semibold">
                {REPAIR_IMAGES[0].title}
              </span>
            </button>

            {/* Supporting Images */}
            <div className="grid gap-8">
              {REPAIR_IMAGES.slice(1).map(item => (
                <button
                  key={item.id}
                  aria-label={`Open ${item.title}`}
                  onClick={() => setActiveImage(item)}
                  className="relative overflow-hidden rounded-3xl group h-[190px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ================= LIGHTBOX ================= */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="w-full max-h-[85vh] object-contain rounded-2xl"
            />
            <button
              aria-label="Close image"
              className="absolute top-4 right-4 text-white opacity-80 hover:opacity-100"
              onClick={() => setActiveImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
