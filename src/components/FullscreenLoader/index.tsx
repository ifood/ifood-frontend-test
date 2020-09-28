import React from "react";
import { LoaderContainer } from "./styles";
import { CircularProgress } from "@material-ui/core";

type LoaderProps = {
  showLoading: boolean;
}

const FullscreenLoader: React.FC<LoaderProps> = ({ showLoading }) => {

  const showLoader = () => {
    if (showLoading) {
      return (
        <LoaderContainer>
          <CircularProgress size={ 150 }/>
        </LoaderContainer>
      )
    }

    return (
      <>
      </>
    )
  }

  return showLoader();
}

export default FullscreenLoader;
