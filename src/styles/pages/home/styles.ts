import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  margin-top: 6rem;
`;
export const MainContainer = styled.main``;

export const SectionHero = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  padding: 2rem 0;

  & :nth-child(2) {
    display: flex;

    justify-content: center;
  }
`;

export const SectionHeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SectionHeroTitleName = styled.strong`
  font-size: ${(props) => props.theme.fontSizes["xl"]};

  background: linear-gradient(270deg, #a3ceff 0%, #64adff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-weight: 400;
`;
export const SectionHeroTitleRole = styled.strong`
  font-size: ${(props) => props.theme.fontSizes["xxl"]};

  background: linear-gradient(270deg, #a3ceff 0%, #64adff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-weight: 700;
`;

export const SectionProjects = styled.section``;
export const SectionHabilities = styled.section``;

export const SectionHabilitiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;

  @media (max-width: 960px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 520px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

export const SectionSkills = styled.section``;

export const SectionSkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 3rem;
`;

export const FooterContainer = styled.div`
  background: url("/assets/images/footer.png");
  background-repeat: no-repeat;
  background-size: cover;

  padding: 6rem 4rem;
  margin: 100px 0px;

  border-radius: 1rem;
`;

export const FooterSocials = styled.div`
  display: flex;
  gap: 20px;
`;
