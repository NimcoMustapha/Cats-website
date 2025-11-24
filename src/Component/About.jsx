import Greycat from "../assets/Greycat.jpg";
function About() {
  return (
    <>
      {/* image Section */}
      <div className="mt-0 flex justify-center gap-x-7 flex-row  w-full h-150 bg-white ">
        <div className="mt-28 ml-10">
          <img src={Greycat} className="w-129 rounded-xl "></img>
        </div>
        {/* text Section */}
        <div className="mt-35 ml-10 flex-col ">
          <h1 className="font-bold text-4xl">Our Philosophy: Simplicity, </h1>
          <h1 className="mt-2  font-bold text-4xl">Serenity, Purrs.</h1>
          <p className="mt-7 text-lg text-gray-800">
            We believe that true happiness is found in the little things: a warm
            <br />
            sunbeam, a comfortable nap, and the quiet, unwavering companionship
            <br />
            of a contented cat. This page reflects that ethos – less clutter,
            more moments of peace.{" "}
          </p>
          <p className="mt-4 text-lg text-gray-800 ">
            Our mission is to celebrate the minimalist charm of feline life and
            <br /> inspire a more tranquil existence.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
