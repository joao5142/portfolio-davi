import { Banner } from "@/components/partials/Banner";
import { Header } from "@/components/partials/Header";
import { Text } from "@/components/ui/Text";
import { Box } from "@/components/wrappers/Box";
import {
  Container,
  FooterContainer,
  FooterSocials,
  MainContainer,
  SectionHabilities,
  SectionHabilitiesContainer,
  SectionHero,
  SectionHeroTitle,
  SectionHeroTitleName,
  SectionHeroTitleRole,
  SectionMoments,
  SectionMomentsContainer,
  SectionProjects,
  SectionSkills,
  SectionSkillsContainer,
} from "@/styles/pages/home/styles";

import Image from "next/image";
import { Button } from "../components/ui/Button/index";
import { ISlide, Slider } from "@/components/partials/Slider";
import { CardHability } from "@/components/partials/CardHability";
import { Skill } from "@/components/partials/Skill";
import {
  Books,
  Brain,
  ChatCircleDots,
  DiamondsFour,
  FileText,
  Palette,
  TextAa,
  User,
} from "phosphor-react";

const slides = [
  {
    name: "Revisa Enem Aluno",
    description: "+250 mil usuários ativos, Destaque no mercado.",
    primaryColor: "#F2F5FC",
    secondaryColor: "#CED4F2",
    titleColor: "black",
    textColor: "gray-200",
    bagedBgActive: "blue-700",
    bagedBg: "#ccd4fb",
    imageWidth: 680,
    imageHeight: 450,
    images: [
      ["/assets/images/projects/revisa-aluno/1.png"],
      ["/assets/images/projects/revisa-aluno/2.png"],
      ["/assets/images/projects/revisa-aluno/3.png"],
    ],
    emphasis: true,
  },
  ,
  {
    name: "Nosso Bairro",
    description: "O seu bairro conectado. Tudo na palma da sua mão.",
    primaryColor: "#00003d",
    secondaryColor: "#000029",
    images: [
      [
        "/assets/images/projects/nosso-bairro/1.png",
        "/assets/images/projects/nosso-bairro/2.png",
      ],
      [
        "/assets/images/projects/nosso-bairro/3.png",
        "/assets/images/projects/nosso-bairro/4.png",
      ],
      [
        "/assets/images/projects/nosso-bairro/5.png",
        "/assets/images/projects/nosso-bairro/6.png",
      ],
    ],
    imageWidth: 230,
    imageHeight: 450,
  },
  {
    name: "Revisa Enem Corretor",
    description: "Uma plataforma para correção de redações.",
    primaryColor: "#287375",
    secondaryColor: "#0a2d2f",
    imageWidth: 680,
    imageHeight: 450,
    images: [
      ["/assets/images/projects/revisa/1.png"],
      ["/assets/images/projects/revisa/2.png"],
      ["/assets/images/projects/revisa/3.png"],
    ],
  },
  {
    name: "Mais Saber Professor ",
    description: "Um aplicativo para otimizar o tempo do professor.",
    primaryColor: "#360061",
    secondaryColor: "#180a43",
    imageWidth: 230,
    imageHeight: 450,
    images: [
      [
        "/assets/images/projects/mais-saber/1.png",
        "/assets/images/projects/mais-saber/2.png",
      ],
      [
        "/assets/images/projects/mais-saber/3.png",
        "/assets/images/projects/mais-saber/4.png",
      ],
      [
        "/assets/images/projects/mais-saber/5.png",
        "/assets/images/projects/mais-saber/6.png",
      ],
    ],
  },
  {
    name: "Moto go",
    description: "Comunicação direta e simples com o usuário",
    primaryColor: "#0404b3",
    secondaryColor: "#00004f",
    imageWidth: 230,
    imageHeight: 450,
    images: [
      [
        "/assets/images/projects/moto-go/1.png",
        "/assets/images/projects/moto-go/2.png",
      ],
      [
        "/assets/images/projects/moto-go/3.png",
        "/assets/images/projects/moto-go/4.png",
      ],
      [
        "/assets/images/projects/moto-go/5.png",
        "/assets/images/projects/moto-go/6.png",
      ],
    ],
  },
];

const habilities = [
  {
    imageUrl: "/assets/images/habilities/1.svg",
    title: "Pesquisas inovadoras",
    description:
      "Pesquisas cirúrgicas e sólidas que refletem em soluções incríveis",
  },
  {
    imageUrl: "/assets/images/habilities/2.svg",
    title: "Metodologias Incríveis",
    description:
      "Abordagens estratégicas que elevam o design a novos patamares",
  },
  {
    imageUrl: "/assets/images/habilities/3.svg",
    title: "Colaboração interna",
    description: "Acelerando a comunicação e potencializando a equipe",
  },
  {
    imageUrl: "/assets/images/habilities/4.svg",
    title: "Valores agregados",
    description: "Incorporando valor tangível para usuários e negócios",
  },

  {
    imageUrl: "/assets/images/habilities/5.svg",
    title: "Soluções Inovadoras",
    description: "Visões que traduzem em soluções que rompem paradigmas",
  },
  {
    imageUrl: "/assets/images/habilities/6.svg",
    title: "Testes de usabilidade",
    description: "Testando as soluções de maneiras mais abrangentes possíveis",
  },
];

