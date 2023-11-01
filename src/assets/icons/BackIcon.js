import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
const  BackIcon = ({width=24 , height=25 , ...props}) => (
  <Svg
   
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <G
      stroke="#1F2223"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <Path d="M19 12.56H5M12 19.56l-7-7 7-7" />
    </G>
  </Svg>
)
export default BackIcon