# Planning Guide

A comprehensive corporate showcase website for Dobeu Tech Solutions that presents their three product pillars (Dobeu Designs, Dobeu Cloud, and Consulting Services) through an elegant glassmorphic interface that embodies innovation and technical excellence.

**Experience Qualities**: 
1. **Premium** - The glassmorphic design with frosted effects creates a sense of sophistication and cutting-edge technology
2. **Transparent** - Literal transparency in the design mirrors the company's clear communication and honest approach to client relationships
3. **Fluid** - Smooth transitions and layered depth give a sense of seamless integration across their service offerings

**Complexity Level**: Light Application (multiple features with basic state)
  - Multi-section navigation with smooth scrolling, service showcase cards, and interactive elements for exploring each product pillar with detailed information panels

## Essential Features

### Hero Section with Company Overview
- **Functionality**: Full-viewport landing section displaying company logo, tagline, and animated glassmorphic cards
- **Purpose**: Create immediate visual impact and communicate brand identity
- **Trigger**: Page load
- **Progression**: Page loads → Animated gradient background appears → Logo fades in → Glassmorphic hero card slides up → CTA buttons become interactive
- **Success criteria**: Users immediately understand the company's focus and are drawn to explore the three pillars

### Three Pillars Showcase
- **Functionality**: Three distinct glassmorphic cards representing Dobeu Designs, Dobeu Cloud, and Consulting Services
- **Purpose**: Clearly segment and present the company's service offerings
- **Trigger**: Scroll into view or click navigation
- **Progression**: User scrolls/clicks → Cards animate into view → Hover reveals more details → Click expands full information in modal/panel → User can navigate between pillars
- **Success criteria**: Each service area is clearly differentiated with appropriate iconography and description, users can easily understand what each pillar offers

### Dobeu Designs Detail View
- **Functionality**: Expandable section showing graphics, web design, and digital creative services
- **Purpose**: Showcase creative capabilities and design portfolio approach
- **Trigger**: Click on Designs pillar card
- **Progression**: Click → Modal/panel slides in with backdrop blur → Service list with icons appears → Portfolio examples showcase → Contact CTA visible
- **Success criteria**: Users understand the creative services offered and see visual examples of design work

### Dobeu Cloud Detail View
- **Functionality**: Expandable section detailing developer tools, consulting, hosting, and storage solutions
- **Purpose**: Communicate technical expertise and infrastructure capabilities
- **Trigger**: Click on Cloud pillar card
- **Progression**: Click → Technical-themed panel appears → Service features list with icons → Technology stack badges → Integration examples → Contact CTA
- **Success criteria**: Developer audience immediately recognizes relevant services and technical credibility

### Consulting Services Detail View
- **Functionality**: Expandable section presenting consultation services under Tech Solutions brand
- **Purpose**: Establish advisory and strategic planning capabilities
- **Trigger**: Click on Consulting pillar card
- **Progression**: Click → Professional panel opens → Consultation areas listed → Process overview → Client success indicators → Schedule consultation CTA
- **Success criteria**: Potential clients understand consultation process and value proposition

### Contact/CTA System
- **Functionality**: Floating glassmorphic contact button and footer with contact information
- **Purpose**: Provide easy access to initiate business conversations
- **Trigger**: Scroll or direct click on contact elements
- **Progression**: User clicks contact → Form/contact panel appears with backdrop blur → User enters information → Submission confirmation
- **Success criteria**: Users can easily find and use contact methods from any section

## Edge Case Handling
- **Mobile Responsiveness**: Glassmorphic effects scale appropriately, cards stack vertically, backdrop blur maintains performance on mobile browsers
- **Browser Compatibility**: Fallback solid backgrounds for browsers not supporting backdrop-filter, graceful degradation
- **Loading States**: Skeleton glassmorphic shapes appear during content load, smooth transitions when content ready
- **Empty States**: Placeholder content in case dynamic content fails to load
- **Performance**: Optimize blur effects and transparency to prevent performance issues, lazy load images

## Design Direction

The design should evoke a sense of cutting-edge innovation, technical precision, and creative excellence through glassmorphism. It should feel premium and modern like Apple's design language, with a playful yet professional edge. The interface should be rich with subtle animations, layered depth, and colorful gradients that create visual interest without overwhelming the content.

## Color Selection

Custom palette with vibrant gradients and brand color (blue from logo)

- **Primary Color**: Deep Cyan Blue (oklch(0.55 0.15 220)) - Derived from the Dobeu logo, communicates trust, technology, and professionalism
- **Secondary Colors**: 
  - Vibrant Purple (oklch(0.60 0.20 290)) - Represents creativity and design services
  - Emerald Green (oklch(0.65 0.15 160)) - Symbolizes growth and cloud infrastructure
  - Coral Orange (oklch(0.70 0.15 40)) - Adds warmth and energy to consulting services
