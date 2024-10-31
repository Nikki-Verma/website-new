export const PRIMARY_BRAND_COLOR = "#602EDF";

const theme = {
  components: {
    token: {
      colorPrimary: PRIMARY_BRAND_COLOR,
      colorInfo: PRIMARY_BRAND_COLOR,
      fontFamily: "var(--font-montserrat)",
    },
    Carousel: {
      colorBgContainer: PRIMARY_BRAND_COLOR,
      dotHeight: 7,
      dotActiveWidth: 7,
      dotWidth: 7,
    },
    Dropdown: {
      paddingBlock: 12,
      controlPaddingHorizontal: 23,
      fontSize: 16,
      fontFamily:
        "'Montserrat',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','Noto Color Emoji'",
      marginXS: 11,
      controlItemBgHover: "rgb(247,245,255)",
      controlItemBgActiveHover: "rgb(247,245,255)",
    },
  },
};

export default theme;
