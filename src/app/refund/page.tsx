import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const Refund = () => {
  return (
    <div>
      <Header />
      <div className="small_container">
        <div className="mb-50">
          <h2>Refund Policy</h2>
          <h5 className="text-center text-primary mt-4">
            Latest update: Dec 15, 2023
          </h5>
        </div>
        <div className="mb-50">
          <h4 className="heading_24">Commitment to Service Excellence</h4>
          <p className="font-18">
            At SimplAI, we are dedicated to offering you a seamless and
            effective platform designed to empower your business with AI
            solutions. While we strive to exceed your expectations through our
            services, we understand the importance of flexibility in
            subscription management.
          </p>
        </div>
        <div className="mb-50">
          <h4 className="heading_24">
            Subscription Modifications and Cancellations
          </h4>
          <p className="font-18">
            SimplAI operates on a no-refund policy across all our subscription
            plans, including monthly and annual agreements. We believe in
            providing our customers with the utmost transparency and control
            over their subscription choices.
          </p>
          <ul className="list-disc pl-4">
            <li className="mt-2">
              Plan Downgrades: If you decide to downgrade your subscription to
              our Free plan, your current subscription will remain active until
              the end of the paid period. Upon expiration, your account will
              automatically transition to the Free plan.
            </li>
            <li className="mt-2">
              Auto-Renewal: For your convenience, all SimplAI subscriptions
              automatically renew under the same terms until canceled. Before
              each renewal, we will notify you via email, detailing the upcoming
              charge, so you’re always in the loop.
            </li>
          </ul>
        </div>
        <div className="mb-50">
          <p className="font-18">
            <strong>Cancellation Window: </strong>
            We encourage our customers to review their subscription settings to
            ensure they align with their current needs. If you wish to cancel or
            modify your subscription, we recommend doing so before the renewal
            date to avoid unwanted charges, as refunds are not provided once a
            subscription fee has been charged.
          </p>
        </div>
        <div className="mb-50">
          <p className="font-18">
            <strong>Account Termination: </strong>
            In cases where an account is terminated due to violations of our
            Terms of Service, including but not limited to fraudulent activities
            or breaches of legal compliance, no refunds will be issued.
          </p>
        </div>
        <div className="mb-50">
          <h4 className="heading_24">Contact and Support</h4>
          <p className="font-18">
            Should you have any questions regarding your subscription, wish to
            make changes, or need further clarification on our policies, our
            support team is here to assist. Please reach out to us through our
            designated customer support channels
          </p>
          <p className="font-18">
            We value your trust and business at SimplAI and are committed to
            providing you with the tools and support needed to transform your
            enterprise with AI. Thank you for choosing SimplAI as your partner
            in AI innovation.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Refund;
