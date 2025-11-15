# Break the Beet - Luxury Design System

**Version 2.0** - NYC-Inspired Luxury Catering Aesthetic
*Updated for Phase 2: Luxury Design Upgrade*

---

## 🎨 Philosophy

This design system embodies **quiet luxury** — the hallmark of NYC's finest catering services. Every element is crafted to evoke sophistication, elegance, and timeless quality through:

- **Generous whitespace** for breathing room and focus
- **Refined typography** with dramatic scale and letterspacing
- **Subtle micro-animations** that feel organic, not digital
- **Sophisticated color palette** with depth and warmth
- **Art Deco influences** reflecting NYC architectural heritage

**Goal:** Create a website that looks and feels like a $50,000 custom build.

---

## 🎨 Color System

### Primary Palette

```css
--black: #000000          /* Primary text, headers */
--white: #ffffff          /* Backgrounds, contrast */
--charcoal: #2c2c2c       /* Secondary text */
--gray: #6b6b6b           /* Body copy */
--gray-light: #e8e8e8     /* Borders, dividers */
```

### Luxury Accent Colors

```css
--gold: #b8956a           /* Primary accent, CTAs */
--gold-dark: #8b7355      /* Hover states, depth */
--gold-light: #d4af37     /* Highlights, glows */
--copper: #c4936d         /* Secondary accent */
--warm-white: #faf9f6     /* Warm backgrounds */
```

### Shadows & Glows

```css
--shadow-sm: rgba(0, 0, 0, 0.04)
--shadow-md: rgba(0, 0, 0, 0.08)
--shadow-lg: rgba(0, 0, 0, 0.12)
--shadow-xl: rgba(0, 0, 0, 0.2)
--glow-gold: rgba(184, 149, 106, 0.15)
--glow-gold-strong: rgba(184, 149, 106, 0.4)
```

### Usage Guidelines

- **Black & White:** High contrast for headers and key elements
- **Gold variations:** Use sparingly for emphasis and interactivity
- **Shadows:** Layer for depth without harshness
- **Glows:** Soft, warm focus states on interactive elements

---

## 📐 Typography System

### Font Families

```css
--font-serif: 'Playfair Display', Georgia, serif
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif
```

**Playfair Display** — Headlines, elegant statements
**Inter** — Body copy, clean readability

### Type Scale (Desktop)

```css
h1:   clamp(3rem, 7vw, 6rem)     /* 48-96px */
h2:   clamp(2.5rem, 5vw, 4.5rem) /* 40-72px */
h3:   clamp(1.75rem, 3vw, 2.5rem)/* 28-40px */
h4:   clamp(1.25rem, 2vw, 1.5rem)/* 20-24px */
body: clamp(1rem, 1.5vw, 1.125rem)/* 16-18px */
small: 0.875rem                   /* 14px */
```

### Letter Spacing

```css
h1:    0.05em   /* Extra open for dramatic effect */
h2:    0.03em   /* Refined elegance */
h3:    0.02em   /* Subtle spacing */
body:  0.01em   /* Improved readability */
caps:  0.1em    /* Wide spacing for uppercase */
```

### Typography Features

- **Drop Caps** — First letter enlarged to 3.5em with gold accent
- **Pullquotes** — Centered, gold, italic, 1.5rem
- **Chef Quotes** — Serif, larger scale, centered with attribution

### Usage Guidelines

```html
<!-- Drop Cap -->
<p class="drop-cap">First paragraph with oversized initial...</p>

<!-- Pullquote -->
<blockquote class="pullquote">A quote to emphasize key messaging</blockquote>

<!-- Chef Quote -->
<div class="chef-quote">
  <p>Philosophy or testimonial quote...</p>
  <cite>— Chef Eric Brown</cite>
</div>
```

---

## 📏 Spacing System

### Scale (DOUBLED for luxury breathing room)

