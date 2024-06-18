import { Button } from "@/components/ui/Button";

import {
  HeaderContent,
  HeaderContainer,
  HeaderNameText,
  HeaderNavList,
  ListIcon,
  CloseIcon,
} from "./styles";
import { List } from "phosphor-react";
import { useRef, useState } from "react";
export function Header() {
  const navRef = useRef<HTMLUListElement>(null);

  function handleToggleeNavMenu() {
    if (navRef.current) {
      navRef.current.classList.toggle("show");
    }
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderNameText>Davi Guerra</HeaderNameText>

        <HeaderNavList ref={navRef}>
          <CloseIcon onClick={handleToggleeNavMenu} size={28} />
          <li onClick={handleToggleeNavMenu}>
            <a href="#projects">Projetos reais</a>
          </li>
          <li onClick={handleToggleeNavMenu}>
            {" "}
            <a href="#habilities">Diferenciais</a>
          </li>
          <li onClick={handleToggleeNavMenu}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={handleToggleeNavMenu}>
            <a href="#moments">Momentos</a>
          </li>
          <li onClick={handleToggleeNavMenu}>
            <a href="#contact">Contato</a>
          </li>
          <li>
            <a href="/assets/curriculo_daviguerra.pdf" target="_blank">
              <Button variant="primary">Sobre mim</Button>
            </a>
          </li>
        </HeaderNavList>
        <ListIcon onClick={handleToggleeNavMenu} size={32} color="#84beff" />
      </HeaderContent>
    </HeaderContainer>
  );
}
