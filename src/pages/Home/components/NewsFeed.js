const NewsFeed = ({ allNews }) => {
  return (
    <div className="w-full flex flex-row flex-wrap space-x-4 ">
      {allNews?.map(({ id, img, title, description,categories }) => (
        <div key={id} className="news-cart p-4 mb-10 h-80 group">
          <p className={`absolute cursor-pointer ${categories === "politics" ? "bg-red-600" : "bg-blue-600"} text-white text-sm py-1 px-2`}>
            {categories}
          </p>
          <img
            className="w-full h-44"
            src={img}
            alt="news"
          />
          <div>
            <h2 className="line-clamp-2 text-xl font-semibold leading-tight mt-4">
              {title}
            </h2>

            <div className="w-full flex justify-between mt-1 items-center border-b pb-2">
              <p className="text-gray-400 text-sm mt-3">May 1 2021</p>
              <p className="cursor-pointer font-semibold underline text-gray-700">
                More
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
