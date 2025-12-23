import { cn } from '@/lib/utils'
import { ArrowUp, ArrowDown } from 'lucide-react'

interface Section {
  id: string
  label: string
}

interface PaginationDotsProps {
  sections: Section[]
  activeSection: number
  onDotClick: (index: number) => void
  onScrollTop?: () => void
  onScrollBottom?: () => void
}

export default function PaginationDots({
  sections,
  activeSection,
  onDotClick,
  onScrollTop,
  onScrollBottom,
}: PaginationDotsProps) {
  return (
    <div className="fixed right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2.5 sm:gap-3 md:gap-4 items-center pointer-events-none">
      <button
        onClick={() => (onScrollTop ? onScrollTop() : onDotClick(0))}
        className="p-2 rounded-full border border-white/20 text-white/80 hover:text-primary hover:border-primary/60 transition-all bg-white/5 pointer-events-auto"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {sections.map((section, index) => (
        <div key={section.id} className="relative group pointer-events-auto">
          <button
            onClick={() => onDotClick(index)}
            className={cn(
              'relative w-3 h-3 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 rounded-full transition-all duration-300',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
              index === activeSection
                ? 'bg-primary scale-110 md:scale-125 glow-primary'
                : 'bg-white/30 hover:bg-white/50 hover:scale-110'
            )}
            aria-label={`Navigate to ${section.label} section`}
            title={section.label}
          >
            {index === activeSection && (
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
            )}
          </button>
          
          {/* Label on hover (hidden on very small screens to avoid overlap) */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden md:block">
            <div className="glass px-3 py-1.5 rounded-lg whitespace-nowrap">
              <span className="text-xs font-medium text-white">{section.label}</span>
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-white/10"></div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() => (onScrollBottom ? onScrollBottom() : onDotClick(sections.length - 1))}
        className="p-2 rounded-full border border-white/20 text-white/80 hover:text-primary hover:border-primary/60 transition-all bg-white/5 pointer-events-auto"
        aria-label="Scroll to bottom"
      >
        <ArrowDown className="w-4 h-4" />
      </button>
    </div>
  )
}

