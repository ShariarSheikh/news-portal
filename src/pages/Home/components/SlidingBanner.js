import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1483726234545-481d6e880fc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1483726234545-481d6e880fc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1483726234545-481d6e880fc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    id: 3,
  },
];

const SlidingBanner = () => {
  return (
    <div className="w-full bg-gray-500 overflow-hidden h-96">
      <Slide>
        {slideImages.map(({ url, id }) => (
          <div className="each-slide h-96" key={id}>
            <div>
              <img src={url} alt="news" className="w-full"/>
            </div>
          </div>
        ))}
      </Slide>
   </div>
  );
};

export default SlidingBanner;
