import OpeningHours from "../shared/OpeningHours";

const AboutHospital = ({ data }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 md:py-10 xl:py-16"
    >
      <div className="grid grid-cols-12 gap-4 xl:gap-6">
        <div className="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8">
          <p className="text-tertiary-500 font-bold text-2xl italic mb-6">
            {data.title}
          </p>
          <p className="whitespace-pre-line text-xs xl:text-sm italic">
            {data.info}
          </p>
          <div className="mt-6 md:mt-10 xl:mt-16">
            <img src={data.sign} alt="signature" className="h-10 xl:h-14" />
            <p className="text-xs md:text-sm xl:text-xl mt-2">Co-Founder</p>
          </div>
        </div>
        <div className="col-span-12  md:col-span-6 lg:col-span-5 xl:col-span-4">
          <OpeningHours />
        </div>
      </div>
    </div>
  );
};

export default AboutHospital;
