import { SectionBChildA } from "./SectionBChildA";
import { SectionBChildB } from "./SectionBChildB";
function SectionB() {
  return (
    <>
      <section className="parent_section section_b gap40 column parent_padding">
        <h3 className="heading heading3">Our Services</h3>
        <section className="space_between b_child">
          <SectionBChildA />
          <SectionBChildB />
        </section>
      </section>
    </>
  );
}
export default SectionB;
