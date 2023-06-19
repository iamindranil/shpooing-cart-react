import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount,setTotalAmount]=useState(0)
  
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])

  return (
    <div>
      {
        cart.length>0?(
          <div>
            <div>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>
            


            <div>
              
              <div>
                <div>Your cart</div>
                <div>Summary</div>
                <p>
                  <span>Total Items:{cart.length}</span>//
                </p>
              </div>
  
              <div>
                <p>total Amount:${totalAmount}</p>
                <button>
                  Checkout now
                </button>
              </div>
            
            
            </div>






          </div>
        ) : (
          <div>
            <h1 className="text-gray-700 font-semibold">Cart Empty</h1>
            <Link to='/'>
              <button
               className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
               text-[12px] p-1 px-3 uppercase transition duration-300
               hover:bg-gray-700
               hover:text-white">
                Shop Now
              </button>
            </Link>
          </div>

        )
      }
    </div>
  )
};

export default Cart;
