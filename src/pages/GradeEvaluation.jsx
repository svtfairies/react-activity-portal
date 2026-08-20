import { useState } from "react";

function GradeEvaluation() {
  const [score, setScore] = useState("");
  const [result, setResult] = useState("");

  const evaluateGrade = (event) => {
    event.preventDefault();
    const value = Number(score);

    if (score === "" || Number.isNaN(value) || value < 0 || value > 100) {
      setResult("Please enter a valid score from 0 to 100.");
      return;
    }

    if (value >= 90) {
      setResult("Excellent");
    } else if (value >= 80) {
      setResult("Very Good");
    } else if (value >= 75) {
      setResult("Passed");
    } else {
      setResult("Failed");
    }
  };

  return (
    <main className="min-h-screen bg-[#f3f6fa] px-5 py-16 text-[#13213a]">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-[#dce2ea] bg-white p-7 shadow-[0_4px_15px_rgba(30,50,80,0.08)]">
          <div className="mb-7 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5038f5]">Activity 2</span>
            <h1 className="mt-2 text-2xl font-bold">Student Grade Evaluation</h1>
            <p className="mt-2 text-sm text-[#60708b]">Enter a score to determine the student's remark.</p>
          </div>

          <form onSubmit={evaluateGrade}>
            <label className="mb-2 block text-sm font-semibold">Student Score</label>
            <input type="number" min="0" max="100" value={score} onChange={(event) => setScore(event.target.value)} placeholder="Enter score from 0 to 100" className="w-full rounded-lg border border-[#d6dce6] px-4 py-3 text-sm outline-none transition focus:border-[#5038f5] focus:ring-2 focus:ring-[#5038f5]/10" />

            <button type="submit" className="mt-5 w-full rounded-lg bg-[#5038f5] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#4330df]">Evaluate Grade</button>
          </form>

          {result && <div className={`mt-6 rounded-xl p-5 text-center ${result.includes("valid") ? "bg-[#fde8e8] text-[#c53030]" : "bg-[#e9e7ff] text-[#4030c8]"}`}><p className="text-sm font-semibold">Result</p><p className="mt-1 text-xl font-bold">{result}</p></div>}
        </div>
      </div>
    </main>
  );
}

export default GradeEvaluation;