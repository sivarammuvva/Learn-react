import "./App.css";
export default function Card({
  name,
  image,
  discription,
  count,
  setPdData,
  id,
}) {
  function decrement() {
    setPdData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, count: Math.max(0, item.count - 1) };
        }
        return item;
      })
    );
  }

  function increment() {
    setPdData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, count: Math.max(0, item.count + 1) };
        }
        return item;
      })
    );
  }

  function initCount() {
    setPdData((prev) => [
      ...prev.map((item) => {
        if (item.id === id) {
          return { ...item, count: 1 };
        }
        return item;
      }),
    ]);
  }

  return (
    <div className="container-main">
      <div className="main-container">
        <div className="card">
          {name},{discription}
          <img src={image} />
        </div>
        <div className="button-container">
          {count === 0 ? (
            <button onClick={initCount} className="btn-class">
              <button class="btn-class-name">
                <span class="back"></span>
                <span class="front"></span>
              </button>
              Add to Cart
            </button>
          ) : (
            <div className="counter-container">
              <button onClick={decrement} className="decrement-button">
                -
              </button>
              <span className="count-display">{count}</span>
              <button onClick={increment} className="increment-button">
                +
              </button>
              <p className="item-added">
                {count} {count === 1 ? "Item " : "Items  "}added
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
