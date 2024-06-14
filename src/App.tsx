// src/App.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, PostCard, PostTitle, PostBody, UserName } from './styled';
import { Post, User } from './types';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<{ [key: number]: User }>({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts');
        setPosts(response.data.posts.slice(0, 10)); // Get first 10 posts
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchUser = async (userId: number) => {
      try {
        const response = await axios.get(`https://dummyjson.com/users/${userId}`);
        setUsers((prevUsers) => ({
          ...prevUsers,
          [userId]: response.data,
        }));
      } catch (error) {
        console.error(`Error fetching user ${userId}:`, error);
      }
    };

    posts.forEach((post) => {
      if (!users[post.userId]) {
        fetchUser(post.userId);
      }
    });
  }, [posts, users]);

  return (
    <Container>
      {posts.map((post) => (
        <PostCard key={post.id}>
          <PostTitle>{post.title}</PostTitle>
          <PostBody>{post.body}</PostBody>
          {users[post.userId] && (
            <UserName>
              {users[post.userId].firstName} {users[post.userId].lastName}
            </UserName>
          )}
        </PostCard>
      ))}
    </Container>
  );
};

export default App;
