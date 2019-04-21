import React from 'react'
import styled from '../../utils/styled'
import RitchieHallIcon from './RitchieHallIcon'

const RitchieHallSignContainer = styled.g`
  &:hover,
  &:active,
  &:focus {
    cursor: pointer;
  }
`

const RitchieHallSign: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <RitchieHallSignContainer onClick={onClick}>
    <rect
      x="490.427"
      y="599.5"
      width="95.1467"
      height="37.5438"
      fill="#1B8CA3"
      stroke="#CC8427"
      strokeWidth="3"
    />
    <rect x="492.534" y="601.5" width="90.931" height="32" stroke="#FF9393" />
    <rect
      x="476"
      y="634.11"
      width="124"
      height="4.07692"
      rx="2.03846"
      fill="#B24747"
    />
    <rect
      x="479.444"
      y="631.198"
      width="118.259"
      height="3.49451"
      rx="1.74726"
      fill="#CC8427"
    />
    <rect
      x="481.741"
      y="634.692"
      width="110.595"
      height="11.9677"
      fill="#B24747"
    />
    <rect
      x="531.053"
      y="640.798"
      width="26.8108"
      height="2.93088"
      fill="#7F3333"
    />
    <rect
      x="565.525"
      y="637.623"
      width="26.8108"
      height="2.93088"
      fill="#7F3333"
    />
    <rect
      x="499.455"
      y="643.729"
      width="26.8108"
      height="2.93088"
      fill="#7F3333"
    />
    <path
      d="M498.408 612.6H502.872C503.6 612.6 504.184 612.796 504.624 613.188C505.072 613.58 505.296 614.096 505.296 614.736V615.576C505.296 615.992 505.176 616.356 504.936 616.668C504.704 616.972 504.364 617.204 503.916 617.364V617.388C504.172 617.556 504.364 617.748 504.492 617.964C504.628 618.18 504.76 618.48 504.888 618.864L505.56 621H503.844L503.208 619.008C503.104 618.664 502.96 618.408 502.776 618.24C502.592 618.072 502.364 617.988 502.092 617.988H500.064V621H498.408V612.6ZM502.56 616.56C502.896 616.56 503.16 616.472 503.352 616.296C503.544 616.112 503.64 615.876 503.64 615.588V614.808C503.64 614.576 503.568 614.392 503.424 614.256C503.28 614.112 503.088 614.04 502.848 614.04H500.064V616.56H502.56ZM506.661 612.6H508.317V621H506.661V612.6ZM511.992 614.04H509.328V612.6H516.312V614.04H513.648V621H511.992V614.04ZM519.674 621.096C519.058 621.096 518.514 620.964 518.042 620.7C517.578 620.436 517.218 620.064 516.962 619.584C516.706 619.096 516.578 618.536 516.578 617.904V615.696C516.578 615.064 516.706 614.508 516.962 614.028C517.226 613.54 517.594 613.164 518.066 612.9C518.546 612.636 519.098 612.504 519.722 612.504H520.994C521.594 612.504 522.122 612.632 522.578 612.888C523.034 613.144 523.386 613.504 523.634 613.968C523.89 614.424 524.018 614.956 524.018 615.564H522.386C522.386 615.084 522.258 614.7 522.002 614.412C521.746 614.116 521.41 613.968 520.994 613.968H519.722C519.274 613.968 518.914 614.136 518.642 614.472C518.37 614.8 518.234 615.232 518.234 615.768V617.832C518.234 618.368 518.366 618.804 518.63 619.14C518.894 619.468 519.242 619.632 519.674 619.632H520.97C521.394 619.632 521.738 619.468 522.002 619.14C522.274 618.812 522.41 618.38 522.41 617.844H524.042C524.042 618.492 523.914 619.064 523.658 619.56C523.402 620.048 523.042 620.428 522.578 620.7C522.114 620.964 521.578 621.096 520.97 621.096H519.674ZM525.08 612.6H526.736V616.068H530.648V612.6H532.304V621H530.648V617.508H526.736V621H525.08V612.6ZM533.907 612.6H535.563V621H533.907V612.6ZM538.338 621C537.994 621 537.714 620.896 537.498 620.688C537.282 620.48 537.174 620.208 537.174 619.872V612.6H543.582V614.04H538.83V615.984H543.222V617.424H538.83V619.56H543.582V621H538.338ZM548.166 612.6H549.822V616.068H553.734V612.6H555.39V621H553.734V617.508H549.822V621H548.166V612.6ZM561.793 619.044H558.649L557.905 621H556.177L559.465 612.6H560.209C560.729 612.6 561.081 612.84 561.265 613.32L564.253 621H562.525L561.793 619.044ZM559.093 617.652H561.349L560.233 614.628H560.221L559.093 617.652ZM566.135 621C565.783 621 565.499 620.9 565.283 620.7C565.075 620.492 564.971 620.22 564.971 619.884V612.6H566.627V619.56H571.187V621H566.135ZM573.189 621C572.837 621 572.553 620.9 572.337 620.7C572.129 620.492 572.025 620.22 572.025 619.884V612.6H573.681V619.56H578.241V621H573.189Z"
      fill="#FAFAFA"
    />
  </RitchieHallSignContainer>
)

const RitchieHallBush = () => (
  <g>
    <rect
      x="674.138"
      y="585.885"
      width="1.08046"
      height="10.2644"
      fill="#CC8427"
    />
    <ellipse
      cx="672.517"
      cy="584.534"
      rx="2.70115"
      ry="4.05172"
      fill="#51B77B"
    />
    <ellipse
      cx="676.299"
      cy="584.534"
      rx="2.70115"
      ry="4.05172"
      fill="#51B77B"
    />
    <ellipse
      cx="674.678"
      cy="580.753"
      rx="2.70115"
      ry="4.05172"
      fill="#51B77B"
    />
    <ellipse
      cx="675.759"
      cy="579.672"
      rx="2.70115"
      ry="4.05172"
      fill="#51B77B"
    />
    <ellipse
      cx="672.517"
      cy="579.672"
      rx="2.70115"
      ry="4.05172"
      fill="#51B77B"
    />
  </g>
)

