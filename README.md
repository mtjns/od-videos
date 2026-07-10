# Photography Academy - HTML & Tailwind CSS Version

A complete static HTML conversion of the Photography Academy website using Tailwind CSS and vanilla JavaScript.

## 📁 Project Structure

```
html-version/
├── index.html                 # Main homepage
├── css/
│   └── styles.css            # Custom CSS with Tailwind and animations
├── js/
│   └── main.js               # Vanilla JavaScript for interactivity
├── pages/
│   ├── privacy-policy.html   # Privacy Policy page
│   ├── terms-of-service.html # Terms of Service page
│   ├── refund-policy.html    # Refund Policy page
│   ├── course-schedule.html  # Course Schedule page
│   ├── gallery.html          # Student Gallery page
│   ├── gallery-detail.html   # Gallery detail/lightbox page
│   └── not-found.html        # 404 error page
└── assets/                    # Images (symlink to ../src/assets)
```

## 🎨 Features

- **Responsive Design**: Mobile-first design using Tailwind CSS utilities
- **No Build Tool Required**: Uses Tailwind CDN for styling
- **Smooth Animations**: CSS animations and JavaScript fade-in effects
- **Vanilla JavaScript**: No framework dependencies, pure JS for interactivity
- **Dark Mode Theme**: Modern dark theme with amber accent colors
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Scroll Effects**: Fade-in animations as sections come into view
- **Gallery Navigation**: Interactive gallery with detail pages

## 🚀 Getting Started

### Quick Start

1. Copy all the image assets to the `html-version/assets/` folder or create a symlink:

   ```bash
   # Windows (Command Prompt with admin)
   mklink /D "html-version\assets" "..\src\assets"
   
   # macOS/Linux
   ln -s ../src/assets html-version/assets
   ```

2. Open `html-version/index.html` in a web browser

3. Or use a local server (recommended):

   ```bash
   # Python 3
   python -m http.server 8000 --directory html-version
   
   # Node.js with http-server
   npm install -g http-server
   http-server html-version
   ```

4. Visit `http://localhost:8000` in your browser

### File Structure Details

#### `index.html`

- Main landing page with all sections
- Sections: Hero, About, Courses, Testimonials, Capture With Us, Gallery, Footer
- Uses Tailwind CDN + custom CSS
- Mobile hamburger menu

#### `pages/`

- **privacy-policy.html**: Privacy policy with company info
- **terms-of-service.html**: Terms of service for courses
- **refund-policy.html**: Refund policy with details
- **course-schedule.html**: All course offerings and workshops
- **gallery.html**: Full student gallery grid
- **gallery-detail.html**: Individual gallery item with details and navigation
- **not-found.html**: 404 error page

#### `js/main.js`

Features:

- Mobile menu toggle
- Smooth scroll navigation
- Scroll-to-top button
- Fade-in animations on scroll
- Newsletter form handling

#### `css/styles.css`

Features:

- CSS custom properties for theming
- Keyframe animations
- Tailwind utilities extensions
- Custom animation classes

## 🎯 How It Works

### Styling Approach

1. **Tailwind CDN**: Loaded in the `<head>` of each HTML file
2. **Custom CSS**: Overrides and extensions in `css/styles.css`
3. **CSS Variables**: HSL color values for theming

### JavaScript Interactivity

- Mobile menu toggle with hamburger animation
- Smooth scroll for anchor links
- Intersection Observer for fade-in animations
- Scroll-to-top button visibility
- Newsletter form submission handling

### Color Scheme

- **Background**: Black (HSL: 0 0% 0%)
- **Foreground**: White (HSL: 0 0% 100%)
- **Primary**: Amber (HSL: 43 96% 56%)
- **Muted**: Dark Gray (HSL: 0 0% 8%)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Uses Tailwind's responsive prefixes: `md:`, `lg:`, etc.

## 🔗 Navigation Links

All internal links are relative paths:

- From `index.html` to pages: `pages/privacy-policy.html`
- From pages back to home: `../index.html`
- From pages to sibling pages: Same directory

## ✨ Key Tailwind Classes Used

- `flex`, `grid`: Layout
- `text-*`, `bg-*`: Colors
- `px-*`, `py-*`: Spacing
- `rounded-*`: Borders
- `hover:`, `group-*`: Interactive states
- `opacity-*`, `transition-*`: Effects
- `md:`, `lg:`: Responsive

## 🎬 Animations

- **Marquee**: Horizontal scrolling testimonials and gallery
- **Fade-in-up**: Content appears on scroll
- **Spin-slow**: Logo rotation effect
- **Scale**: Hover effects on cards and images
- **Gradient**: Background gradients with transitions

## 📝 Customization

### Colors

Edit the CSS variables in `css/styles.css` `:root` section:

```css
:root {
    --primary: 43 96% 56%;  /* Change to your color */
}
```

### Animations

Modify or add animations in `css/styles.css`:

```css
@keyframes fade-in-up {
    /* Customize timing and effects */
}
```

### Content

Edit text directly in the HTML files. All content is structured in semantic HTML.

## 📦 Dependencies

- **Tailwind CSS** (via CDN): <https://cdn.tailwindcss.com>
- **No server required**: Runs as static HTML files

## ✅ Checklist for Deployment

- [ ] Replace placeholder content with real content
- [ ] Copy all image assets to `assets/` folder
- [ ] Update contact information in footer
- [ ] Customize colors if needed
- [ ] Test all links and navigation
- [ ] Test on mobile devices
- [ ] Optimize images
- [ ] Set up web hosting

## 🌐 Deployment Options

1. **Static Hosting**: Netlify, Vercel, GitHub Pages
2. **Traditional Hosting**: Any web server (Apache, Nginx)
3. **S3 + CloudFront**: AWS static site hosting
4. **Local Server**: Python, Node.js, or any HTTP server

## 🐛 Troubleshooting

### Images not loading

- Check the image paths are correct relative to HTML files
- Ensure assets are in the `assets/` folder
- Use relative paths: `../assets/image.jpg` from pages

### Styles not applying

- Ensure Tailwind CDN script is in `<head>`
- Check browser cache (Ctrl+Shift+Delete)
- Verify custom CSS file is linked

### Mobile menu not working

- Check that `js/main.js` is linked in HTML
- Verify browser console for JavaScript errors

## 📄 License

This is a template project. Customize as needed.

## 🎓 About This Project

Converted from a React + TypeScript project to pure HTML + CSS + JavaScript for better performance and simpler deployment. All functionality preserved, no framework dependencies.


locally run
bundle exec jekyll serve --livereload --host 0.0.0.0 --baseurl "" --force_polling