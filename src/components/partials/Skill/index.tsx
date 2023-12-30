import { Text } from "@/components/ui/Text";
import { SkillContainer, SkillProgress, SkillProgressInner } from "./styles";
import { ReactNode } from "react";

interface SkillProps {
  skill: {
    percentage: number;
    title: string;
    icon: ReactNode;
  };
}
export function Skill({ skill }: SkillProps) {
  return (
    <SkillContainer>
      {skill.icon}
      <div>
        <SkillProgress>
          <SkillProgressInner progress={skill.percentage}></SkillProgressInner>
        </SkillProgress>
      </div>
      <Text tag="strong" color="blue-900" size="sm">
        {skill.title}
      </Text>
    </SkillContainer>
  );
}
