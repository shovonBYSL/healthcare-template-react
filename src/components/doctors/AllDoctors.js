// components
import { SectionHeader, SectionTitle } from "../shared/SharedTextGroup";

// data
import facebookIcon from "../../assets/images/social/facebookColor.svg";
import twitterIcon from "../../assets/images/social/twitterColor.svg";
import instagramIcon from "../../assets/images/social/instagramColor.svg";
import linkedInIcon from "../../assets/images/social/linkedInColor.svg";

const AllDoctors = ({ data }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 md:py-10 xl:py-16"
    >
      <SectionHeader label="Helpful Doctors" center />
      <SectionTitle label="Advanced carefully doctors" center />

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-x-6 xl:gap-y-10 mt-2 md:mt-4 xl:mt-10">
        {data.map(({ id, name, img, speciality, socialLinks }) => {
          return (
            <div
              key={id}
              className="group text-center rounded border border-transparent hover:border-primary-50 shadow-[0px_0px_25px_2px_#F0F2F7] hover:shadow-[0px_0px_20px_15px_#F0F2F7] px-2 xl:px-4 py-3 xl:py-5 transition-all duration-300"
            >
              <div className="max-h-[227px] w-full overflow-hidden mb-3">
                <img
                  src={img}
                  alt="doctor"
                  className="h-20 sm:h-32 lg:h-40 2xl:h-[227px] w-full object-cover group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              <p className="text-tertiary-600 font-semibold text-xs xs:text-sm md:text-lg xl:text-xl 2xl:text-2xl">
                {name}
              </p>
              <p className="text-tertiary-600 text-xxs md:text-xs lg:text-sm xl:text-base">
                {speciality}
              </p>
              <div className="mt-2 xl:mt-4 flex items-center gap-2 w-max mx-auto">
                {socialLinks.map((item, i) => (
                  <a rel="noreferrer" target="_blank" key={i} href={item.path}>
                    <img
                      src={
                        (item.name === "facebook" && facebookIcon) ||
                        (item.name === "twitter" && twitterIcon) ||
                        (item.name === "instagram" && instagramIcon) ||
                        (item.name === "linkedIn" && linkedInIcon)
                      }
                      alt="social icon"
                      className="h-4 lg:h-5 xl:h-6 w-4 lg:w-5 xl:w-6 hover:-translate-y-1 transition-all duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllDoctors;
