const BannerExpert = () => {
  return (
    <div className="dark_bg mb-120"
        style={{
            paddingTop: '32px !important', 
            paddingBottom: '40px !important'
        }}
    >
      <h3 className="text-white text-center mb-6">
        See the SimplAI platform in action
      </h3>
      <p className="text-center text-white w-1/2 mx-auto mb-4">
        "Request a demo and see how SimplAI empowers your teams to supercharge
        their AI-driven applications for seamless business growth."
      </p>
      <div className="mx-auto text-center">
        <button className="button text-center mx-auto">Talk with expert</button>
      </div>
    </div>
  );
};

export default BannerExpert;
