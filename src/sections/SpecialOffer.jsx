import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <div
      className="max-container flex flex-wrap lg:flex-nowrap justify-between gap-9 items-center
    "
    >
      <div className="w-full">
        <img
          src={offer}
          height={1300}
          width={1300}
          className="object-contain"
          alt="offer image"
        />
      </div>
      <div className="flex flex-col lg:items-start  items-center w-full">
        <h1 className="md:text-4xl text-2xl font-bold leading-none">
          <span className="text-coral-red">Special</span> Offer
        </h1>
        <p className="info-text text-lg mt-7 mb-7">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text text-lg ">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex gap-4 flex-wrap mt-9">
          <Button label={"Shop now"} iconURL={arrowRight} />
          <button className="border border-gray-600 text-lg leading-none font-montserrat rounded-full py-4 px-8 w-fit">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};
export default SpecialOffer;
