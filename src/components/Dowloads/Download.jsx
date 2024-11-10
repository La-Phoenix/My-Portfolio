import React from 'react';
import styled from 'styled-components';

const DownloadsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`;

const DownloadButton = styled.a`
  background-color: #0070f3;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  margin: 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

const Downloads = () => {
  return (
    <DownloadsContainer id="cv">
      <h2>Downloads</h2>
      <DownloadButton href="/files/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer">
        Download Resume
      </DownloadButton>
      <DownloadButton href="/files/certificate.pdf" 
        target="_blank" 
        rel="noopener noreferrer">
        Download Certificate
      </DownloadButton>
    </DownloadsContainer>
  );
};

export default Downloads;
