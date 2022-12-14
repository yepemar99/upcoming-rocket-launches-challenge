import React from "react";
import ItemSection from "../LaunchSection/ItemSection";
import LaunchSection from "../LaunchSection/LaunchSection";

interface IProps {
  pad: {
    agency_id: any;
    id: number;
    info_url: any;
    latitude: string;
    location: { id: number; name: string; country_code: string };
    longitude: string;
    map_url: string;
    name: string;
    wiki_url: string;
  };
}

const PadSection: React.FC<IProps> = ({ pad }) => {
  return (
    <LaunchSection title={"Pad"}>
      <ItemSection name="Name" value={pad.name} />
      <ItemSection name="Location" value={pad.location.name} />
      <ItemSection name="Wiki Url" value={pad.wiki_url} />
      <ItemSection name="Map Url" value={pad.map_url} />
      <ItemSection name="Latitude" value={pad.latitude} />
      <ItemSection name="Longitude" value={pad.longitude} />
    </LaunchSection>
  );
};

export default PadSection;
