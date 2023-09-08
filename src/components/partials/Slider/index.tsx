import { Text } from "@/components/ui/Text";
import {
  SliderBagde,
  SliderContainer,
  SliderImages,
  SliderInfo,
  SliderQuantityContainer,
} from "./styles";
import { Box } from "@/components/wrappers/Box";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

interface ISlide {
  name: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  imageWidth: number;
  imageHeight: number;
  images: Array<Array<string>>;
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
          <Box marginBottom={40}>
            <Text
              tag="strong"
              size="lg2"
              weight="700"
              color="white"
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
              color="white"
              fontFamily="secondary"
            >
              {slide.description}
            </Text>
          </Box>
          <SliderQuantityContainer>
            <SliderBagde
              active={selectedSlide === 0}
              onClick={() => setSelectedSlide(0)}
            />
            <SliderBagde
              active={selectedSlide === 1}
              onClick={() => setSelectedSlide(1)}
            />
            <SliderBagde
              active={selectedSlide === 2}
              onClick={() => setSelectedSlide(2)}
            />
          </SliderQuantityContainer>
          <Box marginTop={30}>
            <Button variant="secondary" onClick={handleGoNextSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M9.40002 5.76917L15.4 12.7692L9.40002 19.7692"
                  stroke="white"
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
        {slide.images[selectedSlide].map((imageUrl) => (
          <Image
            width={slide.imageWidth}
            height={slide.imageHeight}
            src={imageUrl}
            alt=""
          />
        ))}
      </SliderImages>
    </SliderContainer>
  );
}
