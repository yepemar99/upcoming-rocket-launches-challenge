import styled from "styled-components";

const Header = () => {
  return (
    <HeaderS>
      <ImgS className="logoHeader">
        <img src="/header.png" alt="Logo" />
      </ImgS>
    </HeaderS>
  );
};

export default Header;

const HeaderS = styled.div`
  width: 100%;
  padding: 0px 40px;
`;

const ImgS = styled.div`
  width: 150px;
  height: 150px;
`;
