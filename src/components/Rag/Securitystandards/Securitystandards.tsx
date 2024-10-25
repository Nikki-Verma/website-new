import Image from "next/image";
import DocumentIcon from "../../../assets/svg/icons/documentationIcon.svg";

const Securitystandards = () => {
  const data = [
    {
      icon: DocumentIcon,
      heading: "Data Encryption at Rest and in Transit",
      description:
        "Develop advanced RAG applications powered by data, documents, and extensive knowledge bases",
    },
    {
      icon: DocumentIcon,
      heading: "Multi-Factor Authentication (MFA)",
      description:
        "Battle-tested by Red Teaming to ensure highest standards are met.",
    },
    {
      icon: DocumentIcon,
      heading: "Certified compliances",
      description: "Cloud or custom deployment so your data never leaves.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading">
            Enterprise-grade security standards
          </div>
        </div>
        <p className="section_subheading">
          Designed to help enterprises of any size deploy safe and trustworthy
          AI apps.
        </p>
        <div className="flex jusitfy-between gap-8">
          {data?.map((value: any) => {
            return (
              <div className="card_v2_with_hover w-full px-6 pt-6 pb-6">
                <Image src={value?.icon} alt={value.heading} />
                <h5 className="mt-6 mb-4">{value.heading}</h5>
                <p>{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    // card_v2_thin_border
  );
};

export default Securitystandards;
