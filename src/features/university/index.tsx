import { FC } from "react";
import { UniversityInfoComponent } from "./components/UniversityInfoComponent";
import { UniversityProps } from "./models";

export const UniversityInfo: FC<UniversityProps> = ({ university }) => {
  return (
    <>
      <UniversityInfoComponent university={university} />
    </>
  );
};
