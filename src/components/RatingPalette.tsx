import { MouseEvent } from "react";

export default function RatingPalette({
  handleRatingClick,
}: {
  handleRatingClick: (e: MouseEvent) => void;
}) {
  return (
    <ul className=" flex w-full items-center justify-between py-4">
      <li className="ransition-all grid h-10 w-10 cursor-pointer place-content-center rounded-full bg-mediumGrey bg-opacity-20 p-2 text-lightGrey duration-300 ease-in hover:bg-accentOrange hover:text-primaryWhite active:bg-accentOrange">
        <input
          type="button"
          onClick={(e) => handleRatingClick(e)}
          value={1}
          className="cursor-pointer"
        />
      </li>
      <li className="ransition-all grid h-10 w-10 cursor-pointer place-content-center rounded-full bg-mediumGrey bg-opacity-20 p-2 text-lightGrey duration-300 ease-in hover:bg-accentOrange hover:text-primaryWhite active:bg-accentOrange">
        <input
          className="cursor-pointer"
          type="button"
          onClick={(e) => handleRatingClick(e)}
          value={2}
        ></input>
      </li>
      <li className="ransition-all grid h-10 w-10 cursor-pointer place-content-center rounded-full bg-mediumGrey bg-opacity-20 p-2 text-lightGrey duration-300 ease-in hover:bg-accentOrange hover:text-primaryWhite active:bg-accentOrange">
        <input
          type="button"
          onClick={(e) => handleRatingClick(e)}
          value={3}
        ></input>
      </li>
      <li className="ransition-all grid h-10 w-10 cursor-pointer place-content-center rounded-full bg-mediumGrey bg-opacity-20 p-2 text-lightGrey duration-300 ease-in hover:bg-accentOrange hover:text-primaryWhite active:bg-accentOrange">
        <input type="button" onClick={(e) => handleRatingClick(e)} value={4} />
      </li>
      <li className="ransition-all grid h-10 w-10 cursor-pointer place-content-center rounded-full bg-mediumGrey bg-opacity-20 p-2 text-lightGrey duration-300 ease-in hover:bg-accentOrange hover:text-primaryWhite active:bg-accentOrange">
        <input type="button" onClick={(e) => handleRatingClick(e)} value={5} />
      </li>
    </ul>
  );
}
