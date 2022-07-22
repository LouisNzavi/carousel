import React, { useState } from "react";
import "../Styles/Carousel.css";

// export const CarouselItem = ({ children, width }) => {
//   return (
//     <div className="carousel-item" style={{ width: width }}>
//       {children}
//     </div>
//   );
// };

const Carousel = ({ children }) => {
  //
  const [activeIndex, setactiveIndex] = useState(0);

  //this method receives a new index and does the check if the active is the first items or last item
  //if new index is less than 0 then we just reset it to 0
  //if new index is equal or greater then number of items, reset it to number of items - 1
  //call setactiveindex to update the active state

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setactiveIndex(newIndex);
  };

  return (
    <>
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translateX(-${activeIndex * 250}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
      </div>

      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

//line16, we are controlling the active item by using transform:translate for the div.inner
//line17, iterate all the children and adjust width property, fixing width to 100%, meaning we will only have 1 visible item
//button onclick trigger the updateindex method, for prev/next

export default Carousel;
