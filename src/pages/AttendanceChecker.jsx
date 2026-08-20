import { useState } from "react";

function AttendanceChecker() {
  const [checkInTime, setCheckInTime] = useState("");
  const [result, setResult] = useState(null);

  const checkReservation = (event) => {
    event.preventDefault();

    if (!checkInTime) {
      setResult({ label: "Please enter the guest check-in time.", type: "error" });
      return;
    }

    const [hours, minutes] = checkInTime.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;
    const earlyCheckInStart = 12 * 60;
    const standardCheckIn = 14 * 60;
    const lateCheckIn = 22 * 60;

    if (totalMinutes < earlyCheckInStart) {
      setResult({
        label: "Too Early",
        type: "warning",
        detail: "The room may not be ready yet. Ask front desk for availability.",
      });
    } else if (totalMinutes < standardCheckIn) {
      setResult({
        label: "Early Check-In",
        type: "warning",
        detail: "Guest may check in early if a room is already available.",
      });
    } else if (totalMinutes <= lateCheckIn) {
      setResult({
        label: "Confirmed Check-In",
        type: "success",
        detail: "Guest can proceed with the hotel reservation check-in.",
      });
    } else {
      setResult({
        label: "Late Arrival",
        type: "error",
        detail: "Reservation should be verified before room assignment.",
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#f3f6fa] px-5 py-16 text-[#13213a]">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-[#dce2ea] bg-white p-7 shadow-[0_4px_15px_rgba(30,50,80,0.08)]">
          <div className="mb-7 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5038f5]">
              Activity 5
            </span>
            <h1 className="mt-2 text-2xl font-bold">Hotel Check-In Status</h1>
            <p className="mt-2 text-sm text-[#60708b]">
              Check the guest&apos;s reservation arrival status.
            </p>
          </div>

          <form onSubmit={checkReservation}>
            <label className="mb-2 block text-sm font-semibold">
              Guest Check-In Time
            </label>
            <input
              type="time"
              value={checkInTime}
              onChange={(event) => setCheckInTime(event.target.value)}
              className="w-full rounded-lg border border-[#d6dce6] px-4 py-3 text-sm outline-none transition focus:border-[#5038f5] focus:ring-2 focus:ring-[#5038f5]/10"
            />

            <button
              type="submit"
              className="mt-5 w-full rounded-lg bg-[#5038f5] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#4330df]"
            >
              Check Reservation
            </button>
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
                Reservation Status
              </p>
              <p className="mt-1 text-xl font-bold">{result.label}</p>
              {result.detail && <p className="mt-1 text-sm">{result.detail}</p>}
            </div>
          )}

          <div className="mt-6 rounded-xl bg-[#f7f8fb] p-4 text-xs text-[#60708b]">
            <p>Before 12:00 PM: Too Early</p>
            <p>12:00 PM to 1:59 PM: Early Check-In</p>
            <p>2:00 PM to 10:00 PM: Confirmed Check-In</p>
            <p>After 10:00 PM: Late Arrival</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AttendanceChecker;
