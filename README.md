# 🚀 Pranav Chopra - AI/ML Engineer & Full Stack Developer

> **🎯 Software Engineering Co-op Student at Western University**  
> **🌱 Available for Summer 2025 Full-Time Internships (May-August)**

---

## 📖 **About This Project**

This is my personal portfolio website showcasing my skills, experience, and projects. Built with modern web technologies, it features smooth animations, responsive design, and a unique PDF resume download system that demonstrates my technical capabilities.

---

## 🛠️ **Tech Stack & How It All Works Together**

### **Core Framework: Next.js 14**
- **App Router**: Modern file-based routing system that automatically creates routes from your file structure
- **Server-Side Rendering (SSR)**: Pre-renders pages on the server for better SEO and faster initial load
- **Built-in Optimization**: Automatic code splitting, image optimization, and performance enhancements
- **API Routes**: Built-in backend functionality for any future features you might add

### **Frontend: React 18**
- **Component Architecture**: Modular, reusable components that make the code maintainable
- **Hooks System**: Uses `useState`, `useEffect`, and custom hooks for state management and side effects
- **Virtual DOM**: Efficient rendering that only updates what's changed
- **JSX**: Combines JavaScript and HTML for intuitive component development

### **Styling: Tailwind CSS**
- **Utility-First Approach**: Pre-built classes for rapid development (e.g., `px-4`, `text-center`, `bg-purple-500`)
- **Responsive Design**: Built-in breakpoints (`sm:`, `md:`, `lg:`) for mobile-first development
- **Custom Animations**: Extends with custom CSS for scroll animations and micro-interactions
- **Purge Process**: Automatically removes unused CSS in production for smaller bundle sizes

### **PDF Generation: jsPDF**
- **Client-Side PDF Creation**: Generates professional PDFs directly in the browser
- **Dynamic Content**: Pulls data from your resume components to create always-updated PDFs
- **Custom Styling**: Applies your brand colors and typography to the PDF output
- **Fallback System**: If PDF generation fails, falls back to text download

### **Animation System: Custom Implementation**
- **Intersection Observer API**: Detects when elements come into view for scroll-triggered animations
- **CSS Transitions**: Smooth animations using Tailwind's transition classes and custom CSS
- **Performance Optimized**: Uses `will-change` and `transform` properties for GPU acceleration
- **Staggered Effects**: Elements animate in sequence for polished user experience

### **Particle Background: Canvas API**
- **HTML5 Canvas**: Creates an interactive particle system that responds to mouse movement
- **RequestAnimationFrame**: Smooth 60fps animation loop for the background effects
- **Performance Monitoring**: Automatically reduces particle count on slower devices
- **Accessibility**: Respects user's motion preferences for reduced motion

---

## 🔧 **How Everything Connects**

### **1. Page Structure & Routing**
```
app/
├── layout.jsx          # Global layout with metadata and fonts
├── page.jsx            # Main page that imports all components
└── globals.css         # Global styles and Tailwind directives
```

### **2. Component Architecture**
```
components/
├── hero-section.jsx    # Main landing section with resume button
├── about-section.jsx   # Skills and background information
├── experience-section.jsx # Work history and achievements
├── projects-section.jsx   # Portfolio projects with GitHub links
├── resume-modal.jsx    # PDF generation and download system
├── navigation.jsx      # Smooth scrolling navigation
├── particle-background.jsx # Interactive background effects
└── ui/                 # Reusable UI components (Button, Card, etc.)
```

### **3. Data Flow**
- **Resume Data**: Stored in `resume-modal.jsx` and used for both display and PDF generation
- **Component State**: Each component manages its own state for animations and interactions
- **Event Handling**: User interactions trigger animations, PDF generation, and navigation

### **4. Build Process**
- **Development**: `npm run dev` starts Next.js dev server with hot reload
- **Build**: `npm run build` creates optimized production bundle
- **Production**: `npm start` serves the built application

---

## 🚀 **Getting Started**

### **Prerequisites**
```bash
Node.js 18+ 
npm 8+
```

### **Installation & Development**
```bash
# Clone the repository
git clone https://github.com/prananchh/Pranav_Portfolio.git

# Navigate to project directory
cd Pranav_Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Build for Production**
```bash
# Create production build
npm run build

# Start production server
npm start
```

---

## 📱 **Responsive Design System**

- **Mobile-First**: Designed for mobile devices first, then enhanced for larger screens
- **Breakpoints**: Uses Tailwind's responsive utilities for consistent layouts
- **Touch-Friendly**: Optimized for touch interactions on mobile devices
- **Performance**: Optimized animations and effects for mobile performance

---

## 🎨 **Design System**

### **Color Palette**
- **Primary**: Purple (#8B5CF6) for main elements and accents
- **Secondary**: Pink to Orange gradient for buttons and highlights
- **Neutral**: Gray scale for text and backgrounds
- **Semantic**: Success, warning, and error colors for any future features

### **Typography**
- **System Fonts**: Uses native system fonts for optimal performance
- **Hierarchy**: Clear heading levels with consistent spacing
- **Readability**: Optimized line heights and contrast ratios

---

## 🔍 **Key Features Explained**

### **PDF Resume System**
1. **User clicks "Download Resume"** → Opens modal with resume content
2. **User clicks "Download"** → jsPDF library generates PDF from component data
3. **PDF downloads automatically** → User gets professional, formatted resume
4. **Fallback system** → If PDF fails, provides text download instead

### **Scroll Animations**
1. **Intersection Observer** → Detects when elements enter viewport
2. **Animation triggers** → Elements start with hidden state (opacity: 0, transform: translateY(30px))
3. **CSS transitions** → Smooth animation to visible state (opacity: 1, transform: translateY(0))
4. **Performance** → Uses CSS transforms and opacity for GPU acceleration

### **Responsive Navigation**
1. **Mobile detection** → Automatically switches to hamburger menu on small screens
2. **Smooth scrolling** → Uses `scrollIntoView` with smooth behavior
3. **Active states** → Highlights current section based on scroll position
4. **Accessibility** → Proper ARIA labels and keyboard navigation

---

## 📊 **Performance Optimizations**

- **Code Splitting**: Next.js automatically splits code by route
- **Image Optimization**: Built-in image optimization and lazy loading
- **CSS Purging**: Tailwind removes unused styles in production
- **Bundle Analysis**: Built-in bundle analyzer for optimization
- **Caching**: Automatic caching strategies for static assets

---

## 🔧 **Development Workflow**

1. **Component Development**: Create new components in the `components/` directory
2. **Styling**: Use Tailwind classes and extend with custom CSS when needed
3. **Testing**: Test on multiple devices and screen sizes
4. **Build**: Run `npm run build` to check for any build errors
5. **Deploy**: Push to GitHub and deploy to your preferred hosting platform

---

## 📞 **Connect With Me**

- **💼 LinkedIn**: [pchopr2](https://www.linkedin.com/in/pchopr2/)
- **🐙 GitHub**: [prananchh](https://github.com/prananchh)
- **📧 Email**: [pranav.chopra06@gmail.com](mailto:pranav.chopra06@gmail.com)
- **📱 Phone**: +1 (437) 213-4288

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

**Made with ❤️ by Pranav Chopra**

</div>