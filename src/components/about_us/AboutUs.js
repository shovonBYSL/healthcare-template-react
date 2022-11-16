import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { VscPlay } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion";

// components
import { SectionHeader, SectionTitle } from "../shared/SharedTextGroup";
import VideoModal from "../shared/VideoModal";

// data
import video from "../../assets/videos/dummy.mp4";

const AboutUs = ({ data }) => {
  const { header, title, subTitle, img, details } = data;

  const [isOpen, setIsOpen] = useState(false);
  const [accordionActive, setAccordionActive] = useState(0);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="container py-6 md:py-10 xl:py-16"
    >
      {isOpen && <VideoModal setIsOpen={setIsOpen} video={video} />}
      <div className="grid lg:grid-cols-2 gap-6 xl:gap-9">
        <div
          onClick={() => setIsOpen(true)}
          className="relative rounded-xl xl:rounded-[20px] overflow-hidden cursor-pointer group"
        >
          <img
            src={img}
            alt="about us section"
            className="h-[180px] md:h-80 lg:h-full w-full object-cover max-h-[466px] scale-[101%] group-hover:scale-105 transition-all duration-1000"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white h-9 lg:h-14 xl:h-20 w-9 lg:w-14 xl:w-20 relative rounded-full flex justify-center items-center">
              <VscPlay className="text-secondary-400 lg:text-2xl xl:text-4xl z-10 ml-1 xl:ml-1.5" />
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            </div>
          </div>
        </div>
        <div>
          <SectionHeader label={header} />
          <SectionTitle label={title} />
          <p className="text-tertiary-500 text-xs lg:text-sm xl:text-base mb-4 xl:mb-6">
            {subTitle}
          </p>
          <div>
            {details.map(({ id, title, info }) => {
              return (
                <div key={id} className="cursor-pointer border-b">
                  <motion.header
                    initial={false}
                    onClick={() =>
                      setAccordionActive(accordionActive === id ? "" : id)
                    }
                    animate={{
                      backgroundColor:
                        accordionActive === id ? "#daeac3" : "#fff",
                    }}
                    className="flex justify-between items-center p-2"
                  >
                    <p className="text-tertiary-500 font-medium text-sm xl:text-base">
                      {title}
                    </p>
                    <HiOutlineChevronDown
                      className={`transition-all duration-300 ${
                        accordionActive === id && "rotate-180"
                      }`}
                    />
                  </motion.header>
                  <AnimatePresence initial={false}>
                    {accordionActive === id && (
                      <motion.section
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                      >
                        <motion.div
                          variants={{
                            collapsed: { scale: 0.98 },
                            open: { scale: 1 },
                          }}
                          transition={{ duration: 0.4 }}
                          className="p-2 text-tertiary-500 text-xs lg:text-sm xl:text-base"
                        >
                          {info}
                        </motion.div>
                      </motion.section>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
