import ChatBox from "../components/ChatBox";
import PageWrapper from "../components/PageWrapper";
import { LogOut, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <PageWrapper>

      <div className="flex min-h-screen bg-[#0f172a] text-white">

        {/* Sidebar */}
        <aside className="w-64 bg-white/5 border-r border-gray-800 p-6">

          <h2 className="text-xl font-bold mb-8">
            Pitchsap
          </h2>

          <nav className="space-y-4">

            <div className="flex items-center gap-3 text-gray-300">
              <MessageSquare size={18} />
              Chat
            </div>

          </nav>

          <button
            onClick={logout}
            className="flex items-center gap-2 mt-10 text-red-400 hover:text-red-300 transition"
          >
            <LogOut size={18} />
            Logout
          </button>

        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10">

          {/* Header */}
          <div className="flex justify-between items-center mb-8">

            <h1 className="text-3xl font-bold">
              Ideator Dashboard
            </h1>

          </div>

          {/* Chat Section */}
          <div className="bg-white/5 border border-gray-800 rounded-2xl p-6 hover:shadow-xl transition">

            <ChatBox />

          </div>

        </main>

      </div>

    </PageWrapper>
  );
}

export default Dashboard;