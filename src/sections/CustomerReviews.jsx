import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <div className="max-container flex flex-col items-center justify-center">
      <h1 className="font-bold mb-3 text-3xl md:text-4xl">
        What Our
        <span className="text-coral-red font-palanquin"> Customers </span>Say?
      </h1>
      <p className="info-text text-lg lg:w-2/5 text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex lg:flex-nowrap flex-wrap justify-center items-center text-center gap-16 mt-10">
        {reviews.map((review, index) => {
          return <ReviewCard {...review}/>;
        })}
      </div>
    </div>
  );
};
export default CustomerReviews;
