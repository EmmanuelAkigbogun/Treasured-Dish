function Hero() {
  return (
    <>
      <section className="parent_section hero">
        <section className="relative justify_end hero_child">
          <h1 className="heading absolute heading1 hero_heading">
            Taste a Treasure, in every Dish...
          </h1>
          <section className="gap32 column align_end hero_h1_sibling">
            <section className="hero_paragraph">
              <p className="paragraph">
                Make every event or meal unforgettable with one kitchen to cater
                for all your events and meal preparation needs
              </p>
            </section>
            <section className="relative hero_images justify_end">
              <img
                className="top_right"
                src="./src/pexels-kawaiiart.png"
                alt="img1"
              />
              <img
                className="absolute bottom_left"
                src="./src/pexels-zero-pamungkas.png"
                alt="img2"
              />
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
export default Hero;
