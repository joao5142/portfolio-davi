import { Button } from "@/components/ui/Button";

import {
  HeaderContent,
  HeaderContainer,
  HeaderNameText,
  HeaderNavList,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderNameText>Davi Guerra</HeaderNameText>
        <HeaderNavList>
          <li>
            <a href="#projects">Projetos reais</a>
          </li>
          <li>
            {" "}
            <a href="#habilities">Diferenciais</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
          <li>
            <a href="/assets/curriculo.pdf" target="_blank">
              <Button variant="primary">Sobre mim</Button>
            </a>
          </li>
        </HeaderNavList>
      </HeaderContent>
    </HeaderContainer>
  );
}
