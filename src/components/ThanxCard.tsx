import { Rating } from "../App";
import illustration from "../assets/illustration-thank-you.svg";

export default function ThanxCard({
  rating,
  isHideen,
}: {
  rating: Rating | undefined;
  isHideen: boolean;
}) {
  //TODO: Implement the "Thank you card"

  return (
    <div
      className={`${
        isHideen && "hidden"
      }  flex flex-col items-center justify-center transition-all duration-500 ease-in`}
      aria-label="thank you card"
    >
      <img src={illustration} alt="" className="pointer-events-none my-4" />

      <h1 className="py-2 text-xl font-big text-primaryWhite selection:bg-accentOrange selection:text-white desktop:text-2xl">
        Thank you!
      </h1>
      <h2 className="my-4 w-fit rounded-2xl bg-mediumGrey bg-opacity-20 py-1 px-5 text-accentOrange selection:bg-accentOrange selection:text-white">
        You selected {rating} out of 5
      </h2>
      <p className="mt-2 mb-4 text-center text-sm font-mid leading-5 text-lightGrey selection:bg-accentOrange selection:text-white">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
