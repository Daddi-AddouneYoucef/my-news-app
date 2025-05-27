# News Blog Website

A modern, responsive news blog built with React that features tech articles, dark/light theme toggling, and interactive engagement features.

## Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark/Light Theme**: Toggle between themes with automatic system preference detection
- **Article Management**: Browse articles with thumbnails, summaries, and metadata
- **Interactive Engagement**: Like/dislike articles and add comments
- **Trending Sidebar**: Displays popular articles for easy discovery
- **Article Detail Pages**: Full article content with engagement metrics

## Tech Stack

- **Frontend**: React 18 with React Router
- **Styling**: CSS3 with CSS custom properties for theming
- **State Management**: React hooks (useState, useEffect)
- **Data**: Static JavaScript data (no backend required)

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── ThemeToggle.jsx       # Theme switching component
│   │   └── TrendingSidebar.jsx   # Sidebar with trending articles
│   ├── App.jsx                   # Main app component with routing
│   ├── App.css                   # Global styles and theme variables
│   ├── index.css                 # Base styles and CSS reset
│   └── main.jsx                  # React app entry point
├── pages/
│   ├── Home.jsx                  # Homepage with article list
│   ├── Home.css                  # Homepage-specific styles
│   ├── ArticleDetail.jsx         # Individual article page
│   └── ArticleDetail.css         # Article detail page styles
├── data/
│   └── newsData.js              # Static article data
└── public/                      # Static assets (images, icons)
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

## Usage

### Browsing Articles
- Visit the homepage to see all available articles
- Click on article titles or images to read full content
- Use the trending sidebar to discover popular articles

### Theme Switching
- Click the sun/moon icon in the top-right corner to toggle themes
- Theme preference is automatically saved and remembered

### Article Interaction
- Like or dislike articles on detail pages
- Add comments to engage with content
- View article statistics (views, likes, publication date)

## Customization

### Adding New Articles
Edit `data/newsData.js` to add new articles:

```javascript
{
  id: 9,
  title: "Your Article Title",
  thumbnail: "your-image.jpg",
  image: "your-image.jpg",
  content: `<h2>Your HTML Content</h2><p>Article body...</p>`,
  summary: "Brief article summary",
  viewCount: 0,
  likes: 0,
  dislikes: 0,
  comments: [],
  publicationDate: "2024-01-01",
  category: "Technology"
}
```

### Styling Customization
- Edit CSS custom properties in `src/App.css` for theme colors
- Modify component-specific styles in their respective CSS files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.