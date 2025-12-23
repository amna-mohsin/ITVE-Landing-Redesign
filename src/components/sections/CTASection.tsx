import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react'

export default function CTASection() {
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
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <form className="space-y-6">
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
                  <a href="mailto:info@itve.edu" className="text-white/70 hover:text-primary transition-colors">
                    info@itve.edu
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
                  <a href="tel:+1234567890" className="text-white/70 hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:glow-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-white">Visit Us</h3>
                  <p className="text-white/70">
                    123 Education Street<br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="glass-strong p-6 rounded-xl mt-8">
              <h3 className="font-semibold mb-4 text-white">Ready to Apply?</h3>
              <p className="text-white/70 mb-4 text-sm">
                Start your application process today and take the first step towards your future.
              </p>
              <button className="group w-full px-6 py-3 bg-accent text-background font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:glow-accent flex items-center justify-center gap-2">
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