- **Accent Color**: Electric Cyan (oklch(0.75 0.18 210)) - For CTAs, hover states, and important interactive elements
- **Foreground/Background Pairings**:
  - Background (Gradient base): Multi-color gradient oklch(0.20 0.08 250) to oklch(0.30 0.10 280) - Dark base with subtle purple-blue shift
  - Foreground on background: White (oklch(0.98 0 0)) - Ratio 14.2:1 ✓
  - Glass Cards (Semi-transparent white): oklch(1 0 0 / 0.1) with backdrop-blur - White text (oklch(0.98 0 0)) on glass - Ratio varies with background but enhanced by blur
  - Primary buttons (Deep Cyan): White text (oklch(0.98 0 0)) - Ratio 5.8:1 ✓
  - Accent CTAs (Electric Cyan): Dark text (oklch(0.15 0 0)) - Ratio 9.2:1 ✓

## Font Selection

The typography should convey modernity and precision while maintaining excellent readability on glassmorphic backgrounds - using clean, geometric sans-serif fonts that complement the transparent UI aesthetic.

- **Typographic Hierarchy**: 
  - H1 (Company Name/Hero): Inter Bold/56px/tight (-0.02em) letter spacing, white with subtle text-shadow for depth
  - H2 (Pillar Titles): Inter SemiBold/36px/tight letter spacing
  - H3 (Section Headers): Inter Medium/24px/normal letter spacing
  - Body (Descriptions): Inter Regular/16px/relaxed (1.6) line-height
  - Small (Captions/Labels): Inter Medium/14px/normal, slightly increased letter spacing (0.01em)
  - Buttons/CTAs: Inter SemiBold/16px/wide (0.02em) letter spacing for prominence

## Animations

Animations should enhance the glassmorphic effect with smooth, physics-based transitions that create a sense of depth and fluidity - subtle enough to feel premium but present enough to create delight and guide attention.

- **Purposeful Meaning**: Entrance animations simulate glass elements sliding into place and coming into focus, reinforcing the layered depth. Hover animations create subtle lift and glow effects that make elements feel responsive and interactive. Transitions between sections use smooth blur and fade effects.
- **Hierarchy of Movement**: Hero section has the most dramatic entrance (fade + slide up), pillar cards have staggered entrances (200ms delay between each), detail modals slide in from their respective card positions, micro-interactions on buttons (scale + glow on hover), smooth scroll animations as sections enter viewport.

## Component Selection

- **Components**: 
  - Card (shadcn) - Modified with glass effects (backdrop-blur-xl, bg-white/10, border-white/20) for all three pillar cards and service detail containers
  - Dialog (shadcn) - Modified with glassmorphic overlay (backdrop-blur-md) for expanded service details
  - Button (shadcn) - Customized with glass variants (outline-glass with border-white/30, filled-glass with backdrop-blur)
  - Badge (shadcn) - For technology tags in Cloud section with glass styling
  - Tabs (shadcn) - For switching between service details with glass tab indicators
  - Separator (shadcn) - Subtle light borders (border-white/20) between sections
  - Hover Card (shadcn) - For quick previews with glass effect on team/service info

- **Customizations**: 
  - Custom glassmorphic card variant with backdrop-blur-xl, bg-white/[0.08], border border-white/[0.18], shadow-xl, and hover states with increased glow
  - Floating navigation dots with glass effect for section jumping
  - Custom gradient background component with animated mesh gradient
  - Icon containers with glass effect and subtle shadow for depth
  - Interactive glass panels that expand on click with smooth backdrop-blur transitions

- **States**: 
  - Buttons: Default (glass with subtle glow), Hover (lift transform + increased glow + border brightness), Active (slight scale down), Focus (ring with glass effect glow)
  - Cards: Default (transparent glass), Hover (lift + increased brightness + stronger border), Expanded (full modal with dimmed backdrop)
  - Navigation: Inactive (muted glass), Active (bright glass with accent color), Hover (glow effect)

- **Icon Selection**: 
  - Phosphor Icons throughout for consistency
  - Palette (palette icon) for Dobeu Designs
  - CloudArrowUp (cloud-arrow-up) for Dobeu Cloud  
  - ChartLineUp (chart-line-up) for Consulting
  - ArrowRight (arrow-right) for CTAs and navigation
  - Envelope (envelope-simple) for contact
  - Plus/X (plus, x) for expand/collapse actions

- **Spacing**: 
  - Consistent use of Tailwind spacing scale: sections separated by py-24, cards with p-8, inner content with gap-6, micro-spacing (icons to text) gap-2
  - Generous whitespace within glass elements to maintain breathability and readability against varied backgrounds

- **Mobile**: 
  - Mobile-first with stacked layout, hero section height adapts (min-h-screen on mobile, full viewport on desktop)
  - Pillar cards stack vertically with full width on mobile, 3-column grid on desktop (md:grid-cols-3)
  - Navigation transforms to hamburger menu with glass backdrop panel
  - Reduced backdrop-blur intensity on mobile for performance (blur-md instead of blur-xl)
  - Touch-optimized tap targets (min-h-12) for all interactive glass elements
  - Simplified animations on mobile (prefers-reduced-motion respected, faster durations)
