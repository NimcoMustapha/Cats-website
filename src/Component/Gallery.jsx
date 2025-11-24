import { useEffect, useState } from "react";

// Usestate Section
function Gallery() {
  const catsurl = "http://localhost:5000";

  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  //  Useeffect Section
  useEffect(() => {
    fetch(catsurl)
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          setGallery("http://localhost:5000");
        } else {
          setGallery(data);
        }
      })
      // cacth error hhhhhhhh
      .catch((error) => {
        console.log("error fetching gallery", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* Cat Gallery */}
      <div className="bg-gray-100  ">
        <div className=" ml-70 w-240 h-full grid grid-cols-3 gap-6">
          {gallery.map((image) => (
            <img
              src={image.url}
              key={image.id}
              className="mb-3 w-100 shadow-xl/40 w-50 h-60 rounded-xl object-cover"
            />
          ))}
        </div>
      </div>
      <h1>{gallery}</h1>
    </>
  );
}
export default Gallery;
