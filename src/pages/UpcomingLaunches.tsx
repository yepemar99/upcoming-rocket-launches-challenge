import { useDispatch, useSelector } from "react-redux";
import Header from "../components/commons/Header/Header";
import Title from "../components/commons/Title/Title";
import Launches from "../components/Launches/Launches";
import { setPageOffset } from "../redux/actions/LaunchesAction";
import { IApplicationState } from "../store";

const UpcomingLaunches = () => {
  const launches = useSelector<IApplicationState, any>(
    (state) => state.launches.launches
  );
  const offset = useSelector<IApplicationState, number>(
    (state) => state.launches.offset
  );

  const dispatch = useDispatch();

  const handleChangePage = (e: any, page: number) => {
    dispatch(setPageOffset(page));
  };
  const page = (offset + 10) / 10;

  return (
    <div>
      <Header />
      <Title title="upcoming rocket launches" />
      <Launches
        launches={launches}
        handleChangePage={handleChangePage}
        page={page}
      />
    </div>
  );
};

export default UpcomingLaunches;