```css
--s1: 0.75rem   /* 12px - tight spacing */
--s2: 1.5rem    /* 24px - default spacing */
--s3: 3rem      /* 48px - section padding */
--s4: 6rem      /* 96px - large sections */
--s5: 9rem      /* 144px - hero sections */
--s6: 12rem     /* 192px - extra large sections */
```

### Container Widths

```css
--container-max: 1400px
--container-narrow: 900px
--container-wide: 1600px
```

### Usage Guidelines

- **Doubled spacing** creates luxury feel vs. cramped layouts
- Use `--s4` to `--s6` generously for major section padding
- Asymmetric grids preferred over perfect symmetry
- Whitespace = luxury, never fear empty space

---

## ✨ Animation System

### Keyframe Animations

#### **Gradient Shift** (Hero Background)
```css
@keyframes gradientShift {
  0%   { background: gradient(black → charcoal → gold-dark) }
  100% { background: gradient(charcoal → black → gold) }
}
/* Duration: 15s infinite alternate */
```

#### **Float** (Decorative Elements)
```css
@keyframes float {
  0%, 100% { transform: translateY(0) }
  50%      { transform: translateY(-20px) }
}
/* Duration: 6s infinite ease-in-out */
```

#### **Pulse** (CTA Buttons)
```css
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(gold, 0.4) }
  50%      { box-shadow: 0 0 0 20px rgba(gold, 0) }
}
/* Duration: 2s infinite */
```

### Scroll Reveal Animations

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px) }
  to   { opacity: 1; transform: translateY(0) }
}

@keyframes fadeIn {
  from { opacity: 0 }
  to   { opacity: 1 }
}

@keyframes slideUp {
  from { transform: translateY(30px) }
  to   { transform: translateY(0) }
}

@keyframes scaleIn {
  from { transform: scale(0.95) }
  to   { transform: scale(1) }
}
```

### Reveal Classes

```html
<!-- Base reveal (triggers on scroll) -->
<section class="reveal">...</section>

<!-- Staggered delays -->
<div class="reveal-delay-1">...</div> <!-- 0.1s delay -->
<div class="reveal-delay-2">...</div> <!-- 0.2s delay -->
<div class="reveal-delay-3">...</div> <!-- 0.3s delay -->
```

### Timing & Easing

```css
--transition-fast: 0.2s ease
--transition-base: 0.3s ease
--transition-slow: 0.6s cubic-bezier(0.4, 0, 0.2, 1)
--transition-bounce: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### Animation Guidelines

- **Respect `prefers-reduced-motion`** — All animations disabled if user prefers
- **Subtle over showy** — Micro-interactions, not distractions
- **Performance first** — Use `transform` and `opacity` only
- **Scroll reveals** — Elements fade in at 15% viewport intersection

---

## 🎨 Pop Art Fusion - Phase 2.5

**"Luxury Catering meets Contemporary Art Gallery"**

Strategic integration of bold Pop Art elements (20% visual weight) with luxury aesthetic (80% foundation). Inspired by Warhol, Lichtenstein, and NYC contemporary art scene.

### Pop Art Color Palette

```css
/* Pop Art Accent Colors - Use Strategically */
--pop-red: #FF6B6B;           /* Warhol red for CTAs */
--pop-yellow: #FFD93D;        /* Bright sunshine accent */
--pop-cyan: #6BCF7F;          /* Fresh green highlight */
--pop-magenta: #E05297;       /* Bold pink accent */

/* Subtle Variations (60% opacity) */
--pop-red-subtle: rgba(255, 107, 107, 0.6);
--pop-yellow-subtle: rgba(255, 217, 61, 0.6);
--pop-cyan-subtle: rgba(107, 207, 127, 0.6);
--pop-magenta-subtle: rgba(224, 82, 151, 0.6);
```

**Usage Rules:**
- Pop colors for **hover states** and **interactive elements only**
- Always at reduced opacity for backgrounds (0.3-0.6)
- Never use for primary text or large blocks
- Maximum 20% of any page's visual weight

### Dynamic Background Elements

