import { star } from "../assets/icons";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <div className="max-container flex flex-col items-center lg:items-start max-xl:px-5">
      <h1 className="leading-none font-palanquin font-bold text-[52px] max-sm:text-[35px]">
        Our <span className="text-coral-red font-montserrat">Popular </span>
        Products
      </h1>
      <p className="mt-5 mb-5 sm:max-w-md text-slate-gray">
        Experience top-notch quality and style with our sought after selections.
        Discover a world of comfort, design, and value
      </p>
      <div className="flex flex-wrap gap-14 mt-10 max-lg:justify-center">
        {products.map((product, index) => {
          const { imgURL, name, price } = product;
          return (
            <div key={index}>
              <div className="bg-card cursor-pointer">
                <img src={imgURL} alt={`shoe-card-${index + 1}`} />
              </div>
              <div className="flex gap-2 mt-5">
                <img src={star} alt="" />
                <p className="text-slate-gray">(4.5)</p>
              </div>
              <h2 className="font-semibold text-black mt-3 mb-3 text-[25px]">{name}</h2>
              <p className="text-coral-red font-medium max-sm:text-lg text-xl">{price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PopularProducts;
