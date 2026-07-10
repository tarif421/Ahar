import Image from "next/image";
import Banner from "./components/Home/Banner";

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-6">
        <Banner />
      </section>
    </div>
  );
}
