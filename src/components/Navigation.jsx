import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Shield,
  Camera,
  Cpu,
  Lock,
  MonitorSmartphone,
  Wrench,
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: <Shield className="w-4 h-4" /> },
    {
      path: "/services",
      label: "Services",
      icon: <Wrench className="w-4 h-4" />,
    },
    { path: "/cctv", label: "CCTV", icon: <Camera className="w-4 h-4" /> },
    {
      path: "/cybersecurity",
      label: "Cybersecurity",
      icon: <Lock className="w-4 h-4" />,
    },
    {
      path: "/device-repairs",
      label: "Device Repairs",
      icon: <Cpu className="w-4 h-4" />,
    },
    {
      path: "/end-user-computing",
      label: "End-User Computing",
      icon: <MonitorSmartphone className="w-4 h-4" />,
    },
    {
      path: "/contact",
      label: "Contact",
      icon: <Shield className="w-4 h-4" />,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/30 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="PartSource Logo"
              className="w-12 h-12 rounded-lg object-cover shadow-lg"
            />
            {/* <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                PartSource
              </h1>
              <p className="text-xs text-gray-500">Repair Solutions</p>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-primary-50 text-primary-600 font-medium shadow-sm"
                      : "text-gray-700 hover:bg-white/50 hover:text-primary-600"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <button className="ml-4 px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 shadow-md hover:shadow-lg transition-all duration-300">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-white/50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="glass-card rounded-xl p-4 mt-2 mb-4 shadow-xl">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg my-1 transition-colors ${
                      isActive
                        ? "bg-primary-50 text-primary-600 font-medium"
                        : "text-gray-700 hover:bg-white/50"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 shadow-md transition-all duration-300">
                Get Free Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
