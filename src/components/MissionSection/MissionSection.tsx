import React from "react";
import ItemSection from "../LaunchSection/ItemSection";
import LaunchSection from "../LaunchSection/LaunchSection";

interface IProps {
  mission: { orbit: string; name: string; description: string };
}

const MissionSection: React.FC<IProps> = ({ mission }) => {
  return (
    <LaunchSection title={"Mission"} marginBottom>
      <ItemSection name="Name" value={mission.name} />
      <ItemSection name="Orbit" value={mission.orbit} />
      <ItemSection name="Description" value={mission.description} />
    </LaunchSection>
  );
};

export default MissionSection;
