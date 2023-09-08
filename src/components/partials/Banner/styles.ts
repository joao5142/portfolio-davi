import styled from "styled-components";

export const BannerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  z-index: -1;

  height: 800px;

  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 75%,
      #f7f9fd 80%
    ),
    url("/assets/images/banner-bg.svg");
  background-repeat: repeat;

  background-size: contain;
`;
