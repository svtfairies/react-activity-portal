import { useState } from "react";

function GradeEvaluation() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [result, setResult] = useState("");

  const evaluateGrade = (event) => {
    event.preventDefault();
    const value = Number(score);

    if (name.trim() === "") {
      setResult("Please enter the Student's Name.");
      return;
    }

    if (score === "" || Number.isNaN(value)) {
      setResult("Please enter a valid score from 0 to 100.");
      return;
    }

    if (value < 0 || value > 100 || Object.is(value, -0)) {
      setResult("Invalid Score");
      return;
    }

    if (value >= 90) {
      setResult("Excellent");
    } else if (value >= 85) {
      setResult("Very Good");
    } else if (value >= 80) {
      setResult("Good");
    } else if (value >= 75) {
      setResult("Passed");
    } else {
      setResult("Failed");
    }
  };

  const isError =
    result.includes("valid") ||
    result.includes("Invalid") ||
    result.includes("Please enter the Student's Name");

  return (
    <div className="relative min-h-screen">
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }

          33% {
            transform: translateY(-20px) rotate(5deg);
          }

          66% {
            transform: translateY(10px) rotate(-3deg);
          }
        }

        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }

          33% {
            transform: translateY(15px) rotate(-5deg);
          }

          66% {
            transform: translateY(-25px) rotate(3deg);
          }
        }

        @keyframes blob {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }

          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }

          50% {
            border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
          }

          75% {
            border-radius: 60% 40% 60% 30% / 60% 40% 30% 70%;
          }
        }

        @keyframes morph {
          0%, 100% {
            border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
          }

          34% {
            border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
          }

          67% {
            border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
          }
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }

          50% {
            transform: scale(1.05);
          }

          70% {
            transform: scale(0.9);
          }

          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(100%);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }

          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
        }

        @keyframes pop-in {
          0% {
            opacity: 0;
            transform: translateY(-12px) scale(0.95);
          }

          60% {
            opacity: 1;
            transform: translateY(2px) scale(1.02);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .grade-animate-pop-in {
          animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .grade-animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .grade-animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }

        .grade-animate-blob {
          animation: blob 8s ease-in-out infinite;
        }

        .grade-animate-morph {
          animation: morph 8s ease-in-out infinite;
        }

        .grade-animate-gradient {
          background-size: 300% 300%;
          animation: gradient-shift 8s ease infinite;
        }

        .grade-animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .grade-animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .grade-animate-bounce-in {
          animation: bounce-in 0.8s ease-out forwards;
        }

        .grade-animate-sparkle {
          animation: sparkle 3s ease-in-out infinite;
        }

        .grade-glass {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .grade-input-focus-effect {
          transition: all 0.3s ease;
        }

        .grade-input-focus-effect:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(251, 146, 60, 0.15);
        }

        .grade-btn-shimmer {
          position: relative;
          overflow: hidden;
        }

        .grade-btn-shimmer::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          transform: rotate(30deg);
          animation: shimmer 3s infinite;
        }

        .grade-card-hover {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .grade-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 60px rgba(251, 146, 60, 0.12);
        }

        .grade-particle {
          position: absolute;
          pointer-events: none;
        }
      `}</style>

      <main
        className="relative min-h-screen"
        style={{
          background:
            "linear-gradient(135deg, #fff7ed 0%, #fef3c7 25%, #fce7f3 50%, #ede9fe 75%, #e0f2fe 100%)",
        }}
      >
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 h-72 w-72 bg-linear-to-br from-orange-200 to-amber-200 opacity-50 grade-animate-blob grade-animate-float" />

          <div
            className="absolute -right-16 top-1/3 h-64 w-64 bg-linear-to-br from-pink-200 to-rose-200 opacity-40 grade-animate-blob grade-animate-float-reverse"
            style={{ animationDelay: "2s" }}
          />

          <div
            className="absolute -bottom-20 left-1/4 h-80 w-80 bg-linear-to-br from-violet-200 to-purple-200 opacity-40 grade-animate-blob"
            style={{ animationDelay: "4s" }}
          />

          <div
            className="absolute right-1/3 top-10 h-48 w-48 bg-linear-to-br from-sky-200 to-cyan-200 opacity-40 grade-animate-morph grade-animate-float"
            style={{ animationDelay: "1s" }}
          />

          <div
            className="absolute bottom-1/4 right-10 h-56 w-56 bg-linear-to-br from-emerald-200 to-teal-100 opacity-30 grade-animate-blob grade-animate-float-reverse"
            style={{ animationDelay: "3s" }}
          />

          <div
            className="grade-particle h-2 w-2 rounded-full bg-orange-300 opacity-60 grade-animate-sparkle"
            style={{ top: "20%", left: "30%" }}
          />

          <div
            className="grade-particle h-1.5 w-1.5 rounded-full bg-pink-300 opacity-60 grade-animate-sparkle"
            style={{ top: "40%", right: "25%", animationDelay: "0.7s" }}
          />

          <div
            className="grade-particle h-2 w-2 rounded-full bg-violet-300 opacity-60 grade-animate-sparkle"
            style={{ bottom: "30%", left: "20%", animationDelay: "1.5s" }}
          />

          <div
            className="grade-particle h-1 w-1 rounded-full bg-amber-400 opacity-60 grade-animate-sparkle"
            style={{ top: "60%", right: "35%", animationDelay: "2s" }}
          />

          <div
            className="grade-particle h-1.5 w-1.5 rounded-full bg-rose-300 opacity-50 grade-animate-sparkle"
            style={{ top: "80%", left: "60%", animationDelay: "2.5s" }}
          />

          <div
            className="grade-particle h-2 w-2 rounded-full bg-sky-300 opacity-50 grade-animate-sparkle"
            style={{ top: "12%", right: "40%", animationDelay: "1s" }}
          />
        </div>

        <div className="relative z-10 flex min-h-screen items-start justify-center p-4 pt-12">
          <div className="w-full max-w-2xl">
            <div className="mb-8 text-center grade-animate-bounce-in">
              <h1
                className="mt-2 bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-4xl font-bold text-transparent grade-animate-gradient"
                style={{ backgroundSize: "200% auto" }}
              >
                Student Grade Evaluation
              </h1>

              <p className="mt-2 text-xl text-amber-600">
                Enter a Student Name and Score to determine their remark.
              </p>
            </div>

            <div className="grade-glass rounded-3xl border border-white/60 px-10 py-14 shadow-xl shadow-orange-100/50 grade-card-hover grade-animate-slide-up">
              <form
                onSubmit={evaluateGrade}
                className="space-y-5"
                noValidate
              >
                <div>
                  <label className="mb-2 ml-1 block text-sm font-semibold text-amber-700">
                    Student Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter Student Name"
                    className="grade-input-focus-effect w-full rounded-2xl border-2 border-orange-100 bg-white/80 px-5 py-3.5 text-sm font-medium text-amber-800 placeholder-amber-300 outline-none transition-all duration-300 hover:border-orange-200 focus:border-orange-400"
                  />
                </div>

                <div>
                  <label className="mb-2 ml-1 block text-sm font-semibold text-amber-700">
                    Student Score
                  </label>

                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={score}
                    onChange={(event) => setScore(event.target.value)}
                    placeholder="Enter Student Score from 0 to 100"
                    className="grade-input-focus-effect w-full rounded-2xl border-2 border-orange-100 bg-white/80 px-5 py-3.5 text-sm font-medium text-amber-800 placeholder-amber-300 outline-none transition-all duration-300 hover:border-orange-200 focus:border-orange-400"
                  />
                </div>

                <button
                  type="submit"
                  className="grade-btn-shimmer flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-orange-400 via-amber-400 to-yellow-400 py-4 text-sm font-bold tracking-wide text-white shadow-lg shadow-orange-200 grade-animate-gradient transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-300 active:translate-y-0"
                >
                  <span>Evaluate Student Grade</span>

                  <svg
                    className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setName("");
                    setScore("");
                    setResult("");
                  }}
                  className="grade-btn-shimmer flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-red-400 via-amber-400 to-red-400 py-4 text-sm font-bold tracking-wide text-white shadow-lg shadow-red-200 grade-animate-gradient transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-300 active:translate-y-0"
                >
                  <span>Clear</span>

                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  />
                </button>
              </form>

              {result && (
                <div
                  key={result}
                  className={`grade-glass grade-animate-pop-in mt-5 rounded-2xl border p-6 text-center shadow-lg ${
                    isError
                      ? "border-rose-100 shadow-rose-100/50"
                      : "border-orange-100 shadow-orange-100/50"
                  }`}
                >
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.18em] ${
                      isError ? "text-rose-500" : "text-orange-500"
                    }`}
                  >
                    Remarks
                  </p>

                  <p
                    className={`mt-2 text-2xl font-bold ${
                      isError ? "text-rose-600" : "text-amber-800"
                    }`}
                  >
                    {isError
                      ? result
                      : `The grade of this student is ${result}.`}
                  </p>
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