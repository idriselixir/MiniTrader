import Navbar from "@/components/Navbar/Navbar";
import Three from "@/components/section3/Three";
import One from "@/components/sections/section1/One";
import Two from   "@/components/sections/section2/Two"

export default function Home() {
  return (
    <main>
      <section>
      <Navbar />
      <One />
      </section>

      <section>
        <Two />
      </section>
      <section>
        <Three />
      </section>
    </main>
  );
}
