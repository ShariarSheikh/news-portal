import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import NewsFeed from "./components/NewsFeed";
import Sidebar from "./components/Sidebar";
import SlidingBanner from "./components/SlidingBanner";

const allNews = [
  {
    id: 1,
    title: "What is the top news bob news?",
    img: "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: ` 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore perferendis veritatis cum laborum voluptatum adipisci illo atque nulla maxime.
        
        `,
    categories: "politics",
  },
  {
    id: 2,
    title:
      "consectetur adipisicing elit. Expedita dolore perferendis veritatis",
    img: "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: ` 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore perferendis veritatis cum laborum voluptatum adipisci illo atque nulla maxime.
        
        `,
    categories: "sports",
  },
  {
    id: 3,
    title: "What is the top news bob news?",
    img: "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: ` 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore perferendis veritatis cum laborum voluptatum adipisci illo atque nulla maxime.
        
        `,
    categories: "politics",
  },
  {
    id: 4,
    title:
      "consectetur adipisicing elit. Expedita dolore perferendis veritatis?",
    img: "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: ` 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore perferendis veritatis cum laborum voluptatum adipisci illo atque nulla maxime.
        
        `,
    categories: "sports",
  },
  {
    id: 5,
    title:
      "consectetur adipisicing elit. Expedita dolore perferendis veritatis?",
    img: "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: ` 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore perferendis veritatis cum laborum voluptatum adipisci illo atque nulla maxime.
        
        `,
    categories: "politics",
  },
  {
    id: 6,
    title:
      "consectetur adipisicing elit. Expedita dolore perferendis veritatis?",
    img: "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: ` 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore perferendis veritatis cum laborum voluptatum adipisci illo atque nulla maxime.
        
        `,
    categories: "sports",
  },
];
const categories = [
  {
    id: 1,
    name: "All News",
  },
  {
    id: 2,
    name: "Sports",
  },
  {
    id: 3,
    name: "Politics",
  },
];

const Index = () => {
  const [data, setData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    setData(allNews);
    setNewsData(data);
  }, [data]);

  //...
  const handleUpdateNews = (categories) => {
    if (categories === "All News") {
      const news = data.filter((n) => n);
      setNewsData(news);
    }
    if (categories === "Sports") {
      const news = data.filter((n) => n.categories === "sports");
      setNewsData(news);
      console.log(newsData);
    }
    if (categories === "Politics") {
      const news = data.filter((n) => n.categories === "politics");
      setNewsData(news);
    }
  };

  return (
    <>
      <main className="mt-7 w-full flex flex-row-reverse">
        <div>
          <Sidebar />
        </div>
        <div className="flex-1 overflow-hidden">
          <SlidingBanner />
          <header className="flex items-center w-full py-4 mt-3 pl-3 space-x-5">
            {categories.map(({ id, name }) => (
              <div
                onClick={() => handleUpdateNews(name)}
                key={id}
                className={`font-bold cursor-pointer text-gray-500 active:text-gray-900`}
              >
                #{name}
              </div>
            ))}
          </header>
          {newsData && <NewsFeed allNews={newsData} />}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
