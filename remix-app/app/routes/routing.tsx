import { useNavigate } from "@remix-run/react";
import { useContext } from "react";
import StateContext from "~/contexts/state";

const ProjectTest = () => {
  const { setValue1 } = useContext(StateContext);
  const navigate = useNavigate();
  const handleClick = () => {
    setValue1("dynamic Value2");
    navigate("/dynamic/route");
  };
  return (
    <div className="w-full h-screen bg-zinc-950">
      <h1>Hehe</h1>
      <button onClick={handleClick} className="bg-blue-500 p-1 rounded-md m-2">
        navigate to dynamic route
      </button>
    </div>
  );
};
export default ProjectTest;
