import { SectionHeader, SectionTitle } from "../shared/SharedTextGroup";

const BulletPointsGallery = ({ data, reversed, twoColulm }) => {
  const { header, title, subTitle, gallery, points } = data;

  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 md:py-10 xl:py-16"
    >
      <div className="grid lg:grid-cols-2 items-center gap-6">
        <div className={`${reversed && "order-1 lg:order-2"}`}>
          <SectionHeader label={header} />
          <SectionTitle label={title} />
          <p className="text-tertiary-600 text-xs lg:text-sm xl:text-base mt-2 xl:mt-4 mb-4 xl:mb-7">
            {subTitle}
          </p>
          <div
            className={`grid gap-2 xl:gap-4 ${twoColulm && "sm:grid-cols-2"}`}
          >
            {points.map((item, i) => {
              return (
                <div key={i} className="flex gap-2 xl:gap-4">
                  <img
                    src={
                      require("../../assets/images/icons/bullet.svg").default
                    }
                    alt="icon"
                    className="h-4 xl:h-6 w-4 xl:w-6"
                  />
                  <p className="text-tertiary-600 text-xxs lg:text-xs xl:text-base">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`grid md:grid-cols-2 md:grid-rows-2 gap-4 xl:gap-6 ${
            reversed && "order-2 lg:order-1"
          }`}
        >
          {gallery.map((item, i) => (
            <img
              key={i}
              src={item}
              alt="gallery"
              className={`rounded-[10px] h-[173px] md:h-full w-full object-cover ${
                i === 0 && "row-span-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BulletPointsGallery;
