import Icon from "@ant-design/icons";

const FinancialServiceLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M15.3762 8.15694C14.7912 7.43694 14.126 6.83695 13.4052 6.35544H13.4127C14.8077 6.35544 15.944 5.21994 15.944 3.8242C15.944 3.45145 15.6417 3.1492 15.269 3.1492C14.8962 3.1492 14.594 3.45145 14.594 3.8242C14.594 4.47595 14.0645 5.00545 13.4135 5.00545H12.2855C13.046 4.2157 13.517 3.1447 13.517 1.9642V1.8367C13.517 1.14145 12.9507 0.575195 12.2555 0.575195H5.74396C5.04796 0.575195 4.48246 1.1407 4.48246 1.8367V1.9642C4.48246 3.41095 5.18896 4.69345 6.27196 5.49369C4.88821 6.00445 3.63796 6.90594 2.62171 8.15694C0.738464 10.4752 -0.109786 13.7332 0.460214 16.4572C1.39246 20.9099 5.77996 21.4252 8.99896 21.4252C12.218 21.4252 16.6062 20.9099 17.5377 16.4572C18.1085 13.7332 17.2602 10.4752 15.3762 8.15694ZM8.87371 5.00545C7.19671 5.00545 5.83246 3.6412 5.83246 1.9642V1.9252H12.1655V1.9642C12.1655 3.6412 10.802 5.00545 9.12496 5.00545H8.87371ZM16.2162 16.1804C15.6447 18.9104 13.4862 20.0752 8.99896 20.0752C4.51171 20.0752 2.35321 18.9104 1.78171 16.1804C1.29121 13.8382 2.03221 11.0234 3.66946 9.00819C5.05921 7.29744 6.95146 6.35544 8.99896 6.35544C11.0457 6.35544 12.9395 7.29744 14.3285 9.00819C15.9657 11.0234 16.706 13.8389 16.2162 16.1804Z"
      fill="white"
    />
    <path
      d="M9.14362 12.5583C8.20912 12.3453 8.19712 12.1308 8.19862 12.1068C8.22937 11.6515 9.27787 11.5795 9.55762 11.5315C9.55762 11.9043 9.85987 12.2065 10.2326 12.2065C10.6054 12.2065 10.9076 11.9043 10.9076 11.5315C10.9076 11.1768 10.7614 10.8318 10.5056 10.585C10.2761 10.3638 9.98662 10.243 9.67087 10.2265V10.132C9.67087 9.75928 9.36862 9.45703 8.99587 9.45703C8.62312 9.45703 8.32087 9.75928 8.32087 10.132V10.4035C7.14487 10.7545 6.88537 11.518 6.85162 12.0145C6.78937 12.9333 7.45987 13.5588 8.84437 13.8738C9.62812 14.0523 9.80062 14.2638 9.79912 14.3238C9.78637 14.7895 8.60062 14.8555 8.43037 14.8713C8.41537 14.512 8.11912 14.2248 7.75612 14.2248C7.38337 14.2248 7.08112 14.527 7.08112 14.8998C7.08112 15.259 7.22287 15.5935 7.48162 15.8433C7.70737 16.0615 8.00887 16.1868 8.32087 16.2055V16.2993C8.32087 16.672 8.62312 16.9743 8.99587 16.9743C9.36862 16.9743 9.67087 16.672 9.67087 16.2993V16.0278C10.9474 15.646 11.1379 14.779 11.1484 14.359C11.1709 13.4718 10.4974 12.8658 9.14362 12.5583Z"
      fill="white"
    />
  </svg>
);

const FinancialServiceIcon = ({ ...props }) => {
  return <Icon component={() => <FinancialServiceLogo />} {...props} />;
};

export default FinancialServiceIcon;
