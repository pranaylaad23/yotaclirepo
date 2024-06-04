import Circle from "./Circle ";
import { useSelector} from "react-redux";
function ItereateCircle({ isAttempted }) {
  const { questions } = useSelector((state) => state.questions);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
            {questions.map((data,index) => (
              <Circle key={index} index={index} isAttempted={isAttempted}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItereateCircle;
