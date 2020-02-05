import React from "react";
import DecorationDisk from "./DecorationDisk"
import DecorationLine from "./DecorationLine"

const TripLine = ({children, type, locationType, align}) => {
  let endStyle = 'solid';
  let startStyle = locationType === 'connection' ? 'dashed' : 'none';
  let startColor = locationType === 'connection' ? 'gray' : 'yellow';
  console.log(startStyle);
  let endColor = 'yellow';
  let diskType = 'circle';
  if (type === 'arrival') {
    ([startStyle, endStyle] = [endStyle, startStyle]);
    ([startColor, endColor] = [endColor, startColor]);
    diskType = 'disk';
  }
  return (
    <DecorationDisk align={align} type={diskType}>
      <DecorationLine
        align={align}
        startStyle={startStyle}
        startColor={startColor}
        endStyle={endStyle}
        endColor={endColor}
      >
        {children}
      </DecorationLine>
    </DecorationDisk>
  );
}

export default TripLine;