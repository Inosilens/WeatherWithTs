import React, { FC } from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {panagination} from "../pages/main/Main-slice";


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
  const dispatch = useDispatch()

  const pages: number[] = [1, 2, 3];
  const changePage = (number: number) => {
   dispatch(panagination(number))
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
