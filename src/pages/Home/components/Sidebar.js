const topNews = [
  {
    id: 1,
    title: "What is the top news bob news?",
    img: "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: ` 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore perferendis veritatis cum laborum voluptatum adipisci illo atque nulla maxime.
        
        `,
  },
  {
    id: 2,
    title:
      "consectetur adipisicing elit. Expedita dolore perferendis veritatis",
    img: "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: ` 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore perferendis veritatis cum laborum voluptatum adipisci illo atque nulla maxime.
        
        `,
  },
  {
    id: 3,
    title: "What is the top news bob news?",
    img: "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: ` 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore perferendis veritatis cum laborum voluptatum adipisci illo atque nulla maxime.
        
        `,
  },
  {
    id: 4,
    title:
      "consectetur adipisicing elit. Expedita dolore perferendis veritatis?",
    img: "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: ` 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore perferendis veritatis cum laborum voluptatum adipisci illo atque nulla maxime.
        
        `,
  },
  {
    id: 5,
    title:
      "consectetur adipisicing elit. Expedita dolore perferendis veritatis?",
    img: "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: ` 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore perferendis veritatis cum laborum voluptatum adipisci illo atque nulla maxime.
        
        `,
  },
  {
    id: 6,
    title:
      "consectetur adipisicing elit. Expedita dolore perferendis veritatis?",
    img: "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: ` 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore perferendis veritatis cum laborum voluptatum adipisci illo atque nulla maxime.
        
        `,
  },
];

const Sidebar = () => {
  return (
    <div className="w-96 pl-6">
      <div className="w-full bg-gray-300 pl-3 py-2">Top New</div>
      {/* news list container */}
      <div className="w-full flex flex-col pt-5">
        {topNews.map(({ id, img, title, description }) => (
          <div key={id} className="w-full flex flex-row items-center border-b mb-4 pb-2">
            <img
              className="w-20 h-20- object-contain "
              src={img}
              alt="top news"
            />
            <div className="ml-2">
              <h3 className="line-clamp-2 font-semibold leading-none text-gray-800 mb-2">{title}</h3>
              <p className="line-clamp-1 leading-none text-sm text-gray-500">{description}</p>
            </div>
          </div>
        ))}
        <div className="text-right cursor-pointer underline text-gray-500">More News</div>
      </div>
    </div>
  );
};

export default Sidebar;
