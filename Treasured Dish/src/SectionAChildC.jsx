export let SectionAChildC = ({
  data,
  setdata,
  menuA,
  setMenuA,
  menuC,
  setMenuC,
}) => {
  console.log(menuC)
  return (
    <>
      <section className="column gap16 align_end a_child_c_scroll">
        {Object.values(Object(data[menuA])).map((itemC, i) => (
          <section
            className={`scroll_buttons align_center gap16 a_child_c_scrolls ${
              menuC["a"] == itemC["a"]
                ? "red_bg black_base_button"
                : ""
            }`}
            onClick={() => {
              setMenuC((menuC = itemC));
            }}
            key={i + "section"}
          >
            <img src="./src/chevron_right_w.svg" alt="" key={i + "image"} />
            <button
              className={`scroll_button button text_right ${
                menuC["a"] == itemC["a"]
                  ? "menu_button_r"
                  : "menu_button_w"
              }`}
              key={i + "button"}
            >
              {itemC["a"]}
            </button>
          </section>
        ))}
      </section>
    </>
  );
};
