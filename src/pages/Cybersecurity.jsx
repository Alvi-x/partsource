import { useState, useEffect, useRef } from 'react';
import GlassCard from '../components/GlassCard';
import ConsultationModal from '../components/ConsultationModal';
import {
  Shield,
  Lock,
  AlertTriangle,
  ShieldCheck,
  Network,
  Users,
  DoorClosed,
  Laptop,
  UserCheck,
  Building2,
  Camera,
  Zap,
  Clock,
  Search,
  ClipboardCheck,
  BarChart,
  Wrench,
  ChevronRight
} from 'lucide-react';


const Cybersecurity = () => {
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [selectedTraining, setSelectedTraining] = useState('');
  const [formData, setFormData] = useState({
    organization: '',
    contactPerson: '',
    email: '',
    phone: '',
    employeeCount: '',
    interest: '',
    message: ''
  });

  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in', 'opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.observe-element').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const securityFeatures = [
    {
      icon: <DoorClosed className="w-8 h-8" />,
      title: 'Access Control Systems',
      description: 'Secure physical access to sensitive areas and equipment',
      features: [
        'Electronic keycard systems',
        'Biometric access controls',
        'Visitor management systems',
        'Secure server room access',
        'Time-based access restrictions'
      ]
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: 'Device & Hardware Security',
      description: 'Protect physical devices from theft and unauthorized access',
      features: [
        'Laptop and device locking systems',
        'Secure storage for mobile devices',
        'Cable locks for workstations',
        'Hardware encryption solutions',
        'Secure disposal of old equipment'
      ]
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'Employee Awareness Training',
      description: 'Educate staff on physical security best practices',
      features: [
        'Tailgating prevention training',
        'Clean desk policy implementation',
        'Social engineering defense',
        'Secure document handling',
        'Visitor protocol training'
      ]
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Document & Data Protection',
      description: 'Secure physical documents and storage media',
      features: [
        'Secure filing and locking cabinets',
        'Shredding policies and procedures',
        'Secure USB and media storage',
        'Printer and copier security',
        'Mailroom security protocols'
      ]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Facility Security Assessment',
      description: 'Comprehensive evaluation of physical security measures',
      features: [
        'Vulnerability assessments',
        'Penetration testing (physical)',
        'Security audit and reporting',
        'Compliance gap analysis',
        'Emergency response planning'
      ]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Surveillance & Monitoring',
      description: 'Visual monitoring of sensitive areas and activities',
      features: [
        'Strategic camera placement',
        'Server room monitoring',
        'Entry/exit point surveillance',
        'Secure monitoring room setup',
        'Integration with access control'
      ]
    }
  ];

  const trainingPrograms = [
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Basic Awareness Training',
      subtitle: 'Foundational training for all employees',
      price: 'R 850',
      period: 'per employee',
      features: [
        '2-hour workshop session',
        'Physical security basics',
        'Clean desk policy training',
        'Tailgating prevention',
        'Certificate of completion'
      ],
      popular: false
    },
    {
      icon: <UserCheck className="w-10 h-10" />,
      title: 'Advanced Staff Training',
      subtitle: 'Comprehensive training for regular employees',
      price: 'R 1,450',
      period: 'per employee',
      features: [
        '4-hour intensive workshop',
        'Social engineering defense',
        'Device security protocols',
        'Document handling procedures',
        'Incident reporting training',
        'Quarterly refresher sessions'
      ],
      popular: true
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Management & Executive Training',
      subtitle: 'Strategic training for leadership teams',
      price: 'R 2,850',
      period: 'per executive',
      features: [
        'Full-day executive workshop',
        'Policy development guidance',
        'Risk assessment training',
        'Compliance requirements',
        'Security budget planning',
        'Yearly strategy sessions'
      ],
      popular: false
    }
  ];

  const threats = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Social Engineering Attacks',
      description: 'Attackers gaining physical access by impersonating employees, contractors, or service personnel.'
    },
    {
      icon: <DoorClosed className="w-6 h-6" />,
      title: 'Tailgating & Piggybacking',
      description: 'Unauthorized individuals following employees through secured doors without proper authentication.'
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: 'Device Theft',
      description: 'Stealing laptops, mobile devices, or storage media containing sensitive information.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Document Theft',
      description: 'Physical theft of printed documents, files, or records containing confidential data.'
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Workstation Access',
      description: 'Unauthorized access to unattended workstations or unlocked computers in common areas.'
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Dumpster Diving',
      description: 'Retrieving sensitive information from improperly disposed documents in trash bins.'
    }
  ];

  const assessmentSteps = [
    { icon: <Search className="w-8 h-8" />, title: 'Initial Assessment', description: 'Comprehensive review of existing physical security measures and policies.' },
    { icon: <AlertTriangle className="w-8 h-8" />, title: 'Vulnerability Identification', description: 'Identifying weaknesses in access controls, surveillance, and employee practices.' },
    { icon: <ClipboardCheck className="w-8 h-8" />, title: 'Testing & Validation', description: 'Physical penetration testing and social engineering simulations.' },
    { icon: <BarChart className="w-8 h-8" />, title: 'Reporting & Recommendations', description: 'Detailed report with prioritized recommendations and implementation roadmap.' },
    { icon: <Wrench className="w-8 h-8" />, title: 'Implementation Support', description: 'Assistance with implementing recommended security measures and controls.' }
  ];

  const stats = [
    { value: '50%+', label: 'Breaches involve physical security', icon: <Shield className="w-6 h-6" /> },
    { value: '24/7', label: 'Security monitoring available', icon: <Clock className="w-6 h-6" /> },
    { value: '99.9%', label: 'Client satisfaction rate', icon: <Zap className="w-6 h-6" /> },
    { value: '<48h', label: 'Average assessment completion', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-primary-50/30 to-blue-600/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/30 mb-6 observe-element opacity-0 translate-y-4">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Physical Cybersecurity Specialists</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 observe-element opacity-0 translate-y-4">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Cybersecurity Awareness
              </span>
              <br />
              <span className="text-gray-900">& Physical Protection</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 observe-element opacity-0 translate-y-4">
              Protect your organization from physical security threats that lead to cyber breaches. 
              Comprehensive training and assessment services to fortify your defenses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 observe-element opacity-0 translate-y-4">
              <button 
                onClick={() => setShowConsultationModal(true)}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Get Security Assessment</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-blue-600 rounded-xl font-semibold border border-white/30 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300">
                View Training Programs
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto observe-element opacity-0 translate-y-4">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="text-center p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 mb-4 mx-auto">
                  <div className="text-blue-600">{stat.icon}</div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Physical Security Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 observe-element opacity-0 translate-y-4">
              Physical Side of <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Cybersecurity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto observe-element opacity-0 translate-y-4">
              Over 50% of data breaches involve physical security failures. Protect your organization by addressing these critical vulnerabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="observe-element opacity-0 translate-y-4"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <GlassCard className="h-full hover-lift">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 mb-6">
                    <div className="text-blue-600">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-gray-700 text-sm">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 observe-element opacity-0 translate-y-4">
              Cybersecurity Awareness <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Training</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto observe-element opacity-0 translate-y-4">
              Customized training programs to educate your employees on physical security threats and prevention techniques.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <div 
                key={index} 
                className={`relative observe-element opacity-0 translate-y-4 ${program.popular ? 'md:mt-0' : 'md:mt-8'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <GlassCard className={`h-full ${program.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 mb-6 mx-auto">
                    <div className="text-blue-600">{program.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{program.title}</h3>
                  <p className="text-gray-600 text-center mb-6">{program.subtitle}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900">{program.price}</div>
                    <div className="text-gray-600">{program.period}</div>
                  </div>
                  
                  <button 
                    onClick={() => {
                      setSelectedTraining(program.title);
                      setShowConsultationModal(true);
                    }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      program.popular 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-xl hover:from-blue-600 hover:to-blue-700' 
                        : 'bg-white/80 backdrop-blur-sm text-blue-600 border border-white/30 hover:bg-white'
                    }`}
                  >
                    Enquire Now
                  </button>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Awareness */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 observe-element opacity-0 translate-y-4">
              Common <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Physical Security</span> Threats
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {threats.map((threat, index) => (
                <div 
                  key={index} 
                  className="observe-element opacity-0 translate-y-4"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <GlassCard className="border-l-4 border-blue-500">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 flex-shrink-0">
                        <div className="text-blue-600">{threat.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{threat.title}</h3>
                        <p className="text-gray-600">{threat.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
            
            <div className="observe-element opacity-0 translate-y-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <div className="relative glass-card rounded-2xl p-8">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center p-8">
                      <AlertTriangle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Physical Security Vulnerabilities</h3>
                      <p className="text-gray-600">Interactive threat analysis visualization</p>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {['Social Engineering', 'Device Theft', 'Unauthorized Access', 'Data Leakage'].map((item, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {['85%', '72%', '63%', '58%'][idx]}
                        </div>
                        <div className="text-sm text-gray-600">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 observe-element opacity-0 translate-y-4">
              Security <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Assessment</span> Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto observe-element opacity-0 translate-y-4">
              We follow a systematic approach to evaluate and improve your physical security posture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {assessmentSteps.map((step, index) => (
              <div 
                key={index} 
                className="text-center observe-element opacity-0 translate-y-4"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 mx-auto mb-4 shadow-lg">
                    <div className="text-white">{step.icon}</div>
                  </div>
                  {index < assessmentSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-3/4 w-full h-0.5 bg-gradient-to-r from-blue-500/20 to-transparent" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={showConsultationModal}
        onClose={() => setShowConsultationModal(false)}
        title="Request Security Consultation"
        selectedService={selectedTraining}
        type="cybersecurity"
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default Cybersecurity;