import Svg, {G, Path} from 'react-native-svg';
import React from 'react';

export type SvgIconProps = {
  width: number|string;
  height: number|string;
  color: string;
}

export const LeftArrowIcon = ({ width, height, color }: SvgIconProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 13 21"
    fill="none"
  >
    <Path
      d="M2 10.5l9 8.5M2 10.5L11 2"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
)

export const RightArrowIcon = ({ width, height, color }: SvgIconProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 8 12"
  >
    <Path
      d="M6.295 6L1 1M6.295 6L1 11"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
)

export const BottomArrowIcon = ({width, height, color}: SvgIconProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 13 8"
    fill="none"
  >
    <Path
      d="M6.648 6.647l5-5.294M6.648 6.647l-5-5.294"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
)

export const CallIcon = ({ width, height, color }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill={color}
        d="M1.065 1.892C0 3.296-1.138 7.507 2.37 13.475c.9 1.528 2.751 3.67 4.427 5.063 5.316 4.419 9.733 3.67 11.253 2.786 2.214-1.289 2.328-3.337 2.359-3.597.041-.343-.083-.603-.352-.78-.558-.364-4.292-2.859-4.406-2.932-.331-.208-.662-.229-.993 0-.466.302-.838.707-1.21 1.113-.331.374-.662.748-1.035 1.081-.527.457-.714.385-1.365.146-2.576-.978-5.679-4.502-5.968-6.831-.083-.686-.197-.874.32-1.341.373-.333.786-.614 1.2-.895.455-.312.89-.634 1.252-1.06.258-.312.279-.645.124-.998-.052-.125-2.038-4.17-2.327-4.772C5.503.156 5.275 0 4.923 0c-.258 0-2.306-.156-3.858 1.892Z"
      />
    </G>
  </Svg>
)

export const HomeIcon = ({ width, height, color }: SvgIconProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 26" fill="none">
    <Path
      d="M23.43 9.516L13.099.413a1.665 1.665 0 00-2.196 0L.562 9.516c-.356.313-.562.77-.562 1.252v13.567C0 25.255.744 26 1.664 26h20.672c.92 0 1.664-.745 1.664-1.665V10.768c0-.476-.206-.933-.563-1.252h-.006zm-4.553 9.88c-.018.156-.087 1.395-1.426 2.165-.926.532-3.596.983-6.805-1.677-1.013-.84-2.133-2.135-2.677-3.05-2.127-3.587-1.439-6.122-.788-6.974.938-1.227 2.17-1.133 2.333-1.14.206 0 .35.095.438.276.175.364 1.376 2.799 1.407 2.874.094.213.087.413-.075.601-.22.257-.482.45-.757.639-.25.169-.5.338-.726.538-.312.282-.244.394-.193.808.175 1.402 2.051 3.524 3.609 4.113.387.144.506.188.825-.088.232-.2.426-.426.626-.651.219-.25.45-.488.732-.67a.527.527 0 01.6 0c.069.044 2.327 1.546 2.665 1.766.169.112.244.263.212.47z"
      fill={color}
    />
  </Svg>
)

export const ReportIcon = ({ width, height, color }: SvgIconProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 26" fill="none">
    <Path
      d="M24.453 2.175h-2.536v-.634C21.917.69 21.222 0 20.364 0s-1.553.69-1.553 1.541v.634H14.56v-.634C14.56.69 13.864 0 13.006 0s-1.553.69-1.553 1.541v.634H7.201v-.634C7.201.69 6.506 0 5.648 0S4.095.69 4.095 1.541v.634H1.547A1.54 1.54 0 000 3.71v18.761a1.54 1.54 0 001.547 1.535h22.912a1.54 1.54 0 001.547-1.535V3.71a1.54 1.54 0 00-1.547-1.535h-.006zm-5.04 14.99H6.587a.935.935 0 01-.94-.933c0-.516.42-.932.94-.932h12.824c.52 0 .94.416.94.932s-.42.932-.94.932zm0-5.942H6.587a.935.935 0 01-.94-.932c0-.516.42-.932.94-.932h12.824c.52 0 .94.416.94.932s-.42.932-.94.932z"
      fill={color}
    />
  </Svg>
)