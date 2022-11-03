const PhotoGallery = ({ data }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="20"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      className="bg-tertiary-10 py-6 md:py-10 xl:py-16"
    >
      <div className="container grid sm:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <img
            key={i}
            src={item}
            alt="galery images"
            className="h-56 xl:h-64 2xl:h-96 w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
