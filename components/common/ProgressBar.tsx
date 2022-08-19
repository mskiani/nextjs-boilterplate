import ProgressBar from "react-bootstrap/ProgressBar";

function ProgressBarNew({ now }) {
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default ProgressBarNew;
