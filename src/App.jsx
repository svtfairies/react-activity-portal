import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./pages/Login";
import GradeEvaluation from "./pages/GradeEvaluation";
import PasswordChecker from "./pages/PasswordChecker";
import ElectricityBill from "./pages/ElectricityBill";
import AttendanceChecker from "./pages/AttendanceChecker";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === "login") return <Login />;
    if (currentPage === "grade") return <GradeEvaluation />;
    if (currentPage === "password") return <PasswordChecker />;
    if (currentPage === "electricity") return <ElectricityBill />;
    if (currentPage === "attendance") return <AttendanceChecker />;
    return <Home onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen bg-[#f3f6fa]">
      <Navbar activePage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
    </div>
  );
}

export default App;