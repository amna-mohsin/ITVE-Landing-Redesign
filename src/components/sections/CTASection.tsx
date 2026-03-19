import { Mail, Phone, Send, ArrowRight } from 'lucide-react'

export default function CTASection() {
  const whatsappNumber = "923363666609";
  const message = encodeURIComponent("Hello! I am interested in enrolling at ITVE. Could you please provide details on the admission process and the next steps?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section id="cta" className="snap-section relative overflow-hidden py-20 flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      
      {/* Animated Orbs */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Start Your <span className="text-gradient">Skill Journey</span>
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Build Real Skills. Get Real Opportunities.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full glass px-4 py-3 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full glass px-4 py-3 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full glass px-4 py-3 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="group w-full px-8 py-4 bg-primary text-background font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:glow-primary flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:glow-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-white">Email Us</h3>
                  {/* Updated Email Link */}
                  <a 
                    href="mailto:headoffice.itve@gmail.com" 
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    headoffice.itve@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:glow-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-white">Call Us</h3>
                  {/* Updated WhatsApp/Phone Link */}
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    +92 336 3666609
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action - Linked to WhatsApp */}
            <div className="glass-strong p-6 rounded-xl mt-8">
              <h3 className="font-semibold mb-4 text-white">Ready to Apply?</h3>
              <p className="text-white/70 mb-4 text-sm">
                Start your application process today and take the first step towards your future.
              </p>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full px-6 py-3 bg-accent text-background font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:glow-accent flex items-center justify-center gap-2"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}