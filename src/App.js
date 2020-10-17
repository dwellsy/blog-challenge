import React from 'react';
import './App.css';
import { BlogList } from './components/BlogList';
import Hero from './components/Hero';
import { Loading } from './components/Loading';

import { request } from 'graphql-request';
function App() {
  const [ posts, setPosts ] = React.useState(null);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const posts = await request('https://api-us-east-1.graphcms.com/v2/ckg9mtbbmnw3a01yy0ir1fnkv/master', `
        { posts { author { biography id name picture { id url size } } content { html markdown text } coverImage { id url
          fileName } slug title tags category } }
        `
      );

      console.log(posts.posts);
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  if(!posts)
    return <Loading />;

  return (
    <div className="App">
      <Hero post={posts.posts[0]} />
      <BlogList posts={posts.posts} />
    </div>
  );
}

export default App;
