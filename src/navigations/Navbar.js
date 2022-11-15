import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";

// data
import logo from "../assets/images/logo/logo.svg";
import { navbarData } from "../assets/data/navigations/navbarData";

const Navbar = () => {
  const router = useLocation();
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  const [isBig, setIsBig] = useState(true);

  useEffect(() => {}, [isBigScreen]);

  const AppointmentButton = () => (
    <Link to="/appointment">
      <button className="z-10 relative overflow-hidden btn-slide-secondary px-2.5 lg:px-7 py-[6px] lg:py-2.5 rounded-sm md:rounded xl:rounded-lg text-white text-[8px] md:text-xs xl:text-base transition-all duration-300">
        Appointment
      </button>
    </Link>
  );

  return (
    <header className="z-50 sticky top-0 bg-white shadow-[0px_4px_15px_0px_rgba(112,128,176,0.1)] py-2 lg:py-3">
      <nav
        className={`container flex flex-wrap lg:flex-nowrap items-center justify-between w-full transition-all duration-700 ease-in overflow-hidden lg:overflow-visible ${
          isBig ? "max-h-14 lg:max-h-max" : "max-h-96 lg:max-h-max"
        }`}
      >
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className="h-10 lg:h-16 w-[138px] lg:w-[200px]"
          />
        </a>
        <div className="flex items-center gap-3">
          <div className="lg:hidden mb-[2px]">
            <AppointmentButton />
          </div>

          <div
            onClick={() => setIsBig(!isBig)}
            className={`lg:hidden block ${!isBig && "open"}`}
          >
            <div className="bar-one" />
            <div className="bar-two" />
            <div className="bar-three" />
          </div>
        </div>

        <div
          className={`w-full lg:w-auto lg:flex lg:items-center ${
            isBig && "hidden"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-10 space-y-2 lg:space-y-0 p-4 lg:p-0">
            {navbarData.map(({ id, label, path, dropdowns }) => {
              return (
                <div key={id}>
                  {dropdowns ? (
                    <div className="relative group">
                      <button className="flex items-center group cursor-pointer">
                        <p className="text-tertiary-300 text-sm lg:text-base lg:group-hover:text-primary-400 transition-all duration-200">
                          {label}
                        </p>
                        <HiChevronDown className="text-tertiary-300 text-lg transition-all duration-200 lg:group-hover:text-primary-400" />
                      </button>

                      <>
                        {isBigScreen ? (
                          <div className="invisible group-hover:visible absolute left-0 top-6 pt-4">
                            <div className="shadow-[0px_18px_30px_0px_rgba(112,128,176,0.2)] rounded bg-white px-3 pt-3 pb-6 space-y-2 w-max min-w-[150px]">
                              {dropdowns.map(({ id, label, path }) => (
                                <Link key={id} to={path}>
                                  <p
                                    className={`px-2.5 py-1 rounded block text-sm lg:text-base hover:text-primary-400 ${
                                      router.pathname === path
                                        ? "text-primary-600 bg-primary-50/50"
                                        : "text-tertiary-300"
                                    }`}
                                  >
                                    {label}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="bg-tertiary-10 rounded mt-1 px-4 py-2 flex flex-col gap-1">
                            {dropdowns.map(({ id, label, path }) => (
                              <Link key={id} to={path}>
                                <p
                                  className={`text-sm lg:text-base ${
                                    router.pathname === path
                                      ? "text-primary-600"
                                      : "text-tertiary-300"
                                  }`}
                                >
                                  {label}
                                </p>
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    </div>
                  ) : (
                    <Link key={id} to={path}>
                      <p
                        className={`${
                          router.pathname === path
                            ? "text-primary-600"
                            : "text-tertiary-300"
                        } text-sm lg:text-base lg:hover:text-primary-400 transition-all duration-200`}
                      >
                        {label}

                        {router.pathname === path && (
                          <span className="block h-[2px] w-6 bg-primary-600 rounded-xl" />
                        )}
                      </p>
                    </Link>
                  )}
                </div>
              );
            })}
            <div className="hidden lg:block">
              <AppointmentButton />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
