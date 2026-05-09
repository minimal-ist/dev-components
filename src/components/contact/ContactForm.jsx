import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function ContactForm({ defaultSubject = '' }) {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: { subject: defaultSubject }
  })

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 1000))
    console.log('Form data:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-80 text-center p-8">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
          <CheckCircle2 size={32} className="text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">Message Sent!</h3>
        <p className="text-slate-500">We'll get back to you within 24 hours.</p>
      </div>
    )
  }

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-sm transition-all'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Name *</label>
          <input {...register('name', { required: 'Name is required' })} placeholder="Your full name" className={inputClass} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Company</label>
          <input {...register('company')} placeholder="Your company name" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Email *</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' }
            })}
            type="email"
            placeholder="you@company.com"
            className={inputClass}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Phone</label>
          <input {...register('phone')} type="tel" placeholder="+91 XXXXX XXXXX" className={inputClass} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Subject *</label>
        <select {...register('subject', { required: 'Please select a subject' })} className={`${inputClass} bg-white`}>
          <option value="">Select a subject…</option>
          <option value="product-inquiry">Product Inquiry</option>
          <option value="quote-request">Quote Request</option>
          <option value="technical-support">Technical Support</option>
          <option value="general">General Enquiry</option>
          <option value="export">Export / International</option>
        </select>
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Message *</label>
        <textarea
          {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'Please provide more detail (min 20 chars)' } })}
          rows={5}
          placeholder="Describe your requirements, quantities, material grade, or any questions…"
          className={`${inputClass} resize-none`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark disabled:bg-accent-light text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-accent/25 text-base"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>Send Message <Send size={16} /></>
        )}
      </button>
    </form>
  )
}
