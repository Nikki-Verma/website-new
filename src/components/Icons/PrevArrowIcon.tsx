import Icon from "@ant-design/icons";

const PrevArrowLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
  >
    <path
      d="M29.3333 30.4333L26.7666 33L15.7666 22L26.7666 11L29.3333 13.5667L20.8999 22L29.3333 30.4333Z"
      fill="#718BAE"
    />
  </svg>
);

const PrevArrowIcon = ({ ...props }) => {
  return <Icon component={() => <PrevArrowLogo />} {...props} />;
};

export default PrevArrowIcon;
