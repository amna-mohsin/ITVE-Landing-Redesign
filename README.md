# ITVE Landing Page

A modern, responsive redesign of the ITVE (Institute of Technical & Vocational Education) landing page featuring scroll-snap pagination with dot navigation indicators, professional animations, and a beautiful glass morphism design.

![ITVE Landing Page](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-38B2AC?logo=tailwind-css)

---

- [Project Overview](#-project-overview)
- [Tech Stack](#-tech-stack)
- [Design Decisions](#-design-decisions)
- [Installation & Setup](#-installation--setup)
- [Project Structure](#-project-structure)
- [Key Features](#-key-features)
- [Component Details](#-component-details)
- [Performance Optimizations](#-performance-optimizations)
- [Development](#-development)
- [Browser Support](#-browser-support)
- [Customization](#-customization)
- [License](#-license)
- [Contributing](#-contributing)
- [Contact](#-contact)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Project Overview

This project is a modern, professional landing page for the Institutes of Technical & Vocational Education (ITVE). It features:

- **6 Scroll-snap sections + footer** (Hero, About, Programs, Student Portal, Why Choose, Contact)
- **Dot pagination** with labels on hover, footer dot, and top/bottom jump buttons
- **Responsive design** optimized for mobile, tablet, and desktop
- **Professional animations** including floating gradient orbs, glass morphism effects, and micro-interactions
- **SEO optimized** with meta tags, Open Graph, and JSON-LD schema
- **Accessible navigation** with ARIA labels and keyboard support

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | Component-based UI framework | 18.2.0 |
| **TypeScript** | Type-safe JavaScript | 5.2.2 |
| **Vite** | Fast build tool & dev server | 5.0.8 |
| **Tailwind CSS** | Utility-first CSS framework | 3.3.6 |
| **Lucide React** | Modern icon library | 0.294.0 |
| **Plus Jakarta Sans** | Typography (Google Fonts) | - |

---

## 🎨 Design Decisions

### Color Palette

- **Primary:** Cyan/Teal (`hsl(183, 100%, 42%)`) — Represents innovation and technology
- **Accent:** Amber/Gold (`hsl(38, 95%, 55%)`) — Symbolizes achievement and warmth
- **Background:** Deep Navy (`hsl(222, 47%, 6%)`) — Conveys trust and professionalism

### Typography

**Plus Jakarta Sans** — A modern, geometric sans-serif font that's highly readable and professional. Perfect for educational institutions.

### Visual Effects

- **Glass Morphism:** Cards with backdrop blur and semi-transparent backgrounds
- **Animated Floating Orbs:** Gradient orbs that float across sections for visual interest
- **Grid Pattern Overlay:** Subtle grid pattern for texture
- **Glow Effects:** Interactive elements glow on hover
- **Smooth Animations:** Fade-in, slide-in, and scale animations for content reveal

---

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation Steps

```bash
# Clone the repository
git clone <repository-url>
cd ITVE

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

---

## 📁 Project Structure

```
ITVE/
├── public/
│   ├── index.html          # HTML template with SEO meta tags
│   └── Assets/
│       └── icon.png        # Official ITVE crest used as favicon & navbar logo
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Fixed navigation bar
│   │   ├── Footer.tsx      # Site footer with contact info
│   │   ├── PaginationDots.tsx  # Dot navigation component
│   │   └── sections/
│   │       ├── HeroSection.tsx      # Hero/landing section
│   │       ├── AboutSection.tsx     # About ITVE section
│   │       ├── ProgramsSection.tsx  # Programs showcase
│   │       ├── WhyChooseSection.tsx # Features/benefits
│   │       └── CTASection.tsx       # Contact form & CTA
│   ├── lib/
│   │   └── utils.ts        # Utility functions (cn helper)
│   ├── App.tsx             # Main app component with scroll logic
│   ├── main.tsx            # React entry point
│   └── index.css           # Global styles & Tailwind directives
├── package.json
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md
```

---

## 🎯 Key Features

### 1. Scroll-Snap Pagination

The page uses CSS scroll-snap on the root and each section for smooth, section-by-section navigation:

```css
html {
  scroll-snap-type: y mandatory;
}

.snap-section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  min-height: 100vh;
}
```

**How it works:**
- The document root uses `scroll-snap-type: y mandatory` for vertical snapping
- Each `.snap-section` uses `scroll-snap-align: start` to snap to the top
- Scroll position is tracked via `useEffect` to detect the active section
- Dot navigation on the right allows click-to-navigate
- Active section is highlighted with a glowing dot indicator

### 2. Dot Navigation

- Fixed on the right side; visible on mobile/tablet/desktop
- Up/down buttons for quick jump to top/bottom
- Shows section labels on hover (hidden on very small screens)
- Active section has a glowing, animated dot
- Smooth scroll animation when clicked
- Fully accessible with ARIA labels

### 3. Professional Animations

**Floating Orbs:**
- Multiple gradient orbs with different animation delays
- Creates depth and visual interest
- Uses CSS keyframe animations

**Glass Morphism:**
- Cards with backdrop blur effects
- Semi-transparent backgrounds
- Border highlights on hover

**Micro-interactions:**
- Button hover effects with scale and glow
- Icon animations on hover
- Staggered fade-in animations for content
- Smooth transitions throughout

### 4. Responsive Design

- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`
- Mobile menu for navigation
- Optimized layouts for all screen sizes

### 5. SEO Optimization

- Meta tags for description, keywords, and author
- Open Graph tags for social media sharing
- Twitter Card support
- JSON-LD structured data
- Semantic HTML structure

---

## 🎨 Component Details

### Header Component

- Fixed position navigation bar with official ITVE crest logo (`public/Assets/icon.png`)
- Transparent background that becomes glass on scroll
- Mobile hamburger menu
- Smooth scroll to sections; brand text always visible (responsive sizing)

### Hero Section

- Large, gradient text with animations
- Call-to-action buttons
- Animated background orbs
- Scroll indicator

### About Section

- Two-column layout
- Statistics cards with icons
- Glass morphism cards
- Hover effects
- Responsive stat cards with wrapped numbers on very small widths

### Programs Section

- Grid layout of program cards
- Icon-based visual hierarchy
- Hover animations and glass morphism cards
- Color-coded by program type
- Primary **“View Course”** CTA button on each program card

### Why Choose Section

- Feature grid with icons
- Highlighted benefits
- Additional CTA section
- Animated background elements

### Student Portal Section

- Dedicated panel describing a modern student portal (SSO, schedule, workspace, notifications, transcripts)
- Dual CTA (Open Portal / Student Login) with responsive grid of portal features

### CTA Section

- Contact form
- Contact information cards
- Quick action buttons
- Gradient background

### Footer

- Multi-column layout
- Social media links
- Contact information
- Quick links
- Included as the last dot in pagination with custom `footer-section` height so content stays visible

---

## 🚀 Performance Optimizations

- **Code Splitting:** Vite automatically splits code for optimal loading
- **Tree Shaking:** Unused code is removed in production builds
- **Image Optimization:** Use WebP format for images when possible
- **Font Loading:** Google Fonts loaded with preconnect
- **CSS Optimization:** Tailwind purges unused styles in production

---

## 🧪 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Code Style

- TypeScript strict mode enabled
- ESLint configured for React and TypeScript
- Consistent component structure
- Utility-first CSS with Tailwind

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔧 Customization

### Changing Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    DEFAULT: 'hsl(183, 100%, 42%)',
    // ... other shades
  },
  accent: {
    DEFAULT: 'hsl(38, 95%, 55%)',
    // ... other shades
  },
}
```

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add it to the `sections` array in `App.tsx`
3. Update the `sections` array in `PaginationDots`
4. Add navigation link in `Header.tsx`

### Modifying Animations

Edit `tailwind.config.js` keyframes and animations, or add custom CSS in `index.css`.

---

## 📄 License

MIT License (see `LICENSE` in the repo).

---

## 👥 Contributing

Personal project. Feel free to open issues/PRs if you spot bugs or want to improve it.

---

## 📞 Contact

- **Email:** info@itve.edu
- **Phone:** +1 (234) 567-890
- **Address:** 123 Education Street, Tech City, TC 12345

---

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) for typography

---

**Built with ❤️ for ITVE**
