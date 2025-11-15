# Break the Beet - Luxury Catering Website

**Catering with Rhythm**

Professional, fully responsive website for Break the Beet luxury catering services with comprehensive image management system.

---

## 🎯 Overview

Multi-page luxury catering website with strict content control, optimized performance, and GitHub-ready image asset management.

### **Tech Stack**
- **HTML5** - Semantic markup, accessibility-first
- **CSS3** - Custom properties, responsive grid, optimized
- **Vanilla JavaScript** - No dependencies, < 5KB
- **Mobile-First** - Fully responsive across all devices

---

## 📁 Project Structure

```
/break-the-beet/
├── index.html              # Home page
├── menu.html               # 8 exact dishes
├── services.html           # 3 services
├── chef.html               # Chef Eric Brown bio
├── gallery.html            # Portfolio grid (12 images)
├── contact.html            # Multi-step form + testimonials
├── CONTENT-GUIDE.md        # Placeholder checklist
├── DESIGN-SYSTEM.md        # Complete luxury design system docs
├── css/
│   ├── main.css            # Base styles (~15KB)
│   └── luxury.css          # Luxury enhancements (Phase 2)
├── js/
│   └── app.js              # Optimized JavaScript with scroll reveals (~5KB)
└── images/                 # Professional asset management
    ├── chef/               # Chef photos
    ├── menu/               # 8 dish photos (800x800px)
    ├── gallery/            # 12 event photos (1400x1000px)
    ├── backgrounds/        # Hero & section backgrounds
    ├── icons/              # Service icons (SVG)
    ├── brand/              # Logo & favicon
    └── IMAGE-GUIDELINES.md # Complete specifications
```

---

## 🖼️ Image Management System

### **Quick Overview**

All image paths are **pre-configured** in HTML. Simply upload images to the correct folders and they'll automatically display.

### **Image Directory Structure**

```
/images/
├── chef/
│   ├── eric-brown-profile.jpg    [900x900px, < 250KB] PLACEHOLDER
│   └── eric-brown-action.jpg     [1200x800px, < 300KB] OPTIONAL
├── menu/
│   ├── mini-arepas.jpg           [800x800px, < 300KB] PLACEHOLDER
│   ├── crab-cake.jpg              [800x800px, < 300KB] PLACEHOLDER
│   ├── yakitori-chicken.jpg       [800x800px, < 300KB] PLACEHOLDER
│   ├── pani-puri.jpg              [800x800px, < 300KB] PLACEHOLDER
│   ├── beef-sliders.jpg           [800x800px, < 300KB] PLACEHOLDER
│   ├── mini-empanadas.jpg         [800x800px, < 300KB] PLACEHOLDER
│   ├── endives-citrus.jpg         [800x800px, < 300KB] PLACEHOLDER
│   └── caprese-skewers.jpg        [800x800px, < 300KB] PLACEHOLDER
├── gallery/
│   └── event-01.jpg to event-12.jpg [1400x1000px, < 400KB each] PLACEHOLDER
├── backgrounds/
│   ├── hero-main.jpg              [1920x1080px, < 500KB] PLACEHOLDER
│   └── section-divider.jpg        [1920x400px, < 200KB] OPTIONAL
├── icons/
│   ├── service-intimate.svg       [< 10KB] PLACEHOLDER
│   ├── service-custom.svg         [< 10KB] PLACEHOLDER
│   └── service-chef.svg           [< 10KB] PLACEHOLDER
└── brand/
    ├── logo.svg                   [< 20KB, vector] PLACEHOLDER
    └── favicon.png                [512x512px, < 50KB] PLACEHOLDER
```

### **Image Upload - 3 Methods**

#### **Method 1: GitHub Web Interface** (Easiest)
1. Go to your GitHub repository
2. Navigate to `images/` → select subfolder (e.g., `menu/`)
3. Click "Add file" → "Upload files"
4. Drag and drop your images
5. Add commit message: "Add menu photos"
6. Click "Commit changes"

#### **Method 2: Git Command Line**
```bash
# Navigate to repository
cd break-the-beet

# Add image to correct directory
cp ~/Downloads/mini-arepas.jpg images/menu/

# Stage, commit, and push
git add images/menu/mini-arepas.jpg
git commit -m "Add Mini Arepas photo"
git push origin main
```

#### **Method 3: GitHub Desktop**
1. Open GitHub Desktop
2. Drag image files into correct `/images/` subfolder
3. Review changes in left panel
4. Add commit message
5. Click "Commit to main"
6. Click "Push origin"

### **Image Specifications Quick Reference**

