import { useEffect } from "react";

export let SectionAChildB = ({
  data,
  setdata,
  menuC,
  setMenuC,
  menuB,
  setMenuB,
}) => {
  return (
    <>
      <section className="a_child_b">
        <section className="column gap16 relative a_child_b_child">
          {Object(menuC["b"])["boolean"] && (
            <button className="absolute black_button button special_button">
              Today’s Special
            </button>
          )}
          <img src={Object(menuC["b"])["image"]} alt="" className="a_image" />
          <section className="space_between">
            <p className="paragraph bold_p">{Object(menuC["b"])["text"]}</p>
            <h4 className="heading heading4">{Object(menuC["b"])["price"]}</h4>
          </section>
        </section>
      </section>
    
    </>
  );
};
