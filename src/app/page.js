
import HomeNavBar from "./components/user/HomePage/HomeNavBar";
import Banner from "./components/user/HomePage/Banner";
import CardVideoSection from "./components/user/HomePage/CardVideoSection";
import Footer from "./components/user/HomePage/Footer";


export default function Home() {
  return (
    <main className="">
      <HomeNavBar/>
      <Banner/>
      <CardVideoSection/>
      <Footer/>
     </main>
  );
}
