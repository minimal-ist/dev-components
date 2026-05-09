export default function Badge({ children, variant = 'orange', className = '' }) {
  const styles = {
    orange: 'bg-accent/10 text-accent border border-accent/20',
    navy:   'bg-primary/10 text-primary border border-primary/20',
    gray:   'bg-slate-100 text-slate-600 border border-slate-200',
  }
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${styles[variant]} ${className}`}>
      {children}
    </span>
  )
}
