import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6; /* gray-100 */
`;

export const Card = styled.div`
  background-color: white;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  min-height: 500px;
  min-width: 800px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: 1.125rem;
  margin-bottom: 2rem;
`;