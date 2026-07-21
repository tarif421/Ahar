import React from "react";
import ReviewPage from "./ReviewPage";

export const metadata = {
  title: "Reviews",
  // title: {
  //   absolute: "Satistied Users",
  // },  // to show just this not Templete like reviews | Ahar.
  description: "We Provide Your Test",
};

const AllReviews = () => {
  return (
    <div>
      <ReviewPage />
    </div>
  );
};

export default AllReviews;
