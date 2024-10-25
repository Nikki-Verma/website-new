import Icon from "@ant-design/icons";

const EmbedAiLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M27.0459 32H4.9541C2.22241 32 0 29.7776 0 27.0459V4.9541C0 2.22241 2.22241 0 4.9541 0H27.0459C29.7776 0 32 2.22241 32 4.9541V27.0459C32 29.7776 29.7776 32 27.0459 32Z"
      fill="#EFF6FE"
    />
  </svg>
);

const EmbedAiIcon = ({ ...props }) => {
  return <Icon component={() => <EmbedAiLogo />} {...props} />;
};

export default EmbedAiIcon;
