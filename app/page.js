import Navbar from "@/components/Navbar/Navbar";
import Three from "@/components/sections/section3/Three";
import One from "@/components/sections/section1/One";
import Two from   "@/components/sections/section2/Two";
// import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/about/About";


export default function Home() {
  return (
    <main>
      <section>
  
      <One />
      </section>

      <section>
        <Two />
        <About />
      </section>
      <section>
        <Three />
      </section>
    </main>
  );
}
