export let SectionBChildA = () => {
  return (
    <>
      <section className="column gap16 b_child_a">
        <section className="gap24 column">
          <h2 className="heading heading2">
            “Timeless Cuisine, Made with Love...... An exciting variety from
            pastry or sea food to southern delights...”
          </h2>
          <p className="paragraph">Taste a Treasure, in every Dish...Taste a</p>
        </section>
        <section className="justify_end">
          <section className="relative child_b_images">
            <img
              src="./src/pexels-diego-severino-castro-silva.png"
              alt="img1"
              className="child_b_image_a"
            />
            <img
              src="./src/pexels-rene-asmussen.png"
              alt="img2"
              className="absolute child_b_image_b"
            
            />
          </section>
        </section>
      </section>
    </>
  );
};
