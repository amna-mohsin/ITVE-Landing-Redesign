import { ArrowRight, Play } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="hero" className="snap-section relative overflow-hidden flex items-center justify-center pt-32 md:pt-36 pb-16">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.1),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.1),transparent_25%)]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient animate-fade-in">Institutes of</span>
            <br />
            <span className="text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Technical & Vocational
            </span>
            <br />
            <span className="text-gradient animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Education
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Empowering the next generation with practical skills and technical expertise
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <button className="group relative px-8 py-4 bg-primary text-background font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:glow-primary">
              <span className="relative z-10 flex items-center gap-2">
                Explore Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <button className="group glass px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/10 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Video
            </button>

            <a
              href="#portal"
              className="group px-8 py-4 border border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:border-primary/80 hover:text-primary flex items-center gap-2"
            >
              Student Portal
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '1s' }}>
          {[
            { label: 'Placement Rate', value: '95%' },
            { label: 'Industry Partners', value: '500+' },
            { label: 'Active Learners', value: '10k+' },
            { label: 'Programs', value: '50+' },
          ].map((item) => (
            <div key={item.label} className="glass rounded-xl px-4 py-3 border border-white/10">
              <div className="text-sm text-white/60">{item.label}</div>
              <div className="text-2xl font-semibold text-white">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

