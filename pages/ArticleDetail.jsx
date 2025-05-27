import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import newsData from '../data/newsData';
import './ArticleDetail.css'; 

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [currentViews, setCurrentViews] = useState(null);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userReaction, setUserReaction] = useState(null);
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');


  useEffect(() => {
    const foundArticle = newsData.find((art) => art.id === parseInt(id));

    if (foundArticle) {
      setArticle(foundArticle);
      setCurrentViews(foundArticle.viewCount + 1);
      setLikes(foundArticle.likes || 0);
      setDislikes(foundArticle.dislikes || 0);
      setComments(foundArticle.comments || []);
    } else {
      console.error(`Article with ID ${id} not found.`);
      setArticle(null);
      setCurrentViews(null);
      setComments([]);
    }
  }, [id]);

  const handleLike = () => {
    if (userReaction === 'liked') {
      setLikes(likes - 1);
      setUserReaction(null);
    } else {
      if (userReaction === 'disliked') setDislikes(dislikes - 1);
      setLikes(likes + 1);
      setUserReaction('liked');
    }
  };

  const handleDislike = () => {
    if (userReaction === 'disliked') {
      setDislikes(dislikes - 1);
      setUserReaction(null);
    } else {
      if (userReaction === 'liked') setLikes(likes - 1);
      setDislikes(dislikes + 1);
      setUserReaction('disliked');
    }
  };

  const handleCommentChange = (e) => {
    setNewCommentText(e.target.value);
  };

  const handleAddComment = () => {
    if (newCommentText.trim() === '') return;
    const newComment = {
      id: Date.now(),
      user: 'Anonymous',
      text: newCommentText,
      timestamp: new Date().toISOString(),
    };
    setComments((prev) => [...prev, newComment]);
    setNewCommentText('');
  };

  if (!article) {
    return <div>...</div>;
  }

  return (
    <div className="article-detail-container">
      <article>
        <h1>{article.title}</h1>
        <div className="article-meta">
          <span>Published: {new Date(article.publicationDate).toLocaleDateString()}</span>
          <span>Views: {currentViews ?? '...'}</span>
        </div>
        {article.image || article.thumbnail ? (
          <img
            src={`/${article.image || article.thumbnail}`}
            alt={article.title}
            className="article-image"
          />
        ) : (
          <div className="image-placeholder">No Image Available</div>
        )}

        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>

      <section className="engagement-section">
        <div className="like-dislike">
          <button onClick={handleLike} disabled={userReaction === 'liked'}>
            👍 Like ({likes})
          </button>
          <button onClick={handleDislike} disabled={userReaction === 'disliked'}>
            👎 Dislike ({dislikes})
          </button>
        </div>

        <div className="comments-section">
          <h2>Comments</h2>

          {comments.length > 0 ? (
            <ul className="comments-list">
              {comments.map((comment) => (
                <li key={comment.id}>
                  <strong>{comment.user}:</strong> {comment.text}
                  <em> ({new Date(comment.timestamp).toLocaleString()})</em>
                </li>
              ))}
            </ul>
          ) : (
            <p>No comments yet.</p>
          )}

          <div className="add-comment">
            <h3>Add a Comment</h3>
            <textarea
              placeholder="Write your comment here..."
              value={newCommentText}
              onChange={handleCommentChange}
            />
            <button onClick={handleAddComment}>Submit Comment</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;
