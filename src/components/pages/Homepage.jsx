import HomeHeader from "../headers/HomeHeader";
import HomeMain from "../mains/HomeMain";

const Homepage = () => {
  return (
    <>
      <header>
        <HomeHeader></HomeHeader>
      </header>
      <main className="flex flex-col  items-center">
        <HomeMain></HomeMain>
      </main>
    </>
  );
};

export default Homepage;
