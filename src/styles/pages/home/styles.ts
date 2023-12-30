import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

  @media (max-width: 700px) {
    & {
      grid-template-columns: 1fr;

      img {
        max-width: 100%;
        width: 100%;
        height: auto;
      }
    }
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

  @media (max-width: 500px) {
    & {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export const SectionMoments = styled.section``;
export const SectionMomentsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;

  img {
    width: 100%;
    height: 28.375rem;
    object-fit: cover;

    border-radius: 1rem;
  }
  img:nth-child(1) {
    grid-column: 1/3;
  }
  img:nth-child(2) {
    grid-column: 3/-1;
  }
  img:nth-child(3) {
    grid-column: 1/4;
  }
  img:nth-child(4) {
    grid-column: 4/-1;
  }

  @media (max-width: 600px) {
    & {
      grid-template-columns: 1fr;

      img {
        width: 100%;
      }

      img:nth-child(1) {
        grid-column: 1;
      }

      img:nth-child(2) {
        grid-column: 1;
      }
      img:nth-child(3) {
        grid-column: 1;
      }

      img:nth-child(4) {
        grid-column: 1;
      }
    }
  }
`;

export const FooterContainer = styled.div`
  background: url("/assets/images/footer.png");
  background-repeat: no-repeat;
  background-size: 100% 400px;

  padding: 6rem 4rem;
  margin-top: 100px;

  border-radius: 0px;
`;

export const FooterSocials = styled.div`
  display: flex;
  gap: 20px;
`;
