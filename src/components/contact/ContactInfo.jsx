import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { contact } from '../../data/company'

const iconCardClass = 'flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 hover:border-accent/30 hover:shadow-md transition-all group'
const iconWrapClass = 'w-11 h-11 rounded-xl bg-accent-muted group-hover:bg-accent flex items-center justify-center shrink-0 transition-colors'
const iconClass = 'text-accent group-hover:text-white transition-colors'

export default function ContactInfo() {
  return (
    <div className="space-y-5">
      <a href={`tel:${contact.phone}`} className={iconCardClass}>
        <div className={iconWrapClass}>
          <Phone size={18} className={iconClass} />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Phone</div>
          <div className="text-primary font-semibold">{contact.phone}</div>
        </div>
      </a>

      <a href={`mailto:${contact.email}`} className={iconCardClass}>
        <div className={iconWrapClass}>
          <Mail size={18} className={iconClass} />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Email</div>
          <div className="text-primary font-semibold">{contact.email}</div>
        </div>
      </a>

      <a
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 hover:border-green-200 hover:shadow-md transition-all group"
      >
        <div className="w-11 h-11 rounded-xl bg-green-50 group-hover:bg-green-500 flex items-center justify-center shrink-0 transition-colors">
          <MessageCircle size={18} className="text-green-500 group-hover:text-white transition-colors" />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">WhatsApp</div>
          <div className="text-primary font-semibold">{contact.phone}</div>
        </div>
      </a>

      {[contact.addresses.main, contact.addresses.registered].map((addr, i) => (
        <div key={i} className={iconCardClass}>
          <div className={iconWrapClass}>
            <MapPin size={18} className={iconClass} />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{addr.label}</div>
            <p className="text-primary text-sm leading-relaxed">
              {addr.street},<br />{addr.area},<br />{addr.city}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
