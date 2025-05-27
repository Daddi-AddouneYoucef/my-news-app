import React from 'react';
import { Link } from 'react-router-dom';
import newsData from '../data/newsData';
import TrendingSidebar from '../src/components/TrendingSidebar';
import './Home.css';

const Home = () => {
  return (
    <section className="home-container">
      <main className="main-content">
        <h1 className="main-heading">Latest Articles</h1>
        <div className="article-list">
          {newsData.map((article) => (
            <article key={article.id} className="article-card">
              {article.thumbnail && (
                <Link to={`/article/${article.id}`}>
                  <img
                    src={`/${article.thumbnail}`}
                    alt={article.title}
                    className="article-thumbnail"
                  />
                </Link>
              )}
              <div className="article-card-content">
                <Link to={`/article/${article.id}`} className="article-title-link">
                  <h2>{article.title}</h2>
                </Link>
                <p className="article-summary">{article.summary}</p>
                <div className="article-meta">
                  <span>{new Date(article.publicationDate).toLocaleDateString()}</span>
                  <span>{article.viewCount} views</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <TrendingSidebar />
    </section>
  );
};

export default Home;
