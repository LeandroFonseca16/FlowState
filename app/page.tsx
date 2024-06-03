
import Navbar from "@/src/components/navbar";
import Hero from "../src/components/Hero";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="min-h-screen max-w-7xl w-full">
        <Navbar/>
        <Hero />
      </div>
    </main>
  );
}
