import styled from "styled-components";

export const StyledNavbar = styled.header`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
`;

export const StyledMainMenu = styled.ul`
  display: flex;
  margin-top: 40px;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const StyledListItem = styled.li`
  padding: 0 10px;
  list-style: none;
`;
