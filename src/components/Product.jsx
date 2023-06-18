import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  
  
  const{cart}=useSelector((state)=>state)
  console.log("line no9")
  console.log(cart);
  const dispatch=useDispatch();

  const addToCart=()=>{
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const RemoveFromCart=()=>{
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  }

  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image} />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      <button>
        {
          cart.some((p)=>p.id===post.id)?
          (<button 
          onClick={RemoveFromCart}
          >
            Remove Item
          </button>):
          (<button
          onClick={addToCart}
          >
            Add To cart
          </button>

          )
        }
      </button>
    </div>
  )
};

export default Product;
