import { useState } from "react";

function GradeEvaluation() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [result, setResult] = useState("");

  const evaluateGrade = (event) => {
    event.preventDefault();
    const value = Number(score);

    if(name.trim() === "")
    {
      setResult("Please enter the Student's Name.");
      return;
    }

    if (score === "" || Number.isNaN(value)) {
      setResult("Please enter a valid score from 0 to 100.");
      return;
    }

    if (value < 0 || value > 100 || Object.is(value, -0))
    {
      setResult("Invalid Score");
      return;
    }
    
    if (value >= 90) 
    {
      setResult("Excellent");
    }
    else if (value >=85)
    {
      setResult("Very Good");
    }
    else if (value >= 80)
    {
      setResult("Good");
    }
    else if (value >= 75)
    {
      setResult ("Passed");
    }
    else
    {
      setResult("Failed");
    }
  };

  const isError = result.includes("valid") || result.includes("Invalid") || result.includes("Please enter the Student's Name");

  return (
    <div className="relative min-h-screen">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(10px) rotate(-3deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(15px) rotate(-5deg); }
          66% { transform: translateY(-25px) rotate(3deg); }
        }
        @keyframes blob {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
          75% { border-radius: 60% 40% 60% 30% / 60% 40% 30% 70%; }
        }
        @keyframes morph {
          0%, 100% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
          34% { border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%; }
          67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounce-in {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        @keyframes pop-in {
          0% { opacity: 0; transform: translateY(-12px) scale(0.95); }
          60% { opacity: 1; transform: translateY(2px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .grade-animate-pop-in { animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
 
        .grade-animate-float { animation: float 6s ease-in-out infinite; }
        .grade-animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
        .grade-animate-blob { animation: blob 8s ease-in-out infinite; }
        .grade-animate-morph { animation: morph 8s ease-in-out infinite; }
        .grade-animate-gradient { background-size: 300% 300%; animation: gradient-shift 8s ease infinite; }
        .grade-animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .grade-animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .grade-animate-bounce-in { animation: bounce-in 0.8s ease-out forwards; }
        .grade-animate-sparkle { animation: sparkle 3s ease-in-out infinite; }
 
        .grade-glass {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .grade-input-focus-effect { transition: all 0.3s ease; }
        .grade-input-focus-effect:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(251, 146, 60, 0.15);
        }
        .grade-btn-shimmer { position: relative; overflow: hidden; }
        .grade-btn-shimmer::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
          transform: rotate(30deg);
          animation: shimmer 3s infinite;
        }
        .grade-card-hover { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .grade-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 60px rgba(251, 146, 60, 0.12);
        }
        .grade-particle { position: absolute; pointer-events: none; }`}</style>
 
      <main className="min-h-screen relative"
        style={{ background: "linear-gradient(135deg, #fff7ed 0%, #fef3c7 25%, #fce7f3 50%, #ede9fe 75%, #e0f2fe 100%)",}}>
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-orange-200 to-amber-200 opacity-50 grade-animate-blob grade-animate-float" />
            <div
              className="absolute top-1/3 -right-16 w-64 h-64 bg-gradient-to-br from-pink-200 to-rose-200 opacity-40 grade-animate-blob grade-animate-float-reverse"
              style={{ animationDelay: "2s" }}/>
            <div
              className="absolute -bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-violet-200 to-purple-200 opacity-40 grade-animate-blob"
              style={{ animationDelay: "4s" }}/>
            <div
              className="absolute top-10 right-1/3 w-48 h-48 bg-gradient-to-br from-sky-200 to-cyan-200 opacity-40 grade-animate-morph grade-animate-float"
              style={{ animationDelay: "1s" }}/>
            <div
              className="absolute bottom-1/4 right-10 w-56 h-56 bg-gradient-to-br from-emerald-200 to-teal-100 opacity-30 grade-animate-blob grade-animate-float-reverse"
              style={{ animationDelay: "3s" }}/>
 
          <div className="grade-particle w-2 h-2 rounded-full bg-orange-300 opacity-60 grade-animate-sparkle" style={{ top: "20%", left: "30%" }} />
          <div className="grade-particle w-1.5 h-1.5 rounded-full bg-pink-300 opacity-60 grade-animate-sparkle" style={{ top: "40%", right: "25%", animationDelay: "0.7s" }} />
          <div className="grade-particle w-2 h-2 rounded-full bg-violet-300 opacity-60 grade-animate-sparkle" style={{ bottom: "30%", left: "20%", animationDelay: "1.5s" }} />
          <div className="grade-particle w-1 h-1 rounded-full bg-amber-400 opacity-60 grade-animate-sparkle" style={{ top: "60%", right: "35%", animationDelay: "2s" }} />
          <div className="grade-particle w-1.5 h-1.5 rounded-full bg-rose-300 opacity-50 grade-animate-sparkle" style={{ top: "80%", left: "60%", animationDelay: "2.5s" }} />
          <div className="grade-particle w-2 h-2 rounded-full bg-sky-300 opacity-50 grade-animate-sparkle" style={{ top: "12%", right: "40%", animationDelay: "1s" }} />
        </div>
 
        <div className="min-h-screen flex items-start justify-center p-4 pt-12 relative z-10">
          <div className="w-full max-w-2xl">
            <div className="text-center mb-8 grade-animate-bounce-in">
              <h1 className="mt-2 text-4xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent grade-animate-gradient" style={{ backgroundSize: "200% auto" }}>
                Student Grade Evaluation</h1>
              <p className="text-xl text-amber-600/100 mt-2">
                Enter a Student Name and Score to determine their remark.
              </p>
            </div>
 
            <div className="grade-glass rounded-3xl shadow-xl shadow-orange-100/50 border border-white/60 px-10 py-14 grade-card-hover grade-animate-slide-up">
              <form onSubmit={evaluateGrade} className="space-y-5" noValidate>
                <div>
                  <label className="block text-sm font-semibold text-amber-700 mb-2 ml-1">
                    Student Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter Student Name"
                    className="grade-input-focus-effect w-full px-5 py-3.5 rounded-2xl bg-white/80 border-2 border-orange-100 focus:border-orange-400 focus:outline-none text-amber-800 placeholder-amber-300 text-sm font-medium transition-all duration-300 hover:border-orange-200"
                  />
                </div>
 
                <div>
                  <label className="block text-sm font-semibold text-amber-700 mb-2 ml-1">Student Score</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={score}
                    onChange={(event) => setScore(event.target.value)}
                    placeholder="Enter Student Score from 0 to 100"
                    className="grade-input-focus-effect w-full px-5 py-3.5 rounded-2xl bg-white/80 border-2 border-orange-100 focus:border-orange-400 focus:outline-none text-amber-800 placeholder-amber-300 text-sm font-medium transition-all duration-300 hover:border-orange-200"/>
                </div>
 
                <button
                  type="submit"
                  className="grade-btn-shimmer w-full py-4 rounded-2xl bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 grade-animate-gradient text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group">
                  <span>Evaluate Student Grade</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setName(""); 
                    setScore("");
                    setResult("");
                  }} 
                  className="grade-btn-shimmer w-full py-4 rounded-2xl bg-gradient-to-r from-red-400 via-amber-400 to-red-400 grade-animate-gradient text-white font-bold text-sm tracking-wide shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group">
                  <span>Clear</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  </svg>
                </button>
              </form>

              {result && (
                <div
                  key={result}
                  className={`grade-glass grade-animate-pop-in mt-5 rounded-2xl border p-6 text-center shadow-lg ${
                    isError
                      ? "border-rose-100 shadow-rose-100/50"
                      : "border-orange-100 shadow-orange-100/50"
                  }`}>
                  <p className={`text-xs font-bold uppercase tracking-[0.18em] ${ isError ? "text-rose-500" : "text-orange-500"}`}> Remarks </p>
                  <p className={`mt-2 text-2xl font-bold ${ isError ? "text-rose-600" : "text-amber-800"}`}> {isError ? result : `The grade of this student is ${result}.`}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GradeEvaluation;