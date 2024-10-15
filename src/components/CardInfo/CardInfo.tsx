import Image from "next/image";

const CardInfo = ({ data }: any) => {
  return (
    <div className="container">
      <div className="flex gap-6 justify-between mt-16">
        {data?.map((value: any) => {
          return (
            <div className="w-full flex justify-center flex-col items-center">
              <Image src={value.icon} alt={value.title} />
              <h5 className="text-center mt-6 mb-4">{value.title}</h5>
              <p className="font-18 text-center">{value.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardInfo;
