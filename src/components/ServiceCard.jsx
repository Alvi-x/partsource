import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, features, gradient, link }) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
      
      <div className="relative glass-card rounded-2xl p-8 hover-lift h-full">
        <div className={`flex items-center justify-center w-14 h-14 rounded-xl ${gradient} mb-6`}>
          <div className="text-white text-2xl">{icon}</div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3 text-gray-700">
              <div className="w-2 h-2 rounded-full bg-primary-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link
          to={link}
          className="inline-flex items-center space-x-2 text-primary-600 font-semibold group/link"
        >
          <span>Learn More</span>
          <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center group-hover/link:bg-primary-100 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;