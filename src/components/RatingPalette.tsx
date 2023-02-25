import { MouseEvent } from "react";

export default function RatingPalette({
  handleRatingClick,
}: {
  handleRatingClick: (e: MouseEvent) => void;
}) {
  return (
    <ul className=" flex w-full items-center justify-between py-4">
      <li>
        <input
          type="button"
          onClick={(e) => handleRatingClick(e)}
          value={1}
          className="grid h-10 w-10 cursor-pointer  place-content-center rounded-full bg-mediumGrey bg-opacity-20 p-2 text-lightGrey transition-all duration-300 ease-in hover:bg-accentOrange hover:text-primaryWhite active:bg-accentOrange"
        />
      </li>
      <li className="">
        <input
          className="grid h-10 w-10 cursor-pointer place-content-center rounded-full bg-mediumGrey bg-opacity-20 p-2 text-lightGrey transition-all duration-300 ease-in hover:bg-accentOrange hover:text-primaryWhite active:bg-accentOrange"
          type="button"
          onClick={(e) => handleRatingClick(e)}
          value={2}
        />
      </li>
      <li>
        <input
          type="button"
          className="grid h-10 w-10 cursor-pointer place-content-center rounded-full bg-mediumGrey bg-opacity-20 p-2 text-lightGrey transition-all duration-300 ease-in hover:bg-accentOrange hover:text-primaryWhite active:bg-accentOrange"
          onClick={(e) => handleRatingClick(e)}
          value={3}
        />
      </li>

      <li>
        <input
          type="button"
          className="grid h-10 w-10 cursor-pointer place-content-center rounded-full bg-mediumGrey bg-opacity-20 p-2 text-lightGrey transition-all duration-300 ease-in hover:bg-accentOrange hover:text-primaryWhite active:bg-accentOrange"
          onClick={(e) => handleRatingClick(e)}
          value={4}
        />
      </li>

      <li>
        <input
          type="button"
          className="grid h-10 w-10 cursor-pointer place-content-center rounded-full bg-mediumGrey bg-opacity-20 p-2 text-lightGrey transition-all duration-300 ease-in hover:bg-accentOrange hover:text-primaryWhite active:bg-accentOrange"
          onClick={(e) => handleRatingClick(e)}
          value={5}
        />
      </li>
    </ul>
  );
}
