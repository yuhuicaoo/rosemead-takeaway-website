import Nav from "./components/Nav"
import Hero from "./components/Hero"
import OpeningHours from "./components/OpeningHours"

export default function Page() {
  return (
    <>
      <section id="landing-page" className='min-h-screen'>
        <div className="kb-awning"/>
        <Nav/>
        <Hero/>
      
      </section>
      <section id="opening-hours" className="min-h-screen px-6 py-15">
        <OpeningHours/>
      </section>
    </>
  );
}
