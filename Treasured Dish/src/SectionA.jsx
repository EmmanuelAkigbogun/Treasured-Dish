import { useEffect, useState } from "react";
import { SectionAChildA } from "./SectionAChildA";
import { SectionAChildB } from "./SectionAChildB";
import { SectionAChildC } from "./SectionAChildC";
function SectionA() {
  let [data, setdata] = useState({});
  let [menuA, setMenuA] = useState("Meat");
  let [menuC, setMenuC] = useState("");
  useEffect(() => {
    let dataFunction = async () => {
      fetch("./MenuItems.json")
        .then((e) => e.json())
        .then((e) => {
          setdata((data = e[0]));
          setMenuC((menuC =e[0]["Meat"]["0"]));
        })
        .catch((error) => {});
    };
    dataFunction();
  }, []);
  return (
    <>
      <section>
        <section className="parent_section column section_a parent_padding gap40 sticky">
          <h3 className="heading heding3">Our Menu</h3>
          <section className="space_between a_children">
            <SectionAChildA
              setdata={setdata}
              data={data}
              menuA={menuA}
              setMenuA={setMenuA}
              menuC={menuC}
              setMenuC={setMenuC}
            />
            <SectionAChildB
              setdata={setdata}
              data={data}
              menuA={menuA}
              setMenuA={setMenuA}
              menuC={menuC}
              setMenuC={setMenuC}
            />
            <SectionAChildC
              setdata={setdata}
              data={data}
              menuA={menuA}
              setMenuA={setMenuA}
              menuC={menuC}
              setMenuC={setMenuC}
            />
          </section>
        </section>
        <section className="section_a_friend"></section>
      </section>
    </>
  );
}
export default SectionA;
