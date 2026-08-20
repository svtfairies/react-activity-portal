import { useState } from "react";

function AttendanceChecker() {
  const [employeeName, setEmployeeName] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [result, setResult] = useState(null);

  const checkAttendance = (event) => {
    event.preventDefault();

    const arrivalTime = Number(timeIn);

    if (employeeName.trim() === "" || timeIn === "") {
      setResult({
        label: "Missing Details",
        type: "error",
        detail: "Please enter the employee name and time in.",
      });
      return;
    }

    if (Number.isNaN(arrivalTime) || arrivalTime < 0 || arrivalTime > 24) {
      setResult({
        label: "Invalid Time",
        type: "error",
        detail: "Please enter a valid decimal time from 0 to 24.",
      });
      return;
    }

    if (arrivalTime <= 8) {
      setResult({
        label: "On Time",
        type: "success",
        detail: `${employeeName.trim()} arrived on time.`,
      });
    } else if (arrivalTime <= 9) {
      setResult({
        label: "Late",
        type: "warning",
        detail: `${employeeName.trim()} arrived late.`,
      });
    } else {
      setResult({
        label: "Very Late",
        type: "error",
        detail: `${employeeName.trim()} is very late. Report to your supervisor.`,
      });
    }
  };

  const resetForm = () => {
    setEmployeeName("");
    setTimeIn("");
    setResult(null);
  };

  return (
    <main className="min-h-screen bg-[#f3f6fa] px-5 py-16 text-[#13213a]">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-[#dce2ea] bg-white p-7 shadow-[0_4px_15px_rgba(30,50,80,0.08)]">
          <div className="mb-7 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5038f5]">
              Activity 5
            </span>
            <h1 className="mt-2 text-2xl font-bold">
              Employee Attendance Checker
            </h1>
            <p className="mt-2 text-sm text-[#60708b]">
              Classify a decimal time-in value as On Time, Late, or Very Late.
            </p>
          </div>

          <form onSubmit={checkAttendance}>
            <label className="mb-2 block text-sm font-semibold">
              Employee Name
            </label>
            <input
              type="text"
              value={employeeName}
              onChange={(event) => setEmployeeName(event.target.value)}
              placeholder="Enter employee name"
              className="w-full rounded-lg border border-[#d6dce6] px-4 py-3 text-sm outline-none transition focus:border-[#5038f5] focus:ring-2 focus:ring-[#5038f5]/10"
            />

            <label className="mb-2 mt-5 block text-sm font-semibold">Time In</label>
            <input
              type="number"
              min="0"
              max="24"
              step="0.01"
              value={timeIn}
              onChange={(event) => setTimeIn(event.target.value)}
              placeholder="Example: 8.5 = 8:30 AM"
              className="w-full rounded-lg border border-[#d6dce6] px-4 py-3 text-sm outline-none transition focus:border-[#5038f5] focus:ring-2 focus:ring-[#5038f5]/10"
            />

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button
                type="submit"
                className="rounded-lg bg-[#5038f5] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#4330df]"
              >
                Check Attendance
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg border border-[#d6dce6] bg-white px-4 py-3 text-sm font-bold text-[#60708b] transition hover:bg-[#f4f6f9]"
              >
                Reset
              </button>
            </div>
          </form>

          {result && (
            <div
              className={`mt-6 rounded-xl p-5 text-center ${
                result.type === "success"
                  ? "bg-[#e4f7ef] text-[#16865c]"
                  : result.type === "warning"
                    ? "bg-[#fff4d6] text-[#a66b00]"
                    : "bg-[#fde8e8] text-[#c53030]"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-wider">
                Attendance Status
              </p>
              <p className="mt-1 text-xl font-bold">{result.label}</p>
              <p className="mt-1 text-sm">{result.detail}</p>
            </div>
          )}

          <div className="mt-6 rounded-xl bg-[#f7f8fb] p-4 text-xs text-[#60708b]">
            <p>8.0 or below: On Time</p>
            <p>Above 8.0 to 9.0: Late</p>
            <p>Above 9.0: Very Late</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AttendanceChecker;
