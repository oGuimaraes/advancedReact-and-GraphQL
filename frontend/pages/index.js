import Link from "next/link";

const Home = (props) => (
  <div>
    <h2>Index</h2>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
  </div>
);

export default Home;
