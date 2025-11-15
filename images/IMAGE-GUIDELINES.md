# Break the Beet - Image Asset Guidelines

## 📁 Directory Structure

```
/images/
├── chef/                    # Chef photos and portraits
├── menu/                    # Individual dish photography
├── gallery/                 # Event and portfolio images
├── backgrounds/             # Hero and section backgrounds
├── icons/                   # Service icons and graphics
└── brand/                   # Logo and brand assets
```

---

## 🖼️ Image Specifications by Category

### **Chef Photos** (`images/chef/`)

| File | Dimensions | Format | Size Limit | Purpose |
|------|-----------|--------|------------|---------|
| `eric-brown-profile.jpg` | 900x900px min (1:1 ratio) | JPG/WebP | < 250KB | Main chef bio page portrait |
| `eric-brown-action.jpg` | 1200x800px (3:2 ratio) | JPG/WebP | < 300KB | Optional kitchen action shot |

**Requirements:**
- Professional portrait photography
- Clean, well-lit background
- High resolution for retina displays
- Neutral or kitchen setting preferred

---

### **Menu Dish Photos** (`images/menu/`)

**All dishes: 800x800px (1:1 square ratio)**

| File Name | Dish | Size Limit |
|-----------|------|------------|
| `mini-arepas.jpg` | Mini Arepas — Beef Stew & Queso Fresco | < 300KB |
| `crab-cake.jpg` | Crab Cake with Spicy Aioli | < 300KB |
| `yakitori-chicken.jpg` | Yakitori Chicken Skewers | < 300KB |
| `pani-puri.jpg` | Pani Puri Chicken Salad | < 300KB |
| `beef-sliders.jpg` | Beef Sliders | < 300KB |
| `mini-empanadas.jpg` | Mini Empanadas (Beef/Chicken/Cheese) | < 300KB |
| `endives-citrus.jpg` | Endives with Citrus & Goat Cheese | < 300KB |
| `caprese-skewers.jpg` | Caprese Skewers | < 300KB |

**Photography Guidelines:**
- Square crop (1:1 ratio) for grid consistency
- Clean white or neutral background
- Overhead or 45-degree angle preferred
- Sharp focus on food
- Natural lighting or soft artificial light
- Garnish and plating should be elegant and minimal

---

### **Gallery Images** (`images/gallery/`)

**Portfolio and event photography**

| Files | Dimensions | Format | Size Limit |
|-------|-----------|--------|------------|
| `event-01.jpg` through `event-12.jpg` | 1400x1000px (7:5 landscape) | JPG/WebP | < 400KB each |

**Content Recommendations:**
- Mix of event photography and food close-ups
- Capture intimate gathering atmosphere
- Table settings and presentation
- Chef at work (if available)
- Happy guests (with permission/releases)
- Detail shots of plating and garnishes

**Composition:**
- Landscape orientation (horizontal)
- High resolution for portfolio quality
- Consistent color grading across all images
- Professional photography strongly recommended

---

### **Background Images** (`images/backgrounds/`)

| File | Dimensions | Format | Size Limit | Purpose |
|------|-----------|--------|------------|---------|
| `hero-main.jpg` | 1920x1080px (16:9) | JPG/WebP | < 500KB | Homepage hero background |
| `section-divider.jpg` | 1920x400px (optional) | JPG/WebP | < 200KB | Section background texture |

**Guidelines:**
- Subtle, elegant textures
- Dark/muted tones for hero (text overlay)
- Avoid busy patterns
- Consider abstract food photography or elegant table settings
- Should not distract from text content

---

### **Icons** (`images/icons/`)

| File | Format | Size | Purpose |
|------|--------|------|---------|
| `service-intimate.svg` | SVG (vector) | < 10KB | Catering for Intimate Gatherings icon |
| `service-custom.svg` | SVG (vector) | < 10KB | Customized Menus icon |
| `service-chef.svg` | SVG (vector) | < 10KB | Private Chef Experiences icon |

