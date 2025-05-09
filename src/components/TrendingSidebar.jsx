import React from 'react';
import { Link } from 'react-router-dom';
import newsData from '../../data/newsData'; // Adjust path if necessary
// Assuming styles are in App.css or a dedicated CSS file imported in App.jsx or Home.jsx

const TrendingSidebar = () => {
  // For simplicity, let's consider all articles for trending, or you can sort/filter
  const trendingArticles = newsData.slice(0, 5); // Display top 5 or so

  return (
    <aside className="trending-sidebar-container">
      <h3>Trending Articles</h3>
      <ul>
        {trendingArticles.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TrendingSidebar;
