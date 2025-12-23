import { Target, Users, Award, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const stats = [
  { icon: Users, value: '10,000+', label: 'Students Enrolled' },
  { icon: Award, value: '95%', label: 'Success Rate' },
  { icon: TrendingUp, value: '500+', label: 'Industry Partners' },
  { icon: Target, value: '50+', label: 'Programs Offered' },
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
              The Institutes of Technical & Vocational Education (ITVE) is a premier institution
              dedicated to providing world-class technical and vocational training. We bridge the gap
              between education and industry, ensuring our students are job-ready from day one.
            </p>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              With state-of-the-art facilities, experienced instructors, and industry-aligned curricula,
              we prepare students for successful careers in various technical fields.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="glass px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-white/70">Years of Excellence</div>
              </div>
              <div className="glass px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-white/70">Countries Served</div>
              </div>
            </div>
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