#### Floating Bubbles
```html
<section class="hero">
  <div class="floating-bubbles"></div>
  <!-- Creates animated gradient orbs with 20s float animation -->
</section>
```

**Effect:** Subtle yellow and cyan gradient bubbles float slowly across hero section

#### Halftone Patterns
```html
<!-- Subtle dot pattern background (Lichtenstein reference) -->
<section class="section halftone-bg">
  <!-- Content -->
</section>
```

**Effect:** 12px grid of gold dots at 8% opacity creates texture without distraction

### Pop Art Animations

#### Pop Scale
```css
@keyframes popScale {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
```
**Usage:** Buttons, featured menu items on hover

#### Color Pulse
```css
@keyframes colorPulse {
  0%, 100% { filter: hue-rotate(0deg) brightness(1); }
  50% { filter: hue-rotate(10deg) brightness(1.1); }
}
```
**Usage:** Pop Art dividers, accent elements

#### Float Shape
```css
@keyframes floatShape {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(15px, -15px) rotate(8deg); }
  66% { transform: translate(-15px, 15px) rotate(-8deg); }
}
```
**Usage:** Decorative geometric SVG shapes (30s duration)

### Enhanced CTA Buttons

```css
.btn-accent:hover {
  background: linear-gradient(135deg,
    var(--gold-light) 0%,
    var(--pop-red) 100%
  );
  box-shadow: 0 10px 30px var(--pop-red-subtle);
}
```

**Effect:** Gold button transitions to gold-red gradient with pop color glow

### Featured Menu Items

```html
<article class="menu-item featured">
  <!-- Dish content -->
</article>
```

**Effect:** On hover, colorful gradient border appears (cyan → yellow → magenta)

### Gallery Comic Book Outlines

```css
.gallery-item:hover img {
  box-shadow:
    0 0 0 3px var(--black),
    0 0 0 6px var(--pop-cyan),
    0 20px 60px var(--shadow-xl);
}
```

**Effect:** Comic book style double outline with pop cyan accent

### Warhol-Style Layered Text

```html
<h2 class="pop-quote">BOLD STATEMENT</h2>
```

```css
.pop-quote {
  text-shadow:
    2px 2px 0 var(--pop-yellow),
    4px 4px 0 var(--gold),
    6px 6px 10px rgba(0, 0, 0, 0.3);
}
```

**Effect:** Triple-layer shadow (yellow/gold/black) for dramatic pop art typography

### Geometric Decorative Shapes

```html
<!-- Animated floating circle -->
<svg class="geometric-shape" style="top: 10%; left: 5%;" width="150" height="150">
  <circle cx="75" cy="75" r="70" fill="url(#popGradient1)" opacity="0.3"/>
  <defs>
    <linearGradient id="popGradient1">
      <stop offset="0%" style="stop-color:#6BCF7F;stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:#FFD93D;stop-opacity:0.6" />
    </linearGradient>
  </defs>
</svg>
```

**Effect:** Subtle gradient shapes float and rotate slowly (30s loop)

### Page-Specific Backgrounds

#### Menu Page
```html
<body class="menu-page">
```
- Dual radial gradients (yellow bottom-left, cyan top-right)
- Subtle halftone dot pattern
- 40% transparency for sophistication

#### Gallery Page
```html
<body class="gallery-page">
```
- Animated gradient mesh (20s loop)
- Magenta accent moves across background
- Creates dynamic, contemporary feel

#### Services Page
```html
<body class="services-page">
```
- Floating cyan gradient circle (top-right)
- Decorative SVG shapes with 25s animation
- Clean, professional with subtle movement

### Pop Art Dividers

```html
<!-- Colorful animated divider -->
<div class="deco-divider pop"></div>
```

**Effect:** Multi-color gradient bar (cyan → yellow → gold → yellow → cyan) with subtle hue rotation

### Implementation Examples

