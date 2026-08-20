import { useState } from "react";
import {
  Clock3,
  UserRound,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  RotateCcw,
} from "lucide-react";

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

  const getResultStyles = () => {
    if (result?.type === "success") {
      return {
        container: "border-[#b7e8c8] bg-[#f2fcf5]",
        icon: "bg-[#dcf7e5] text-[#3b9b61]",
        title: "text-[#328052]",
      };
    }

    if (result?.type === "warning") {
      return {
        container: "border-[#f7d7ad] bg-[#fff9f1]",
        icon: "bg-[#fff0d8] text-[#d98b35]",
        title: "text-[#b97328]",
      };
    }

    return {
      container: "border-[#f3caca] bg-[#fff6f6]",
      icon: "bg-[#fde3e3] text-[#d66a6a]",
      title: "text-[#bd5b5b]",
    };
  };

  const ResultIcon = () => {
    if (result?.type === "success") {
      return <CheckCircle2 className="h-5 w-5" />;
    }

    if (result?.type === "warning") {
      return <AlertTriangle className="h-5 w-5" />;
    }

    return <XCircle className="h-5 w-5" />;
  };

  return (
    <main className="min-h-screen bg-[#fffaf5] px-5 py-10 text-[#3b3029] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-[#f2e2d2] bg-white shadow-[0_15px_50px_rgba(190,130,70,0.08)]">
          <header className="border-b border-[#f3e6da] bg-[#fff7ed] px-6 py-6 sm:px-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffe9d1] text-[#e7a15b]">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#e29a52]">
                      Activity 5
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#f3c58f]" />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#b8a294]">
                      Attendance
                    </span>
                  </div>

                  <h1 className="mt-1 text-2xl font-black tracking-tight text-[#3b3029] sm:text-3xl">
                    Employee Attendance Checker
                  </h1>
                </div>
              </div>

              <div className="rounded-xl border border-[#f1dcc5] bg-white px-4 py-2.5">
                <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#b6a294]">
                  Status
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#8dcc9f]" />

                  <span className="text-[10px] font-bold text-[#6d625a]">
                    Ready
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-xs leading-5 text-[#8b7d72]">
              Enter an employee's decimal time-in value to determine
              whether the employee is On Time, Late, or Very Late.
            </p>
          </header>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <section className="border-b border-[#f1e6dc] p-6 lg:border-b-0 lg:border-r lg:p-8">
              <div className="mb-6">
                <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#e29a52]">
                  Employee Details
                </p>

                <h2 className="mt-1 text-xl font-black text-[#3b3029]">
                  Check time-in
                </h2>

                <p className="mt-1 text-[11px] text-[#98897d]">
                  Provide the required information below.
                </p>
              </div>

              <form onSubmit={checkAttendance} noValidate>
                <div>
                  <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-[#6e6057]">
                    Employee Name
                  </label>

                  <div className="relative">
                    <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#c2aa97]" />

                    <input
                      type="text"
                      value={employeeName}
                      onChange={(event) =>
                        setEmployeeName(event.target.value)
                      }
                      placeholder="Enter employee name"
                      className="w-full rounded-xl border border-[#e9ddd3] bg-[#fffdfb] py-3.5 pl-11 pr-4 text-sm font-medium text-[#3b3029] outline-none transition focus:border-[#e7aa69] focus:bg-white focus:ring-4 focus:ring-[#f6cfa5]/20"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-[#6e6057]">
                    Time In
                  </label>

                  <div className="relative">
                    <Clock3 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#e5a05a]" />

                    <input
                      type="number"
                      min="0"
                      max="24"
                      step="0.01"
                      value={timeIn}
                      onChange={(event) =>
                        setTimeIn(event.target.value)
                      }
                      placeholder="Example: 8.5 = 8:30 AM"
                      className="w-full rounded-xl border border-[#e9ddd3] bg-[#fffdfb] py-3.5 pl-11 pr-16 text-sm font-medium text-[#3b3029] outline-none transition focus:border-[#e7aa69] focus:bg-white focus:ring-4 focus:ring-[#f6cfa5]/20"
                    />

                    <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-[#fff0df] px-2 py-1 text-[8px] font-black uppercase tracking-wide text-[#d89048]">
                      Decimal
                    </span>
                  </div>

                  <p className="mt-2 text-[9px] text-[#aa9a8d]">
                    Enter a value between 0 and 24.
                  </p>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    type="submit"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#e9a15b] px-5 py-3.5 text-xs font-black text-white shadow-[0_7px_18px_rgba(225,153,80,0.18)] transition hover:-translate-y-0.5 hover:bg-[#df9148] hover:shadow-[0_10px_22px_rgba(225,153,80,0.23)]"
                  >
                    <Clock3 className="h-4 w-4" />
                    Check Attendance
                  </button>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex h-auto items-center justify-center rounded-xl border border-[#e9ddd3] bg-white px-5 text-[#9a897c] transition hover:border-[#efc99f] hover:bg-[#fffaf5] hover:text-[#d89048]"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
              </form>

              {result && (
                <div
                  className={`mt-6 rounded-2xl border p-4 ${getResultStyles().container}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${getResultStyles().icon}`}
                    >
                      <ResultIcon />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[8px] font-black uppercase tracking-[0.14em] text-[#9d8e82]">
                        Attendance Result
                      </p>

                      <p
                        className={`mt-0.5 text-lg font-black ${getResultStyles().title}`}
                      >
                        {result.label}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 border-t border-black/5 pt-3">
                    <p className="text-[11px] leading-5 text-[#806f63]">
                      {result.detail}
                    </p>
                  </div>
                </div>
              )}
            </section>

            <aside className="bg-[#fffdfb] p-6 sm:p-8">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#e29a52]">
                  Classification
                </p>

                <h2 className="mt-1 text-xl font-black text-[#3b3029]">
                  Attendance guide
                </h2>

                <p className="mt-1 text-[11px] leading-5 text-[#98897d]">
                  Use these ranges to understand the result.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <div className="relative overflow-hidden rounded-2xl border border-[#d8eddc] bg-[#f7fcf8] p-4">
                  <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-[#e7f6eb]" />

                  <div className="relative flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e5f6ea] text-[#65a879]">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-black text-[#4f8d61]">
                        On Time
                      </p>

                      <p className="mt-0.5 text-[10px] text-[#789682]">
                        8.0 or below
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-[#f1dfc9] bg-[#fffaf3] p-4">
                  <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-[#fff0dc]" />

                  <div className="relative flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0dc] text-[#d89a50]">
                      <AlertTriangle className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-black text-[#b97a34]">
                        Late
                      </p>

                      <p className="mt-0.5 text-[10px] text-[#9e876e]">
                        Above 8.0 to 9.0
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-[#f0d5d5] bg-[#fff8f8] p-4">
                  <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-[#fdeaea]" />

                  <div className="relative flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fdeaea] text-[#d47777]">
                      <XCircle className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-black text-[#b96161]">
                        Very Late
                      </p>

                      <p className="mt-0.5 text-[10px] text-[#a08484]">
                        Above 9.0
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-[#f1e2d4] bg-[#fff8ef] p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ffe9d1] text-[#e3a05c]">
                    <Clock3 className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[10px] font-black text-[#93663d]">
                      Decimal time example
                    </p>

                    <p className="mt-1 text-[9px] leading-5 text-[#a58c78]">
                      8.5 represents 8:30 AM. Use decimal values when
                      entering the time-in.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <footer className="mt-6 flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e9a15b]" />

            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#aa9a8d]">
              React Activity Portal
            </p>
          </div>

          <p className="text-[9px] font-semibold text-[#b6a79c]">
            Activity 5 / 5
          </p>
        </footer>
      </div>
    </main>
  );
}

export default AttendanceChecker;