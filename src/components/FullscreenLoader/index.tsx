import React from "react";
import { Loader, LoaderContainer } from "./styles";

type LoaderProps = {
  showLoading: boolean;
}

const FullscreenLoader: React.FC<LoaderProps> = ({ showLoading }) => {

  const showLoader = () => {
    if (showLoading) {
      return (
        <LoaderContainer>
          <Loader size={ 150 }/>
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
