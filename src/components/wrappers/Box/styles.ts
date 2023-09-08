import styled from "styled-components";
import { IBox } from ".";

export const BoxWrapperContainer = styled.div<IBox>`
  margin-top: ${(props) => props.marginTop || 0}px;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  margin-left: ${(props) => props.marginLeft || 0}px;
  margin-right: ${(props) => props.marginRight || 0}px;
`;
