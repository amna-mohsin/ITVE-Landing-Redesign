import { Target, Users, Award, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const stats = [
  { icon: Users, value: 'Founded', label: '2013' },
  { icon: Award, value: '500+', label: 'Student Alumni' },
  { icon: TrendingUp, value: '13', label: 'Years of Experience' },
  { icon: Target, value: 'Affordable', label: 'Job-Oriented Education' },
]

export default function AboutSection() {
  return (
    <section id="about" className="snap-section relative overflow-hidden py-20 flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">ITVE</span>
            </h2>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              ITVE is a modern technical and vocational training institute focused on delivering affordable, job-oriented education.
            </p>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Our mission is to bridge the gap between education and employment by providing practical, market-driven skills that lead to real career opportunities.
            </p>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              We believe quality education should be accessible, affordable, and aligned with industry needs, enabling students to become financially independent through skills.
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className={cn(
                    'glass p-4 sm:p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:glow-primary animate-scale-in',
                    'flex flex-col items-center text-center min-w-0'
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-primary/20 rounded-lg">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 break-words">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/70 leading-snug">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

