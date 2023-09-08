import Image from "next/image";
import { CardHabilityContainer } from "./styles";
import { Text } from "@/components/ui/Text";

interface CardHabilityProps {
  hability: { imageUrl: string; title: string; description: string };
}
export function CardHability({ hability }: CardHabilityProps) {
  return (
    <CardHabilityContainer>
      <Image width={150} height={150} src={hability.imageUrl} alt="" />
      <Text tag="strong" color="blue-700" weight="700">
        {hability.title}
      </Text>
      <Text align="center" tag="span" size="sm" weight="400">
        {hability.description}
      </Text>
    </CardHabilityContainer>
  );
}
