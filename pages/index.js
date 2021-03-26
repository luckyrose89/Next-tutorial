import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
        reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
        laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
        sequi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
        reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
        laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
        sequi!
      </p>
      <Footer />
    </div>
  );
}
