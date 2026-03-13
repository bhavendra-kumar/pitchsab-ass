import { useNavigate } from "react-router-dom";
import ChatBox from "../components/ChatBox";

function Dashboard() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">

      <div className="flex justify-between w-full max-w-md mb-4">
        <h1 className="text-2xl font-bold">Ideator Dashboard</h1>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-1 rounded"
        >
          Logout
        </button>
      </div>

      <ChatBox />

    </div>
  );
}

export default Dashboard;