const MainCampus: React.FC<{ setMapLocation: () => void }> = ({
  setMapLocation
}) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <rect width="902" height="745" rx="15" fill="#51B77B" />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="902"
        height="745"
      >
        <rect width="902" height="745" rx="15" fill="#51B77B" />
      </mask>
      <g mask="url(#mask0)">
        <rect x="29" y="41" width="25" height="25" fill="#614D17" />
        <ellipse cx="41.5" cy="38.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="41.5" cy="26" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="41.5" cy="13.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="41.5" cy="6" r="15" fill="#166336" />
        <rect x="29" y="86" width="25" height="25" fill="#614D17" />
        <ellipse cx="41.5" cy="83.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="41.5" cy="71" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="41.5" cy="58.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="41.5" cy="51" r="15" fill="#166336" />
        <rect x="29" y="131" width="25" height="25" fill="#614D17" />
        <ellipse cx="41.5" cy="128.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="41.5" cy="116" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="41.5" cy="103.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="41.5" cy="96" r="15" fill="#166336" />
        <rect x="29" y="176" width="25" height="25" fill="#614D17" />
        <ellipse cx="41.5" cy="173.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="41.5" cy="161" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="41.5" cy="148.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="41.5" cy="141" r="15" fill="#166336" />
        <rect x="29" y="221" width="25" height="25" fill="#614D17" />
        <ellipse cx="41.5" cy="218.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="41.5" cy="206" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="41.5" cy="193.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="41.5" cy="186" r="15" fill="#166336" />
        <rect x="29" y="266" width="25" height="25" fill="#614D17" />
        <ellipse cx="41.5" cy="263.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="41.5" cy="251" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="41.5" cy="238.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="41.5" cy="231" r="15" fill="#166336" />
        <rect x="29" y="311" width="25" height="25" fill="#614D17" />
        <ellipse cx="41.5" cy="308.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="41.5" cy="296" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="41.5" cy="283.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="41.5" cy="276" r="15" fill="#166336" />
        <rect x="32" y="491" width="25" height="25" fill="#614D17" />
        <ellipse cx="44.5" cy="488.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="44.5" cy="476" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="44.5" cy="463.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="44.5" cy="456" r="15" fill="#166336" />
        <rect x="32" y="536" width="25" height="25" fill="#614D17" />
        <ellipse cx="44.5" cy="533.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="44.5" cy="521" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="44.5" cy="508.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="44.5" cy="501" r="15" fill="#166336" />
        <rect x="30" y="581" width="25" height="25" fill="#614D17" />
        <ellipse cx="42.5" cy="578.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="42.5" cy="566" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="42.5" cy="553.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="42.5" cy="546" r="15" fill="#166336" />
        <rect x="31" y="626" width="25" height="25" fill="#614D17" />
        <ellipse cx="43.5" cy="623.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="43.5" cy="611" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="43.5" cy="598.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="43.5" cy="591" r="15" fill="#166336" />
        <rect x="30" y="671" width="25" height="25" fill="#614D17" />
        <ellipse cx="42.5" cy="668.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="42.5" cy="656" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="42.5" cy="643.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="42.5" cy="636" r="15" fill="#166336" />
        <rect x="30" y="716" width="25" height="25" fill="#614D17" />
        <ellipse cx="42.5" cy="713.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="42.5" cy="701" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="42.5" cy="688.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="42.5" cy="681" r="15" fill="#166336" />
        <rect x="31" y="761" width="25" height="25" fill="#614D17" />
        <ellipse cx="43.5" cy="758.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="43.5" cy="746" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="43.5" cy="733.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="43.5" cy="726" r="15" fill="#166336" />
        <ellipse cx="43.5" cy="778.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="43.5" cy="771" r="15" fill="#166336" />
        <rect x="845" y="40" width="25" height="25" fill="#614D17" />
        <ellipse cx="857.5" cy="37.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="857.5" cy="25" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="857.5" cy="12.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="857.5" cy="5" r="15" fill="#166336" />
        <rect x="845" y="41" width="25" height="25" fill="#614D17" />
        <ellipse cx="857.5" cy="38.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="857.5" cy="26" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="857.5" cy="13.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="857.5" cy="6" r="15" fill="#166336" />
        <rect x="845" y="86" width="25" height="25" fill="#614D17" />
        <ellipse cx="857.5" cy="83.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="857.5" cy="71" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="857.5" cy="58.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="857.5" cy="51" r="15" fill="#166336" />
        <rect x="845" y="131" width="25" height="25" fill="#614D17" />
        <ellipse cx="857.5" cy="128.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="857.5" cy="116" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="857.5" cy="103.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="857.5" cy="96" r="15" fill="#166336" />
        <rect x="845" y="176" width="25" height="25" fill="#614D17" />
        <ellipse cx="857.5" cy="173.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="857.5" cy="161" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="857.5" cy="148.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="857.5" cy="141" r="15" fill="#166336" />
        <rect x="845" y="221" width="25" height="25" fill="#614D17" />
        <ellipse cx="857.5" cy="218.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="857.5" cy="206" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="857.5" cy="193.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="857.5" cy="186" r="15" fill="#166336" />
        <rect x="845" y="266" width="25" height="25" fill="#614D17" />
        <ellipse cx="857.5" cy="263.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="857.5" cy="251" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="857.5" cy="238.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="857.5" cy="231" r="15" fill="#166336" />
        <rect x="845" y="311" width="25" height="25" fill="#614D17" />
        <ellipse cx="857.5" cy="308.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="857.5" cy="296" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="857.5" cy="283.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="857.5" cy="276" r="15" fill="#166336" />
        <rect x="845" y="356" width="25" height="25" fill="#614D17" />
        <ellipse cx="857.5" cy="353.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="857.5" cy="341" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="857.5" cy="328.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="857.5" cy="321" r="15" fill="#166336" />
        <rect x="847" y="401" width="25" height="25" fill="#614D17" />
        <ellipse cx="859.5" cy="398.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="859.5" cy="386" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="859.5" cy="373.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="859.5" cy="366" r="15" fill="#166336" />
        <rect x="848" y="446" width="25" height="25" fill="#614D17" />
        <ellipse cx="860.5" cy="443.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="860.5" cy="431" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="860.5" cy="418.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="860.5" cy="411" r="15" fill="#166336" />
        <rect x="848" y="491" width="25" height="25" fill="#614D17" />
        <ellipse cx="860.5" cy="488.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="860.5" cy="476" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="860.5" cy="463.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="860.5" cy="456" r="15" fill="#166336" />
        <rect x="848" y="536" width="25" height="25" fill="#614D17" />
        <ellipse cx="860.5" cy="533.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="860.5" cy="521" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="860.5" cy="508.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="860.5" cy="501" r="15" fill="#166336" />
        <rect x="846" y="581" width="25" height="25" fill="#614D17" />
        <ellipse cx="858.5" cy="578.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="858.5" cy="566" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="858.5" cy="553.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="858.5" cy="546" r="15" fill="#166336" />
        <rect x="847" y="626" width="25" height="25" fill="#614D17" />
        <ellipse cx="859.5" cy="623.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="859.5" cy="611" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="859.5" cy="598.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="859.5" cy="591" r="15" fill="#166336" />
        <rect x="846" y="671" width="25" height="25" fill="#614D17" />
        <ellipse cx="858.5" cy="668.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="858.5" cy="656" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="858.5" cy="643.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="858.5" cy="636" r="15" fill="#166336" />
        <rect x="846" y="716" width="25" height="25" fill="#614D17" />
        <ellipse cx="858.5" cy="713.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="858.5" cy="701" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="858.5" cy="688.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="858.5" cy="681" r="15" fill="#166336" />
        <rect x="847" y="761" width="25" height="25" fill="#614D17" />
        <ellipse cx="859.5" cy="758.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="859.5" cy="746" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="859.5" cy="733.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="859.5" cy="726" r="15" fill="#166336" />
        <ellipse cx="859.5" cy="778.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="859.5" cy="771" r="15" fill="#166336" />
        <rect x="97" y="41" width="25" height="25" fill="#614D17" />
        <ellipse cx="109.5" cy="38.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="109.5" cy="26" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="109.5" cy="13.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="109.5" cy="6" r="15" fill="#166336" />
        <rect x="165" y="41" width="25" height="25" fill="#614D17" />
        <ellipse cx="177.5" cy="38.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="177.5" cy="26" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="177.5" cy="13.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="177.5" cy="6" r="15" fill="#166336" />
        <rect x="233" y="41" width="25" height="25" fill="#614D17" />
        <ellipse cx="245.5" cy="38.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="245.5" cy="26" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="245.5" cy="13.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="245.5" cy="6" r="15" fill="#166336" />
        <rect x="301" y="41" width="25" height="25" fill="#614D17" />
        <ellipse cx="313.5" cy="38.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="313.5" cy="26" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="313.5" cy="13.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="313.5" cy="6" r="15" fill="#166336" />
        <rect x="573" y="40" width="25" height="25" fill="#614D17" />
        <ellipse cx="585.5" cy="37.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="585.5" cy="25" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="585.5" cy="12.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="585.5" cy="5" r="15" fill="#166336" />
        <rect x="641" y="40" width="25" height="25" fill="#614D17" />
        <ellipse cx="653.5" cy="37.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="653.5" cy="25" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="653.5" cy="12.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="653.5" cy="5" r="15" fill="#166336" />
        <rect x="709" y="40" width="25" height="25" fill="#614D17" />
        <ellipse cx="721.5" cy="37.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="721.5" cy="25" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="721.5" cy="12.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="721.5" cy="5" r="15" fill="#166336" />
        <rect x="777" y="40" width="25" height="25" fill="#614D17" />
        <ellipse cx="789.5" cy="37.5" rx="32.5" ry="15" fill="#166336" />
        <ellipse cx="789.5" cy="25" rx="27.5" ry="15" fill="#166336" />
        <ellipse cx="789.5" cy="12.5" rx="22.5" ry="15" fill="#166336" />
        <circle cx="789.5" cy="5" r="15" fill="#166336" />
        <rect x="102" y="138" width="302" height="157" fill="#A8DBBD" />
        <rect x="533" y="494" width="150" height="110" fill="#A8DBBD" />
        <path d="M598 160H723V267H598V160Z" fill="#A8DBBD" />
        <rect x="451" y="31.5" width="52" height="31.5" fill="#797979" />
        <rect x="503" y="31.5" width="17" height="31.5" fill="#DFDFDF" />
        <rect x="434" y="31.5" width="17" height="31.5" fill="#DFDFDF" />
        <rect x="475" y="38.6129" width="4" height="17.2742" fill="#FAFAFA" />
        <rect x="451" width="52" height="31.5" fill="#797979" />
        <rect x="503" width="17" height="31.5" fill="#DFDFDF" />
        <rect x="434" width="17" height="31.5" fill="#DFDFDF" />
        <rect x="475" y="7.11292" width="4" height="17.2742" fill="#FAFAFA" />
        <rect x="451" y="94" width="52" height="31" fill="#797979" />
        <rect x="503" y="94" width="17" height="31" fill="#DFDFDF" />
        <rect x="434" y="94" width="17" height="31" fill="#DFDFDF" />
        <rect x="475" y="101" width="4" height="17" fill="#FAFAFA" />
        <rect x="451" y="63" width="52" height="31" fill="#797979" />
        <rect x="503" y="63" width="17" height="31" fill="#DFDFDF" />
        <rect x="434" y="63" width="17" height="31" fill="#DFDFDF" />
        <rect x="475" y="70" width="4" height="17" fill="#FAFAFA" />
        <rect x="451" y="156" width="52" height="31" fill="#797979" />
        <rect x="503" y="156" width="17" height="31" fill="#DFDFDF" />
        <rect x="434" y="156" width="17" height="31" fill="#DFDFDF" />
        <rect x="475" y="163" width="4" height="17" fill="#FAFAFA" />
        <rect x="451" y="125" width="52" height="31" fill="#797979" />
        <rect x="503" y="125" width="17" height="31" fill="#DFDFDF" />
        <rect x="434" y="125" width="17" height="31" fill="#DFDFDF" />
        <rect x="475" y="132" width="4" height="17" fill="#FAFAFA" />
        <rect x="451" y="218" width="52" height="31" fill="#797979" />
        <rect x="503" y="218" width="17" height="31" fill="#DFDFDF" />
        <rect x="434" y="218" width="17" height="31" fill="#DFDFDF" />
        <rect x="475" y="225" width="4" height="17" fill="#FAFAFA" />
        <rect x="451" y="187" width="52" height="31" fill="#797979" />
        <rect x="503" y="187" width="17" height="31" fill="#DFDFDF" />
        <rect x="434" y="187" width="17" height="31" fill="#DFDFDF" />
        <rect x="475" y="194" width="4" height="17" fill="#FAFAFA" />
        <rect x="451" y="280" width="52" height="31" fill="#797979" />
        <rect x="503" y="280" width="17" height="31" fill="#DFDFDF" />
        <rect x="434" y="280" width="17" height="31" fill="#DFDFDF" />
        <rect x="475" y="287" width="4" height="17" fill="#FAFAFA" />
        <rect x="451" y="249" width="52" height="31" fill="#797979" />
        <rect x="503" y="249" width="17" height="31" fill="#DFDFDF" />
        <rect x="434" y="249" width="17" height="31" fill="#DFDFDF" />
        <rect x="475" y="256" width="4" height="17" fill="#FAFAFA" />
        <rect x="152" y="515" width="52" height="31" fill="#797979" />
        <rect x="204" y="515" width="17" height="31" fill="#DFDFDF" />
        <rect x="135" y="515" width="17" height="31" fill="#DFDFDF" />
        <rect x="176" y="522" width="4" height="17" fill="#FAFAFA" />
        <rect x="152" y="484" width="52" height="31" fill="#797979" />
        <rect x="204" y="484" width="17" height="31" fill="#DFDFDF" />
        <rect x="135" y="484" width="17" height="31" fill="#DFDFDF" />
        <rect x="176" y="491" width="4" height="17" fill="#FAFAFA" />
        <rect x="152" y="577" width="52" height="31" fill="#797979" />
        <rect x="204" y="577" width="17" height="31" fill="#DFDFDF" />
        <rect x="135" y="577" width="17" height="31" fill="#DFDFDF" />
        <rect x="176" y="584" width="4" height="17" fill="#FAFAFA" />
        <rect x="152" y="546" width="52" height="31" fill="#797979" />
        <rect x="204" y="546" width="17" height="31" fill="#DFDFDF" />
        <rect x="135" y="546" width="17" height="31" fill="#DFDFDF" />
        <rect x="176" y="553" width="4" height="17" fill="#FAFAFA" />
        <rect x="152" y="639" width="52" height="31" fill="#797979" />
        <rect x="204" y="639" width="17" height="31" fill="#DFDFDF" />
        <rect x="135" y="639" width="17" height="31" fill="#DFDFDF" />
        <rect x="176" y="646" width="4" height="17" fill="#FAFAFA" />
        <rect x="152" y="608" width="52" height="31" fill="#797979" />
        <rect x="204" y="608" width="17" height="31" fill="#DFDFDF" />
        <rect x="135" y="608" width="17" height="31" fill="#DFDFDF" />
        <rect x="176" y="615" width="4" height="17" fill="#FAFAFA" />
        <rect x="152" y="701" width="52" height="31" fill="#797979" />
        <rect x="204" y="701" width="17" height="31" fill="#DFDFDF" />
        <rect x="135" y="701" width="17" height="31" fill="#DFDFDF" />
        <rect x="176" y="708" width="4" height="17" fill="#FAFAFA" />
        <rect x="152" y="670" width="52" height="31" fill="#797979" />
        <rect x="204" y="670" width="17" height="31" fill="#DFDFDF" />
        <rect x="135" y="670" width="17" height="31" fill="#DFDFDF" />
        <rect x="176" y="677" width="4" height="17" fill="#FAFAFA" />
        <rect x="152" y="762" width="52" height="31" fill="#797979" />
        <rect x="204" y="762" width="17" height="31" fill="#DFDFDF" />
        <rect x="135" y="762" width="17" height="31" fill="#DFDFDF" />
        <rect x="451" y="311" width="52" height="31" fill="#797979" />
        <rect x="503" y="311" width="17" height="31" fill="#DFDFDF" />
        <rect x="434" y="311" width="17" height="31" fill="#DFDFDF" />
        <rect x="475" y="318" width="4" height="17" fill="#FAFAFA" />
        <rect x="470" y="318" width="4" height="17" fill="#FAFAFA" />
        <rect x="465" y="318" width="4" height="17" fill="#FAFAFA" />
        <rect x="460" y="318" width="4" height="17" fill="#FAFAFA" />
        <rect x="455" y="318" width="4" height="17" fill="#FAFAFA" />
        <rect x="480" y="318" width="4" height="17" fill="#FAFAFA" />
        <rect x="485" y="318" width="4" height="17" fill="#FAFAFA" />
        <rect x="490" y="318" width="4" height="17" fill="#FAFAFA" />
        <rect x="495" y="318" width="4" height="17" fill="#FAFAFA" />
        <rect
          x="297"
          y="371"
          width="52"
          height="31"
          transform="rotate(90 297 371)"
          fill="#797979"
        />
        <rect
          x="297"
          y="423"
          width="17"
          height="31"
          transform="rotate(90 297 423)"
          fill="#DFDFDF"
        />
        <rect
          x="297"
          y="354"
          width="17"
          height="31"
          transform="rotate(90 297 354)"
          fill="#DFDFDF"
        />
        <rect
          x="290"
          y="395"
          width="4"
          height="17"
          transform="rotate(90 290 395)"
          fill="#FAFAFA"
        />
        <rect
          x="290"
          y="390"
          width="4"
          height="17"
          transform="rotate(90 290 390)"
          fill="#FAFAFA"
        />
        <rect
          x="290"
          y="385"
          width="4"
          height="17"
          transform="rotate(90 290 385)"
          fill="#FAFAFA"
        />
        <rect
          x="290"
          y="380"
          width="4"
          height="17"
          transform="rotate(90 290 380)"
          fill="#FAFAFA"
        />
        <rect
          x="290"
          y="375"
          width="4"
          height="17"
          transform="rotate(90 290 375)"
          fill="#FAFAFA"
        />
        <rect
          x="290"
          y="400"
          width="4"
          height="17"
          transform="rotate(90 290 400)"
          fill="#FAFAFA"
        />
        <rect
          x="290"
          y="405"
          width="4"
          height="17"
          transform="rotate(90 290 405)"
          fill="#FAFAFA"
        />
        <rect
          x="290"
          y="410"
          width="4"
          height="17"
          transform="rotate(90 290 410)"
          fill="#FAFAFA"
        />
        <rect
          x="290"
          y="415"
          width="4"
          height="17"
          transform="rotate(90 290 415)"
          fill="#FAFAFA"
        />
        <rect
          x="204"
          y="762"
          width="52"
          height="31"
          transform="rotate(-180 204 762)"
          fill="#797979"
        />
        <rect
          x="152"
          y="762"
          width="17"
          height="31"
          transform="rotate(-180 152 762)"
          fill="#DFDFDF"
        />
        <rect
          x="221"
          y="762"
          width="17"
          height="31"
          transform="rotate(-180 221 762)"
          fill="#DFDFDF"
        />
        <rect
          x="180"
          y="755"
          width="4"
          height="17"
          transform="rotate(-180 180 755)"
          fill="#FAFAFA"
        />
        <rect
          x="185"
          y="755"
          width="4"
          height="17"
          transform="rotate(-180 185 755)"
          fill="#FAFAFA"
        />
        <rect
          x="190"
          y="755"
          width="4"
          height="17"
          transform="rotate(-180 190 755)"
          fill="#FAFAFA"
        />
        <rect
          x="195"
          y="755"
          width="4"
          height="17"
          transform="rotate(-180 195 755)"
          fill="#FAFAFA"
        />
        <rect
          x="200"
          y="755"
          width="4"
          height="17"
          transform="rotate(-180 200 755)"
          fill="#FAFAFA"
        />
        <rect
          x="175"
          y="755"
          width="4"
          height="17"
          transform="rotate(-180 175 755)"
          fill="#FAFAFA"
        />
        <rect
          x="170"
          y="755"
          width="4"
          height="17"
          transform="rotate(-180 170 755)"
          fill="#FAFAFA"
        />
        <rect
          x="165"
          y="755"
          width="4"
          height="17"
          transform="rotate(-180 165 755)"
          fill="#FAFAFA"
        />
        <rect
          x="160"
          y="755"
          width="4"
          height="17"
          transform="rotate(-180 160 755)"
          fill="#FAFAFA"
        />
        <rect x="451" y="341" width="52" height="31" fill="#797979" />
        <rect x="503" y="341" width="17" height="31" fill="#DFDFDF" />
        <rect x="434" y="341" width="17" height="31" fill="#DFDFDF" />
        <rect x="475" y="348" width="4" height="17" fill="#FAFAFA" />
        <rect x="451" y="370" width="52" height="31" fill="#797979" />
        <rect x="503" y="370" width="17" height="31" fill="#DFDFDF" />
        <rect x="434" y="370" width="17" height="31" fill="#DFDFDF" />
        <rect
          x="489"
          y="425"
          width="17"
          height="31"
          transform="rotate(-90 489 425)"
          fill="#DFDFDF"
        />
        <path
          d="M451 400H503V408C503 416.284 496.284 423 488 423H451V400Z"
          fill="#797979"
        />
        <rect x="503" y="401" width="17" height="31" fill="#DFDFDF" />
        <rect x="434" y="401" width="17" height="31" fill="#DFDFDF" />
        <rect
          x="420"
          y="423"
          width="52"
          height="31"
          transform="rotate(-90 420 423)"
          fill="#797979"
        />
        <rect
          x="420"
          y="371"
          width="17"
          height="31"
          transform="rotate(-90 420 371)"
          fill="#DFDFDF"
        />
        <rect
          x="420"
          y="440"
          width="17"
          height="31"
          transform="rotate(-90 420 440)"
          fill="#DFDFDF"
        />
        <rect
          x="451"
          y="440"
          width="17"
          height="31"
          transform="rotate(-90 451 440)"
          fill="#DFDFDF"
        />
        <rect
          x="482"
          y="440"
          width="17"
          height="31"
          transform="rotate(-90 482 440)"
          fill="#DFDFDF"
        />
        <rect
          x="489"
          y="440"
          width="17"
          height="31"
          transform="rotate(-90 489 440)"
          fill="#DFDFDF"
        />
        <rect
          x="427"
          y="399"
          width="4"
          height="17"
          transform="rotate(-90 427 399)"
          fill="#FAFAFA"
        />
        <path
          d="M464 396C470.544 396.083 476.867 392.694 477 383"
          stroke="#FAFAFA"
          strokeWidth="4"
        />
        <rect
          x="390"
          y="423"
          width="52"
          height="31"
          transform="rotate(-90 390 423)"
          fill="#797979"
        />
        <rect
          x="390"
          y="371"
          width="17"
          height="31"
          transform="rotate(-90 390 371)"
          fill="#DFDFDF"
        />
        <rect
          x="390"
          y="440"
          width="17"
          height="31"
          transform="rotate(-90 390 440)"
          fill="#DFDFDF"
        />
        <rect
          x="397"
          y="399"
          width="4"
          height="17"
          transform="rotate(-90 397 399)"
          fill="#FAFAFA"
        />
        <rect
          x="359"
          y="423"
          width="52"
          height="31"
          transform="rotate(-90 359 423)"
          fill="#797979"
        />
        <rect
          x="359"
          y="371"
          width="17"
          height="31"
          transform="rotate(-90 359 371)"
          fill="#DFDFDF"
        />
        <rect
          x="359"
          y="440"
          width="17"
          height="31"
          transform="rotate(-90 359 440)"
          fill="#DFDFDF"
        />
        <rect
          x="366"
          y="399"
          width="4"
          height="17"
          transform="rotate(-90 366 399)"
          fill="#FAFAFA"
        />
        <rect
          x="328"
          y="423"
          width="52"
          height="31"
          transform="rotate(-90 328 423)"
          fill="#797979"
        />
        <rect
          x="328"
          y="371"
          width="17"
          height="31"
          transform="rotate(-90 328 371)"
          fill="#DFDFDF"
        />
        <rect
          x="328"
          y="440"
          width="17"
          height="31"
          transform="rotate(-90 328 440)"
          fill="#DFDFDF"
        />
        <rect
          x="335"
          y="399"
          width="4"
          height="17"
          transform="rotate(-90 335 399)"
          fill="#FAFAFA"
        />
        <rect
          x="297"
          y="423"
          width="52"
          height="31"
          transform="rotate(-90 297 423)"
          fill="#797979"
        />
        <rect
          x="297"
          y="371"
          width="17"
          height="31"
          transform="rotate(-90 297 371)"
          fill="#DFDFDF"
        />
        <rect
          x="297"
          y="440"
          width="17"
          height="31"
          transform="rotate(-90 297 440)"
          fill="#DFDFDF"
        />
        <rect
          x="304"
          y="399"
          width="4"
          height="17"
          transform="rotate(-90 304 399)"
          fill="#FAFAFA"
        />
        <rect
          x="61"
          y="423"
          width="52"
          height="31"
          transform="rotate(-90 61 423)"
          fill="#797979"
        />
        <rect
          x="61"
          y="371"
          width="17"
          height="31"
          transform="rotate(-90 61 371)"
          fill="#DFDFDF"
        />
        <rect
          x="61"
          y="440"
          width="17"
          height="31"
          transform="rotate(-90 61 440)"
          fill="#DFDFDF"
        />
        <rect
          x="68"
          y="399"
          width="4"
          height="17"
          transform="rotate(-90 68 399)"
          fill="#FAFAFA"
        />
        <rect
          x="30"
          y="423"
          width="52"
          height="31"
          transform="rotate(-90 30 423)"
          fill="#797979"
        />
        <rect
          x="30"
          y="371"
          width="17"
          height="31"
          transform="rotate(-90 30 371)"
          fill="#DFDFDF"
        />
        <rect
          x="30"
          y="440"
          width="17"
          height="31"
          transform="rotate(-90 30 440)"
          fill="#DFDFDF"
        />
        <rect
          x="37"
          y="399"
          width="4"
          height="17"
          transform="rotate(-90 37 399)"
          fill="#FAFAFA"
        />
        <rect
          y="423"
          width="52"
          height="31"
          transform="rotate(-90 0 423)"
          fill="#797979"
        />
        <rect
          y="371"
          width="17"
          height="31"
          transform="rotate(-90 0 371)"
          fill="#DFDFDF"
        />
        <rect
          y="440"
          width="17"
          height="31"
          transform="rotate(-90 0 440)"
          fill="#DFDFDF"
        />
        <rect
          x="7"
          y="399"
          width="4"
          height="17"
          transform="rotate(-90 7 399)"
          fill="#FAFAFA"
        />
        <rect
          x="121"
          y="371"
          width="52"
          height="31"
          transform="rotate(90 121 371)"
          fill="#797979"
        />
        <rect
          x="121"
          y="423"
          width="17"
          height="31"
          transform="rotate(90 121 423)"
          fill="#DFDFDF"
        />
        <rect
          x="121"
          y="354"
          width="17"
          height="31"
          transform="rotate(90 121 354)"
          fill="#DFDFDF"
        />
        <rect
          x="114"
          y="395"
          width="4"
          height="17"
          transform="rotate(90 114 395)"
          fill="#FAFAFA"
        />
        <rect
          x="152"
          y="371"
          width="52"
          height="31"
          transform="rotate(90 152 371)"
          fill="#797979"
        />
        <rect
          x="152"
          y="423"
          width="17"
          height="31"
          transform="rotate(90 152 423)"
          fill="#DFDFDF"
        />
        <rect
          x="152"
          y="354"
          width="17"
          height="31"
          transform="rotate(90 152 354)"
          fill="#DFDFDF"
        />
        <rect
          x="145"
          y="395"
          width="4"
          height="17"
          transform="rotate(90 145 395)"
          fill="#FAFAFA"
        />
        <rect
          x="235"
          y="371"
          width="52"
          height="31"
          transform="rotate(90 235 371)"
          fill="#797979"
        />
        <rect
          x="235"
          y="423"
          width="17"
          height="31"
          transform="rotate(90 235 423)"
          fill="#DFDFDF"
        />
        <rect
          x="235"
          y="354"
          width="17"
          height="31"
          transform="rotate(90 235 354)"
          fill="#DFDFDF"
        />
        <rect
          x="228"
          y="395"
          width="4"
          height="17"
          transform="rotate(90 228 395)"
          fill="#FAFAFA"
        />
        <rect
          x="266"
          y="371"
          width="52"
          height="31"
          transform="rotate(90 266 371)"
          fill="#797979"
        />
        <rect
          x="266"
          y="423"
          width="17"
          height="31"
          transform="rotate(90 266 423)"
          fill="#DFDFDF"
        />
        <rect
          x="266"
          y="354"
          width="17"
          height="31"
          transform="rotate(90 266 354)"
          fill="#DFDFDF"
        />
        <rect
          x="259"
          y="395"
          width="4"
          height="17"
          transform="rotate(90 259 395)"
          fill="#FAFAFA"
        />
        <rect
          x="205"
          y="354"
          width="17"
          height="53"
          transform="rotate(90 205 354)"
          fill="#DFDFDF"
        />
        <rect
          x="204"
          y="454"
          width="52"
          height="31"
          transform="rotate(-180 204 454)"
          fill="#797979"
        />
        <rect
          x="152"
          y="454"
          width="17"
          height="31"
          transform="rotate(-180 152 454)"
          fill="#DFDFDF"
        />
        <rect
          x="221"
          y="454"
          width="17"
          height="31"
          transform="rotate(-180 221 454)"
          fill="#DFDFDF"
        />
        <rect
          x="180"
          y="447"
          width="4"
          height="17"
          transform="rotate(-180 180 447)"
          fill="#FAFAFA"
        />
        <rect
          x="204"
          y="485"
          width="52"
          height="31"
          transform="rotate(-180 204 485)"
          fill="#797979"
        />
        <rect
          x="152"
          y="485"
          width="17"
          height="31"
          transform="rotate(-180 152 485)"
          fill="#DFDFDF"
        />
        <rect
          x="221"
          y="485"
          width="17"
          height="31"
          transform="rotate(-180 221 485)"
          fill="#DFDFDF"
        />
        <rect
          x="180"
          y="478"
          width="4"
          height="17"
          transform="rotate(-180 180 478)"
          fill="#FAFAFA"
        />
        <rect
          x="204"
          y="402"
          width="52"
          height="31"
          transform="rotate(-180 204 402)"
          fill="#797979"
        />
        <rect
          x="180"
          y="417"
          width="4"
          height="17"
          transform="rotate(-180 180 417)"
          fill="#FAFAFA"
        />
        <rect
          x="204"
          y="432"
          width="52"
          height="31"
          transform="rotate(-180 204 432)"
          fill="#797979"
        />
        <rect
          x="180"
          y="418"
          width="4"
          height="17"
          transform="rotate(-180 180 418)"
          fill="#FAFAFA"
        />
        <rect
          x="180"
          y="409"
          width="4"
          height="14"
          transform="rotate(-180 180 409)"
          fill="#FAFAFA"
        />
        <rect
          x="169"
          y="399"
          width="4"
          height="18"
          transform="rotate(-90 169 399)"
          fill="#FAFAFA"
        />
        <rect
          x="120.557"
          y="264.76"
          width="2.08791"
          height="12.24"
          fill="#CC8427"
        />
        <rect
          x="153.267"
          y="260"
          width="2.08791"
          height="9.384"
          fill="#CC8427"
        />
        <rect
          x="155.355"
          y="268.296"
          width="2.04"
          height="32.7106"
          transform="rotate(90 155.355 268.296)"
          fill="#CC8427"
        />
        <rect
          x="123.201"
          y="264.08"
          width="0.952"
          height="3.20147"
          transform="rotate(90 123.201 264.08)"
          fill="#CC8427"
        />
        <rect
          x="158"
          y="264.08"
          width="0.952"
          height="3.20146"
          transform="rotate(90 158 264.08)"
          fill="#CC8427"
        />
        <rect
          x="155.333"
          y="264.577"
          width="1.30769"
          height="32.6667"
          transform="rotate(90 155.333 264.577)"
          fill="#CC8427"
        />
        <rect
          x="155.333"
          y="261.962"
          width="1.30769"
          height="32.6667"
          transform="rotate(90 155.333 261.962)"
          fill="#CC8427"
        />
        <rect
          x="155.333"
          y="267.192"
          width="1.30769"
          height="32.6667"
          transform="rotate(90 155.333 267.192)"
          fill="#CC8427"
        />
        <rect
          opacity="0.93"
          x="155.355"
          y="259.346"
          width="1.224"
          height="32.7106"
          transform="rotate(90 155.355 259.346)"
          fill="#CC8427"
        />
        <rect
          x="122.645"
          y="260"
          width="2.08791"
          height="9.384"
          fill="#CC8427"
        />
        <rect
          x="155.355"
          y="264.76"
          width="2.08791"
          height="12.24"
          fill="#CC8427"
        />
        <rect
          x="347.557"
          y="264.76"
          width="2.08791"
          height="12.24"
          fill="#CC8427"
        />
        <rect
          x="380.267"
          y="260"
          width="2.08791"
          height="9.384"
          fill="#CC8427"
        />
        <rect
          x="382.355"
          y="268.296"
          width="2.04"
          height="32.7106"
          transform="rotate(90 382.355 268.296)"
          fill="#CC8427"
        />
        <rect
          x="350.201"
          y="264.08"
          width="0.952"
          height="3.20147"
          transform="rotate(90 350.201 264.08)"
          fill="#CC8427"
        />
        <rect
          x="385"
          y="264.08"
          width="0.952"
          height="3.20146"
          transform="rotate(90 385 264.08)"
          fill="#CC8427"
        />
        <rect
          x="382.333"
          y="264.577"
          width="1.30769"
          height="32.6667"
          transform="rotate(90 382.333 264.577)"
          fill="#CC8427"
        />
        <rect
          x="382.333"
          y="261.962"
          width="1.30769"
          height="32.6667"
          transform="rotate(90 382.333 261.962)"
          fill="#CC8427"
        />
        <rect
          x="382.333"
          y="267.192"
          width="1.30769"
          height="32.6667"
          transform="rotate(90 382.333 267.192)"
          fill="#CC8427"
        />
        <rect
          opacity="0.93"
          x="382.355"
          y="259.346"
          width="1.224"
          height="32.7106"
          transform="rotate(90 382.355 259.346)"
          fill="#CC8427"
        />
        <rect
          x="349.645"
          y="260"
          width="2.08791"
          height="9.384"
          fill="#CC8427"
        />
        <rect
          x="382.355"
          y="264.76"
          width="2.08791"
          height="12.24"
          fill="#CC8427"
        />
        <rect
          x="111.902"
          y="113.146"
          width="282.911"
          height="141.456"
          fill="#B24747"
        />
        <rect
          x="288.567"
          y="123.755"
          width="19.3733"
          height="24.9085"
          fill="#7F3333"
        />
        <rect
          x="291.335"
          y="126.522"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="291.335"
          y="137.593"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="285.8"
          y="143.128"
          width="24.9085"
          height="2.76761"
          fill="#FF9393"
        />
        <rect
          x="249.513"
          y="123.755"
          width="19.3733"
          height="24.9085"
          fill="#7F3333"
        />
        <rect
          x="252.281"
          y="126.522"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="252.281"
          y="137.593"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="246.746"
          y="143.128"
          width="24.9085"
          height="2.76761"
          fill="#FF9393"
        />
        <rect
          x="210.459"
          y="123.755"
          width="19.3733"
          height="24.9085"
          fill="#7F3333"
        />
        <rect
          x="213.227"
          y="126.522"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="213.227"
          y="137.593"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="207.692"
          y="143.128"
          width="24.9085"
          height="2.76761"
          fill="#FF9393"
        />
        <rect
          x="171.405"
          y="123.755"
          width="19.3733"
          height="24.9085"
          fill="#7F3333"
        />
        <rect
          x="174.173"
          y="126.522"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="174.173"
          y="137.593"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="168.638"
          y="143.128"
          width="24.9085"
          height="2.76761"
          fill="#FF9393"
        />
        <rect
          x="132.352"
          y="123.755"
          width="19.3733"
          height="24.9085"
          fill="#7F3333"
        />
        <rect
          x="135.119"
          y="126.522"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="135.119"
          y="137.593"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="129.584"
          y="143.128"
          width="24.9085"
          height="2.76761"
          fill="#FF9393"
        />
        <rect
          x="288.567"
          y="154.198"
          width="19.3733"
          height="24.9085"
          fill="#7F3333"
        />
        <rect
          x="291.335"
          y="156.966"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="291.335"
          y="168.036"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="285.8"
          y="173.572"
          width="24.9085"
          height="2.76761"
          fill="#FF9393"
        />
        <rect
          x="327.621"
          y="123.755"
          width="19.3733"
          height="24.9085"
          fill="#7F3333"
        />
        <rect
          x="330.389"
          y="126.522"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="330.389"
          y="137.593"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="324.854"
          y="143.128"
          width="24.9085"
          height="2.76761"
          fill="#FF9393"
        />
        <rect
          x="327.621"
          y="154.198"
          width="19.3733"
          height="24.9085"
          fill="#7F3333"
        />
        <rect
          x="330.389"
          y="156.966"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="330.389"
          y="168.036"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="324.854"
          y="173.572"
          width="24.9085"
          height="2.76761"
          fill="#FF9393"
        />
        <rect
          x="249.513"
          y="154.198"
          width="19.3733"
          height="24.9085"
          fill="#7F3333"
        />
        <rect
          x="252.281"
          y="156.966"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="252.281"
          y="168.036"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="246.746"
          y="173.572"
          width="24.9085"
          height="2.76761"
          fill="#FF9393"
        />
        <rect
          x="210.459"
          y="154.198"
          width="19.3733"
          height="24.9085"
          fill="#7F3333"
        />
        <rect
          x="213.227"
          y="156.966"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="213.227"
          y="168.036"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="207.692"
          y="173.572"
          width="24.9085"
          height="2.76761"
          fill="#FF9393"
        />
        <rect
          x="171.405"
          y="154.198"
          width="19.3733"
          height="24.9085"
          fill="#7F3333"
        />
        <rect
          x="174.173"
          y="156.966"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="174.173"
          y="168.036"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="168.638"
          y="173.572"
          width="24.9085"
          height="2.76761"
          fill="#FF9393"
        />
        <rect
          x="132.352"
          y="154.198"
          width="19.3733"
          height="24.9085"
          fill="#7F3333"
        />
        <rect
          x="135.119"
          y="156.966"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="135.119"
          y="168.036"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="129.584"
          y="173.572"
          width="24.9085"
          height="2.76761"
          fill="#FF9393"
        />
        <rect
          x="288.567"
          y="185.619"
          width="19.3733"
          height="24.9085"
          fill="#7F3333"
        />
        <rect
          x="291.335"
          y="188.387"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="291.335"
          y="199.457"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="285.8"
          y="204.992"
          width="24.9085"
          height="2.76761"
          fill="#FF9393"
        />
        <rect
          x="327.621"
          y="185.619"
          width="19.3733"
          height="24.9085"
          fill="#7F3333"
        />
        <rect
          x="330.389"
          y="188.387"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="330.389"
          y="199.457"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="324.854"
          y="204.992"
          width="24.9085"
          height="2.76761"
          fill="#FF9393"
        />
        <rect
          x="249.513"
          y="185.619"
          width="19.3733"
          height="24.9085"
          fill="#7F3333"
        />
        <rect
          x="252.281"
          y="188.387"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="252.281"
          y="199.457"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="246.746"
          y="204.992"
          width="24.9085"
          height="2.76761"
          fill="#FF9393"
        />
        <rect
          x="210.152"
          y="183.873"
          width="19.3733"
          height="25.482"
          fill="#7F3333"
        />
        <rect
          x="235.676"
          y="229.846"
          width="17.6819"
          height="24.7547"
          fill="#7F3333"
        />
        <rect
          x="253.358"
          y="229.846"
          width="3.53639"
          height="24.7547"
          fill="#4C1E1E"
        />
        <rect
          x="232.139"
          y="229.846"
          width="3.53639"
          height="24.7547"
          fill="#4C1E1E"
        />
        <rect
          x="256.894"
          y="226.31"
          width="3.53639"
          height="24.7547"
          transform="rotate(90 256.894 226.31)"
          fill="#4C1E1E"
        />
        <rect
          x="212.92"
          y="186.705"
          width="13.838"
          height="8.49402"
          fill="#A6DFEA"
        />
        <rect
          x="212.92"
          y="198.03"
          width="13.838"
          height="8.49402"
          fill="#A6DFEA"
        />
        <rect
          x="207.385"
          y="203.693"
          width="24.9085"
          height="2.83134"
          fill="#FF9393"
        />
        <rect
          x="171.405"
          y="185.619"
          width="19.3733"
          height="24.9085"
          fill="#7F3333"
        />
        <rect
          x="174.173"
          y="188.387"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="174.173"
          y="199.457"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="168.638"
          y="204.992"
          width="24.9085"
          height="2.76761"
          fill="#FF9393"
        />
        <rect
          x="132.352"
          y="185.619"
          width="19.3733"
          height="24.9085"
          fill="#7F3333"
        />
        <rect
          x="135.119"
          y="188.387"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="135.119"
          y="199.457"
          width="13.838"
          height="8.30283"
          fill="#A6DFEA"
        />
        <rect
          x="129.584"
          y="204.992"
          width="24.9085"
          height="2.76761"
          fill="#FF9393"
        />
        <rect
          x="362.986"
          y="169.728"
          width="7.07278"
          height="3.53639"
          fill="#7F3333"
        />
        <rect
          x="377.131"
          y="134.364"
          width="7.07278"
          height="3.53639"
          fill="#7F3333"
        />
        <rect
          x="355.913"
          y="113.146"
          width="7.07278"
          height="3.53639"
          fill="#7F3333"
        />
        <rect
          x="122.511"
          y="190.946"
          width="7.07278"
          height="3.53639"
          fill="#7F3333"
        />
        <rect
          x="274.576"
          y="120.218"
          width="7.07278"
          height="3.53639"
          fill="#7F3333"
        />
        <rect
          x="274.576"
          y="187.41"
          width="7.07278"
          height="3.53639"
          fill="#7F3333"
        />
        <rect
          x="235.676"
          y="215.701"
          width="7.07278"
          height="3.53639"
          fill="#7F3333"
        />
        <rect
          x="232.139"
          y="183.873"
          width="7.07278"
          height="3.53639"
          fill="#7F3333"
        />
        <rect
          x="157.875"
          y="222.774"
          width="7.07278"
          height="3.53639"
          fill="#7F3333"
        />
        <rect
          x="118.975"
          y="134.364"
          width="7.07278"
          height="3.53639"
          fill="#7F3333"
        />
        <rect
          x="196.775"
          y="159.119"
          width="7.07278"
          height="3.53639"
          fill="#7F3333"
        />
        <rect
          x="111.902"
          y="247.528"
          width="7.07278"
          height="3.53639"
          fill="#7F3333"
        />
        <rect
          x="370.058"
          y="226.31"
          width="7.07278"
          height="3.53639"
          fill="#7F3333"
        />
        <rect
          x="324.085"
          y="229.846"
          width="7.07278"
          height="3.53639"
          fill="#7F3333"
        />
        <rect
          x="196.775"
          y="233.383"
          width="7.07278"
          height="3.53639"
          fill="#7F3333"
        />
        <circle cx="251.589" cy="242.224" r="1.76819" fill="#F6D475" />
        <rect
          x="140.193"
          y="102.536"
          width="7.07278"
          height="10.6092"
          fill="#797979"
        />
        <rect
          x="341.767"
          y="99"
          width="31.8275"
          height="10.6092"
          fill="#797979"
        />
        <rect
          x="108.366"
          y="106.073"
          width="289.984"
          height="7.07278"
          fill="#7F3333"
        />
        <rect
          x="276.693"
          y="229.5"
          width="51.6139"
          height="37.5438"
          fill="#1B8CA3"
          stroke="#CC8427"
          strokeWidth="3"
        />
        <rect
          x="278.624"
          y="231.187"
          width="47.7529"
          height="32.4608"
          stroke="#FF9393"
        />
        <rect
          x="268"
          y="264.11"
          width="69"
          height="4.07692"
          rx="2.03846"
          fill="#B24747"
        />
        <rect
          x="269.917"
          y="261.198"
          width="65.8055"
          height="3.49451"
          rx="1.74726"
          fill="#CC8427"
        />
        <rect
          x="271.194"
          y="264.692"
          width="61.5405"
          height="11.9677"
          fill="#B24747"
        />
        <rect
          x="298.635"
          y="270.798"
          width="14.9189"
          height="2.93088"
          fill="#7F3333"
        />
        <rect
          x="317.816"
          y="267.623"
          width="14.9189"
          height="2.93088"
          fill="#7F3333"
        />
        <rect
          x="281.052"
          y="273.729"
          width="14.9189"
          height="2.93088"
          fill="#7F3333"
        />
        <path
          d="M282.91 251C282.566 251 282.286 250.896 282.07 250.688C281.854 250.48 281.746 250.208 281.746 249.872V242.6H285.754C286.394 242.6 286.954 242.72 287.434 242.96C287.922 243.2 288.298 243.54 288.562 243.98C288.834 244.42 288.97 244.928 288.97 245.504V247.856C288.97 248.888 288.702 249.672 288.166 250.208C287.63 250.736 286.842 251 285.802 251H282.91ZM285.754 249.536C286.266 249.536 286.654 249.388 286.918 249.092C287.182 248.796 287.314 248.36 287.314 247.784V245.576C287.314 245.12 287.166 244.756 286.87 244.484C286.574 244.204 286.186 244.064 285.706 244.064H283.402V249.536H285.754ZM293.136 251.096C292.504 251.096 291.944 250.964 291.456 250.7C290.976 250.428 290.6 250.052 290.328 249.572C290.064 249.084 289.932 248.52 289.932 247.88V245.72C289.932 245.08 290.064 244.52 290.328 244.04C290.6 243.552 290.976 243.176 291.456 242.912C291.944 242.64 292.504 242.504 293.136 242.504H294.408C295.04 242.504 295.596 242.64 296.076 242.912C296.564 243.176 296.94 243.552 297.204 244.04C297.476 244.52 297.612 245.08 297.612 245.72V247.88C297.612 248.52 297.476 249.084 297.204 249.572C296.94 250.052 296.564 250.428 296.076 250.7C295.596 250.964 295.04 251.096 294.408 251.096H293.136ZM294.408 249.632C294.872 249.632 295.244 249.464 295.524 249.128C295.812 248.792 295.956 248.352 295.956 247.808V245.792C295.956 245.248 295.812 244.808 295.524 244.472C295.244 244.136 294.872 243.968 294.408 243.968H293.136C292.672 243.968 292.296 244.136 292.008 244.472C291.728 244.808 291.588 245.248 291.588 245.792V247.808C291.588 248.352 291.728 248.792 292.008 249.128C292.296 249.464 292.672 249.632 293.136 249.632H294.408ZM298.855 242.6H303.319C304.047 242.6 304.631 242.796 305.071 243.188C305.519 243.58 305.743 244.096 305.743 244.736V245.576C305.743 245.992 305.623 246.356 305.383 246.668C305.151 246.972 304.811 247.204 304.363 247.364V247.388C304.619 247.556 304.811 247.748 304.939 247.964C305.075 248.18 305.207 248.48 305.335 248.864L306.007 251H304.291L303.655 249.008C303.551 248.664 303.407 248.408 303.223 248.24C303.039 248.072 302.811 247.988 302.539 247.988H300.511V251H298.855V242.6ZM303.007 246.56C303.343 246.56 303.607 246.472 303.799 246.296C303.991 246.112 304.087 245.876 304.087 245.588V244.808C304.087 244.576 304.015 244.392 303.871 244.256C303.727 244.112 303.535 244.04 303.295 244.04H300.511V246.56H303.007ZM306.988 242.6H308.464L311.212 247.592L313.9 242.6H315.376V251H313.756V245.684L311.992 248.876C311.872 249.092 311.748 249.248 311.62 249.344C311.5 249.432 311.36 249.476 311.2 249.476H310.744L308.608 245.684V251H306.988V242.6ZM319.387 251.096C318.507 251.096 317.819 250.852 317.323 250.364C316.827 249.868 316.579 249.18 316.579 248.3H318.211C318.211 248.716 318.315 249.044 318.523 249.284C318.739 249.516 319.035 249.632 319.411 249.632H320.743C321.095 249.632 321.379 249.56 321.595 249.416C321.819 249.264 321.931 249.064 321.931 248.816V248.408C321.931 248.016 321.643 247.772 321.067 247.676L318.859 247.304C318.139 247.184 317.591 246.956 317.215 246.62C316.847 246.276 316.663 245.84 316.663 245.312V244.64C316.663 244.216 316.775 243.844 316.999 243.524C317.231 243.196 317.555 242.944 317.971 242.768C318.395 242.592 318.883 242.504 319.435 242.504H320.791C321.311 242.504 321.771 242.612 322.171 242.828C322.571 243.044 322.879 243.348 323.095 243.74C323.319 244.124 323.431 244.572 323.431 245.084H321.799C321.799 244.748 321.707 244.48 321.523 244.28C321.339 244.072 321.095 243.968 320.791 243.968H319.435C319.099 243.968 318.827 244.04 318.619 244.184C318.419 244.328 318.319 244.52 318.319 244.76V245.084C318.319 245.484 318.595 245.732 319.147 245.828L321.343 246.212C322.071 246.34 322.627 246.568 323.011 246.896C323.395 247.216 323.587 247.632 323.587 248.144V248.936C323.587 249.36 323.467 249.736 323.227 250.064C322.995 250.392 322.667 250.648 322.243 250.832C321.819 251.008 321.327 251.096 320.767 251.096H319.387Z"
          fill="#FAFAFA"
        />
        <rect
          x="709.427"
          y="243.5"
          width="95.1467"
          height="37.5438"
          fill="#1B8CA3"
          stroke="#CC8427"
          strokeWidth="3"
        />
        <rect
          x="711.534"
          y="245.5"
          width="90.931"
          height="32"
          stroke="#FF9393"
        />
        <rect
          x="695"
          y="278.11"
          width="124"
          height="4.07692"
          rx="2.03846"
          fill="#B24747"
        />
        <rect
          x="698.444"
          y="275.198"
          width="118.259"
          height="3.49451"
          rx="1.74726"
          fill="#CC8427"
        />
        <rect
          x="700.741"
          y="278.692"
          width="110.595"
          height="11.9677"
          fill="#B24747"
        />
        <rect
          x="750.053"
          y="284.798"
          width="26.8108"
          height="2.93088"
          fill="#7F3333"
        />
        <rect
          x="784.525"
          y="281.623"
          width="26.8108"
          height="2.93088"
          fill="#7F3333"
        />
        <rect
          x="718.455"
          y="287.729"
          width="26.8108"
          height="2.93088"
          fill="#7F3333"
        />
        <path
          d="M716.201 256.6H720.629C721.117 256.6 721.549 256.696 721.925 256.888C722.301 257.072 722.593 257.34 722.801 257.692C723.009 258.036 723.113 258.432 723.113 258.88V259.996C723.113 260.46 723.005 260.872 722.789 261.232C722.573 261.584 722.269 261.86 721.877 262.06C721.493 262.252 721.045 262.348 720.533 262.348H717.857V265H716.201V256.6ZM720.509 260.908C720.789 260.908 721.017 260.82 721.193 260.644C721.369 260.46 721.457 260.22 721.457 259.924V258.952C721.457 258.672 721.377 258.452 721.217 258.292C721.065 258.124 720.861 258.04 720.605 258.04H717.857V260.908H720.509ZM724.029 256.6H728.493C729.221 256.6 729.805 256.796 730.245 257.188C730.693 257.58 730.917 258.096 730.917 258.736V259.576C730.917 259.992 730.797 260.356 730.557 260.668C730.325 260.972 729.985 261.204 729.537 261.364V261.388C729.793 261.556 729.985 261.748 730.113 261.964C730.249 262.18 730.381 262.48 730.509 262.864L731.181 265H729.465L728.829 263.008C728.725 262.664 728.581 262.408 728.397 262.24C728.213 262.072 727.985 261.988 727.713 261.988H725.685V265H724.029V256.6ZM728.181 260.56C728.517 260.56 728.781 260.472 728.973 260.296C729.165 260.112 729.261 259.876 729.261 259.588V258.808C729.261 258.576 729.189 258.392 729.045 258.256C728.901 258.112 728.709 258.04 728.469 258.04H725.685V260.56H728.181ZM735.079 265.096C734.447 265.096 733.887 264.964 733.399 264.7C732.919 264.428 732.543 264.052 732.271 263.572C732.007 263.084 731.875 262.52 731.875 261.88V259.72C731.875 259.08 732.007 258.52 732.271 258.04C732.543 257.552 732.919 257.176 733.399 256.912C733.887 256.64 734.447 256.504 735.079 256.504H736.351C736.983 256.504 737.539 256.64 738.019 256.912C738.507 257.176 738.883 257.552 739.147 258.04C739.419 258.52 739.555 259.08 739.555 259.72V261.88C739.555 262.52 739.419 263.084 739.147 263.572C738.883 264.052 738.507 264.428 738.019 264.7C737.539 264.964 736.983 265.096 736.351 265.096H735.079ZM736.351 263.632C736.815 263.632 737.187 263.464 737.467 263.128C737.755 262.792 737.899 262.352 737.899 261.808V259.792C737.899 259.248 737.755 258.808 737.467 258.472C737.187 258.136 736.815 257.968 736.351 257.968H735.079C734.615 257.968 734.239 258.136 733.951 258.472C733.671 258.808 733.531 259.248 733.531 259.792V261.808C733.531 262.352 733.671 262.792 733.951 263.128C734.239 263.464 734.615 263.632 735.079 263.632H736.351ZM740.799 256.6H747.087V258.04H742.455V260.296H746.643V261.736H742.455V265H740.799V256.6ZM749.205 265C748.861 265 748.581 264.896 748.365 264.688C748.149 264.48 748.041 264.208 748.041 263.872V256.6H754.449V258.04H749.697V259.984H754.089V261.424H749.697V263.56H754.449V265H749.205ZM758.096 265.096C757.216 265.096 756.528 264.852 756.032 264.364C755.536 263.868 755.288 263.18 755.288 262.3H756.92C756.92 262.716 757.024 263.044 757.232 263.284C757.448 263.516 757.744 263.632 758.12 263.632H759.452C759.804 263.632 760.088 263.56 760.304 263.416C760.528 263.264 760.64 263.064 760.64 262.816V262.408C760.64 262.016 760.352 261.772 759.776 261.676L757.568 261.304C756.848 261.184 756.3 260.956 755.924 260.62C755.556 260.276 755.372 259.84 755.372 259.312V258.64C755.372 258.216 755.484 257.844 755.708 257.524C755.94 257.196 756.264 256.944 756.68 256.768C757.104 256.592 757.592 256.504 758.144 256.504H759.5C760.02 256.504 760.48 256.612 760.88 256.828C761.28 257.044 761.588 257.348 761.804 257.74C762.028 258.124 762.14 258.572 762.14 259.084H760.508C760.508 258.748 760.416 258.48 760.232 258.28C760.048 258.072 759.804 257.968 759.5 257.968H758.144C757.808 257.968 757.536 258.04 757.328 258.184C757.128 258.328 757.028 258.52 757.028 258.76V259.084C757.028 259.484 757.304 259.732 757.856 259.828L760.052 260.212C760.78 260.34 761.336 260.568 761.72 260.896C762.104 261.216 762.296 261.632 762.296 262.144V262.936C762.296 263.36 762.176 263.736 761.936 264.064C761.704 264.392 761.376 264.648 760.952 264.832C760.528 265.008 760.036 265.096 759.476 265.096H758.096ZM765.971 265.096C765.091 265.096 764.403 264.852 763.907 264.364C763.411 263.868 763.163 263.18 763.163 262.3H764.795C764.795 262.716 764.899 263.044 765.107 263.284C765.323 263.516 765.619 263.632 765.995 263.632H767.327C767.679 263.632 767.963 263.56 768.179 263.416C768.403 263.264 768.515 263.064 768.515 262.816V262.408C768.515 262.016 768.227 261.772 767.651 261.676L765.443 261.304C764.723 261.184 764.175 260.956 763.799 260.62C763.431 260.276 763.247 259.84 763.247 259.312V258.64C763.247 258.216 763.359 257.844 763.583 257.524C763.815 257.196 764.139 256.944 764.555 256.768C764.979 256.592 765.467 256.504 766.019 256.504H767.375C767.895 256.504 768.355 256.612 768.755 256.828C769.155 257.044 769.463 257.348 769.679 257.74C769.903 258.124 770.015 258.572 770.015 259.084H768.383C768.383 258.748 768.291 258.48 768.107 258.28C767.923 258.072 767.679 257.968 767.375 257.968H766.019C765.683 257.968 765.411 258.04 765.203 258.184C765.003 258.328 764.903 258.52 764.903 258.76V259.084C764.903 259.484 765.179 259.732 765.731 259.828L767.927 260.212C768.655 260.34 769.211 260.568 769.595 260.896C769.979 261.216 770.171 261.632 770.171 262.144V262.936C770.171 263.36 770.051 263.736 769.811 264.064C769.579 264.392 769.251 264.648 768.827 264.832C768.403 265.008 767.911 265.096 767.351 265.096H765.971ZM774.29 265.096C773.658 265.096 773.098 264.964 772.61 264.7C772.13 264.428 771.754 264.052 771.482 263.572C771.218 263.084 771.086 262.52 771.086 261.88V259.72C771.086 259.08 771.218 258.52 771.482 258.04C771.754 257.552 772.13 257.176 772.61 256.912C773.098 256.64 773.658 256.504 774.29 256.504H775.562C776.194 256.504 776.75 256.64 777.23 256.912C777.718 257.176 778.094 257.552 778.358 258.04C778.63 258.52 778.766 259.08 778.766 259.72V261.88C778.766 262.52 778.63 263.084 778.358 263.572C778.094 264.052 777.718 264.428 777.23 264.7C776.75 264.964 776.194 265.096 775.562 265.096H774.29ZM775.562 263.632C776.026 263.632 776.398 263.464 776.678 263.128C776.966 262.792 777.11 262.352 777.11 261.808V259.792C777.11 259.248 776.966 258.808 776.678 258.472C776.398 258.136 776.026 257.968 775.562 257.968H774.29C773.826 257.968 773.45 258.136 773.162 258.472C772.882 258.808 772.742 259.248 772.742 259.792V261.808C772.742 262.352 772.882 262.792 773.162 263.128C773.45 263.464 773.826 263.632 774.29 263.632H775.562ZM780.01 256.6H784.474C785.202 256.6 785.786 256.796 786.226 257.188C786.674 257.58 786.898 258.096 786.898 258.736V259.576C786.898 259.992 786.778 260.356 786.538 260.668C786.306 260.972 785.966 261.204 785.518 261.364V261.388C785.774 261.556 785.966 261.748 786.094 261.964C786.23 262.18 786.362 262.48 786.49 262.864L787.162 265H785.446L784.81 263.008C784.706 262.664 784.562 262.408 784.378 262.24C784.194 262.072 783.966 261.988 783.694 261.988H781.666V265H780.01V256.6ZM784.162 260.56C784.498 260.56 784.762 260.472 784.954 260.296C785.146 260.112 785.242 259.876 785.242 259.588V258.808C785.242 258.576 785.17 258.392 785.026 258.256C784.882 258.112 784.69 258.04 784.45 258.04H781.666V260.56H784.162ZM787.71 259.084L788.07 258.76C788.486 258.384 788.694 257.928 788.694 257.392V256.6H790.326V257.392C790.326 257.928 790.226 258.412 790.026 258.844C789.834 259.276 789.55 259.64 789.174 259.936L788.766 260.26L787.71 259.084ZM793.932 265.096C793.052 265.096 792.364 264.852 791.868 264.364C791.372 263.868 791.124 263.18 791.124 262.3H792.756C792.756 262.716 792.86 263.044 793.068 263.284C793.284 263.516 793.58 263.632 793.956 263.632H795.288C795.64 263.632 795.924 263.56 796.14 263.416C796.364 263.264 796.476 263.064 796.476 262.816V262.408C796.476 262.016 796.188 261.772 795.612 261.676L793.404 261.304C792.684 261.184 792.136 260.956 791.76 260.62C791.392 260.276 791.208 259.84 791.208 259.312V258.64C791.208 258.216 791.32 257.844 791.544 257.524C791.776 257.196 792.1 256.944 792.516 256.768C792.94 256.592 793.428 256.504 793.98 256.504H795.336C795.856 256.504 796.316 256.612 796.716 256.828C797.116 257.044 797.424 257.348 797.64 257.74C797.864 258.124 797.976 258.572 797.976 259.084H796.344C796.344 258.748 796.252 258.48 796.068 258.28C795.884 258.072 795.64 257.968 795.336 257.968H793.98C793.644 257.968 793.372 258.04 793.164 258.184C792.964 258.328 792.864 258.52 792.864 258.76V259.084C792.864 259.484 793.14 259.732 793.692 259.828L795.888 260.212C796.616 260.34 797.172 260.568 797.556 260.896C797.94 261.216 798.132 261.632 798.132 262.144V262.936C798.132 263.36 798.012 263.736 797.772 264.064C797.54 264.392 797.212 264.648 796.788 264.832C796.364 265.008 795.872 265.096 795.312 265.096H793.932Z"
          fill="#FAFAFA"
        />
        <RitchieHallSign onClick={() => setMapLocation('ritchie-hall')} />
        <rect x="606" y="156" width="91" height="99" fill="#FF6667" />
        <rect x="620.222" y="167" width="15.5556" height="25" fill="#7F3333" />
        <rect
          x="622.444"
          y="169.778"
          width="11.1111"
          height="8.33333"
          fill="#A6DFEA"
        />
        <rect
          x="622.444"
          y="180.889"
          width="11.1111"
          height="8.33333"
          fill="#A6DFEA"
        />
        <rect x="618" y="186.444" width="20" height="2.77778" fill="#FF9393" />
        <rect x="646.222" y="167" width="15.5556" height="25" fill="#7F3333" />
        <rect
          x="648.444"
          y="169.778"
          width="11.1111"
          height="8.33333"
          fill="#A6DFEA"
        />
        <rect
          x="648.444"
          y="180.889"
          width="11.1111"
          height="8.33333"
          fill="#A6DFEA"
        />
        <rect x="644" y="186.444" width="20" height="2.77778" fill="#FF9393" />
        <rect x="620.222" y="198" width="15.5556" height="25" fill="#7F3333" />
        <rect
          x="622.444"
          y="200.778"
          width="11.1111"
          height="8.33333"
          fill="#A6DFEA"
        />
        <rect
          x="622.444"
          y="211.889"
          width="11.1111"
          height="8.33333"
          fill="#A6DFEA"
        />
        <rect x="618" y="217.444" width="20" height="2.77778" fill="#FF9393" />
        <rect x="646.222" y="198" width="15.5556" height="25" fill="#7F3333" />
        <rect
          x="648.444"
          y="200.778"
          width="11.1111"
          height="8.33333"
          fill="#A6DFEA"
        />
        <rect
          x="648.444"
          y="211.889"
          width="11.1111"
          height="8.33333"
          fill="#A6DFEA"
        />
        <rect x="644" y="217.444" width="20" height="2.77778" fill="#FF9393" />
        <rect x="672.222" y="167" width="15.5556" height="25" fill="#7F3333" />
        <rect
          x="674.444"
          y="169.778"
          width="11.1111"
          height="8.33333"
          fill="#A6DFEA"
        />
        <rect
          x="674.444"
          y="180.889"
          width="11.1111"
          height="8.33333"
          fill="#A6DFEA"
        />
        <rect x="670" y="186.444" width="20" height="2.77778" fill="#FF9393" />
        <rect x="611" y="241" width="7" height="3.5" fill="#FF9393" />
        <rect x="612" y="194" width="7" height="3.5" fill="#FF9393" />
        <rect x="681" y="208" width="7" height="3.5" fill="#FF9393" />
        <rect x="670.5" y="230.5" width="17.5" height="24.5" fill="#B24747" />
        <rect x="688" y="230.5" width="3.5" height="24.5" fill="#7F3333" />
        <rect x="667" y="230.5" width="3.5" height="24.5" fill="#7F3333" />
        <rect
          x="691.5"
          y="227"
          width="3.5"
          height="24.5"
          transform="rotate(90 691.5 227)"
          fill="#7F3333"
        />
        <circle cx="686.25" cy="242.75" r="1.75" fill="#F3C13A" />
        <path
          d="M622.125 133H679.625L699 156H604L622.125 133Z"
          fill="#B24747"
        />
        <rect
          x="639.739"
          y="127"
          width="19.1739"
          height="24.6522"
          fill="#B24747"
        />
        <rect
          x="642.478"
          y="129.739"
          width="13.6957"
          height="8.21739"
          fill="#A6DFEA"
        />
        <rect
          x="642.478"
          y="140.696"
          width="13.6957"
          height="8.21739"
          fill="#A6DFEA"
        />
        <rect
          x="637"
          y="146.174"
          width="24.6522"
          height="2.73913"
          fill="#FF6667"
        />
        <path d="M649.5 118L661.191 127H637.809L649.5 118Z" fill="#FF6667" />
        <RitchieHallIcon onClick={() => setMapLocation('ritchie-hall')} />
        <RitchieHallBush />
        <path
          d="M292 539.876H360.892L354.491 552H298.509L292 539.876Z"
          fill="#FAFAFA"
        />
        <path
          d="M297.858 522.557H355.142L349.819 534.68H303.271L297.858 522.557Z"
          fill="#FAFAFA"
        />
        <path
          d="M303.717 505.021H349.283L345.049 517.144H308.022L303.717 505.021Z"
          fill="#FAFAFA"
        />
        <rect
          x="319.774"
          y="517.144"
          width="13.4528"
          height="5.41237"
          fill="#FAFAFA"
        />
        <rect
          x="318.255"
          y="534.68"
          width="16.4906"
          height="5.19588"
          fill="#FAFAFA"
        />
        <rect
          x="292"
          y="538.794"
          width="69"
          height="4.3299"
          rx="2.16495"
          fill="#F3F3F3"
        />
        <rect
          x="296.123"
          y="519.959"
          width="60.7547"
          height="4.3299"
          rx="2.16495"
          fill="#F3F3F3"
        />
        <rect
          x="302.632"
          y="502.856"
          width="46.6509"
          height="4.32989"
          rx="2.16495"
          fill="#F3F3F3"
        />
        <rect
          x="301.547"
          y="519.959"
          width="4.33962"
          height="18.835"
          fill="#A6DFEA"
        />
        <rect
          x="306.755"
          y="519.959"
          width="0.867925"
          height="18.835"
          fill="#A6DFEA"
        />
        <rect
          x="306.755"
          y="502.856"
          width="4.33962"
          height="17.1031"
          fill="#A6DFEA"
        />
        <rect
          x="311.962"
          y="502.856"
          width="0.867928"
          height="17.1031"
          fill="#A6DFEA"
        />
        <rect
          x="346.245"
          y="519.959"
          width="4.33962"
          height="17.1031"
          transform="rotate(-180 346.245 519.959)"
          fill="#A6DFEA"
        />
        <rect
          x="341.038"
          y="519.959"
          width="0.867922"
          height="17.1031"
          transform="rotate(-180 341.038 519.959)"
          fill="#A6DFEA"
        />
        <rect
          x="351.453"
          y="538.794"
          width="4.33963"
          height="18.835"
          transform="rotate(-180 351.453 538.794)"
          fill="#A6DFEA"
        />
        <rect
          x="346.245"
          y="538.794"
          width="0.867926"
          height="18.835"
          transform="rotate(-180 346.245 538.794)"
          fill="#A6DFEA"
        />
        <path
          d="M307.788 503.12C307.773 501.824 308.015 500.534 308.501 499.326C308.986 498.117 309.705 497.013 310.617 496.078C311.529 495.143 312.614 494.395 313.812 493.877C315.009 493.359 316.294 493.082 317.593 493.061C318.891 493.041 320.177 493.277 321.377 493.757C322.577 494.237 323.666 494.95 324.583 495.856C325.499 496.763 326.224 497.844 326.715 499.037C327.207 500.23 327.456 501.512 327.447 502.808L324.207 502.829C324.213 501.96 324.046 501.101 323.717 500.301C323.387 499.501 322.901 498.776 322.287 498.169C321.673 497.561 320.942 497.083 320.138 496.761C319.334 496.44 318.471 496.281 317.601 496.295C316.73 496.309 315.869 496.495 315.066 496.842C314.263 497.189 313.535 497.691 312.924 498.318C312.313 498.945 311.831 499.685 311.505 500.495C311.18 501.305 311.018 502.17 311.028 503.038L307.788 503.12Z"
          fill="#A6DFEA"
        />
        <path
          d="M312.033 502.92C312.055 501.265 312.732 499.677 313.916 498.502C315.1 497.326 316.696 496.66 318.355 496.646C320.014 496.633 321.603 497.275 322.774 498.431C323.946 499.588 324.605 501.165 324.609 502.82L323.668 502.835C323.665 501.428 323.104 500.086 322.108 499.103C321.111 498.12 319.761 497.574 318.35 497.585C316.939 497.597 315.582 498.164 314.575 499.163C313.568 500.162 312.993 501.513 312.974 502.92L312.033 502.92Z"
          fill="#A6DFEA"
        />
        <path
          d="M328.452 502.831C328.48 501.167 329.169 499.574 330.368 498.402C331.567 497.23 333.178 496.574 334.846 496.58C336.515 496.585 338.103 497.251 339.263 498.431C340.423 499.611 341.059 501.209 341.031 502.872L340.09 502.869C340.114 501.454 339.573 500.096 338.587 499.093C337.6 498.089 336.249 497.523 334.831 497.518C333.412 497.514 332.042 498.071 331.023 499.068C330.003 500.065 329.417 501.419 329.393 502.834L328.452 502.831Z"
          fill="#A6DFEA"
        />
        <path
          d="M325.735 502.825C325.72 501.55 325.959 500.285 326.438 499.104C326.916 497.923 327.625 496.85 328.523 495.945C329.421 495.041 330.49 494.323 331.669 493.835C332.848 493.346 334.113 493.095 335.391 493.097C336.67 493.1 337.936 493.354 339.117 493.847C340.298 494.34 341.37 495.061 342.272 495.969C343.173 496.876 343.886 497.952 344.37 499.135C344.853 500.318 345.097 501.583 345.088 502.858L341.898 502.823C341.905 501.968 341.741 501.12 341.417 500.327C341.093 499.534 340.615 498.813 340.01 498.204C339.406 497.596 338.687 497.113 337.896 496.782C337.104 496.452 336.255 496.281 335.398 496.279C334.541 496.278 333.693 496.446 332.902 496.774C332.112 497.101 331.395 497.582 330.793 498.189C330.191 498.795 329.716 499.515 329.395 500.307C329.074 501.098 328.914 501.946 328.924 502.801L325.735 502.825Z"
          fill="#A6DFEA"
        />
        <rect
          x="321.943"
          y="534.68"
          width="1.30189"
          height="4.1134"
          fill="#DFDFDF"
        />
        <rect
          x="325.415"
          y="534.68"
          width="1.30188"
          height="4.1134"
          fill="#DFDFDF"
        />
        <rect
          x="329.321"
          y="534.68"
          width="1.30189"
          height="4.1134"
          fill="#DFDFDF"
        />
        <rect
          x="321.943"
          y="516.278"
          width="1.30189"
          height="4.1134"
          fill="#DFDFDF"
        />
        <rect
          x="325.415"
          y="516.278"
          width="1.30188"
          height="4.1134"
          fill="#DFDFDF"
        />
        <rect
          x="329.321"
          y="516.278"
          width="1.30189"
          height="4.1134"
          fill="#DFDFDF"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="902" height="769" fill="white" />
      </clipPath>
    </defs>
  </React.Fragment>
)

export default MainCampus
