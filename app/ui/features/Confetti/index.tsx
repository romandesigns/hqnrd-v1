"use client";
import React from "react";
import Confetti from "react-confetti";
import useViewportDimensions from "@/utils/hooks/useViewPort";

export const ConfettiComponent = () => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const dimension = useViewportDimensions();

  React.useEffect(() => {
    setWidth(dimension.width);
    setHeight(dimension.height);
  }, [dimension]);

  return (
    <Confetti
      className="absolute h-screen w-screen"
      height={height}
      width={width}
    />
  );
};
