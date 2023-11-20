function Nav() {
  return (
    <>
      <nav
        className="parent_section space_between nav"
        onClick={(e) => {
          alert(getComputedStyle(e.target).height);
        }}
      >
        <section>
          <img
            src="./src/pexels-kawaiiart.png"
            alt="Logo here"
            className="logo"
          />
        </section>
        <ul className="row gap48 nav_menu">
          <li>
            <p className="paragraph">OUR MENU</p>
          </li>
          <li>
            <p className="paragraph">OUR SERVICES</p>
          </li>
          <li>
            <p className="paragraph">CONTACT US</p>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Nav;
