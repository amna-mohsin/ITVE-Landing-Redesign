import { ArrowLeft, Clock } from 'lucide-react'

export default function StudentPortal() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center min-h-screen pt-20 pb-16">
   <div className="absolute top-0 left-0 right-0 p-6 z-20 container mx-auto">
  <a href="/" className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-bold animate-fade-in">
    <img
      src="/Assets/icon.png"
      alt="ITVE"
      className="h-10 w-10 rounded-full border border-white/10 shadow-lg"
    />
    <span className="text-white tracking-wide text-sm sm:text-base md:text-lg">
      ITVE <span className="opacity-70 font-light">|</span> Student Portal
    </span>
  </a>
</div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.1),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.1),transparent_25%)]" />
      </div>

      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 border border-primary/40">
            <Clock className="w-10 h-10 text-primary animate-bounce" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">We're Working On It</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12">
            The portal is currently under maintenance. We'll be live soon!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/"
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-background font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:glow-primary"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Official Website
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}