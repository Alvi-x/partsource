import { useState } from 'react';
import ConsultationModal from '../components/ConsultationModal';
import {
  Smartphone,
  Laptop,
  Tablet,
  Watch,
  Cpu,
  Battery,
  Wrench,
  Clock,
  Zap,
  Shield,
  CheckCircle,
  Info,
  DollarSign,
  TrendingUp,
  Users,
  Home,
  Building,
  Building2
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

const DeviceRepairs = () => {
  const [showRepairModal, setShowRepairModal] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState('');
  const [activeTab, setActiveTab] = useState('repair');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceType: '',
    deviceModel: '',
    serviceType: '',
    issue: '',
    acknowledgeFee: false
  });

  const brands = [
    { name: 'Toshiba', image: '/toshiba.png' },
    { name: 'Huawei', image: '/huawei.jpg' },
    { name: 'Samsung', image: '/Samsung.jpg' },
    { name: 'Microsoft', image: '/MS.jpg' },
    { name: 'Asus', image: '/Asus.jpg' },
    { name: 'Acer', image: '/Acer.jpg' },
    { name: 'Lenovo', image: '/lenovo.jpg' },
    { name: 'Dell', image: '/Dell.jpg' },
    { name: 'HP', image: '/HP.jpg' },
    { name: 'Apple', image: '/Macbook.jpg' },
    { name: 'Xiaomi', image: '/xiaomii.jpg' }
  ];

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Remote Support',
      description: 'For software issues and minor troubleshooting that can be resolved remotely.',
      price: 'From R 350',
      features: [
        'Virus and malware removal',
        'Software installation & updates',
        'Operating system troubleshooting',
        'Driver updates and configuration',
        'Performance optimization',
        'Data backup assistance'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Physical Repair Service',
      description: 'Comprehensive hardware repairs at our service center or on-site.',
      price: 'From R 850',
      features: [
        'Screen replacements',
        'Battery replacements',
        'Motherboard repairs',
        'Keyboard & trackpad repairs',
        'Water damage recovery',
        'Charging port repairs'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Parts & DIY Support',
      description: 'Purchase parts only or pay for time and materials if you prefer DIY repairs.',
      price: 'Parts from R 250',
      features: [
        'Genuine replacement parts',
        'Technical advice and guidance',
        'Repair manuals provided',
        'Tool recommendations',
        'Parts warranty (90 days)',
        'Compatibility verification'
      ],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const repairProcess = [
    {
      step: '1',
      title: 'Device Intake & Assessment',
      description: 'You bring or send your device to our service center. We perform a comprehensive diagnostic assessment.',
      note: 'Fee: R 400 (waived if you proceed with repairs)'
    },
    {
      step: '2',
      title: 'Quotation & Approval',
      description: 'We provide a detailed quotation including parts, labor, and estimated turnaround time.',
      note: 'Transparent pricing with no hidden costs'
    },
    {
      step: '3',
      title: 'Parts Sourcing',
      description: 'We source genuine or high-quality compatible parts from our extensive supplier network.',
      note: 'Parts warranty: 90 days minimum'
    },
    {
      step: '4',
      title: 'Repair Execution',
      description: 'Our certified engineers perform the repairs using specialized tools and equipment.',
      note: 'Repair warranty: 90 days on labor'
    },
    {
      step: '5',
      title: 'Quality Testing',
      description: 'Every repaired device undergoes rigorous testing to ensure all functions work correctly.',
      note: 'Benchmark testing and burn-in procedures'
    },
    {
      step: '6',
      title: 'Device Return & Support',
      description: 'Device is returned to you with documentation of repairs performed.',
      note: 'Post-repair support included'
    }
  ];

  const etas = [
    { title: 'Simple Repairs', time: '2-3 Business Days', description: 'Screen replacements, battery swaps, simple software fixes, RAM upgrades, basic cleaning.' },
    { title: 'Moderate Repairs', time: '5-7 Business Days', description: 'Motherboard component-level repairs, keyboard replacements, charging port repairs, data recovery.' },
    { title: 'Complex Repairs', time: '7-10 Business Days', description: 'Water damage recovery, GPU repairs, complex motherboard issues, specialized component replacements.' },
    { title: 'Special Order Parts', time: '10-21 Business Days', description: 'Repairs requiring rare or special-order parts, vintage devices, custom fabrication needs.' }
  ];

  const parts = [
    { icon: <Smartphone className="w-8 h-8" />, title: 'Screens & Displays', price: 'From R 450', description: 'LCD/LED screens for laptops, tablets, phones. Touchscreens and digitizers available.' },
    { icon: <Battery className="w-8 h-8" />, title: 'Batteries', price: 'From R 350', description: 'Genuine and compatible batteries for all device types with safety certifications.' },
    { icon: <Tablet className="w-8 h-8" />, title: 'Keyboards & Input', price: 'From R 250', description: 'Replacement keyboards, trackpads, mice, and other input devices.' },
    { icon: <Cpu className="w-8 h-8" />, title: 'Internal Components', price: 'From R 200', description: 'RAM, SSDs, hard drives, motherboards, processors, cooling systems.' },
    { icon: <Zap className="w-8 h-8" />, title: 'Power & Charging', price: 'From R 180', description: 'Chargers, charging ports, DC jacks, power boards, adapters.' },
    { icon: <Shield className="w-8 h-8" />, title: 'Cameras & Audio', price: 'From R 150', description: 'Webcams, front/rear cameras, speakers, microphones, headphone jacks.' }
  ];

  const engineers = [
    { name: 'Michael Chen', specialty: 'Laptop & Desktop Specialist', experience: '15+ years', icon: <Laptop className="w-6 h-6" /> },
    { name: 'Sarah Johnson', specialty: 'Mobile Device Expert', experience: '8+ years', icon: <Smartphone className="w-6 h-6" /> },
    { name: 'David Williams', specialty: 'Data Recovery Specialist', experience: '12+ years', icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-primary-50/30 to-purple-600/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/30 mb-6 animate-fade-in">
              <Wrench className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Professional Device Repairs</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
                Device Repairs
              </span>
              <br />
              <span className="text-gray-900">& Parts Sales</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Expert repair services for laptops, phones, tablets, and all office equipment. 
              We also sell genuine parts and have certified engineers for all your repair needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button 
                onClick={() => {
                  setActiveTab('repair');
                  setShowRepairModal(true);
                }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300"
              >
                Request Repair
              </button>
              <button 
                onClick={() => setActiveTab('parts')}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-purple-600 rounded-xl font-semibold border border-white/30 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300"
              >
                Browse Parts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Banner */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3">
            <Info className="w-5 h-5" />
            <p className="font-semibold">
              <span className="font-bold">R 400 diagnostic assessment fee</span> applies to all devices. 
              Waived if you proceed with repairs through us.
            </p>
          </div>
        </div>
      </div>

{/* Brands Marquee */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Brands We <span className="text-gradient">Repair & Supply</span> Parts For
          </h2>

          <div className="relative">
            <div className="flex animate-marquee space-x-12 py-4">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center min-w-[140px] group"
                >
                  <div className="w-24 h-16 flex items-center justify-center mb-3">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition duration-300"
                    />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Repair <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Service Options</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the repair option that best suits your needs. All services come with a 90-day warranty on repairs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="glass-card rounded-2xl p-8 h-full hover-lift group">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                    <button 
                      onClick={() => {
                        setSelectedDevice(service.title);
                        setShowRepairModal(true);
                      }}
                      className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Warning Box */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-6 border-l-4 border-yellow-500">
              <div className="flex items-start space-x-4">
                <Info className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Important Notice</h4>
                  <p className="text-gray-600">
                    <span className="font-semibold">R 400 diagnostic assessment fee applies to all devices.</span> 
                    {' '}This fee covers our technical evaluation, testing, and quotation process. If you choose to proceed with repairs through us, this fee is <span className="font-semibold">waived and deducted</span> from your final repair cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Repair Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A step-by-step guide to how we handle your device repairs with transparency and professionalism.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/20 to-transparent transform -translate-x-1/2" />
            
            <div className="space-y-12">
              {repairProcess.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-start ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="glass-card rounded-2xl p-8 hover-lift">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white font-bold text-xl">
                          {step.step}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <div className="text-sm text-purple-600 font-medium">{step.note}</div>
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex items-center justify-center w-12 relative">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-4 border-white shadow-lg" />
                  </div>
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ETA Timeline */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Repair <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Turnaround Times</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estimated turnaround times based on repair complexity and parts availability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {etas.map((eta, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <GlassCard className="h-full hover-lift">
                  <div className="text-center p-6">
                    <div className="text-4xl font-bold text-gray-900 mb-3">{eta.time}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{eta.title}</h3>
                    <p className="text-gray-600">{eta.description}</p>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parts Section */}
      {activeTab === 'parts' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Genuine <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Parts & Components</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We sell high-quality parts for DIY repairs or provide parts for our repair services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {parts.map((part, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="glass-card rounded-2xl p-8 h-full hover-lift group">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 mb-6">
                      <div className="text-purple-600">{part.icon}</div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{part.title}</h3>
                    <p className="text-gray-600 mb-6">{part.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-gray-900">{part.price}</div>
                      <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Engineers Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Certified <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Repair Engineers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our team of skilled technicians with specialized expertise in different device categories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {engineers.map((engineer, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="glass-card rounded-2xl overflow-hidden hover-lift group">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 h-48 flex items-center justify-center">
                    <div className="text-white text-6xl">{engineer.icon}</div>
                  </div>
                  
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{engineer.name}</h3>
                    <div className="text-purple-600 font-medium mb-3">{engineer.specialty}</div>
                    <div className="text-gray-600 mb-4">{engineer.experience} experience</div>
                    
                    <div className="flex justify-center space-x-4">
                      {['Dell', 'HP', 'Apple'].map((cert, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={showRepairModal}
        onClose={() => setShowRepairModal(false)}
        title="Request Repair Service"
        selectedService={selectedDevice}
        type="repair"
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default DeviceRepairs;