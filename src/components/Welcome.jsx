import { Alert } from "react-bootstrap";

const Welcome = () => {
  return (
    <div className=" d-flex justify-content-center">
      <Alert variant="info" className="text-center w-25">
        Benvenuto nel mio shop
      </Alert>
    </div>
  );
};

export default Welcome;
