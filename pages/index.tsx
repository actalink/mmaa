import Wallet from "../components/Wallet";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start">
        <Main />
      </div>
    </>
  );
};

export default Home;
