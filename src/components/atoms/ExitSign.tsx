import React from 'react'
import ClickableContainer from './ClickableContainer'

const ExitSign: React.FC<{ setMapLocation: () => void }> = ({
  setMapLocation
}) => (
  <ClickableContainer onClick={setMapLocation}>
    <rect
      x="766.5"
      y="32.5"
      width="104"
      height="39.1786"
      rx="2.5"
      fill="white"
      stroke="#FF6667"
    />
    <path
      d="M785.519 65C784.487 65 783.647 64.688 782.999 64.064C782.351 63.44 782.027 62.624 782.027 61.616V39.8H801.251V44.12H786.995V49.952H800.171V54.272H786.995V60.68H801.251V65H785.519ZM811.112 52.148L802.688 39.8H808.34L813.956 48.08L819.572 39.8H825.188L816.764 52.148L825.548 65H819.896L813.956 56.216L807.98 65H802.328L811.112 52.148ZM828.055 39.8H833.023V65H828.055V39.8ZM844.047 44.12H836.055V39.8H857.007V44.12H849.015V65H844.047V44.12Z"
      fill="#FF6667"
    />
  </ClickableContainer>
)

export default ExitSign
