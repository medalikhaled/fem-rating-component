import star from "./assets/icon-star.svg";
import { MouseEvent, useState } from "react";
import RatingPalette from "./components/RatingPalette";

import "./App.css";
import SubmitButton from "./components/SubmitButton";

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

  //TODO: Implement the logic for "Keep button in active state until clicking outside"
  //TODO: Implement the "Thank you card"

  return (
    <main className="grid h-screen max-h-fit min-h-screen w-full place-content-center bg-veryDarkBlue font-primary">
      <div
        lang="en"
        aria-label="rating card"
        className="mx-4 rounded-lg bg-darkBlue p-5 desktop:w-[45%] desktop:translate-x-[45%] desktop:p-8"
      >
        <div>
          <div
            aria-hidden
            className="pointer-events-none mb-3 grid aspect-square w-9 place-content-center rounded-full bg-mediumGrey bg-opacity-20 py-2
            "
          >
            <img src={star} alt="" className="" />
          </div>

          <h1 className="py-2 text-xl font-big text-primaryWhite selection:bg-accentOrange selection:text-white desktop:text-2xl">
            How did we do?
          </h1>

          <p className="text-sm font-mid text-lightGrey selection:bg-accentOrange selection:text-white">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <RatingPalette handleRatingClick={handleRatingClick} />

          <SubmitButton handleSubmit={handleSubmit} />
        </div>
      </div>
    </main>
  );
}

export default App;