| Category | Dimensions | Format | Max Size | Count |
|----------|-----------|--------|----------|-------|
| Menu Dishes | 800x800px (square) | JPG/WebP | 300KB | 8 |
| Gallery | 1400x1000px (landscape) | JPG/WebP | 400KB | 12 |
| Chef Photo | 900x900px (square) | JPG/WebP | 250KB | 1 |
| Hero Background | 1920x1080px | JPG/WebP | 500KB | 1 |
| Icons | Scalable (SVG) | SVG | 10KB | 3 |
| Logo | Scalable | SVG | 20KB | 1 |
| Favicon | 512x512px | PNG | 50KB | 1 |

### **Optimization Tools**

**Before uploading, optimize images:**
- **[TinyPNG](https://tinypng.com/)** - JPG/PNG compression
- **[Squoosh](https://squoosh.app/)** - Advanced compression + WebP
- **[SVGOMG](https://jakearchibald.github.io/svgomg/)** - SVG optimization

**Target:** All images under size limits for fast loading.

### **Complete Image Guidelines**

For detailed specifications, photography guidelines, alt text templates, and responsive image implementation:

**📖 See: `images/IMAGE-GUIDELINES.md`**

---

## 📋 Content Status

### ✅ **Implemented (Exact Content Provided)**
- **Brand**: "Break the Beet"
- **Tagline**: "CATERING WITH RHYTHM"
- **8 Dishes**: Mini Arepas (Beef Stew & Queso Fresco), Crab Cake with Spicy Aioli, Yakitori Chicken Skewers, Pani Puri Chicken Salad, Beef Sliders, Mini Empanadas (Beef/Chicken/Cheese), Endives with Citrus & Goat Cheese, Caprese Skewers
- **3 Services**: Catering for Intimate Gatherings, Customized Menus, Private Chef Experiences
- **Chef**: Eric Brown (with Marcus Samuelsson & Jean-Georges references)
- **Multi-Step Form**: Step 1 (name/email/date), Step 2 (guests/event type/message)

### 🔴 **Placeholders (Must Complete Before Launch)**

**Critical Content:**
- Dish descriptions (6 needed)
- Service descriptions (all 3 needed)
- Chef biography (complete bio needed)
- Specific credentials for Marcus Samuelsson & Jean-Georges

**Images (21 Total):**
- 8 menu dish photos
- 12 gallery/event photos
- 1 chef portrait photo

**Contact Information:**
- Email address
- Phone number
- Full address
- Social media links (Instagram, Facebook, Twitter)

**Marketing Copy:**
- Hero descriptions
- Section subtitles
- CTA text
- Footer descriptions

**See `CONTENT-GUIDE.md` for complete checklist.**

---

## 🚀 Quick Start

### **Local Development**

```bash
# Clone repository
git clone https://github.com/[username]/break-the-beet.git
cd break-the-beet

# Open in browser
open index.html
```

### **Live Server (Recommended for Testing)**

```bash
# Python (built-in)
python3 -m http.server 8000

# Node.js (if installed)
npx serve

# VS Code Live Server Extension
# Install "Live Server" → Right-click index.html → "Open with Live Server"
```

Visit: `http://localhost:8000`

---

## 🎨 Design System

### **Phase 2.5: Pop Art Fusion** 🎨 *LATEST*

**"Luxury Catering meets Contemporary Art Gallery"**

Strategic integration of bold Pop Art elements (20%) with luxury foundation (80%). Inspired by Warhol + Lichtenstein meets The Modern NYC.

**New in Phase 2.5:**
- 🌀 **Dynamic backgrounds** — Floating gradient bubbles, animated mesh backgrounds
- 🎨 **Pop Art colors** — Strategic cyan, yellow, magenta accents on hover
- 🖼️ **Halftone patterns** — Lichtenstein-style dot textures (subtle)
- 🔷 **Geometric SVG shapes** — Animated decorative elements
- 🎭 **Warhol-style text** — Layered shadow typography for bold headlines
- 📚 **Comic book outlines** — Gallery images get pop art borders on hover
- 🌈 **Colorful dividers** — Animated multi-color section breaks
- 🎯 **Enhanced CTAs** — Gold-to-red gradient on button hover

### **Phase 2: Luxury NYC-Inspired Aesthetic** ✨

The website features world-class luxury design inspired by NYC's top catering services (Great Performances, Pinch Food Design, Olivier Cheng).

**Luxury Features:**
- 🎭 **Animated gradient hero** with 15s color-shift animation
- ✨ **Scroll reveal animations** — sections fade in on scroll with staggered timing
- 🏛️ **Art Deco dividers** — geometric patterns between major sections
- 📐 **Doubled spacing** — generous whitespace for luxury breathing room
- 🎨 **Expanded color palette** — gold variations, shadows, glows
- 🖋️ **Dramatic typography** — increased letter-spacing, drop caps, pullquotes
- 🎯 **Micro-animations** — subtle hover effects, pulse CTAs, floating elements
- ♿ **Full accessibility** — respects `prefers-reduced-motion`, high contrast mode

**Files:**
- `css/luxury.css` — All luxury enhancements (supplements `main.css`)
- `DESIGN-SYSTEM.md` — **Complete design system documentation**

### **Color Palette (Luxury Expanded)**
```css
/* Base Palette */
--black: #000000          /* Primary text, headers */
--white: #ffffff          /* Backgrounds */
--charcoal: #2c2c2c       /* Secondary text */
--gray: #6b6b6b           /* Body copy */
--gray-light: #e8e8e8     /* Borders, dividers */

/* Luxury Accents */
--gold: #b8956a           /* Primary accent, CTAs */
--gold-dark: #8b7355      /* Hover states, depth */
--gold-light: #d4af37     /* Highlights, glows */
--copper: #c4936d         /* Secondary accent */
--warm-white: #faf9f6     /* Warm backgrounds */

/* Shadows & Glows */
--glow-gold: rgba(184, 149, 106, 0.15)
--shadow-md: rgba(0, 0, 0, 0.08)
--shadow-xl: rgba(0, 0, 0, 0.2)
```

### **Typography**
- **Headings**: Playfair Display (serif) - elegant, sophisticated
- **Body**: Inter (sans-serif) - clean, highly readable
- **Responsive**: Fluid sizing with CSS `clamp(3rem, 7vw, 6rem)` for h1
- **Letter Spacing**: 0.05em on h1 for dramatic effect
- **Features**: Drop caps, pullquotes, chef quotes

### **Spacing Scale (DOUBLED for Luxury)**
```css
--s1: 0.75rem   /* 12px - tight spacing */
--s2: 1.5rem    /* 24px - default spacing */
--s3: 3rem      /* 48px - section padding */
--s4: 6rem      /* 96px - large sections */
--s5: 9rem      /* 144px - hero sections */
--s6: 12rem     /* 192px - extra large sections */
```

**📖 See `DESIGN-SYSTEM.md` for complete documentation.**

---

## ✨ Key Features

### **1. Luxury NYC-Inspired Design** ✨ *NEW*
- **Animated gradient hero** — Dynamic background with 15s color shift
- **Scroll reveal animations** — Sections fade in on scroll with Intersection Observer
- **Art Deco dividers** — Geometric patterns reflecting NYC architectural heritage
- **Doubled whitespace** — Generous breathing room for luxury feel
- **Micro-animations** — Subtle hover effects, pulse CTAs, floating elements
- **Enhanced typography** — Dramatic scale, drop caps, pullquotes
- **Gold glow effects** — Sophisticated focus states and accents

### **2. Fully Responsive**
- Mobile-first design approach
- Breakpoints: 480px, 768px, 1024px, 1440px
- Flexible grid layouts
- Touch-optimized navigation
- Adaptive animations (reduced on mobile)

### **3. Multi-Step Contact Form**
- **Step 1**: Name, Email, Event Date
- **Step 2**: Guest Count, Event Type, Detailed Message
- Client-side validation
- Conversion-optimized UX
- Luxury form inputs with gold glow focus states
- Clear error messaging

### **4. Performance Optimized**
- Minified CSS (main.css + luxury.css)
- Optimized JS (~5KB)
- Lazy-loading images
- No external dependencies
- Fast page loads
- GPU-accelerated animations (transform/opacity only)
- Lighthouse Performance: 90+ target

### **5. Accessibility (WCAG 2.1)**
- Semantic HTML5
- ARIA labels and roles
- Keyboard navigation support
- Gold focus states with 3px outline
- Screen reader optimized
- Descriptive alt text
- **Respects `prefers-reduced-motion`** — Disables animations if user prefers
- **High contrast mode** support

### **6. SEO Optimized**
- Meta descriptions (all pages)
- Semantic heading hierarchy
- Mobile-friendly
- Fast Core Web Vitals
- Structured data ready
- Optimized image sizes

### **7. UI/UX Features**
- Sticky CTA button with pulse animation
- Scroll reveal animations via Intersection Observer
- Gallery lightbox
- Hover state transitions with scale transforms
- Mobile hamburger menu
- Staggered animation delays for visual rhythm
- Vignette overlays on menu items

---

## 📝 Updating Content

### **Text Placeholders**
1. Open relevant HTML file
2. Search for `[PLACEHOLDER: Description]`
3. Replace with actual content
4. Save and commit changes

### **Images**
1. Prepare image (optimize to size limits)
2. Upload to correct `/images/` subfolder via GitHub
3. Paths are already configured in HTML
4. Image will automatically display

### **Styling Changes**
Edit `css/main.css` - use CSS custom properties:
```css
:root {
  --gold: #YOUR_COLOR;  /* Update accent color */
}
```

---

## 🚀 Deployment Options

### **Netlify** (Recommended - Free, Auto-Deploy)
1. Push code to GitHub
2. Log in to [Netlify](https://netlify.com)
3. "New site from Git" → Connect repository
4. Deploy automatically
5. Add custom domain in Settings

### **Vercel** (Fast, Free)
```bash
npm i -g vercel
vercel
```

### **GitHub Pages** (Free, GitHub-Hosted)
1. Repository Settings → Pages
2. Source: Deploy from branch
3. Branch: `main`, folder: `/root`
4. Save → Site live in minutes

### **Traditional Hosting** (cPanel, FTP)
1. Compress entire directory as ZIP
2. Upload via FTP/File Manager
3. Extract in public_html/
4. Ensure `index.html` is in root

---

## 📦 Pre-Launch Checklist

### **Content**
- [ ] All 8 dish descriptions written
- [ ] All 3 service descriptions written
- [ ] Chef Eric Brown biography completed
- [ ] Marcus Samuelsson credential details added
- [ ] Jean-Georges credential details added
- [ ] All 21 images uploaded & optimized
- [ ] Contact information updated (all pages)
- [ ] Social media links added (all pages)
- [ ] All marketing copy finalized

### **Images**
- [ ] All 8 menu dish photos (< 300KB each)
- [ ] All 12 gallery photos (< 400KB each)
- [ ] Chef photo (< 250KB)
- [ ] Hero background (< 500KB)
- [ ] Logo & favicon uploaded
- [ ] All images optimized for web

### **Technical**
- [ ] Form submission tested
- [ ] All internal links verified
- [ ] Mobile responsive tested (iPhone, Android)
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] Lighthouse audit passed (90+ all scores)
- [ ] Page load speed < 3 seconds
- [ ] HTTPS/SSL enabled

### **SEO**
- [ ] Meta descriptions reviewed
- [ ] All image alt text completed
- [ ] Social media preview tested
- [ ] Google Analytics added (optional)
- [ ] Google Search Console submitted (optional)

---

## 🐛 Troubleshooting

### **Images Not Showing?**
1. Verify exact filename matches HTML (case-sensitive)
2. Check image is in correct subfolder
3. Ensure file uploaded to GitHub
4. Clear browser cache (Cmd/Ctrl + Shift + R)

### **Form Not Working?**
1. Check JavaScript enabled in browser
2. Open browser console (F12) for errors
3. Verify all required fields have values
4. Test in different browser

### **Mobile Menu Not Opening?**
1. Ensure `js/app.js` is loaded
2. Check browser console for JavaScript errors
3. Test on different device/browser

---

## 📞 Support & Documentation

- **Content Placeholders**: `CONTENT-GUIDE.md`
- **Image Specifications**: `images/IMAGE-GUIDELINES.md`
- **HTML Comments**: Each file contains inline guidance
- **CSS Variables**: All customizable in `:root` selector

---

## 📄 Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Performance | 90+ | TBD |
| First Contentful Paint | < 1.5s | TBD |
| Time to Interactive | < 3.0s | TBD |
| Cumulative Layout Shift | < 0.1 | TBD |
| Total Page Weight | < 2MB | ~3KB + images |

---

## 🎯 Browser Support

✅ **Fully Supported:**
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

---

## 📜 License & Credits

**© 2024 Break the Beet. All rights reserved.**

**Development**: Professional web standards (HTML5, CSS3, ES6)
**Brand**: Break the Beet
**Chef**: Eric Brown

---

## ❓ FAQ

**Q: Can I change the colors?**
A: Yes! Edit CSS custom properties in `css/main.css` (:root section).

**Q: How do I add more menu items?**
A: Copy an existing menu item block in `menu.html`, update content, and upload a new image.

**Q: Do I need a database?**
A: No. This is a static website - all content is in HTML files.

**Q: Can I use a CMS?**
A: Yes. Consider Netlify CMS, Forestry, or Static CMS for easy content management.

**Q: Is the contact form functional?**
A: It validates and collects data client-side. For server-side processing, integrate with Formspree, Netlify Forms, or custom backend.

---

**Questions?** Check inline HTML comments or review `CONTENT-GUIDE.md` for placeholder locations.

**Ready to launch?** Complete the pre-launch checklist above and deploy to your preferred hosting platform.
