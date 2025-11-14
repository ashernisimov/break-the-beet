# Break the Beet - Content Placeholder Guide

## ⚠️ STRICT CONTENT CONTROL

This website has been built with **strict adherence** to provided content only. All unspecified content is marked as **[PLACEHOLDER]** and must be completed before deployment.

---

## 📋 Content Provided (Already Implemented)

### ✅ Brand
- **Name**: Break the Beet
- **Tagline**: CATERING WITH RHYTHM

### ✅ Menu (8 Exact Dishes)
1. **Mini Arepas** — Beef Stew & Queso Fresco
2. **Crab Cake with Spicy Aioli**
3. **Yakitori Chicken Skewers**
4. **Pani Puri Chicken Salad**
5. **Beef Sliders**
6. **Mini Empanadas** — Beef/Chicken/Cheese
7. **Endives with Citrus & Goat Cheese**
8. **Caprese Skewers**

### ✅ Services (3 Exact Services)
1. **Catering for Intimate Gatherings**
2. **Customized Menus**
3. **Private Chef Experiences**

### ✅ Chef
- **Name**: Eric Brown
- **References**: Marcus Samuelsson, Jean-Georges

---

## 🔴 Required Placeholders (Must Complete)

### 1. DISH DESCRIPTIONS
**Location**: `menu.html` (lines 61, 70, 79, 88, 106, 115)

**Required for**:
- Crab Cake with Spicy Aioli
- Yakitori Chicken Skewers
- Pani Puri Chicken Salad
- Beef Sliders
- Endives with Citrus & Goat Cheese
- Caprese Skewers

**Format**: 1-2 sentence description per dish

---

### 2. SERVICE DESCRIPTIONS
**Location**: `services.html` (lines 50, 57, 64)

**Required for**:
- Catering for Intimate Gatherings (precise description)
- Customized Menus (precise description)
- Private Chef Experiences (precise description)

**Format**: 2-3 paragraph detailed description per service

---

### 3. CHEF BIOGRAPHY
**Location**: `chef.html` (lines 51-63)

**Required**:
- Chef title/role
- Biography paragraph 1
- Biography paragraph 2
- Biography paragraph 3
- Specific Marcus Samuelsson credential/training details
- Specific Jean-Georges credential/training details
- Additional credentials
- Chef philosophy/quote heading
- Chef philosophy or quote

**Format**: Professional biography with credentials

---

### 4. IMAGES

#### Menu Dish Images (8 required)
**Location**: `menu.html`
**Format**: JPG/PNG, recommended 600x600px
**Files needed**:
```
images/mini-arepas.jpg
images/crab-cake.jpg
images/yakitori-chicken.jpg
images/pani-puri.jpg
images/beef-sliders.jpg
images/mini-empanadas.jpg
images/endives-citrus.jpg
images/caprese-skewers.jpg
```

#### Gallery Images (12 required)
**Location**: `gallery.html`
**Format**: JPG/PNG, minimum 1200px width, optimized < 500KB
**Files needed**:
```
images/gallery-01.jpg through images/gallery-12.jpg
```

#### Chef Photo (1 required)
**Location**: `chef.html`
**Format**: JPG/PNG, recommended 800x1200px (portrait)
**File needed**:
```
images/chef-eric-brown.jpg
```

---

### 5. CONTACT INFORMATION
**Location**: All pages footer + `contact.html`

**Required**:
- Email address
- Phone number
- Full address

**Replace**:
- `[PLACEHOLDER: Email]`
- `[PLACEHOLDER: Phone]`
- `[PLACEHOLDER: Address]`

---

### 6. SOCIAL MEDIA LINKS
**Location**: All pages footer

**Required**:
- Instagram URL
- Facebook URL
- Twitter URL

**Replace**:
- `[PLACEHOLDER: Instagram URL]`
- `[PLACEHOLDER: Facebook URL]`
- `[PLACEHOLDER: Twitter URL]`

---

### 7. COPY / MARKETING TEXT
**Location**: Various pages

