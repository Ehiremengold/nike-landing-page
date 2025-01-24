import { services } from "../constants";

const Services = () => {
  return (
    <div className="max-container place-items-stretch grid gap-4 sm:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]">
      {services.map((service, index) => {
        const { label, subtext, imgURL } = service;
        return (
          <div
            key={index}
            className={`shadow-3xl px-9 py-14 rounded-2xl ${
              index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-coral-red flex justify-center items-center">
              <img src={imgURL} alt="service icon" />
            </div>
            <h1 className="font-bold mb-4 mt-8 font-montserrat text-2xl">
              {label}
            </h1>
            <p className="info-text">{subtext}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Services;
