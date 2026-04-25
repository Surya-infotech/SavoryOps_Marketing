export default function AppIcon({ children, tone = 'primary', className = '' }) {
  const toneClasses = {
    primary: 'bg-primary-50 text-primary-600',
    slate: 'bg-slate-100 text-slate-600',
    success: 'bg-emerald-100 text-emerald-700'
  };

  return (
    <span
      className={`app-icon inline-flex items-center justify-center rounded-xl ${toneClasses[tone] || toneClasses.primary} ${className}`.trim()}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}
