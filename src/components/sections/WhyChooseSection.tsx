import { CheckCircle, BookOpen, Users, Award, Briefcase, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: BookOpen,
    title: 'Industry-Aligned Curriculum',
    description: 'Our courses are designed in collaboration with industry leaders to ensure relevance.',
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from professionals with years of real-world experience in their fields.',
  },
  {
    icon: Award,
    title: 'Certified Programs',
    description: 'Receive recognized certifications that enhance your career prospects.',
  },
  {
    icon: Briefcase,
    title: 'Career Support',
    description: 'Get assistance with job placement, resume building, and interview preparation.',
  },
  {
    icon: Globe,
    title: 'Global Recognition',
    description: 'Our qualifications are recognized by employers worldwide.',
  },
  {
    icon: CheckCircle,
    title: 'Hands-On Learning',
    description: 'Practical projects and workshops ensure you gain real-world skills.',
  },
]

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="snap-section relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">ITVE</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Discover what makes us the preferred choice for technical and vocational education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={cn(
                  'glass p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:glow-primary group animate-fade-in-up'
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 p-3 bg-primary/20 rounded-lg w-fit group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional CTA */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="glass-strong p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-white/80 mb-6">
              Join thousands of successful graduates who have transformed their careers with ITVE.
            </p>
            <button className="px-8 py-4 bg-primary text-background font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:glow-primary">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