const skills = [
  {
    icon: <Books size={32} color="#92c1ff" />,
    title: "UX Research",
    percentage: 95,
  },
  {
    icon: <Palette size={32} color="#92c1ff" />,
    title: "Ui Design",
    percentage: 90,
  },
  {
    icon: <Brain size={32} color="#92c1ff" />,
    title: "Design Thinking",
    percentage: 90,
  },
  {
    icon: <FileText size={32} color="#92c1ff" />,
    title: "Documentação e Facilitação",
    percentage: 80,
  },
  {
    icon: <DiamondsFour size={32} color="#92c1ff" />,
    title: "Design System",
    percentage: 90,
  },
  {
    icon: <TextAa size={32} color="#92c1ff" />,
    title: "Ux Writer",
    percentage: 90,
  },
  {
    icon: <User size={32} color="#92c1ff" />,
    title: "Testes de usabilidade",
    percentage: 90,
  },
  {
    icon: <ChatCircleDots size={32} color="#92c1ff" />,
    title: "Contato com Stakeholders",
    percentage: 75,
  },
];

export default function Home() {
  return (
    <>
      <Banner />
      <Header />
      <Container>
        <MainContainer>
          <SectionHero>
            <SectionHeroTitle>
              <SectionHeroTitleName>Davi Guerra</SectionHeroTitleName>
              <SectionHeroTitleRole>UX/UI Designer</SectionHeroTitleRole>

              <Box marginTop={20} marginBottom={100}>
                <Text tag="h1" color="blue-900">
                  Boas soluções trazem boas experiências.
                </Text>
              </Box>
              <a href="/assets/curriculo_daviguerra.pdf" target="_blank">
                <Button variant="primary">Sobre mim</Button>
              </a>
            </SectionHeroTitle>
            <div>
              <Image
                width={400}
                height={450}
                src="/assets/images/hero-image.png"
                alt=""
              />
            </div>
          </SectionHero>

          <SectionProjects id="projects">
            <Box marginTop={20} marginBottom={80}>
              <Text tag="h3" color="blue-900" size="lg" weight="700">
                Projetos reais
              </Text>
            </Box>
            {slides.map((slide, index) => (
              <Slider key={"slide-" + index} slide={slide as ISlide} />
            ))}
          </SectionProjects>

          <SectionHabilities id="habilities">
            <Box marginTop={20} marginBottom={80}>
              <Text tag="h3" color="blue-900" size="lg" weight="700">
                Diferenciais
              </Text>
            </Box>
            <SectionHabilitiesContainer>
              {habilities.map((hability, index) => (
                <CardHability hability={hability} key={index + "hability"} />
              ))}
            </SectionHabilitiesContainer>
          </SectionHabilities>

          <SectionSkills id="skills">
            <Box marginTop={100} marginBottom={80}>
              <Text tag="h3" color="blue-900" size="lg" weight="700">
                Skills
              </Text>
            </Box>
            <SectionSkillsContainer>
              {skills.map((skill, index) => (
                <Skill skill={skill} key={"skill" + index} />
              ))}
            </SectionSkillsContainer>
          </SectionSkills>

          <SectionMoments id="moments">
            <Box marginTop={100} marginBottom={80}>
              <Text tag="h3" color="blue-900" size="lg" weight="700">
                Momentos
              </Text>
            </Box>
            <SectionMomentsContainer>
              <img src="/assets/images/moments/1.jpg" alt="" />
              <img src="/assets/images/moments/2.jpg" alt="" />
              <img src="/assets/images/moments/3.png" alt="" />
              <img src="/assets/images/moments/4.jpg" alt="" />
            </SectionMomentsContainer>
          </SectionMoments>
        </MainContainer>
      </Container>

      <FooterContainer id="contact">
        <Container>
          <Box marginBottom={20}>
            <Text
              tag="strong"
              weight="700"
              color="white"
              fontFamily="secondary"
              size="xl"
            >
              Vamos conversar?
            </Text>
          </Box>
          <Text tag="span" color="white" fontFamily="secondary" size="md">
            Entre em contato comigo, da maneira que preferir.
          </Text>
          <Box marginTop={40}>
            <FooterSocials>
              <a
                href="https://www.linkedin.com/in/davi-guerra-583236210"
                target="_blank"
              >
                <Button variant="secondary">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/linkedin.svg"
                    alt=""
                  />
                </Button>
              </a>
              <a href="mailto:daviguerra.m@gmail.com">
                <Button variant="secondary">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/gmail.svg"
                    alt=""
                  />
                </Button>
              </a>
              <a href="https://wa.me/qr/CCXKGOBS25DQO1" target="_blank">
                <Button variant="secondary">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/whats.svg"
                    alt=""
                  />
                </Button>
              </a>
            </FooterSocials>
          </Box>
        </Container>
      </FooterContainer>
    </>
  );
}
