import { Code, Wrench, Briefcase, Brain, Palette, Globe, Lock, Sparkles, Award, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const programs = [
  {
    icon: Code,
    title: 'Business Analysis',
    description: 'Master business analysis, data interpretation, and strategic problem-solving for enterprise solutions.',
    color: 'primary',
    locked: false,
    employability: 'High job demand',
  },
  {
    icon: Briefcase,
    title: 'Sales Engineering',
    description: 'Develop expertise in pre-sales technical support, solution architecture, and client relationship management.',
    color: 'accent',
    locked: false,
    employability: 'High job demand',
  },
  {
    icon: Wrench,
    title: 'Software Project Management',
    description: 'Learn project management methodologies, agile practices, and team leadership for software delivery.',
    color: 'primary',
    locked: false,
    employability: 'High job demand',
  },
  {
    icon: Brain,
    title: 'AI Engineering',
    description: 'Master artificial intelligence, machine learning, and advanced data science applications.',
    color: 'accent',
    locked: true,
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Learn full-stack development, coding best practices, and modern software architectures.',
    color: 'primary',
    locked: true,
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Create user-centered design solutions with modern tools and design principles.',
    color: 'accent',
    locked: true,
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Build dynamic web applications using cutting-edge frameworks and technologies.',
    color: 'primary',
    locked: true,
  },
]

export default function ProgramsSection() {
  const whatsappNumber = "923363666609";

  return (
    <section id="programs" className="snap-section relative overflow-hidden py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-6 border border-white/10">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white/80">Industry-Ready Programs</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gradient relative">Programs</span>
          </h2>
          
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive technical and vocational programs designed to meet industry demands 
            and guarantee student employability
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            // Generate dynamic WhatsApp message per course
            const encodedMsg = encodeURIComponent(`Hello ITVE! I am interested in applying for the ${program.title} program. Could you please share the details?`);
            const waLink = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;

            return (
              <div
                key={program.title}
                className={cn(
                  'group relative rounded-xl transition-all duration-500 animate-fade-in-up flex flex-col',
                  program.locked ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-2'
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={cn(
                  'relative h-full glass p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between',
                  program.locked
                    ? 'border-white/5'
                    : program.color === 'primary'
                      ? 'border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10'
                      : 'border-accent/20 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10'
                )}>
                  <div>
                    {/* Icon section */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="relative">
                        <div className={cn(
                          'p-3 rounded-xl transition-all duration-300',
                          program.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                        )}>
                          <Icon className={cn('w-6 h-6', program.color === 'primary' ? 'text-primary' : 'text-accent')} />
                        </div>
                        {program.locked ? (
                          <div className="absolute -top-2 -right-2 p-1.5 bg-white/10 rounded-full border border-white/20">
                            <Lock className="w-3 h-3 text-white/60" />
                          </div>
                        ) : (
                          <div className="absolute -top-2 -right-2">
                            <div className="relative">
                              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
                              <div className="relative p-1.5 bg-green-500/20 rounded-full border border-green-500/30">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="mb-4">
                      <h3 className="text-lg font-bold mb-2 text-white">{program.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-4">
                        {program.description}
                      </p>
                      {program.employability && (
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary/80 rounded-full flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            {program.employability}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer / Button */}
                  <div className="mt-auto pt-4">
                    {program.locked ? (
                      <div className="relative overflow-hidden p-3 bg-white/5 rounded-lg text-center border border-white/10">
                        <p className="text-sm font-medium text-white/40">Coming Soon</p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shimmer" />
                      </div>
                    ) : (
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'w-full flex items-center justify-between gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-300 relative overflow-hidden group/btn',
                          program.color === 'primary'
                            ? 'bg-primary text-background hover:shadow-lg hover:shadow-primary/25'
                            : 'bg-accent text-background hover:shadow-lg hover:shadow-accent/25'
                        )}
                      >
                        <span className="relative z-10">Enroll Now</span>
                        <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @keyframes shimmer { 100% { transform: translateX(100%); } }
        .shimmer { animation: shimmer 2s infinite; }
      `}</style>
    </section>
  )
}