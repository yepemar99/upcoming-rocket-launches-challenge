import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  launch: any;
}

const LaunchItem: React.FC<IProps> = ({ launch }) => {
  return (
    <LaunchItemS>
      <Link
        to={`/launch/${launch.id}`}
        className="linkItem"
        style={{ textDecoration: "none" }}
      >
        <ContentS>{launch.name}</ContentS>
      </Link>
    </LaunchItemS>
  );
};

export default LaunchItem;

const LaunchItemS = styled.div`
  max-width: 400px;
  flex: 100%;
  padding: 30px;
  transition: transform 0.2s;
  .linkItem {
    text-decoration: none;
  }
  &:hover {
    transform: scale(0.98);
  }
`;

const ContentS = styled.div`
  border-radius: 6px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  color: var(--white);
  padding: 15px;
  cursor: pointer;
  :hover {
    background: var(--dark);
  }
`;
