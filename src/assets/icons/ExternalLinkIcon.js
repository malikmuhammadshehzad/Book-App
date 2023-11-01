import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const ExternalLinkIcon = ({width = 24, height = 25, ...props}) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}>
      <Path d="M18 13.105v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2h6M15 3.105h6v6M10 14.105l11-11" />
    </G>
  </Svg>
);
export default ExternalLinkIcon;
