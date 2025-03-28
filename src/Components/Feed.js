import React, { useState, useEffect } from 'react';

const TrendingPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://20.244.56.144/test/users/1/posts`,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzMTQxNDkwLCJpYXQiOjE3NDMxNDExOTAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImUxNzNlODcxLWRjNDItNGNkZi1iODY5LWQ4NDA0NmRhOWNkZiIsInN1YiI6InByYXR5dXNoamFnZGlzaGJpcm9sZTIwMjJAdml0YmhvcGFsLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiJlMTczZTg3MS1kYzQyLTRjZGYtYjg2OS1kODQwNDZkYTljZGYiLCJjbGllbnRTZWNyZXQiOiJCYk1TU1JvUmRQYkNBQ0xpIiwib3duZXJOYW1lIjoiUHJhdHl1c2ggSmFnZGlzaCBCaXJvbGUiLCJvd25lckVtYWlsIjoicHJhdHl1c2hqYWdkaXNoYmlyb2xlMjAyMkB2aXRiaG9wYWwuYWMuaW4iLCJyb2xsTm8iOiIyMkJISTEwMTk0In0.bXrsFYQDFhEuX60alls47Tm-z2_M39v2TX3InNVbUDM',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          throw new Error("Data received is not an array");
        }
      } catch (err) {
        setError(err.message || 'An error occurred while fetching posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Trending Posts</h1>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Post ID: {post.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  User ID: {post.userId}
                </h6>
                <p className="card-text">{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPost;
