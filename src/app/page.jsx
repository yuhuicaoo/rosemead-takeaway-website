import Nav from "./components/Nav"
import Menu from "./components/Menu"
import Hero from "./components/Hero"
import OpeningHours from "./components/OpeningHours"
import FindUs from "./components/FindUs"
import Footer from "./components/Footer"

export default function Page() {
  return (
    <>
      <section id="landing-page" className='min-h-screen bg-(--darkblue)'>
        <Nav/>
        <Hero/>
      </section>
      <Menu/>
      <OpeningHours/>
      <FindUs/>
      <Footer/>
    </>
  );
}
