import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-7 h-20 w-20">
        <img src={imgURL} className="object-cover rounded-full" alt="" />
      </div>
      <p className="info-text">{feedback}</p>
      <div className="flex gap-2 items-center justify-center mb-5 mt-5">
        <img src={star} alt="" />
        <p>({rating})</p>
      </div>
      <h2 className="font-bold text-2xl">{customerName}</h2>
    </div>
  );
};
export default ReviewCard;
