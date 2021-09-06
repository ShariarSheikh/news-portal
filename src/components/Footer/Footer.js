const Footer = () => {
  return (
    <footer className="max-w-screen-2xl m-auto flex flex-col items-center pt-5 border-t bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-semibold pb-3">News Portal</h1>
        <p className="text-xl">Get Latest News from News Portal</p>
        <div className="flex items-center mt-4">
          <input
            type="text"
            placeholder="Email"
            className="outline-none border py-2 px-4"
          />
          <button className="ml-4 py-2 px-4 cursor-pointer bg-blue-700 rounded-md text-white">
            Submit
          </button>
        </div>
      </div>
      <div className="border-t w-full flex flex-wrap justify-center space-x-10 mt-9">
        <div>
          <p className="text-xl font-semibold mb-3">Categories</p>
          <ul className="p-0">
            <li className="cursor-pointer text-sm mt-1">All News</li>
            <li className="cursor-pointer text-sm mt-1">Politics</li>
            <li className="cursor-pointer text-sm mt-1">Sports</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-semibold mb-3">Categories</p>
          <ul className="p-0">
            <li className="cursor-pointer text-sm mt-1">All News</li>
            <li className="cursor-pointer text-sm mt-1">Politics</li>
            <li className="cursor-pointer text-sm mt-1">Sports</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-semibold mb-3">Categories</p>
          <ul className="p-0">
            <li className="cursor-pointer text-sm mt-1">All News</li>
            <li className="cursor-pointer text-sm mt-1">Politics</li>
            <li className="cursor-pointer text-sm mt-1">Sports</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-5 bg-blue-700 text-white py-3 px-4">
        <div className="text-2xl font-semibold">News Portal</div>
        <div className="text-white">
          <a href="https://shariar.vercel.app/">Create By Shariar</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
