import Icon from "@ant-design/icons";

const InternetLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <mask
      id="mask0_1656_21768"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <path d="M0 1.90735e-06H24V24H0V1.90735e-06Z" fill="white" />
    </mask>
    <g mask="url(#mask0_1656_21768)">
      <path
        d="M23.2969 12C23.2969 18.2391 18.2391 23.2969 12 23.2969C5.76089 23.2969 0.703125 18.2391 0.703125 12C0.703125 5.76089 5.76089 0.703127 12 0.703127C18.2391 0.703127 23.2969 5.76089 23.2969 12Z"
        stroke="white"
        stroke-miterlimit="10"
      />
      <path
        d="M12 23.2969C8.88047 23.2969 6.35156 18.2391 6.35156 12C6.35156 5.76089 8.88047 0.703127 12 0.703127"
        stroke="white"
        stroke-miterlimit="10"
      />
      <path
        d="M12 0.703127C15.1195 0.703127 17.6484 5.76089 17.6484 12C17.6484 18.2391 15.1195 23.2969 12 23.2969"
        stroke="white"
        stroke-miterlimit="10"
      />
      <path d="M12 0.703127V23.2969" stroke="white" stroke-miterlimit="10" />
      <path d="M0.703125 12H23.2969" stroke="white" stroke-miterlimit="10" />
      <path
        d="M20.8193 4.93734C18.749 6.22819 15.5683 7.05469 12.0014 7.05469C8.43462 7.05469 5.25392 6.22819 3.18359 4.93734"
        stroke="white"
        stroke-miterlimit="10"
      />
      <path
        d="M3.18359 19.0625C5.25392 17.7717 8.43467 16.9452 12.0015 16.9452C15.5683 16.9452 18.749 17.7717 20.8193 19.0625"
        stroke="white"
        stroke-miterlimit="10"
      />
    </g>
  </svg>
);

const InternetIcon = ({ ...props }) => {
  return <Icon component={() => <InternetLogo />} {...props} />;
};

export default InternetIcon;
