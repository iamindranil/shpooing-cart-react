const Product = ({ post }) => {
  return (
    <div>
      <h1>hhdhd</h1>
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
          true ? <p>Remove</p> : <p>Add to cart</p>
        }
      </button>
    </div>
  )
};

export default Product;