**Design Specs:**
- Vector format (SVG) preferred for scalability
- Single color (#000000) for CSS control
- Simple, elegant line art style
- 64x64px artboard minimum
- Clean, minimal design matching luxury aesthetic

---

### **Brand Assets** (`images/brand/`)

| File | Format | Dimensions | Size Limit | Purpose |
|------|--------|-----------|------------|---------|
| `logo.svg` | SVG (vector) | Scalable | < 20KB | Primary logo (navigation, footer) |
| `logo.png` | PNG | 1000x300px | < 100KB | Fallback raster logo |
| `favicon.png` | PNG | 512x512px | < 50KB | Browser favicon/app icon |

**Logo Guidelines:**
- Vector format preferred for all uses
- Transparent background
- Black version for light backgrounds
- White version for dark backgrounds (if needed)
- Should include "BREAK THE BEET" text
- Clean, readable at all sizes

---

## 🎨 Format & Optimization

### **Recommended Formats**

1. **Primary:** WebP (modern browsers, superior compression)
2. **Fallback:** JPG (universal compatibility)
3. **Graphics/Icons:** SVG (vectors, logos, icons)
4. **Transparency:** PNG (only when necessary)

### **Optimization Targets**

| Image Type | Target Size | Max Size |
|------------|-------------|----------|
| Menu dishes | < 200KB | 300KB |
| Gallery | < 300KB | 400KB |
| Chef photos | < 200KB | 250KB |
| Backgrounds | < 400KB | 500KB |
| Icons (SVG) | < 5KB | 10KB |
| Logo | < 15KB | 20KB |

### **Optimization Tools**

**Online:**
- [TinyPNG](https://tinypng.com/) - JPG/PNG compression
- [Squoosh](https://squoosh.app/) - Advanced compression with WebP conversion
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

**Desktop:**
- ImageOptim (Mac)
- FileOptimizer (Windows)
- GIMP (cross-platform)

**Workflow:**
1. Resize images to exact specifications
2. Export at 80-85% quality (JPG)
3. Run through compression tool
4. Convert to WebP for modern browsers
5. Verify file size meets targets

---

## 📝 Naming Conventions

### **Rules:**
- ✅ All lowercase
- ✅ Hyphens for spaces (`beef-sliders.jpg`, not `beef_sliders.jpg`)
- ✅ Descriptive names (`mini-arepas.jpg`, not `IMG_1234.jpg`)
- ✅ No special characters or spaces
- ✅ Include dish/subject name in filename

### **Examples:**
```
✅ GOOD:
   mini-arepas.jpg
   eric-brown-profile.jpg
   event-intimate-dinner-01.jpg

❌ BAD:
   IMG_5832.jpg
   Dish Photo.jpg
   arepas_final_v2_FINAL.jpg
```

---

## ♿ Accessibility - Alt Text Templates

### **Menu Dishes:**
```html
alt="Mini Arepas topped with beef stew and queso fresco on a white plate"
alt="Golden crab cake garnished with spicy aioli and microgreens"
alt="Grilled yakitori chicken skewers with traditional glaze"
```

**Formula:** `[Dish name] [key visual details] [plating/presentation]`

### **Gallery Images:**
```html
alt="Intimate dinner party table setting with elegant plating"
alt="Chef Eric Brown preparing gourmet appetizers in kitchen"
alt="Beautifully arranged catering spread for private event"
```

**Formula:** `[Scene/subject] [key details] [context]`

### **Chef Photos:**
```html
alt="Chef Eric Brown professional portrait"
alt="Chef Eric Brown plating dishes in restaurant kitchen"
```

**Formula:** `Chef [Name] [context/action]`

---

## 📐 Responsive Images

### **Srcset Implementation:**
```html
<!-- Menu dishes with responsive images -->
<img
  src="images/menu/mini-arepas.jpg"
  srcset="images/menu/mini-arepas.jpg 800w,
          images/menu/mini-arepas@2x.jpg 1600w"
  sizes="(max-width: 768px) 100vw, 400px"
  alt="Mini Arepas topped with beef stew and queso fresco"
  width="800"
  height="800"
  loading="lazy"
>
```

### **WebP with Fallback:**
```html
<picture>
  <source srcset="images/menu/mini-arepas.webp" type="image/webp">
  <img src="images/menu/mini-arepas.jpg" alt="Mini Arepas">
</picture>
```

---

## 🚀 Implementation Checklist

### **Before Upload:**
- [ ] Images match exact dimensions specified
- [ ] Files are optimized and under size limits
- [ ] Filenames follow naming conventions
- [ ] Images are high quality and professional
- [ ] All dishes/subjects are clearly visible
- [ ] Lighting and color are consistent across sets

### **After Upload to GitHub:**
- [ ] Files are in correct directories
- [ ] All image paths in HTML are updated
- [ ] Alt text is descriptive and accurate
- [ ] Width/height attributes are set
- [ ] Lazy loading is enabled where appropriate
- [ ] Images display correctly on all pages

---

## 📤 GitHub Upload Instructions

### **Method 1: Web Interface (Easiest)**

1. Navigate to repository: `github.com/[username]/break-the-beet`
2. Click into `images/` directory
3. Choose target subfolder (e.g., `menu/`)
4. Click "Add file" → "Upload files"
5. Drag and drop images or click to browse
6. Add commit message: "Add [dish name] menu photo"
7. Click "Commit changes"

### **Method 2: Git Command Line**

```bash
# Navigate to repository
cd break-the-beet

# Add images to correct directory
cp ~/Downloads/mini-arepas.jpg images/menu/

# Add to git
git add images/menu/mini-arepas.jpg

# Commit with descriptive message
git commit -m "Add Mini Arepas menu photo"

# Push to GitHub
git push origin main
```

### **Method 3: GitHub Desktop**

1. Open GitHub Desktop
2. Select "break-the-beet" repository
3. Drag image files into correct `/images/` subdirectory
4. Files will appear in "Changes" panel
5. Add commit message
6. Click "Commit to main"
7. Click "Push origin"

---

## 🔄 Replacing/Updating Images

### **Same Filename (Recommended):**
1. Upload new image with **exact same filename**
2. Commit changes
3. Image will automatically update on website (may need cache clear)

### **Different Filename:**
1. Upload new image
2. Update HTML file with new filename
3. Remove old image from repository
4. Commit all changes together

---

## 📊 Git LFS (Large File Storage)

### **When to Use:**
If total image folder exceeds **1GB**, consider Git LFS:

```bash
# Install Git LFS
git lfs install

# Track image files
git lfs track "images/**/*.jpg"
git lfs track "images/**/*.png"
git lfs track "images/**/*.webp"

# Add and commit
git add .gitattributes
git commit -m "Configure Git LFS for images"
```

### **GitHub LFS Limits:**
- Free: 1GB storage, 1GB bandwidth/month
- Paid plans available for larger needs

---

## 🎯 Quality Standards

### **Professional Photography Checklist:**
- ✅ Sharp focus (no blur)
- ✅ Proper lighting (no harsh shadows)
- ✅ Correct white balance (accurate colors)
- ✅ Clean composition (no distracting elements)
- ✅ Appropriate depth of field
- ✅ Consistent style across all images
- ✅ High resolution (retina-ready)

### **Before/After Example:**

**❌ Avoid:**
- Smartphone photos with poor lighting
- Blurry or out-of-focus images
- Inconsistent backgrounds
- Over-edited/filtered images
- Low resolution images

**✅ Preferred:**
- Professional DSLR/mirrorless photography
- Controlled lighting setup
- Consistent editing style
- RAW format workflow
- Professional food styling

---

## 📞 Support & Resources

### **Image Editing:**
- Adobe Photoshop (professional)
- GIMP (free alternative)
- Canva (simple editing)
- Photopea (free online Photoshop alternative)

### **Stock Photography (if needed):**
- Unsplash (free, high-quality)
- Pexels (free)
- Adobe Stock (paid, professional)
- Getty Images (paid, premium)

**Note:** All placeholders should eventually be replaced with **original, owned photography** for authenticity.

---

## 🔐 Copyright & Licensing

### **Image Rights Checklist:**
- [ ] All images are owned or properly licensed
- [ ] Model releases obtained (if people visible)
- [ ] Photographer credits provided (if required)
- [ ] Commercial use rights confirmed
- [ ] No watermarks or copyright violations

### **Recommended:**
Hire professional food photographer for authentic, high-quality imagery that represents the brand accurately.

---

**Last Updated:** 2024
**Maintained By:** Break the Beet Development Team
