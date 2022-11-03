// components
import {
  headerAddress,
  headerSocialLinks,
} from "../assets/data/navigations/headerData";

const Header = () => {
  return (
    <div className="z-50 py-4 lg:py-5 bg-primary-600 text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex flex-col md:flex-row items-center gap-1 lg:gap-7">
            {headerAddress.map(({ id, alt, title, icon }) => {
              return (
                <div key={id} className="flex items-center gap-2">
                  <img src={icon.default} alt={alt} className="h-4 lg:h-6" />
                  <p className="text-xxs lg:text-sm font-medium">{title}</p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            {headerSocialLinks.map(({ id, alt, icon, path }) => (
              <a key={id} rel="noreferrer" target="_blank" href={path}>
                <img
                  key={id}
                  src={icon.default}
                  alt={alt}
                  className="h-4 lg:h-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
