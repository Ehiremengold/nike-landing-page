import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <div className="max-container flex flex-col-reverse lg:flex-row items-center max-xl:px-5 lg:justify-between gap-9">
      <div className="lg:w-2/5 place-items-center lg:place-items-start">
        <h1 className="font-bold lg:text-[50px] text-[30px] max-lg:leading-none">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h1>
        <p className="mt-6 info-text lg:text-left text-center">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 info-text mb-6">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <Button label={"View details"} />
      </div>
      <div className="flex flex-1 justify-center items-center" width={570} height={522}>
        <img src={shoe8} className="object-contain " alt="" />
      </div>
    </div>
  );
};
export default SuperQuality;
