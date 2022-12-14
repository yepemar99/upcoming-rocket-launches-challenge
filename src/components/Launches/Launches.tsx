import { PaginationItem } from "@material-ui/lab";
import Pagination, {
  PaginationRenderItemParams,
} from "@material-ui/lab/Pagination";
import React from "react";
import styled from "styled-components";
import { ILaunches } from "../../types/launchesTypes";
import LaunchItem from "./LaunchItem";

interface IProps {
  launches: ILaunches;
  handleChangePage: (e: any, page: number) => void;
  page: number;
}
const perPage: number = 10;

const renderPaginationItem = (params: PaginationRenderItemParams) => {
  return (
    <PaginationItem {...params} color="primary" className="pagination-item" />
  );
};
const Launches: React.FC<IProps> = ({ launches, handleChangePage, page }) => {
  return (
    <LaunchesWrapper>
      <LaunchesS>
        {launches.results.map((launch: any) => (
          <LaunchItem key={launch.id} launch={launch} />
        ))}
      </LaunchesS>

      <Pagination
        count={Math.ceil(launches.count / perPage)}
        onChange={handleChangePage}
        boundaryCount={1}
        page={page}
        siblingCount={1}
        size="large"
        shape="rounded"
        variant="text"
        renderItem={renderPaginationItem}
      />
    </LaunchesWrapper>
  );
};

export default Launches;
const LaunchesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  .pagination-item {
    color: white !important;
  }
`;
const LaunchesS = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
