import React, { FC } from "react";
import { useActions } from "../hooks/useActions";
import styled from "styled-components";
const Link = styled.a`
  text-decoration: none;
  color: #367ede;
`;
const ListItem = styled.li`
  display: inline;
  margin: 10px;
  text-decoration: none;
`;
export const Panagination: FC = () => {
  const { panaginationActions } = useActions();

  const pages: number[] = [1, 2, 3];
  const changePage = (number: number) => {
    panaginationActions(number);
  };
  return (
    <ul>
      {pages.map((number, index) => (
        <ListItem key={index}>
          <Link onClick={() => changePage(number)} href="#">
            {number}
          </Link>
        </ListItem>
      ))}
    </ul>
  );
};
