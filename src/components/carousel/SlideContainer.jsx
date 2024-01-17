const SlideContainer = ({ index, data, imageIndex, isLoaded }) => {
  return (
    <div
      id={index}
      className={`shadow-3xl flex  transition duration-200 ease-linear ${isLoaded ? "opacity-100 " : "opacity-50 shadow-none backdrop-brightness-0 "} ${imageIndex === index ? "block" : "hidden"}`}
    >
      <img src={data.image}></img>
      <div className="w-72 bg-purple-900 text-center">
        <h2 className="pt-12 text-xl font-bold text-slate-200 ">
          {data.title}
        </h2>
      </div>
    </div>
  );
};

export default SlideContainer;
