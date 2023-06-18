import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
      console.log(data);
    } catch (e) {
      console.log("Error");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, [])


  return (
    <div>
      {
        loading ? (<Spinner />) :
          posts.length > 0 ? (
            <div>
              {
                posts.map((post) => (
                  <Product post={post} />
                ))
              }
            </div>
          ) :
            <div>
              No data found
            </div>
      }
    </div>
  )
};

export default Home;
