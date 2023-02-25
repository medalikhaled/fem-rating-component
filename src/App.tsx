import star from "./assets/icon-star.svg";
import { MouseEvent, useState } from "react";
import RatingPalette from "./components/RatingPalette";

import "./App.css";

type Rating = 1 | 2 | 3 | 4 | 5;

function App() {
  const [rating, setRating] = useState<Rating>();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isMarked, setIsMarked] = useState<boolean>(false);

  function handleRatingClick(e: MouseEvent) {
    setRating(Number((e.target as HTMLInputElement).value) as Rating); //! that's so hacky
    setIsMarked(true);
  }

  function handleSubmit() {
    if (isMarked) {
      setSubmitted(true);
      console.log(rating);
    } else {
      //TODO: it chould not be one, add the ask for choosing before submitting
      alert("you have to choose a rating before submitting ");
    }
  }

  return (
    <main className="grid h-screen max-h-fit min-h-screen w-full place-content-center bg-veryDarkBlue font-primary">
      <div
        lang="en"
        aria-label="rating card"
        className="mx-4 rounded-lg bg-darkBlue p-5 desktop:w-[45%] desktop:translate-x-[45%] desktop:p-8"
      >
        <div
          aria-hidden
          className="mb-3 grid aspect-square w-9 place-content-center rounded-full bg-mediumGrey bg-opacity-20 py-2"
        >
          <img src={star} alt="" className="" />
        </div>

        <h1 className="py-2 text-xl font-big text-primaryWhite desktop:text-2xl">
          How did we do?
        </h1>

        <p className="text-sm font-mid text-lightGrey">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <RatingPalette handleRatingClick={handleRatingClick} />

        <button
          onClick={handleSubmit}
          className={` ease mt-3 w-full rounded-3xl bg-accentOrange py-2 uppercase text-primaryWhite shadow-md transition-all duration-500 hover:bg-primaryWhite hover:text-accentOrange`}
        >
          Submit
        </button>
      </div>

      <div className="hidden">
        {/* <!-- Thank you state start --> */}
        You selected
        {/* <!-- Add rating here --> */}
        out of 5 Thank you! We appreciate you taking the time to give a rating.
        If you ever need more support, don’t hesitate to get in touch!
      </div>
    </main>
  );
}

export default App;
