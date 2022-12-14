import React from "react";
import styled from "styled-components";
import ItemSection from "../LaunchSection/ItemSection";

interface IProps {
  rocket: {
    alias: string;
    description: string;
    diameter: number;
    family: string;
    full_name: string;
    id: number;
    image_url: string;
    launch_library_id: number;
    launch_mass: number;
    launch_service_provider: {
      abbrev: string;
      administrator: string;
      country_code: string;
      description: string;
      failed_launches: number;
      featured: boolean;
      founding_year: string;
      id: number;
      image_url: any;
      info_url: string;
      launch_library_url: string;
      launchers: string;
      logo_url: string;
      name: string;
      nation_url: any;
      pending_launches: number;
      spacecraft: string;
      successful_launches: number;
      type: string;
      url: string;
      wiki_url: string;
    };
    length: number;
    leo_capacity: number;
    maiden_flight: any;
    max_stage: number;
    min_stage: number;
    name: string;
    to_thrust: any;
    url: string;
    variant: string;
    vehicle_range: any;
    wiki_url: string;
    info_url: string;
  };
}

const RocketSection: React.FC<IProps> = ({ rocket }) => {
  return (
    <RocketSectionS img={rocket.image_url}>
      <div className="img"></div>
      <div className="content">
        <div className="heading-section p-md-5">
          <h2 className="heading">Rocket</h2>
          <ItemSection name="Name" value={rocket.name} />
          <ItemSection name="Full Name" value={rocket.full_name} />
          <ItemSection name="Variant" value={rocket.variant} />
          <ItemSection name="Family" value={rocket.family} />
          <ItemSection name="Description" value={rocket.description} />
          <ItemSection
            name="Provider"
            value={rocket.launch_service_provider.name}
          />
          <ItemSection name="Info" value={rocket.info_url} />
          <ItemSection name="URl" value={rocket.url} />
          <ItemSection name="Max Stage" value={rocket.max_stage?.toString()} />
          <ItemSection name="Min Stage" value={rocket.min_stage?.toString()} />
        </div>
      </div>
    </RocketSectionS>
  );
};

export default RocketSection;

const RocketSectionS = styled.div<{ img: string }>`
  display: flex;
  height: 600px;
  width: 90%;
  margin: 0px auto;
  position: relative;
  margin-bottom: 150px;

  .img {
    flex: 50%;
    background-image: url(${(props) => props.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .rigth {
    flex: 50%;
  }

  .content {
    flex: 50%;
    background: var(--white);
    color: var(--dark);
    padding: 25px 45px;
    border-radius: 4px;
    .heading {
      font-size: 2.2rem;
      margin-bottom: 30px;
      color: var(--primary);
    }
    span {
      font-weight: bold;
    }
  }

  @media (max-width: 1300px) {
    margin-bottom: 200px;
  }
  @media (max-width: 1000px) {
    margin-bottom: 500px;
  }
  @media (max-width: 870px) {
    justify-content: center;
    flex-direction: column;
    height: 900px;
    margin-bottom: 100px;
    .content {
      position: static;
      width: 100%;
      border-radius: 0 0 4px 4px;
      padding: 15px 25px;
    }
  }
`;
