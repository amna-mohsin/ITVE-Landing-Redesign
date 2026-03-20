import { Mail, Phone, Facebook, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1AmycWKhha/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/itve-pakistan/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/itve.official?igsh=YTY5ZGxqNWczZGM5', label: 'Instagram' },
  ]

  // WhatsApp configuration
  const whatsappNumber = "923363666609";
  const whatsappMsg = encodeURIComponent("Hello ITVE! I have a question regarding your technical programs.");

  return (
    <footer className="bg-background-light border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">ITVE</h3>
            <p className="text-white/70 text-sm">
              Affordable, job-oriented technical and vocational education that builds real skills and real career opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-white/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-white/70 hover:text-primary transition-colors">Programs</a></li>
              <li><a href="#why-choose" className="text-white/70 hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#cta" className="text-white/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {/* Updated Email Link */}
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                             <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=headoffice.itve@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    headoffice.itve@gmail.com
                  </a>
              </li>
              {/* Updated WhatsApp Link */}
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  +92 336 3666609
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/70 hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-lg"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs sm:text-sm text-white/60">
          <p className="max-w-xl mx-auto px-4 leading-relaxed">
            © {currentYear} Institute of Technical & Vocational Education (ITVE). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
