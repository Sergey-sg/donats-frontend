import { FaCoins, FaBullseye } from "react-icons/fa";
import { ProgressBar } from "react-bootstrap";

const StatusJar = ({ currentSum, goal }) => {
  const percentage = (currentSum / goal) * 100;

  return (
    <>
      <div className="fs-6 text-end">
        <span>{Math.round(percentage)}%</span>
        <ProgressBar now={percentage} />
      </div>
      <div className="bg-gray py-1 text-center rounded-2 my-2 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center ms-4">
          <FaCoins className="mx-2" />
          <div>
            <div>collected</div>
            <div>{currentSum}</div>
          </div>
        </div>
        <div className="d-flex align-items-center me-4">
          <FaBullseye className="mx-2" />
          <div>
            <div>goal</div>
            <div>{goal}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusJar;
