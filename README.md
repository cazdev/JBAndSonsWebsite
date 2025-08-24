# JB And Sons Website

A modern business website built with Vue 3 and Vite, deployed on GitHub Pages.

<!-- Deployment trigger: 2025-08-24 -->

## 🚀 Live Site

Visit the live website at: [https://cazdev.github.io/JBAndSonsWebsite/](https://cazdev.github.io/JBAndSonsWebsite/)

## 📋 Features

- Vue 3 with Composition API
- Vue Router for navigation
- Responsive design
- Custom fonts and styling
- Automatic deployment to GitHub Pages

## 🛠️ Development

### Prerequisites

- Node.js (version 16 or higher)
- npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/cazdev/JBAndSonsWebsite.git
cd JBAndSonsWebsite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with the production build.

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

Every push to the `main` branch will automatically:
1. Build the project
2. Deploy to GitHub Pages
3. Make the site available at the GitHub Pages URL

### Manual Deployment

If you need to deploy manually:

1. Ensure you have the `gh-pages` package installed:
```bash
npm install --save-dev gh-pages
```

2. Run the deploy script:
```bash
npm run deploy
```

## 📁 Project Structure

```
├── src/
│   ├── components/          # Vue components
│   ├── assets/             # Static assets (images, fonts, CSS)
│   ├── composables/        # Vue composables
│   ├── App.vue            # Root component
│   └── main.js            # Application entry point
├── .github/workflows/      # GitHub Actions workflows
├── dist/                  # Production build (generated)
└── public/               # Public assets
```

## 🔧 Configuration

The project is configured for GitHub Pages deployment with:
- Base path set to `/JBAndSonsWebsite/`
- Vue Router configured for the correct base URL
- GitHub Actions workflow for automatic deployment

## 📝 License

ISC License
