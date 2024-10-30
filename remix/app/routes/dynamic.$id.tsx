import { LoaderFunctionArgs } from "@remix-run/node";
import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import StateContext from "~/contexts/state";
export const loader = ({ params }: LoaderFunctionArgs) => {
  return params;
};
const DynamicRoute = () => {
  const params = useParams();
  const { value1, setValue1 } = useContext(StateContext);
  useEffect(() => {
    console.log(params.id);
  }, [params]);
  const handleClick = () => {
    setValue1("string");
  };
  return (
    <div>
      <p>Routing {value1}</p>
      <button onClick={handleClick} className="bg-green-500 p-1 m-2 rounded-md">
        Set Value
      </button>
    </div>
  );
};

export default DynamicRoute;