**Subtle Pop Art Touch (Recommended):**
```html
<section class="section halftone-bg">
  <div class="container">
    <article class="menu-item featured">
      <img src="..." alt="..." />
      <h3>Dish Name</h3>
    </article>
  </div>
</section>
```

**Bold Pop Art Accent:**
```html
<section class="hero">
  <div class="floating-bubbles"></div>
  <h1 class="pop-quote">BREAK THE BEET</h1>
  <a href="#" class="btn btn-accent">Get a Quote</a>
</section>
```

### Balance Guidelines

| Element | Luxury % | Pop Art % |
|---------|----------|-----------|
| Overall Design | 80% | 20% |
| Color Palette | Gold/Black/White dominant | Pop colors on hover only |
| Typography | Serif elegant | Pop quote for 1-2 headlines max |
| Backgrounds | Subtle gradients | Floating elements, halftone at low opacity |
| Animations | Smooth, refined | Bold on interaction only |

**Golden Rule:** Pop Art elements should **enhance**, not **overwhelm** the luxury foundation.

### Performance Considerations

- All Pop Art animations use GPU-accelerated properties (`transform`, `opacity`, `filter`)
- SVG shapes are vector (tiny file size)
- CSS gradients instead of images (zero HTTP requests)
- Halftone patterns are pure CSS (no texture files)
- Respects `prefers-reduced-motion` — all animations disabled if user prefers

---

## 🧩 Component Patterns

### Navigation

```css
/* Luxury navigation with scroll state */
.nav {
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.nav.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 20px var(--shadow-lg);
}

.nav.scrolled .logo {
  color: var(--gold);
  text-shadow: 0 0 20px var(--glow-gold);
}
```

### Buttons

```css
/* Luxury button with ripple effect */
.btn {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn::before {
  content: '';
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  /* Ripple animation on hover */
}

.btn-accent {
  background: var(--gold);
  box-shadow: 0 4px 15px var(--glow-gold);
  animation: pulse 2s infinite;
}
```

**Button Variants:**
- `.btn-primary` — Gold background, white text
- `.btn-secondary` — Transparent with gold border
- `.btn-accent` — Gold with pulse animation

### Menu Items

```css
.menu-item {
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease;
}

.menu-item:hover {
  transform: translateY(-8px) scale(1.02);
}

.menu-item::after {
  /* Vignette overlay on hover */
  background: radial-gradient(circle, transparent, black);
  opacity: 0 → 0.6 on hover;
}
```

### Service Cards

```css
.service-card {
  border-top: 2px solid transparent;
  transition: border-color 0.6s ease;
}

.service-card:hover {
  border-top-color: var(--gold);
}
```

### Gallery Grid

```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  transform: scale(1);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 60px var(--shadow-xl);
}
```

### Forms

```css
/* Luxury form inputs with floating labels */
.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 4px var(--glow-gold);
  outline: none;
}

/* Floating label effect */
.form-group label {
  transform: translateY(0);
  transition: transform 0.3s ease;
}

.form-group input:focus + label {
  transform: translateY(-1.5rem) scale(0.85);
  color: var(--gold);
}
```

---

## 🏛️ Art Deco Elements

### Decorative Dividers

```css
.deco-divider {
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--gold) 20%,
    var(--gold-dark) 50%,
    var(--gold) 80%,
    transparent
  );
  position: relative;
}

.deco-divider::before,
.deco-divider::after {
  /* Diamond shapes on ends */
  content: '';
  width: 12px;
  height: 12px;
  background: var(--gold);
  transform: rotate(45deg);
}
```

**Usage:** Add between major sections for architectural flair

```html
<div class="deco-divider"></div>
```

### Section Dividers

