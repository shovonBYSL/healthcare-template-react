// data
import facebookIcon from "../../assets/images/social/facebookGray.svg";
import twitterIcon from "../../assets/images/social/twitterGray.svg";
import instagramIcon from "../../assets/images/social/instagramGray.svg";
import linkedInIcon from "../../assets/images/social/linkedInGray.svg";

const BlogDoctorInfoCard = ({ data }) => {
  const { img, name, speciality, about, socialLinks } = data;

  return (
    <div className="py-6 flex flex-col md:flex-row md:items-center gap-4 border-b">
      <img
        src={img}
        alt="doctor"
        className="h-32 xl:h-[180px] w-32 xl:w-[195px] object-cover"
      />
      <div className="xl:p-4">
        <p className="font-lato font-semibold italic xl:text-xl">{name}</p>
        <p className="font-lato font-semibold italic text-tertiary-100 text-sm xl:text-base">
          {speciality}
        </p>
        <p className="text-tertiary-500 text-xs xl:text-sm font-lato font-semibold italic mt-2 mb-4">
          {about}
        </p>
        <div className="flex items-center gap-4">
          <p className="text-tertiary-500 text-sm font-medium">Follow</p>
          <div className="flex gap-2 xl:gap-3">
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
                  className="h-5 xl:h-6 w-5 xl:w-6 hover:-translate-y-1 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDoctorInfoCard;
