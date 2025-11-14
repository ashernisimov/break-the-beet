# Break the Beet - Luxury Catering Website

A fully responsive, multi-page luxury catering website for "Break the Beet" - Catering with Rhythm.

## Overview

This website showcases a premium catering service specializing in intimate gatherings, customized menus, and private chef experiences. Built with modern web standards, the site emphasizes quiet luxury aesthetics, accessibility, and conversion-focused design.

## Technology Stack

- **HTML5**: Semantic markup for structure
- **CSS3**: Custom properties, flexbox, grid, animations
- **Vanilla JavaScript**: Form handling, navigation, and interactions
- **Mobile-First Responsive Design**
- **SEO Optimized**: Meta tags, semantic HTML, accessibility features

## Website Structure

```
/break-the-beet/
├── index.html          # Home page with hero and intro
├── menu.html           # 8 exact menu dishes
├── services.html       # 3 specific services
├── chef.html           # Chef Eric Brown's biography
├── gallery.html        # Portfolio/image grid
├── contact.html        # Multi-step quote form + testimonials
├── css/
│   └── styles.css      # Complete design system
├── js/
│   └── main.js         # Interactive functionality
└── images/
    └── placeholders/   # Directory for your images
```

## Pages Overview

### 1. Home (`index.html`)
- Hero section with tagline "CATERING WITH RHYTHM"
- Brand introduction
- Service previews
- Featured menu items
- Call-to-action sections

### 2. Menu (`menu.html`)
**8 Exact Dishes** (as provided):
1. Mini Arepas - Beef Stew & Queso Fresco
2. Crab Cake with Spicy Aioli
3. Yakitori Chicken Skewers
4. Pani Puri Chicken Salad
5. Beef Sliders
6. Mini Empanadas (Beef/Chicken/Cheese)
7. Endives with Citrus & Goat Cheese
8. Caprese Skewers

### 3. Services (`services.html`)
**3 Exact Services** (as provided):
1. Catering for Intimate Gatherings
2. Customized Menus
3. Private Chef Experiences

### 4. Meet the Chef (`chef.html`)
- Chef Eric Brown's biography
- Culinary philosophy
- Credentials and references (Marcus Samuelsson, Jean-Georges)
- Professional background

### 5. Gallery (`gallery.html`)
- 12 image placeholders for high-resolution photos
- Grid layout with hover animations
- Click-to-expand lightbox functionality
- Instructions for adding images

### 6. Contact/Get a Quote (`contact.html`)
**Multi-Step Form**:
- **Step 1**: Name, Email, Phone, Event Date
- **Step 2**: Guest Count, Event Type, Service Type, Dietary Restrictions, Message, Budget

**Additional Features**:
- Empty testimonials section (ready for real content)
- Contact information display
- Form validation
- Success confirmation

## Design System

### Color Palette (Quiet Luxury)
```css
--color-black: #000000        /* Primary text, headers */
--color-white: #FFFFFF        /* Background, text on dark */
--color-charcoal: #2C2C2C     /* Secondary text */
--color-gray: #6B6B6B         /* Body text */
--color-light-gray: #E8E8E8   /* Borders, dividers */
--color-accent-gold: #B8956A  /* CTAs, accents */
--color-accent-copper: #C4936D /* Hover states */
```

### Typography
- **Headings**: Playfair Display (serif) - elegant, sophisticated
- **Body Text**: Inter (sans-serif) - clean, readable
- Responsive font sizes using `clamp()`
- Letter spacing for luxury feel

### Spacing System
- XS: 0.5rem
- SM: 1rem
- MD: 2rem
- LG: 4rem
- XL: 6rem

## Key Features

### 1. Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Flexible grid layouts
- Touch-friendly navigation

### 2. Sticky CTA
- Fixed call-to-action button
- Appears after scrolling 500px
- Always accessible for conversions

### 3. Multi-Step Form
- Progressive disclosure (2 steps)
- Client-side validation
- Visual step indicators
- Conversion-optimized layout

### 4. Navigation
- Fixed header with backdrop blur
- Mobile hamburger menu
- Active page highlighting
- Smooth scroll behavior

### 5. Animations
- Fade-in on scroll
- Hover transitions
- Gallery lightbox
- Smooth page transitions

### 6. Accessibility
- Semantic HTML5
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Screen reader friendly

### 7. SEO Optimization
- Meta descriptions on all pages
- Open Graph tags
- Semantic heading hierarchy
- Alt text placeholders
- Mobile-friendly

