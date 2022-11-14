import { useState } from "react";
import { VscPlay } from "react-icons/vsc";

// components
import { SectionHeader, SectionTitle } from "../shared/SharedTextGroup";
import VideoModal from "../shared/VideoModal";

// data
import video from "../../assets/videos/dummy.mp4";

const WorkingProcess = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { header, title, subTitle, img, points } = data;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 md:py-10 xl:py-16"
    >
      {isOpen && <VideoModal setIsOpen={setIsOpen} video={video} />}
      <div className="grid md:grid-cols-2 items-center gap-6">
        <div className="lg:w-4/5">
          <SectionHeader label={header} />
          <SectionTitle label={title} />
          <p className="text-tertiary-500 text-xs lg:text-sm xl:text-base mb-4 xl:mb-10">
            {subTitle}
          </p>
          <div className="ml-2 xl:ml-6 space-y-4 xl:space-y-10">
            {points.map(({ id, title, subTitle, icon }) => {
              return (
                <div key={id} className="flex gap-2 xl:gap-4">
                  <img
                    src={icon.default}
                    alt="icon"
                    className="h-7 md:h-10 xl:h-16 w-7 md:w-10 xl:w-16"
                  />
                  <div>
                    <p className="text-tertiary-500 font-semibold text-xs xl:text-xl mb-2">
                      {title}
                    </p>
                    <p className="text-tertiary-400 font-medium text-xxs xl:text-sm">
                      {subTitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className="relative rounded-xl xl:rounded-[20px] overflow-hidden cursor-pointer group"
        >
          <img
            src={img}
            alt="working process section"
            className="max-h-[553px]"
          />
          <div className="absolute top-[55%] left-[65%] -translate-x-[65%] -translate-y-[55%]">
            <div className="bg-[#E6F0FF] h-9 lg:h-14 xl:h-20 w-9 lg:w-14 xl:w-20 relative rounded-full flex justify-center items-center">
              <VscPlay className="text-[#0047B3] lg:text-2xl xl:text-4xl z-10 ml-1 xl:ml-1.5" />
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6F0FF] opacity-75" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
