// src/styled.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
`;

export const PostCard = styled.div`
  background: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  flex: 1 1 calc(25% - 32px);
  box-sizing: border-box;
  margin-bottom: 16px;
`;

export const PostTitle = styled.h3`
  margin: 0 0 8px;
`;

export const PostBody = styled.p`
  margin: 0;
`;

export const UserName = styled.p`
  margin: 8px 0 0;
  font-weight: bold;
`;
