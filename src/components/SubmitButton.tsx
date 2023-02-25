import React from "react";

export default function SubmitButton({
  handleSubmit,
}: {
  handleSubmit: () => void;
}) {
  return (
    <button
      onClick={handleSubmit}
      className={` ease mt-3 w-full rounded-3xl bg-accentOrange py-2 uppercase text-primaryWhite shadow-md transition-all duration-500 hover:bg-primaryWhite hover:text-accentOrange`}
    >
      Submit
    </button>
  );
}