**Required**:
- Hero description/tagline (`index.html` line 38)
- Section subtitles (multiple pages)
- Section headings (multiple pages)
- Brand introduction text (`index.html` line 54)
- CTA headings (all pages)
- CTA descriptions (all pages)
- Footer description (all pages)
- Philosophy/quote heading (`chef.html` line 76)

---

### 8. TESTIMONIALS
**Location**: `contact.html` (lines 157-169)

**Status**: Empty section placeholder
**Required**: Real client testimonials when available

**Format** (when adding):
```html
<div class="testimonials-grid">
  <div class="testimonial-card">
    <p>"[Client quote]"</p>
    <p>— [Client name], [Event type]</p>
  </div>
</div>
```

---

## 🔍 How to Find Placeholders

### Method 1: Search for `[PLACEHOLDER:`
```bash
grep -r "\[PLACEHOLDER:" *.html
```

### Method 2: Manual Review
Open each HTML file and search for `[PLACEHOLDER:`

---

## ✏️ How to Replace Placeholders

### For Text Content:
1. Open the HTML file
2. Find `[PLACEHOLDER: Description]`
3. Replace entire placeholder including brackets with real content
4. Save file

### For Images:
1. Add image file to `images/` directory
2. Find the placeholder div: `<div class="menu-image placeholder">Image Placeholder</div>`
3. Replace with: `<div class="menu-image"><img src="images/filename.jpg" alt="Description"></div>`
4. Save file

---

## 📐 Design Specifications

### Color Palette (Quiet Luxury)
```css
Black: #000
White: #fff
Charcoal: #2c2c2c
Gray: #6b6b6b
Light Gray: #e8e8e8
Gold (accent): #b8956a
Copper (accent): #c4936d
```

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Spacing
- Mobile-first responsive design
- Breakpoints: 480px, 768px, 1024px
- Generous whitespace maintained

---

## 🚀 Pre-Launch Checklist

- [ ] All 8 dish descriptions added
- [ ] All 3 service descriptions added
- [ ] Chef biography completed
- [ ] Marcus Samuelsson credential details added
- [ ] Jean-Georges credential details added
- [ ] All 8 menu dish images added
- [ ] All 12 gallery images added
- [ ] Chef photo added
- [ ] Email address updated (all pages)
- [ ] Phone number updated (all pages)
- [ ] Full address updated (all pages)
- [ ] Instagram URL added (all pages)
- [ ] Facebook URL added (all pages)
- [ ] Twitter URL added (all pages)
- [ ] All hero/section copy completed
- [ ] All CTA text completed
- [ ] Footer descriptions added
- [ ] Chef philosophy/quote added
- [ ] Testimonials added (if available)
- [ ] All images optimized (< 500KB each)
- [ ] All pages tested on mobile
- [ ] All pages tested on desktop
- [ ] Form submission tested
- [ ] All links working

---

## 📁 File Structure
```
/break-the-beet/
├── index.html          (Home page)
├── menu.html           (8 dishes)
├── services.html       (3 services)
├── chef.html           (Eric Brown)
├── gallery.html        (12 image slots)
├── contact.html        (Form + testimonials)
├── css/
│   └── main.css        (Optimized styles)
├── js/
│   └── app.js          (Optimized JavaScript)
└── images/             (All images go here)
```

---

## ⚡ Performance Notes

### Optimizations Applied:
- Minified CSS (single file, < 15KB)
- Optimized JavaScript (< 5KB)
- Mobile-first responsive design
- Lazy-load ready for images
- SEO meta tags included
- Accessibility features built-in

### Before Deployment:
1. Compress all images (TinyPNG, ImageOptim)
2. Test all forms
3. Verify all links
4. Run Lighthouse audit
5. Test on multiple devices/browsers

---

## 📞 Support

For technical questions about placeholders or implementation, review the HTML comments in each file. Every placeholder is clearly marked with `[PLACEHOLDER: Description]` format.

**No content has been invented, inferred, or created beyond what was explicitly provided in the original brief.**

---

© 2024 Break the Beet. All rights reserved.
