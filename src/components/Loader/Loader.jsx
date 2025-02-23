import { CircleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <CircleLoader 
      loading={true}
      size = {100}
      color="#D1A054" />
    </div>
  );
};

export default Loader;
