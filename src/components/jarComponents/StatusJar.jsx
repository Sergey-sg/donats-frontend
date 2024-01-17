import { FaCoins, FaBullseye } from "react-icons/fa";
import { ProgressBar } from "react-bootstrap";

const StatusJar = ({ currentSum, goal }) => {
  const percentage = (currentSum / goal) * 100;

  return (
    <>
      <div className="fs-6 text-end">
        <span>{Math.round(percentage) || 0}%</span>
        <ProgressBar now={percentage} />
      </div>
      <div className="bg-gray p-1 text-center text-dark rounded-2 my-2 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <FaCoins className="mx-2" />
          <div>
            <div>collected</div>
            <div>{Math.round(currentSum / 100) || 0}</div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <FaBullseye className="mx-2" />
          <div>
            <div>goal</div>
            <div>{goal / 100 || 0}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusJar;
