import { useParams } from "react-router";

const TankDetail = () => {
  const params = useParams();

  return (
    <div>
      <h1>Tank Detail {params.slug}</h1>
    </div>
  );
};

export default TankDetail;
