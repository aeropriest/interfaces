import Header from "./components/header/page";
import AboutUs from "./components/about";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
export default function Page() {
  return(
    <div>
      <Navbar/>
      <Header />
      <AboutUs />
      <Gallery/>
      <Footer />
    </div>
  )
}
