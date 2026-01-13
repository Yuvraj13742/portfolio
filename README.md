# ✨ Magical Portfolio - Harry Potter Themed

A dark, enchanting portfolio website inspired by the wizarding world of Harry Potter. Built with React, Vite, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.1.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🪄 Features

- **Custom Wand Cursor** - Smooth, animated wand cursor with magical click effects
- **Animated Dementors** - Floating, ghostly Dementors with skeletal hands and screaming faces
- **Particle System** - Golden floating particles creating a magical atmosphere
- **Smooth Animations** - Framer Motion powered animations throughout
- **Dark Theme** - Authentic Harry Potter aesthetic with gold accents
- **Fully Responsive** - Works beautifully on all devices
- **Resume Download** - Easy access to downloadable resume

## 🎨 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Powerful animation library
- **Lucide React** - Beautiful icon library

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd prot

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
prot/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Navigation.jsx
│   │   └── shared/
│   │       ├── MagicalButton.jsx
│   │       ├── ParticleSystem.jsx
│   │       ├── WandCursor.jsx
│   │       └── Dementors.jsx
│   ├── data/
│   │   ├── skills.js
│   │   └── projects.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── resume.pdf
└── package.json
```

## 🎭 Customization

### Update Personal Information

1. **Navigation** - Edit `src/components/Navigation.jsx` (line 37)
2. **Hero Section** - Edit `src/components/Hero.jsx`
3. **Skills** - Edit `src/data/skills.js`
4. **Projects** - Edit `src/data/projects.js`
5. **Social Links** - Edit `src/components/Contact.jsx`
6. **Resume** - Replace `public/resume.pdf` with your resume

### Color Scheme

Colors are defined in `tailwind.config.js`:
- `hp-dark` - Main background
- `hp-gold` - Primary accent
- `hp-parchment` - Text color

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite configuration
4. Deploy! 🚀

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by the Harry Potter universe created by J.K. Rowling
- Icons from [Lucide React](https://lucide.dev)
- Fonts from Google Fonts (Cinzel Decorative, Inter)

---

Made with ✨ magic and 💻 code by **Yuvraj Singh**
