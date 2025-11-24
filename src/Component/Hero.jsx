import ACat from "../assets/ACat.jpg";

function Hero() {
  return (
    <>
      {/* page style section */}
      <div
        className="flex justify-center gap-x-7 mt-1 
        flex-row w-full h-150 bg-gray-200 "
      >
        {/* content common styles */}
        <div className="mt-35 ml-15 flex-col ">
          {/* styling each one  */}
          <h1 className="font-extrabold text-6xl">Embrace The</h1>
          <h1 className="mt-2 ml-13 font-extrabold text-6xl">Cozy Life.</h1>
          {/* p section */}
          <p className="mt-7 text-lg">
            Discover the simple, elegant world of our feline{" "}
          </p>
          <p className="ml-14 text-lg">friends. Less clutter, more purrs. </p>
          {/* button section */}
          <button
            className="mt-9 ml-22 p-3 px-9 rounded-4xl bg-indigo-600 text-white 
                       text-lg font-semibold cursor-pointer transition delay-100 cursor-pointer
                       transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  ..."
            type="button"
          >
            Explore Our Felines
          </button>
        </div>
        <div className="mt-30 ml-15">
          <img src={ACat} className="w-123 rounded-xl "></img>
        </div>
      </div>
    </>
  );
}
export default Hero;
