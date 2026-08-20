import { useState } from "react";

function AttendanceChecker() {
  const [timeIn, setTimeIn] = useState("");
  const [result, setResult] = useState(null);

  const checkAttendance = (event) => {
    event.preventDefault();

    if (!timeIn) {
      setResult({ label: "Please enter a time-in.", type: "error" });
      return;
    }

    const [hours, minutes] = timeIn.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;
    const onTime = 8 * 60;
    const late = 8 * 60 + 30;

    if (totalMinutes <= onTime) {
      setResult({ label: "On Time", type: "success", detail: "The employee arrived on time." });
    } else if (totalMinutes <= late) {
      setResult({ label: "Late", type: "warning", detail: "The employee arrived late." });
    } else {
      setResult({ label: "Very Late", type: "error", detail: "The employee arrived very late." });
    }
  };

  return (
    <main className="min-h-screen bg-[#f3f6fa] px-5 py-16 text-[#13213a]">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-[#dce2ea] bg-white p-7 shadow-[0_4px_15px_rgba(30,50,80,0.08)]">
          <div className="mb-7 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5038f5]">Activity 5</span>
            <h1 className="mt-2 text-2xl font-bold">Employee Attendance Checker</h1>
            <p className="mt-2 text-sm text-[#60708b]">Check an employee's arrival status.</p>
          </div>

          <form onSubmit={checkAttendance}>
            <label className="mb-2 block text-sm font-semibold">Time In</label>
            <input type="time" value={timeIn} onChange={(event) => setTimeIn(event.target.value)} className="w-full rounded-lg border border-[#d6dce6] px-4 py-3 text-sm outline-none transition focus:border-[#5038f5] focus:ring-2 focus:ring-[#5038f5]/10" />

            <button type="submit" className="mt-5 w-full rounded-lg bg-[#5038f5] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#4330df]">Check Attendance</button>
          </form>

          {result && <div className={`mt-6 rounded-xl p-5 text-center ${result.type === "success" ? "bg-[#e4f7ef] text-[#16865c]" : result.type === "warning" ? "bg-[#fff4d6] text-[#a66b00]" : "bg-[#fde8e8] text-[#c53030]"}`}><p className="text-xs font-semibold uppercase tracking-wider">Attendance Status</p><p className="mt-1 text-xl font-bold">{result.label}</p>{result.detail && <p className="mt-1 text-sm">{result.detail}</p>}</div>}

          <div className="mt-6 rounded-xl bg-[#f7f8fb] p-4 text-xs text-[#60708b]">
            <p>8:00 AM or earlier: On Time</p>
            <p>8:01 AM to 8:30 AM: Late</p>
            <p>After 8:30 AM: Very Late</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AttendanceChecker;