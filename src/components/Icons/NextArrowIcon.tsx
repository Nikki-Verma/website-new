import Icon from "@ant-design/icons";

const NextArrowLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
  >
    <path
      d="M14.6667 30.4333L17.2334 33L28.2334 22L17.2334 11L14.6667 13.5667L23.1001 22L14.6667 30.4333Z"
      fill="#718BAE"
    />
  </svg>
);

const NextArrowIcon = ({ ...props }) => {
  return <Icon component={() => <NextArrowLogo />} {...props} />;
};

export default NextArrowIcon;
