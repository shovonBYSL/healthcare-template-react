import LottieAnimation from "../components/shared/LottieAnimation";

import animation from "../assets/data/animation/loader.json";

const PageNotFound = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-3/4 sm:w-1/2 lg:w-2/5 xl:w-1/4">
        <LottieAnimation data={animation} />
      </div>
    </div>
  );
};

export default PageNotFound;
