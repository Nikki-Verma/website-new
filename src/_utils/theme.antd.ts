export const PRIMARY_BRAND_COLOR = "#602EDF";

const theme = {
  token: {
    colorPrimary: PRIMARY_BRAND_COLOR,
    colorInfo: PRIMARY_BRAND_COLOR,
    fontFamily: "var(--font-montserrat)",
    fontSize: 16,
  },
  components: {
    Carousel: {
      colorBgContainer: PRIMARY_BRAND_COLOR,
      dotHeight: 7,
      dotActiveWidth: 7,
      dotWidth: 7,
      dotOffset: -16,
    },
    Dropdown: {
      paddingBlock: 12,
      controlPaddingHorizontal: 23,
      fontSize: 16,
      marginXS: 11,
      controlItemBgHover: "rgb(247,245,255)",
      controlItemBgActiveHover: "rgb(247,245,255)",
    },
    Menu: {
      darkItemSelectedBg: "rgb(0,0,0)",
      subMenuItemBg: "rgb(255,255,255)",
      itemHoverBg: "rgb(247,245,255)",
      itemActiveBg: "rgb(247,245,255)",
      itemSelectedBg: "rgb(247,245,255)",
      horizontalItemHoverColor: "rgb(96,46,223)",
      horizontalItemSelectedColor: "rgb(96,46,223)",
      itemSelectedColor: "rgb(96,46,223)",
    },
    Spin: {
      colorPrimary: "rgb(96,46,223)",
    },
    Tabs: {
      horizontalMargin: "0 0 40px 0",
      itemHoverColor: "rgb(96,46,223)",
      itemSelectedColor: "rgb(96,46,223)",
      inkBarColor: "rgb(96,46,223)",
      titleFontSize: 18,
      horizontalItemPadding: "4px 0",
      lineWidth: 3,
    },
  },
};

export default theme;
