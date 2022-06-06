import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SIZES} from '../../constants';

export const ArrowLeft = () => {
  return (
    <Svg
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.5 1L1.5 7L7.5 13"
        stroke="#1648CE"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const Envelope = () => {
  return (
    <Svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19.8461 4.15138V12.9231C19.8461 13.7391 19.5219 14.5218 18.9449 15.0988C18.3679 15.6758 17.5852 16 16.7692 16H3.23073C2.41468 16 1.63205 15.6758 1.05502 15.0988C0.477983 14.5218 0.153809 13.7391 0.153809 12.9231V4.15138L9.68735 9.76123C9.78206 9.81709 9.89001 9.84655 9.99996 9.84655C10.1099 9.84655 10.2179 9.81709 10.3126 9.76123L19.8461 4.15138ZM16.7692 3.80956e-08C17.5263 -0.000119035 18.2569 0.2789 18.8211 0.78368C19.3854 1.28846 19.7438 1.98356 19.8277 2.736L9.99996 8.51692L0.17227 2.736C0.256157 1.98356 0.614515 1.28846 1.17879 0.78368C1.74306 0.2789 2.47363 -0.000119035 3.23073 3.80956e-08H16.7692Z"
        fill="#1648CE"
      />
    </Svg>
  );
};

export const LoginSvg = () => {
  return (
    <Svg
      width={SIZES.width}
      height={SIZES.height * 0.5}
      viewBox="0 0 361 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M160.194 7.9621L9.69437 146.346C3.51601 152.027 0 160.036 0 168.429V289.742C0 306.31 13.4314 319.742 30 319.742H331C347.569 319.742 361 306.31 361 289.742V168.429C361 160.036 357.484 152.027 351.306 146.346L200.806 7.9621C189.326 -2.59321 171.674 -2.59321 160.194 7.9621Z"
        fill="white"
      />
    </Svg>
  );
};

export const ArrowLeftIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M19 11.9997H5" stroke="black" stroke-width="1.3" />
      <Path
        d="M12 18.9997L5 11.9997L12 4.99966"
        stroke="black"
        stroke-width="1.3"
      />
    </Svg>
  );
};

export const ArrowDown = () => {
  return (
    <Svg
      width="21"
      height="12"
      viewBox="0 0 21 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3.30036 0.362579L10.962 7.4568L18.6237 0.362579L20.9773 2.54661L10.962 11.8403L0.946777 2.54661L3.30036 0.362579Z"
        fill="#3E3E50"
      />
    </Svg>
  );
};

export const BlackCheck = ({done}) => {
  return (
    <Svg
      width="31"
      height="29"
      viewBox="0 0 31 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M24.1111 29H6.88889C3.08278 29 0 26.1161 0 22.5556V6.44444C0 2.88389 3.08278 0 6.88889 0H24.1111C27.9172 0 31 2.88389 31 6.44444V22.5556C31 26.1161 27.9172 29 24.1111 29Z"
        fill="black"
      />
      {done && (
        <Path
          d="M14.9276 15.3279L12.9497 13.4776C12.5482 13.102 11.897 13.102 11.4955 13.4776C11.0939 13.8532 11.0939 14.4624 11.4955 14.838L13.6769 16.8787L13.8586 17.0487L14.8218 17.9497C14.99 18.1071 15.2641 18.0995 15.4214 17.9345L21.3252 11.7948C21.5178 11.5943 21.5097 11.2872 21.3062 11.0969C21.1027 10.9065 20.7744 10.8989 20.5601 11.0791L15.4974 15.3431C15.3346 15.4802 15.0823 15.4751 14.9276 15.3279Z"
          fill="white"
        />
      )}
    </Svg>
  );
};

export const VerticalLine = () => {
  return (
    <Svg
      width="4"
      height="260"
      viewBox="0 0 4 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2 2V258"
        stroke="#0C9359"
        stroke-width="3"
        stroke-linecap="round"
      />
    </Svg>
  );
};
