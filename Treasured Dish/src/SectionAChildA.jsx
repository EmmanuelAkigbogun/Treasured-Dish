export let SectionAChildA = ({ data, menuA, setMenuA, menuC, setMenuC }) => {
  return (
    <>
      <section className="gap16 column a_child_a a_scroll">
        {Object.keys(data).map((itemA) => (
          <button
            className={`button menu_button ${
              menuA == itemA
                ? "menu_button_r black_base_button"
                : "menu_button_w"
            }`}
            key={itemA}
            onClick={() => {
              setMenuA((menuA = itemA));
              setMenuC((menuC = data[menuA]["0"]));
              
            }}
          >
            {itemA}
          </button>
        ))}
      </section>
    </>
  );
};

/*
        <button className="button menu_button menu_button_r black_base_button">
          Meat
        </button>
        <button className="button menu_button menu_button_w">Vegetables</button>
        <button className="button menu_button menu_button_w">Appetizers</button>
        <button className="button menu_button menu_button_w">Desserts</button>
        <button className="button menu_button menu_button_w">Sides</button>
        <button className="button menu_button menu_button_w">Drinks</button>


*/
