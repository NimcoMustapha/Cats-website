function Footer() {
  return (
    <>
      {/* preFooter Section */}
      <div className="text-center ">
        <div className="bg-indigo-600 m-full w-full h-90 ">
          {/* head section */}
          <h1 className="pt-25 text-white text-4xl font-bold">
            Ready for More Purrfection?
          </h1>
          {/* p section */}
          <p className="p-4 text-white text-lg font-semibold ">
            Connect with us to share your own minimalist cat moments or learn
            more about our <br />
            philosophy.
          </p>
          {/* button section */}
          <button
            type="button"
            className="mt-5 text-blue-800 bg-white font-semibold p-3 pl-10 pr-10 rounded-4xl cursor-pointer 
                      transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  ..."
          >
            Get in Touch
          </button>
        </div>
        {/* Footer Section */}
        <div className="bg-slate-800 w-full h-17 text-gray-400 text-sm p-5 ">
          &copy; 2025 Purrfectly Minimal. All rights reserved. | Contact:
          meow@minimal.com
        </div>
      </div>
    </>
  );
}
export default Footer;
