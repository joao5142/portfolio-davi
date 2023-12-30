import { ColorType } from "@/styles/theme";
import styled, { css } from "styled-components";

export const SliderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  border-radius: 16px;

  margin-bottom: 5rem;

  @media (max-width: 600px) {
    & {
      border-radius: 0px;

      grid-template-columns: 1fr;
    }
  }
`;

interface IColor {
  color: string;
}
export const SliderInfo = styled.div<IColor>`
  padding: 4rem;
  background: ${(props) => props.color};

  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;

  display: flex;
  align-items: flex-end;

  @media (max-width: 600px) {
    & {
      border-top-right-radius: 16px;
      border-top-left-radius: 16px;
    }
  }
`;
export const SliderQuantityContainer = styled.div`
  display: flex;
  gap: 0.4rem;
`;

interface ISlideBagde {
  active: boolean;
  bgActive?: ColorType;
  bg?: ColorType;
}

export const SliderBagde = styled.div<ISlideBagde>`
  width: 1.0625rem;
  height: 0.3125rem;
  border-radius: 0.625rem;
  background: ${(props) => (props.bg ? props.bg : "rgba(255, 255, 255, 0.2)")};

  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      width: 3.75rem;
      height: 0.3125rem;
      background: ${props.bgActive
        ? props.theme.colors[props.bgActive]
        : "#fff"};
    `}
`;

export const SliderImages = styled.div<IColor>`
  background: ${(props) => props.color};
  padding: 2rem;

  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 3.5rem;

  & > * {
    flex: 1;
    transition: 0.5s;
  }

  img {
    width: 100%;
    height: auto;
  }
`;
