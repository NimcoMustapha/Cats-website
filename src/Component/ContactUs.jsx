import { useState } from "react";

// Usestate Section
function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  //  email
  function HandleEmail(e) {
    setEmail(e.target.value);
  }
  // Name
  function HandleName(e) {
    setName(e.target.value);
  }
  // Submition with Message
  function HandleSubmit(e) {
    e.preventDefault();
    if (!email || !name) {
      setMessage("please enter ur Name and Email");
    } else {
      setMessage(
        "🎉 We’ve received your message, Mr/Mrs ! We’ll reach you at soon."
      );
    }
    setIsSubmited(true);
  }

  return (
    <>
      <div className="w-full h-100 mt-9 p-11 ">
        <h1 className="text-5xl font-bold text-center flex justify-center flex-col">
          Contact Us
        </h1>
        {/* form Section */}
        {!isSubmited ? (
          <form onSubmit={HandleSubmit} className="mt-6 ml-90 ">
            <h3 className="mr-34 font-bold">Name </h3>
            <input
              onChange={HandleName}
              type="name"
              placeholder="     Your Name"
              value={name}
              className="w-200 h-13 border border-gray-300 rounded-xl"
            />
            <h2 className="mr-29 mt-3 font-bold">Email</h2>
            <input
              onChange={HandleEmail}
              type="email"
              placeholder="    Name@Example.com"
              value={email}
              className="w-200 h-13 border border-gray-300 rounded-xl"
            />
            <br />
            <button
              type="submit"
              className="mt-6 ml-63 font-bold bg-indigo-500 p-3 w-45 rounded-4xl text-white cursor-pointer
                        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  ..."
            >
              Submit
            </button>
          </form>
        ) : (
          // Return Massege section
          <h1 className=" mt-15 text-indigo-600 text-xl font-semibold text-center flex justify-center">
            {message}
          </h1>
        )}
      </div>
    </>
  );
}
export default ContactUs;
