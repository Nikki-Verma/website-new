"use client";

import { InlineWidget } from "react-calendly";

const RequestDemoCalender = () => {
  return (
    <div>
      <InlineWidget
        styles={{
          minWidth: "320px",
          height: "660px",
          zIndex: 1000,
          marginBottom: "20px",
        }}
        url="https://calendly.com/sandeep-simplai/30min"
      />
    </div>
  );
};

export default RequestDemoCalender;
