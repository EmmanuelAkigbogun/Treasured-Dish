import React from "react";
function SectionD() {
  return (
    <>
      <section className="parent_section parent_padding gap40 column">
        <h3 className="heading heading3">Logo</h3>
        <section className="space_between d_child">
          <section className="column gap24 d_child_a">
            <section className="column gap24 d_child_h1_p">
              <h2 className="heading heading2">What’s Your Pleasure?</h2>
              <p className="paragraph">
                Send us a message to book our Services
              </p>
            </section>
            <section className="justify_end">
              <section className="relative d_images">
                <img
                  src="./src/pexels-kawaiiart-a.png"
                  alt=""
                  className="absolute d_image_a"
                />
                <img
                  src="./src/pexels-nicole-michalou.png"
                  alt=""
                  className="d_image_b"
                />
              </section>
            </section>
          </section>
          <form className="row gap32 form">
            <section className="justify_end">
              <section className="column space_between form_a">
                <section className="column gap8">
                  <label htmlFor="" className="justify_end">
                    First Name
                  </label>
                  <input type="text" placeholder="Enter your First Name" />
                </section>
                <section className="column gap8">
                  <label htmlFor="" className="justify_end">
                    Surname
                  </label>
                  <input type="text" placeholder="Enter your Surname" />
                </section>
                <section className="column gap8">
                  <label htmlFor="" className="justify_end">
                    Email
                  </label>
                  <input type="text" placeholder="Enter your Email" />
                </section>
              </section>
            </section>
            <section className="column space_between textarea_button">
              <section className="column  gap8">
                <section className="justify_end">
                  <label htmlFor="">Message</label>
                </section>
                <textarea
                  name=""
                  id=""
                  placeholder="Type your message here"
                  className="textarea"
                ></textarea>
              </section>
              <section>
                <button className="black_button d_button">
                  Send your Bookings
                </button>
              </section>
            </section>
          </form>
        </section>
      </section>
    </>
  );
}
export default SectionD;
