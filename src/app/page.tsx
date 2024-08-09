import Header from "./components/header/page";
import AboutUs from "./components/about";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
export default function Page() {
  return(
    <div>
      <Header />
      <AboutUs />
      {/* <Gallery/> */}
      <Footer />
    </div>
  )
}
