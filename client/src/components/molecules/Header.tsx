import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Title from '../atoms/Title';

const StyledHeader = styled.div`
  position: fixed;
  display: flex;
  height: 110px;
  width: 70%;
  background: transparent;
  border-bottom: 2px solid white;
  justify-content: space-between;
  padding-left: 15%;
  padding-right: 15%;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title value="Lucky Data" />
      <div
        id="HeaderButtonGroup"
        style={{
          display: 'float',
          marginTop: 'auto',
          marginBottom: 'auto',
          width: '420px',
          minWidth: '420px',
        }}
      >
        <Button color="#23374D">MEMBER</Button>
        <Button color="#23374D">PROJECT</Button>
        <Button color="#23374D">HISTORY</Button>
        <Button color="#23374D">LOGIN</Button>
      </div>
    </StyledHeader>
  );
};

export default Header;