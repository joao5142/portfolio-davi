import { Text } from "@/components/ui/Text";
import {
  SliderBagde,
  SliderButtonEmphasis,
  SliderContainer,
  SliderImages,
  SliderInfo,
  SliderQuantityContainer,
} from "./styles";
import { Box } from "@/components/wrappers/Box";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { ColorType } from "@/styles/theme";
import { Fire } from "phosphor-react";

export interface ISlide {
  name: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  imageWidth: number;
  imageHeight: number;
  images: Array<Array<string>>;
  textColor?: ColorType;
  titleColor?: ColorType;
  bagedBg?: ColorType;
  bagedBgActive?: ColorType;
  emphasis?: boolean;
}

interface SliderProps {
  slide: ISlide;
}

export function Slider({ slide }: SliderProps) {
  const [selectedSlide, setSelectedSlide] = useState(0);

  function handleGoNextSlide() {
    if (selectedSlide >= slide.images.length - 1) {
      setSelectedSlide(0);
    } else {
      setSelectedSlide((prevState: number) => prevState + 1);
    }
  }

  return (
    <SliderContainer>
      <SliderInfo color={slide.primaryColor}>
        <div>
          {slide.emphasis && (
            <SliderButtonEmphasis>
              <Text color="yellow-400" weight="700" size="sm" tag="strong">
                Case destaque
              </Text>
              <Fire size={28} color="#ED8936" />
            </SliderButtonEmphasis>
          )}
          <Box marginBottom={40}>
            <Text
              tag="strong"
              size="lg2"
              weight="700"
              color={slide.titleColor ? slide.titleColor : "white"}
              fontFamily="secondary"
            >
              {slide.name}
            </Text>
          </Box>
          <Box marginBottom={30}>
            <Text
              tag="strong"
              size="sm"
              weight="400"
              color={slide.textColor ? slide.textColor : "white"}
              fontFamily="secondary"
            >
              {slide.description}
            </Text>
          </Box>
          <SliderQuantityContainer>
            <SliderBagde
              bgActive={slide.bagedBgActive}
              bg={slide.bagedBg}
              active={selectedSlide === 0}
              onClick={() => setSelectedSlide(0)}
            />
            <SliderBagde
              bgActive={slide.bagedBgActive}
              bg={slide.bagedBg}
              active={selectedSlide === 1}
              onClick={() => setSelectedSlide(1)}
            />
            <SliderBagde
              bgActive={slide.bagedBgActive}
              bg={slide.bagedBg}
              active={selectedSlide === 2}
              onClick={() => setSelectedSlide(2)}
            />
          </SliderQuantityContainer>
          <Box marginTop={30}>
            <Button
              variant={slide.emphasis ? "tertiary" : "secondary"}
              onClick={handleGoNextSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M9.40002 5.76917L15.4 12.7692L9.40002 19.7692"
                  stroke={slide.emphasis ? "black" : "white"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
          </Box>
        </div>
      </SliderInfo>
      <SliderImages color={slide.secondaryColor}>
        {slide.images[selectedSlide].map((imageUrl, index) => (
          <div>
            <img
              width="100%"
              key={slide.name + "image" + index}
              src={imageUrl}
              alt=""
            />
          </div>
        ))}
      </SliderImages>
    </SliderContainer>
  );
}
