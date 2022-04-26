import { useState } from "react";
import "./styles.css";
export const Counter = ({upperLimit}) => {
  const [counter, setCounter] = useState(1);
  let maxCount = upperLimit || 1000;
//   console.log(maxCount)
  const handlePlus = () => {
    if (counter < maxCount) {
      setCounter(counter + 1);
    } else {
      alert(`Count cannot exceed ${maxCount}.`);
    }
  };
  const handleMinus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Counter cannot be smaller than 0.");
    }
  };

  return (
    <div className="outer_container">
      <div className="container_div">
        <button className="btn_minus" onClick={handleMinus}>
          -
        </button>
        <div className="container_p">
          <p>{counter}</p>
        </div>

        <button className="btn_plus" onClick={handlePlus}>
          +
        </button>
      </div>
    </div>
  );
};
