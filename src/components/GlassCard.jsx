const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <div className={`relative ${hover ? 'hover-lift' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className={`relative glass-card rounded-2xl p-8 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default GlassCard;