```css
.divider {
  width: 60px;
  height: 3px;
  background: var(--gold);
  margin: 1.5rem auto;
}
```

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile-first approach */
@media (min-width: 480px)  { /* Small tablets */ }
@media (min-width: 768px)  { /* Tablets */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large screens */ }
```

### Responsive Typography

All type sizes use `clamp()` for fluid scaling:

```css
h1 { font-size: clamp(3rem, 7vw, 6rem); }
```

**Mobile adjustments:**
- Reduce spacing scale by ~30%
- Stack grids to single column
- Simplify animations
- Larger touch targets (min 44px)

### Mobile-Specific

```css
@media (max-width: 767px) {
  :root {
    --s4: 4rem;  /* Reduced from 6rem */
    --s5: 6rem;  /* Reduced from 9rem */
  }

  .deco-divider { display: none; } /* Hide on mobile */

  h1 { letter-spacing: 0.03em; } /* Less dramatic on small screens */
}
```

---

## ♿ Accessibility

### Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**JavaScript:** Intersection Observer respects this preference and makes all `.reveal` elements immediately visible.

### High Contrast Mode

```css
@media (prefers-contrast: high) {
  :root {
    --gold: #d4af37;        /* Brighter gold */
    --charcoal: #1a1a1a;    /* Deeper black */
  }
}
```

### Focus States

```css
a:focus,
button:focus,
input:focus {
  outline: 3px solid var(--gold);
  outline-offset: 2px;
  box-shadow: 0 0 0 6px var(--glow-gold);
}
```

### ARIA & Semantic HTML

- All interactive elements have accessible labels
- Semantic HTML5 structure (`<nav>`, `<section>`, `<article>`)
- Alt text on all images (see `images/IMAGE-GUIDELINES.md`)
- Keyboard navigation fully supported

---

## 🎯 Performance Guidelines

### CSS Optimization

- **Critical CSS** inlined for above-fold content
- **Custom properties** for dynamic values
- **Minified** in production (`main.css` + `luxury.css`)
- **No external dependencies** (no Bootstrap, Tailwind, etc.)

### Animation Performance

```css
/* Good — GPU accelerated */
transform: translateY(10px);
opacity: 0.5;

/* Bad — causes repaints */
top: 10px;
background: red;
```

### Image Optimization

See `images/IMAGE-GUIDELINES.md` for:
- Exact dimensions for each image type
- Size limits (< 300KB for menu, < 400KB for gallery)
- Lazy loading implementation
- WebP format recommendations

### Lighthouse Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| Performance | 90+ | Lazy images, minified CSS/JS |
| Accessibility | 100 | ARIA labels, semantic HTML, focus states |
| Best Practices | 100 | HTTPS, no console errors |
| SEO | 100 | Meta tags, alt text, heading hierarchy |

---

## 🛠️ Implementation Checklist

### For Developers

- [ ] Include both `main.css` and `luxury.css` in `<head>`
- [ ] Add `.reveal` classes to sections for scroll animations
- [ ] Use `.drop-cap` on intro paragraphs for dramatic effect
- [ ] Add `.deco-divider` between major sections
- [ ] Implement staggered delays (`.reveal-delay-1/2/3`) on grid items
- [ ] Test all animations with `prefers-reduced-motion: reduce`
- [ ] Verify focus states on all interactive elements
- [ ] Run Lighthouse audit before deployment

### For Content Editors

- [ ] All placeholders replaced with actual content
- [ ] Images optimized to size limits
- [ ] Alt text written for all images
- [ ] Contact information updated across all pages
- [ ] Social media links verified

---

## 📚 Reference Files

| File | Purpose |
|------|---------|
| `css/main.css` | Base styles, layout, components |
| `css/luxury.css` | Luxury enhancements, animations, refinements |
| `js/app.js` | Intersection Observer, form logic, nav |
| `CONTENT-GUIDE.md` | Complete placeholder checklist |
| `images/IMAGE-GUIDELINES.md` | Image specs, upload instructions |
| `README.md` | Full project documentation |

---

## 📞 Support

For questions about implementing this design system:

1. Review inline CSS comments in `css/luxury.css`
2. Check HTML examples in this document
3. Reference live examples in the codebase

---

**© 2024 Break the Beet. All rights reserved.**

*Design System v2.0 — Luxury NYC-Inspired Aesthetic*
