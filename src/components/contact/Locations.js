const Locations = ({ data }) => {
  return (
    <>
      <img
        src={data.map}
        alt="map"
        className="min-h-[150px] max-h-[360px] w-full object-cover"
      />
      <div
        data-aos="fade-up"
        data-aos-delay="20"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        className="container py-6 md:py-10 xl:py-16"
      >
        <div className="flex flex-wrap md:flex-nowrap justify-evenly divide-y-[1px] sm:divide-y-0 md:divide-x-[1px] divide-tertiary-100 text-center">
          {data.locations.map(({ id, city, address }) => {
            return (
              <div key={id} className="w-full max-w-xs mx-auto py-4">
                <p className="text-tertiary-600 xl:text-2xl font-semibold mb-2">
                  {city}
                </p>
                <p className="text-tertiary-600 text-xs xl:text-base whitespace-pre-line">
                  {address}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Locations;
