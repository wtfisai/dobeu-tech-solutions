# Planning Guide

A comprehensive corporate showcase website for Dobeu Tech Solutions that presents their three service pillars (Designs, Cloud / Infrastructure, and Consulting) through an elegant glassmorphic interface that embodies innovation and technical excellence. The site features a landing page with call-to-action directing users to a pricing section with three engagement models.

**Experience Qualities**: 
1. **Premium** - The glassmorphic design with frosted effects creates a sense of sophistication and cutting-edge technology
2. **Transparent** - Literal transparency in the design mirrors the company's clear communication and honest approach to client relationships
3. **Fluid** - Smooth transitions and layered depth give a sense of seamless integration across their service offerings

**Complexity Level**: Light Application (multiple features with basic state)
  - Multi-section navigation with smooth scrolling, service showcase cards, and interactive elements for exploring each product pillar with detailed information panels

## Essential Features

### Landing Hero Section
- **Functionality**: Full-viewport landing section displaying company logo, tagline, and animated glassmorphic card with CTA to scroll to pricing
- **Purpose**: Create immediate visual impact and communicate brand identity, directing users to pricing options
- **Trigger**: Page load
- **Progression**: Page loads → Animated gradient background appears → Logo fades in → Glassmorphic hero card slides up → CTA arrow button appears → User clicks to scroll to pricing
- **Success criteria**: Users immediately understand the company's focus and are guided to explore pricing options

### Pricing Section with Service Models
- **Functionality**: Three distinct glassmorphic cards presenting engagement models: "Per Project", "Complex Brand / Project Launch - Partner in your ops", and "Let's Discuss - Retainer"
- **Purpose**: Clearly present service pricing structures and engagement options before deeper content exploration
- **Trigger**: Scroll from landing hero or direct navigation
- **Progression**: User scrolls/arrives → Cards animate into view with staggered timing → User reviews options → Click CTA buttons to scroll to contact form
- **Success criteria**: Users understand the three engagement models and can easily select their preferred option to proceed to contact

### Company Overview Section
- **Functionality**: Secondary hero section providing company overview and description
- **Purpose**: Reinforce brand identity and provide additional context after pricing introduction
- **Trigger**: Scroll past pricing section
- **Progression**: User scrolls → Animated elements appear → Overview content fades in → User can scroll to pillars section
- **Success criteria**: Users gain deeper understanding of company mission and services

### Three Pillars Showcase
- **Functionality**: Three distinct glassmorphic cards representing Designs, Cloud / Infrastructure, and Consulting
- **Purpose**: Clearly segment and present the company's service offerings with simplified naming (removed "Dobeu" prefix)
- **Trigger**: Scroll into view or click navigation
- **Progression**: User scrolls/clicks → Cards animate into view → Hover reveals more details → Click expands full information in modal/panel → User can navigate between pillars
- **Success criteria**: Each service area is clearly differentiated with appropriate iconography and description, users can easily understand what each pillar offers

### Designs Detail View
- **Functionality**: Expandable section showing graphics, web design, and digital creative services
- **Purpose**: Showcase creative capabilities and design portfolio approach
- **Trigger**: Click on Designs pillar card
- **Progression**: Click → Modal/panel slides in with backdrop blur → Service list with icons appears → Portfolio examples showcase → Contact CTA visible
- **Success criteria**: Users understand the creative services offered and see visual examples of design work

### Cloud / Infrastructure Detail View
- **Functionality**: Expandable section detailing developer tools, consulting, hosting, and storage solutions
- **Purpose**: Communicate technical expertise and infrastructure capabilities
- **Trigger**: Click on Cloud / Infrastructure pillar card
- **Progression**: Click → Technical-themed panel appears → Service features list with icons → Technology stack badges → Integration examples → Contact CTA
- **Success criteria**: Developer audience immediately recognizes relevant services and technical credibility

### Consulting Detail View
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

The design should evoke a sense of sophisticated professionalism, clarity, and warmth through refined glassmorphism on a warm cream background. Inspired by Claude's documentation site, it should feel approachable yet premium, with subtle animations and a calming color palette. The interface should be clean with generous spacing, allowing content to breathe while maintaining visual interest through layered glass effects.

## Color Selection

Warm, earthy palette with orange accents inspired by Claude's documentation design

- **Primary Color**: Warm Brown (oklch(0.45 0.08 50)) - A sophisticated, grounded tone that communicates trust and stability
- **Secondary Colors**: 
  - Soft Cream (oklch(0.92 0.02 70)) - Creates a warm, inviting foundation
  - Vibrant Purple (oklch(0.60 0.15 290)) - Represents creativity and design services
  - Muted Blue (oklch(0.55 0.12 200)) - Symbolizes technology and cloud infrastructure
- **Accent Color**: Warm Orange (oklch(0.60 0.15 35)) - For CTAs, hover states, and important interactive elements, inspired by Claude's signature orange
- **Foreground/Background Pairings**:
  - Background (Warm cream): oklch(0.97 0.015 70) - Soft, inviting base
  - Foreground on background: Dark Brown (oklch(0.25 0.02 60)) - Ratio 12.8:1 ✓
  - Glass Cards (Semi-transparent white): oklch(0.99 0.005 70 / 0.7) with backdrop-blur - Dark text on glass - Ratio 11.2:1 ✓
  - Primary buttons (Warm Brown): White text (oklch(0.99 0 0)) - Ratio 9.1:1 ✓
  - Accent CTAs (Warm Orange): White text (oklch(0.99 0 0)) - Ratio 4.8:1 ✓
  - Muted elements: oklch(0.50 0.02 60) on background - Ratio 5.2:1 ✓

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

Animations should be smooth, natural, and purposeful with a focus on subtle, refined motion that enhances usability - drawing inspiration from Claude's documentation site where animations guide attention without being distracting.

- **Purposeful Meaning**: Entrance animations use gentle fade-ins with slight upward movement, creating a sense of content floating into place naturally. Hover animations are minimal - subtle lifts and color shifts that provide clear feedback without being flashy. Scroll-triggered animations use intersection observers with appropriate margins to begin before elements enter viewport. All transitions use custom cubic-bezier easing [0.22, 1, 0.36, 1] for smooth, natural motion.
- **Hierarchy of Movement**: Hero section has a staggered entrance (logo → title → description → CTA) with 100-200ms delays between each. Pillar cards fade in sequentially with minimal 100ms delays. Modal overlays use quick 200-300ms transitions. Micro-interactions on buttons are instant (scale transforms under 200ms). Scroll is always smooth behavior. All animations respect prefers-reduced-motion for accessibility.

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
  - Palette (palette icon) for Designs
  - CloudArrowUp (cloud-arrow-up) for Cloud / Infrastructure  
  - ChartLineUp (chart-line-up) for Consulting
  - ArrowRight (arrow-right) for CTAs and navigation
  - ArrowDown (arrow-down) for scroll indicators
  - Check (check) for feature lists in pricing cards
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
