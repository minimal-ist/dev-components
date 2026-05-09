import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'
import AnimatedSection from '../components/shared/AnimatedSection'

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const defaultSubject = searchParams.get('subject') || ''

  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Send us your requirements and we'll respond with a quote or technical consultation within 24 hours."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <AnimatedSection direction="left" className="lg:col-span-2">
              <h2 className="text-2xl font-black text-primary mb-2">Contact Details</h2>
              <p className="text-slate-500 text-sm mb-8">Reach us via phone, email, or WhatsApp. We're available Mon–Sat, 9am–6pm IST.</p>
              <ContactInfo />
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2} className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-black text-primary mb-2">Send a Message</h2>
                <p className="text-slate-500 text-sm mb-8">Fill in the form and we'll get back to you promptly.</p>
                <ContactForm defaultSubject={defaultSubject} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="h-96">
        <iframe
          title="Dev Components Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3!2d77.45!3d12.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzQ4LjAiTiA3N8KwMjcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
