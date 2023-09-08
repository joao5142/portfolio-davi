import { Text } from "@/components/ui/Text";
import { SkillContainer, SkillProgress, SkillProgressInner } from "./styles";

interface SkillProps {
  skill: {
    percentage: number;
    title: string;
  };
}
export function Skill({ skill }: SkillProps) {
  return (
    <SkillContainer>
      <div>
        <SkillProgress>
          <SkillProgressInner></SkillProgressInner>
        </SkillProgress>
        <Text tag="span" color="blue-500">
          {skill.percentage}%
        </Text>
      </div>
      <Text tag="strong" color="blue-900" size="md">
        {skill.title}
      </Text>
    </SkillContainer>
  );
}
