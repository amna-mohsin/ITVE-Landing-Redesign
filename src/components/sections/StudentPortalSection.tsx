import { ShieldCheck, Clock, CalendarCheck, Laptop, Bell, FileText, LogIn } from 'lucide-react'

const portalFeatures = [
  {
    icon: ShieldCheck,
    title: 'Secure Access',
    description: 'Secure login with multi-factor authentication support.',
  },
  {
    icon: CalendarCheck,
    title: 'Schedule & Attendance',
    description: 'Real-time timetable and attendance tracking.',
  },
  {
    icon: Laptop,
    title: 'Course Materials',
    description: 'Access assignments, labs, and course resources anytime.',
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Instant alerts for deadlines and important updates.',
  },
  {
    icon: FileText,
    title: 'Progress Tracking',
    description: 'Monitor your learning progress and achievements.',
  },
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Cloud-hosted, mobile-friendly platform available anytime.',
  },
]

export default function StudentPortalSection() {
  return (
    <section
      id="portal"
      className="snap-section relative overflow-hidden py-20 flex items-center"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute -left-24 top-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-float" />
      <div className="absolute -right-16 bottom-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <p className="uppercase tracking-[0.3em] text-white/60 text-sm">
              Learning Platform
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              ITVE <span className="text-gradient">Student Platform</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              A centralized digital platform designed to manage learning, communication, and progress.
            </p>
            <div className="space-y-3">
              <p className="text-white/70 text-base">Features include:</p>
              <ul className="space-y-2 text-white/70 text-base">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Course access & materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Attendance & scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Student-teacher communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Progress tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Community interaction</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/student-portal"
                className="group px-8 py-4 bg-primary text-background font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:glow-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Open Portal
                <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/student-portal"
                className="group px-8 py-4 glass text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/10 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Student Login
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            {portalFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="glass p-5 rounded-xl border border-white/10 hover:border-primary/60 transition-all duration-300 hover:scale-105 hover:glow-primary"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

