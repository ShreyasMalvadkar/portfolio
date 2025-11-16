# Shreyas Malvadkar - Portfolio

A modern, responsive React portfolio website showcasing my skills, experience, and projects as a Full Stack Developer. Built with a dark-first design approach featuring modern UI patterns, smooth animations, and interactive elements.

## Features

- 🎨 **Modern Dark Theme** - Tech-forward navy/cyan color palette with glassmorphism effects
- 📱 **Fully Responsive** - Optimized for all devices with mobile-first approach
- ⚡ **Smooth Animations** - Scroll-triggered animations, magnetic buttons, and 3D card tilts
- 🎯 **Single-Page Application** - Smooth scrolling navigation with active section tracking
- 🌈 **Modern UI Patterns** - Gradient accents, backdrop blur, and interactive hover effects
- 📧 **Contact Information** - Social links and contact cards with modern styling
- 🎭 **Developer Theme** - Terminal prompts, code blocks, and developer-focused aesthetics
- 🔍 **Project Filtering** - Interactive category filters for projects
- ✨ **Micro-interactions** - Magnetic buttons, 3D card tilts, and scroll animations

## Technologies Used

- **React 18.2.0** - Modern React with hooks
- **CSS3** - Custom properties, Flexbox, Grid, Animations
- **HTML5** - Semantic markup
- **Google Fonts** - Space Grotesk (headings), JetBrains Mono (code)
- **Intersection Observer API** - For scroll-triggered animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd new
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

3. Deploy:
```bash
npm run deploy
```

### Other Platforms

The built files in the `build` folder can be deployed to:
- Vercel
- Netlify
- AWS S3
- Any static hosting service

## Project Structure

```
src/
  components/
    Header.js          # Navigation header with glassmorphism
    Hero.js            # Hero/landing section with typing animation
    About.js           # Career summary
    Skills.js          # Technical skills with categories
    Experience.js      # Professional experience timeline
    Education.js       # Education details
    Projects.js        # Projects showcase with filtering
    Certificates.js    # Certificates & qualifications
    Interests.js       # Personal interests
    Contact.js         # Contact information cards
    TypingText.js      # Typing animation component
  hooks/
    useScrollAnimation.js    # Intersection Observer hook
    useMagneticButton.js     # Magnetic button effect hook
    use3DTilt.js            # 3D card tilt effect hook
  App.js              # Main app component
  App.css             # App styles
  index.js            # Entry point
  index.css           # Global styles & CSS variables
```

## Design System

### Color Palette
- **Navy Dark**: `#0a192f` - Primary background
- **Cyan Accent**: `#64ffda` - Primary accent color
- **Purple Accent**: `#a855f7` - Secondary accent color
- **Amber Accent**: `#f59e0b` - CTA button color

### Typography
- **Headings**: Space Grotesk (300, 400, 500, 600, 700)
- **Code**: JetBrains Mono (400, 500, 600)

### Key Features
- **Dark-First Design**: Modern navy background with cyan/purple accents
- **Glassmorphism**: Backdrop blur effects on cards and navigation
- **Scroll Animations**: Intersection Observer for fade-in effects
- **Interactive Elements**: Magnetic buttons, 3D card tilts, hover effects
- **Fluid Typography**: Responsive font sizing with `clamp()`

## Customization

To customize the portfolio with your own information:

1. **Personal Details**: Update in `src/components/Hero.js`
2. **Career Summary**: Modify in `src/components/About.js`
3. **Skills**: Update in `src/components/Skills.js`
4. **Experience**: Edit in `src/components/Experience.js`
5. **Education**: Change in `src/components/Education.js`
6. **Projects**: Update in `src/components/Projects.js`
7. **Certificates**: Modify in `src/components/Certificates.js`
8. **Interests**: Update in `src/components/Interests.js`
9. **Contact**: Update in `src/components/Contact.js`
10. **Colors**: Modify CSS variables in `src/index.css`
11. **Resume**: Replace `public/ShreyasMalvadkar_DEV_DotNetFullStack.pdf`

## Key Components

### Hero Section
- Terminal-style prompt (`$ whoami`)
- Typing animation for role titles
- Code block with syntax highlighting
- Magnetic button effects
- Scroll-triggered animations

### Projects Section
- Category filtering (All, Full Stack, Backend)
- 3D card tilt effects on hover
- Featured project badges
- Technology tags with hover effects

### Interactive Features
- **Magnetic Buttons**: Buttons follow cursor movement
- **3D Card Tilts**: Project cards tilt based on mouse position
- **Scroll Animations**: Elements fade in as you scroll
- **Hover Effects**: Enhanced visual feedback on interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized CSS animations using `transform` and `opacity`
- Hardware-accelerated transitions
- Lazy loading ready with Intersection Observer
- Minimal JavaScript for smooth performance

## License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Shreyas Malvadkar**