## Placeholder Content Guide

### Images to Add

**Gallery Images** (`gallery.html`):
- Replace 12 placeholder divs with actual event/dish photos
- Recommended: Minimum 1200px width, optimized JPG/PNG
- Update HTML comments with actual image paths

**Menu Dish Images** (`menu.html`):
- 8 dish photos needed
- Dimensions: 1:1 ratio recommended (e.g., 600x600px)
- Update commented `<img>` tags

**Chef Photo** (`chef.html`):
- Professional portrait of Chef Eric Brown
- Recommended: 800x1200px (portrait orientation)

**Logo** (Optional):
- Replace text logo with brand image if available
- Update in navigation across all pages

### Contact Information

Update the following placeholders in **all page footers** and `contact.html`:
- `[Contact Email Placeholder]` - Add real email
- `[Contact Phone Placeholder]` - Add phone number
- `[Address Placeholder]` - Add business address

### Social Media Links

Update in footer sections (all pages):
```html
<a href="#" aria-label="Instagram">  <!-- Add Instagram URL -->
<a href="#" aria-label="Facebook">   <!-- Add Facebook URL -->
<a href="#" aria-label="Twitter">    <!-- Add Twitter URL -->
```

### Testimonials

To add testimonials in `contact.html`:
1. Locate the commented testimonials structure
2. Uncomment and duplicate for each testimonial
3. Add real client quotes, names, and event types
4. Remove or hide the "testimonials-empty" div

## Customization Guide

### Adding New Menu Items

1. Open `menu.html`
2. Copy an existing `<article class="menu-item">` block
3. Update the dish name and description
4. Add image or keep placeholder
5. Paste into the menu grid

### Modifying Colors

Edit CSS custom properties in `css/styles.css`:
```css
:root {
  --color-accent-gold: #YourColor;
  /* etc. */
}
```

### Changing Fonts

Update Google Fonts links in HTML `<head>` and CSS variables:
```css
--font-heading: 'YourFont', serif;
--font-body: 'YourFont', sans-serif;
```

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

### Before Launch:
1. **Optimize Images**:
   - Compress all images (TinyPNG, ImageOptim)
   - Use WebP format where supported
   - Lazy loading for gallery images

2. **Minify Assets**:
   - CSS minification
   - JavaScript minification
   - Remove comments in production

3. **Testing**:
   - Lighthouse audit
   - Mobile responsiveness test
   - Cross-browser testing
   - Form submission testing

## Deployment

This is a static website and can be deployed to:
- **Netlify**: Drag & drop deployment
- **Vercel**: Connect Git repository
- **GitHub Pages**: Free hosting
- **Traditional Web Hosting**: Upload via FTP

### Quick Deploy Steps:
1. Add all real images to `images/` directory
2. Update all placeholder content
3. Test all forms and links
4. Upload entire directory to web server
5. Ensure `index.html` is set as default page

## File Size Recommendations

- Total CSS: < 100KB
- Total JS: < 50KB
- Each image: < 500KB (optimized)
- Total page weight: < 2MB per page

## Support & Maintenance

### Regular Updates:
- Update menu items seasonally
- Add new gallery images from events
- Collect and add client testimonials
- Update chef bio as needed

### Content Management:
All content is in plain HTML and can be edited with any text editor. No database or CMS required.

## Legal & Compliance

Before launch, consider adding:
- Privacy Policy page
- Terms of Service
- Cookie consent (if applicable)
- GDPR compliance (for EU visitors)

## Content Integrity

**Important**: This website contains ONLY the exact content provided:
- ✅ 8 specific menu dishes
- ✅ 3 specific services
- ✅ Chef Eric Brown's biography with Marcus Samuelsson and Jean-Georges references
- ✅ Tagline: "CATERING WITH RHYTHM"
- ✅ Empty testimonials section (placeholder only)
- ✅ Placeholder images (no stock or AI-generated samples)

**No additional content** has been invented, created, or assumed beyond the specifications provided.

## Getting Started

1. **Review all pages** in a web browser
2. **Update placeholders** with your actual content
3. **Add your images** to the `images/` directory
4. **Test the contact form** functionality
5. **Customize colors/fonts** if desired
6. **Deploy** to your hosting platform

## Questions or Issues?

For technical questions about the website implementation, refer to the inline HTML comments throughout the code. Each placeholder and customizable section is clearly marked.

---

**Built with attention to luxury aesthetics, user experience, and conversion optimization.**

© 2024 Break the Beet. All rights reserved.
