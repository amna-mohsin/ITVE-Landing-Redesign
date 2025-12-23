import { Code, Wrench, Palette, Briefcase, Microscope, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'

const programs = [
  {
    icon: Code,
    title: 'Information Technology',
    description: 'Master programming, web development, and software engineering with hands-on projects.',
    color: 'primary',
  },
  {
    icon: Wrench,
    title: 'Mechanical Engineering',
    description: 'Learn mechanical design, manufacturing, and automation technologies.',
    color: 'accent',
  },
  {
    icon: Palette,
    title: 'Digital Design',
    description: 'Create stunning visuals with graphic design, UI/UX, and multimedia production.',
    color: 'primary',
  },
  {
    icon: Briefcase,
    title: 'Business Management',
    description: 'Develop leadership skills and business acumen for modern enterprises.',
    color: 'accent',
  },
  {
    icon: Microscope,
    title: 'Applied Sciences',
    description: 'Explore biotechnology, chemistry, and laboratory techniques.',
    color: 'primary',
  },
  {
    icon: Zap,
    title: 'Electrical Engineering',
    description: 'Master electrical systems, power distribution, and renewable energy.',
    color: 'accent',
  },
]

export default function ProgramsSection() {
  return (
    <section id="programs" className="snap-section relative overflow-hidden py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Programs</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Comprehensive technical and vocational programs designed to meet industry demands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <div
                key={program.title}
                className={cn(
                  'glass p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:glow-primary group cursor-pointer animate-fade-in-up border border-white/5',
                  program.color === 'primary' ? 'hover:border-primary' : 'hover:border-accent'
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={cn(
                      'mb-4 p-3 rounded-lg w-fit transition-all duration-300',
                      program.color === 'primary'
                        ? 'bg-primary/20 group-hover:bg-primary/30'
                        : 'bg-accent/20 group-hover:bg-accent/30'
                    )}
                  >
                    <Icon
                      className={cn(
                        'w-8 h-8 transition-colors',
                        program.color === 'primary' ? 'text-primary' : 'text-accent'
                      )}
                    />
                  </div>
                  <button
                    className={cn(
                      'text-xs px-3 py-1 rounded-full border transition-colors',
                      program.color === 'primary'
                        ? 'border-primary/40 text-primary hover:bg-primary/10'
                        : 'border-accent/40 text-accent hover:bg-accent/10'
                    )}
                  >
                    High Demand
                  </button>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient transition-colors">
                  {program.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {program.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-sm font-medium text-white/60 flex items-center gap-2">
                    <span className={program.color === 'primary' ? 'text-primary' : 'text-accent'}>
                      Career-ready curriculum
                    </span>
                  </div>
                  <button
                    className={cn(
                      'flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300',
                      program.color === 'primary'
                        ? 'bg-primary text-background hover:scale-105 hover:glow-primary'
                        : 'bg-accent text-background hover:scale-105 hover:glow-accent'
                    )}
                  >
                    View Course
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

