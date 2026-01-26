import { useState, useEffect, useRef } from 'react';
import ConsultationModal from '../components/ConsultationModal';
import {
  Monitor,
  Smartphone,
  Tablet,
  Watch,
  Printer,
  Projector,
  Network,
  FileText,
  Wrench,
  RefreshCw,
  Zap,
  Shield,
  Settings,
  Headphones,
  Clock,
  TrendingDown,
  Users,
  BarChart,
  CheckCircle,
  ChevronRight
} from 'lucide-react';


const EndUserComputing = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null);

  const [formData, setFormData] = useState({
    company: '',
    contactPerson: '',
    email: '',
    phone: '',
    serviceInterest: '',
    deviceCount: '',
    requirements: ''
  });

  useEffect(() => {
    // Initialize chart data
    setChartData({
      labels: ['Coverage Period', 'Response Time', 'Accidental Damage', 'Battery Replacement', 'On-site Support', 'Cost Effectiveness'],
      datasets: [
        {
          label: 'OEM Warranty',
          data: [65, 30, 10, 20, 15, 40],
          backgroundColor: 'rgba(239, 68, 68, 0.7)',
          borderColor: 'rgba(239, 68, 68, 1)',
          borderWidth: 1
        },
        {
          label: 'Our Maintenance',
          data: [95, 90, 85, 95, 90, 90],
          backgroundColor: 'rgba(59, 130, 246, 0.7)',
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 1
        }
      ]
    });
  }, []);

  const stats = [
    { value: '98%', label: 'Device Uptime Guarantee', icon: <Zap className="w-6 h-6" /> },
    { value: '4h', label: 'Average Response Time', icon: <Clock className="w-6 h-6" /> },
    { value: '3000+', label: 'Devices Under Management', icon: <Users className="w-6 h-6" /> },
    { value: '40%', label: 'Savings vs OEM Warranty', icon: <TrendingDown className="w-6 h-6" /> }
  ];

  const services = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Maintenance Contracts',
      description: 'Proactive maintenance and support for out-of-warranty devices with comprehensive coverage.',
      features: [
        'Monthly/Annual fixed-fee contracts',
        'Priority support and response',
        'Preventive maintenance included',
        'Parts and labor fully covered',
        'Device replacement if not repairable',
        '24/7 emergency support available'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Break-Fix Services',
      description: 'Pay-per-repair services for devices without maintenance contracts.',
      features: [
        'No contract required',
        'Pay only when you need repairs',
        'Same-day service for critical issues',
        'Transparent pricing upfront',
        '90-day warranty on all repairs',
        'Free diagnostic assessment'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <RefreshCw className="w-10 h-10" />,
      title: 'Asset Lifecycle Management',
      description: 'Complete management of your device lifecycle from deployment to retirement.',
      features: [
        'Device health monitoring',
        'Performance optimization',
        'Battery replacement scheduling',
        'Data migration services',
        'Secure data wiping',
        'Environmentally responsible disposal'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  const devices = [
    { icon: <Monitor className="w-8 h-8" />, title: 'Laptops', description: 'All brands: Dell, HP, Lenovo, Apple, Asus, Acer, Microsoft Surface' },
    { icon: <Smartphone className="w-8 h-8" />, title: 'iPhones & Smartphones', description: 'Apple iPhone, Samsung Galaxy, Google Pixel, Huawei, Xiaomi' },
    { icon: <Tablet className="w-8 h-8" />, title: 'Tablets & iPads', description: 'Apple iPad, Samsung Tab, Microsoft Surface, Amazon Fire' },
    { icon: <Watch className="w-8 h-8" />, title: 'Smart Watches', description: 'Apple Watch, Samsung Galaxy Watch, Fitbit, Garmin' },
    { icon: <Printer className="w-8 h-8" />, title: 'Printers & Scanners', description: 'HP, Canon, Epson, Brother, Xerox, Ricoh' },
    { icon: <Monitor className="w-8 h-8" />, title: 'Monitor Computers', description: 'All-in-ones, workstations, mini PCs, and towers' },
    { icon: <Projector className="w-8 h-8" />, title: 'Office Equipment', description: 'Projectors, monitors, docking stations, peripherals' },
    { icon: <Network className="w-8 h-8" />, title: 'Network Devices', description: 'Routers, switches, access points, firewalls' }
  ];

  const warrantyComparison = [
    { feature: 'Coverage Period', oem: '1-3 years', ours: 'Up to 5 years (extendable)', oemCheck: true, oursCheck: true },
    { feature: 'Response Time', oem: '48-72 hours', ours: '4 hours (priority)', oemCheck: false, oursCheck: true },
    { feature: 'Accidental Damage', oem: 'Not covered', ours: 'Optional coverage available', oemCheck: false, oursCheck: true },
    { feature: 'Battery Replacement', oem: 'Only if defective', ours: 'Scheduled replacement included', oemCheck: false, oursCheck: true },
    { feature: 'On-site Support', oem: 'Mail-in only', ours: 'On-site or carry-in options', oemCheck: false, oursCheck: true },
    { feature: 'Loaner Devices', oem: 'Rarely provided', ours: 'Always available', oemCheck: false, oursCheck: true },
    { feature: 'Cost Predictability', oem: 'High unexpected costs', ours: 'Fixed monthly fee', oemCheck: false, oursCheck: true },
    { feature: 'Average Annual Cost', oem: 'R 3,500 - R 6,000', ours: 'R 1,800 - R 3,500', oemCheck: false, oursCheck: true }
  ];

  const plans = [
    {
      name: 'Essential Care',
      price: 'R 149',
      period: '/device/month',
      description: 'Basic coverage for small businesses',
      features: [
        { included: true, text: 'Break-fix repairs included' },
        { included: true, text: 'Next business day response' },
        { included: true, text: 'Parts and labor covered' },
        { included: true, text: '90-day repair warranty' },
        { included: true, text: 'Email support only' },
        { included: false, text: 'No on-site support' },
        { included: false, text: 'No loaner devices' }
      ],
      color: 'from-gray-500 to-gray-600',
      popular: false
    },
    {
      name: 'Business Pro',
      price: 'R 299',
      period: '/device/month',
      description: 'Complete coverage for growing businesses',
      features: [
        { included: true, text: 'Everything in Essential' },
        { included: true, text: '4-hour response time' },
        { included: true, text: 'On-site support available' },
        { included: true, text: 'Loaner devices provided' },
        { included: true, text: 'Priority phone support' },
        { included: true, text: 'Preventive maintenance' },
        { included: true, text: 'Battery replacement program' }
      ],
      color: 'from-blue-500 to-blue-600',
      popular: true
    },
    {
      name: 'Enterprise Elite',
      price: 'R 499',
      period: '/device/month',
      description: 'Premium coverage for large organizations',
      features: [
        { included: true, text: 'Everything in Business Pro' },
        { included: true, text: '2-hour emergency response' },
        { included: true, text: '24/7 dedicated support' },
        { included: true, text: 'Accidental damage coverage' },
        { included: true, text: 'Same-day device replacement' },
        { included: true, text: 'Monthly health reports' },
        { included: true, text: 'Asset lifecycle management' }
      ],
      color: 'from-purple-500 to-purple-600',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-primary-50/30 to-orange-600/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/30 mb-6 animate-fade-in">
              <Monitor className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-700">End-User Computing Specialists</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 bg-clip-text text-transparent">
                End-User Computing
              </span>
              <br />
              <span className="text-gray-900">& Maintenance Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Comprehensive maintenance contracts and break-fix services for laptops, iPhones, iPads, watches, 
              and all office equipment that have reached out of warranty.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button 
                onClick={() => {
                  setSelectedPlan('Business Pro');
                  setShowQuoteModal(true);
                }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>View Maintenance Plans</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => {
                  setSelectedPlan('Break-Fix');
                  setShowQuoteModal(true);
                }}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-orange-600 rounded-xl font-semibold border border-white/30 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300"
              >
                Break-Fix Services
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/10 mb-4 mx-auto">
                  <div className="text-orange-600">{stat.icon}</div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">Business Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer two primary service models to keep your end-user devices running efficiently and cost-effectively.
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
                      <li key={idx} className="flex items-start space-x-3 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => {
                      setSelectedPlan(service.title);
                      setShowQuoteModal(true);
                    }}
                    className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Devices We <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">Support</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain and repair all major brands and device types for end-user computing.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {devices.map((device, index) => (
              <div 
                key={index}
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-card rounded-2xl p-6 text-center hover-lift group">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/10 mb-4 mx-auto group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-all">
                    <div className="text-orange-600">{device.icon}</div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{device.title}</h3>
                  <p className="text-gray-600 text-sm">{device.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Comparison */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Warranty <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">Comparison</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our maintenance contracts provide better value and coverage than standard OEM warranties.
            </p>
          </div>
          
          {/* Chart Visualization */}
          <div className="glass-card rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Feature Comparison Score</h3>
              <p className="text-gray-600">Visual comparison of key service features</p>
            </div>
            
            <div className="grid grid-cols-6 gap-4 mb-8">
              {chartData?.labels.map((label, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm text-gray-600 mb-2">{label}</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span className="text-xs">{chartData.datasets[0].data[index]}%</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-xs">{chartData.datasets[1].data[index]}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <span className="text-sm text-gray-700">OEM Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-700">Our Maintenance</span>
              </div>
            </div>
          </div>
          
          {/* Comparison Table */}
          <div className="glass-card rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-orange-500 to-orange-600">
                  <th className="text-left p-4 text-white font-semibold">Feature</th>
                  <th className="text-left p-4 text-white font-semibold">OEM Warranty (Standard)</th>
                  <th className="text-left p-4 text-white font-semibold">Our Maintenance Contract</th>
                </tr>
              </thead>
              <tbody>
                {warrantyComparison.map((row, index) => (
                  <tr 
                    key={index} 
                    className={index % 2 === 0 ? 'bg-white' : 'bg-orange-50/30'}
                  >
                    <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        {row.oemCheck ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-red-500"></div>
                        )}
                        <span className={row.oemCheck ? 'text-green-600' : 'text-red-600'}>
                          {row.oem}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        {row.oursCheck ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-red-500"></div>
                        )}
                        <span className={row.oursCheck ? 'text-green-600' : 'text-red-600'}>
                          {row.ours}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Maintenance <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">Contract Plans</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect maintenance plan for your organization's end-user devices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="relative">
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="px-4 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`glass-card rounded-2xl overflow-hidden h-full hover-lift ${plan.popular ? 'ring-2 ring-orange-500 md:mt-0' : 'md:mt-8'}`}>
                  <div className={`bg-gradient-to-br ${plan.color} p-8 text-center`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-white mb-1">{plan.price}</div>
                    <div className="text-orange-100">{plan.period}</div>
                    <p className="text-orange-200 mt-2">{plan.description}</p>
                  </div>
                  
                  <div className="p-8">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          {feature.included ? (
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                              <div className="w-3 h-0.5 bg-gray-500"></div>
                            </div>
                          )}
                          <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      onClick={() => {
                        setSelectedPlan(plan.name);
                        setShowQuoteModal(true);
                      }}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-xl hover:from-orange-600 hover:to-orange-700' 
                          : 'bg-white/80 backdrop-blur-sm text-orange-600 border border-white/30 hover:bg-white'
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={showQuoteModal}
        onClose={() => setShowQuoteModal(false)}
        title="Request Custom Quote"
        selectedService={selectedPlan}
        type="euc"
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default EndUserComputing;