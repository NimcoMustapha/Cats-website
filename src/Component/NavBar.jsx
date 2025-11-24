function NavBar() {
  // Navbar Array
  const Navlist = [
    { name: "About", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Contact", href: "#" },
  ];
  return (
    <>
      {/* Navbar styling */}
      <nav className=" w-full bg-white shadow-2xl h-20   ">
        <div className="flex justify-around  items-center px-7 py-6 ">
          {/* Web Name */}
          <h1 className="font-bold text-3xl pr-26 ">Purrfectly Minimal</h1>
          {/*  each list styling section */}
          <ul className="flex  space-x-6 text-gray-500 text-md ">
            {Navlist.map((link, i) => (
              <li key={i}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
