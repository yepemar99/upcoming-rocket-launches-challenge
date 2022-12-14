import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import MissionSection from "../components/MissionSection/MissionSection";
import PadSection from "../components/PadSection/PadSection";
import RocketSection from "../components/RocketSection/RocketSection";
import TopLaunch from "../components/TopLaunch/TopLaunch";
import Windows from "../components/Windows/Windows";
import WrapperLoading from "../components/WithLoader/WrapperLoading";
import { getLaunch } from "../redux/actions/LaunchesAction";
import { IApplicationState } from "../store";

const Lunch = () => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const lanuch = useSelector<IApplicationState, any>(
    (state) => state.launches.lunch
  );
  const loading = useSelector<IApplicationState, boolean>(
    (state) => state.launches.loadingLunch
  );
  console.log("lanuch", lanuch);

  useEffect(() => {
    dispatch(getLaunch(id));
  }, [id, dispatch]);
  return (
    <div>
      <WrapperLoading loading={loading}>
        {lanuch && (
          <>
            <TopLaunch title={lanuch.name} />
            <MainSectionS>
              <WindowsWarpperS>
                {lanuch.window_start && (
                  <Windows
                    start={lanuch.window_start}
                    end={lanuch.window_start}
                  />
                )}
              </WindowsWarpperS>
              {lanuch.image_url && (
                <ImageSectionS>
                  <ImgS>
                    <img
                      src={lanuch.image_url}
                      alt={`Launch of ${lanuch.name}`}
                    />
                  </ImgS>
                </ImageSectionS>
              )}

              {lanuch.mission && <MissionSection mission={lanuch.mission} />}
              {lanuch.rocket && (
                <RocketSection rocket={lanuch.rocket.configuration} />
              )}
              {lanuch.pad && <PadSection pad={lanuch.pad} />}
            </MainSectionS>
          </>
        )}
      </WrapperLoading>
    </div>
  );
};

export default Lunch;

const MainSectionS = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const ImageSectionS = styled.div`
  width: 100%;
`;
const ImgS = styled.div`
  width: 100%;
  position: relative;
`;
const WindowsWarpperS = styled.div``;
