import { useState } from "react";
import {
  Calculator,
  Zap,
  UserRound,
  Receipt,
  RotateCcw,
  ArrowRight,
} from "lucide-react";

function ElectricityBill() {
  const [customerName, setCustomerName] = useState("");
  const [consumption, setConsumption] = useState("");
  const [result, setResult] = useState(null);

  const calculateBill = (event) => {
    event.preventDefault();

    const kwh = Number(consumption);

    if (customerName.trim() === "" || consumption === "") {
      setResult({
        type: "error",
        message: "Please enter the customer name and kWh consumption.",
      });
      return;
    }

    if (Number.isNaN(kwh) || kwh < 0) {
      setResult({
        type: "error",
        message: "Please enter a valid kWh consumption.",
      });
      return;
    }

    let amount;
    let rateLabel;

    if (kwh <= 100) {
      amount = kwh * 10;
      rateLabel = "0 to 100 kWh";
    } else if (kwh <= 200) {
      amount = 100 * 10 + (kwh - 100) * 12;
      rateLabel = "101 to 200 kWh";
    } else if (kwh <= 300) {
      amount = 100 * 10 + 100 * 12 + (kwh - 200) * 15;
      rateLabel = "201 to 300 kWh";
    } else {
      amount =
        100 * 10 +
        100 * 12 +
        100 * 15 +
        (kwh - 300) * 18;

      rateLabel = "Above 300 kWh";
    }

    setResult({
      type: "success",
      customerName: customerName.trim(),
      consumption: kwh,
      amount,
      rateLabel,
    });
  };

  const clearForm = () => {
    setCustomerName("");
    setConsumption("");
    setResult(null);
  };

  const rates = [
    {
      range: "0 - 100",
      amount: "₱10",
    },
    {
      range: "101 - 200",
      amount: "₱12",
    },
    {
      range: "201 - 300",
      amount: "₱15",
    },
    {
      range: "301+",
      amount: "₱18",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eef5ff] px-4 py-10 text-[#172b4d] sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-[#bfdbfe]/50 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#dbeafe]/70 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <header className="mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2563eb] text-white shadow-[0_8px_20px_rgba(37,99,235,0.22)]">
              <Zap className="h-5 w-5" fill="currentColor" />
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#2563eb]">
                Activity 4
              </p>

              <p className="text-xs font-semibold text-[#8a9ab0]">
                Computation Practice
              </p>
            </div>
          </div>
        </header>

        <section className="overflow-hidden rounded-4xl border border-white bg-white shadow-[0_25px_70px_rgba(37,99,235,0.10)]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative overflow-hidden bg-[#2563eb] p-7 text-white sm:p-10">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-55 border-white/5" />

              <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full border-60 border-white/5" />

              <div className="relative flex h-full flex-col">
                <div>
                  <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-blue-100">
                    Electricity
                  </span>

                  <h1 className="mt-7 text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl">
                    Bill
                    <span className="block text-blue-200">
                      Calculator
                    </span>
                  </h1>

                  <p className="mt-5 max-w-sm text-sm leading-6 text-blue-100/75">
                    Enter your electricity usage and calculate the bill
                    using the applicable consumption rate.
                  </p>
                </div>

                <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
                      <Calculator className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-bold">
                        Tiered Calculation
                      </p>

                      <p className="mt-1 text-[10px] text-blue-100/60">
                        Four consumption ranges
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-blue-100/60">
                        Lowest rate
                      </span>

                      <span className="font-bold">
                        ₱10 / kWh
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-1/4 rounded-full bg-white" />
                    </div>

                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-blue-100/60">
                        Highest rate
                      </span>

                      <span className="font-bold">
                        ₱18 / kWh
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-full rounded-full bg-blue-200" />
                    </div>
                  </div>
                </div>

                <div className="mt-auto hidden pt-10 sm:block">
                  <div className="h-px bg-white/10" />

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/40">
                      React Activity Portal
                    </span>

                    <span className="text-[10px] text-white/40">
                      04 / 05
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-10">
              <div className="mb-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2563eb]">
                  Calculate
                </p>

                <h2 className="mt-2 text-2xl font-black text-[#172b4d]">
                  Enter billing details
                </h2>

                <p className="mt-2 text-sm text-[#7b8799]">
                  Provide the customer name and total electricity
                  consumption.
                </p>
              </div>

              <form onSubmit={calculateBill} noValidate>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.08em] text-[#52627a]">
                    Customer Name
                  </label>

                  <div className="relative">
                    <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />

                    <input
                      type="text"
                      value={customerName}
                      onChange={(event) =>
                        setCustomerName(event.target.value)
                      }
                      placeholder="Enter customer name"
                      className="w-full rounded-2xl border border-[#dbe4ef] bg-[#f8fbff] py-4 pl-11 pr-4 text-sm font-medium text-[#172b4d] outline-none transition focus:border-[#2563eb] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/10"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.08em] text-[#52627a]">
                    Electricity Consumption
                  </label>

                  <div className="relative">
                    <Zap className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#2563eb]" />

                    <input
                      type="number"
                      min="0"
                      step="any"
                      value={consumption}
                      onChange={(event) =>
                        setConsumption(event.target.value)
                      }
                      placeholder="Enter consumption"
                      className="w-full rounded-2xl border border-[#dbe4ef] bg-[#f8fbff] py-4 pl-11 pr-20 text-sm font-medium text-[#172b4d] outline-none transition focus:border-[#2563eb] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/10"
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg bg-[#eaf2ff] px-2.5 py-1.5 text-[10px] font-black text-[#2563eb]">
                      kWh
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    type="submit"
                    className="group flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-4 text-sm font-black text-white shadow-[0_10px_25px_rgba(37,99,235,0.2)] transition hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_14px_30px_rgba(37,99,235,0.25)]"
                  >
                    Calculate Bill

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={clearForm}
                    className="flex items-center justify-center rounded-2xl border border-[#dbe4ef] bg-white px-5 text-[#64748b] transition hover:border-[#bfd1e5] hover:bg-[#f8fbff] hover:text-[#2563eb]"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
              </form>

              {result && (
                <div className="mt-7">
                  {result.type === "error" ? (
                    <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                      <p className="text-sm font-bold text-red-700">
                        Calculation Error
                      </p>

                      <p className="mt-1 text-xs text-red-600">
                        {result.message}
                      </p>
                    </div>
                  ) : (
                    <div className="overflow-hidden rounded-3xl bg-[#172b4d] text-white shadow-[0_15px_35px_rgba(23,43,77,0.18)]">
                      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563eb]">
                            <Receipt className="h-4 w-4" />
                          </div>

                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-blue-200">
                              Bill Result
                            </p>

                            <p className="text-sm font-bold">
                              {result.customerName}
                            </p>
                          </div>
                        </div>

                        <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[9px] font-bold text-emerald-300">
                          Calculated
                        </span>
                      </div>

                      <div className="p-5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                          Total Amount
                        </p>

                        <p className="mt-1 text-4xl font-black tracking-tight">
                          PHP {result.amount.toFixed(2)}
                        </p>

                        <div className="mt-5 grid grid-cols-2 gap-3">
                          <div className="rounded-2xl bg-white/5 p-3">
                            <p className="text-[9px] uppercase tracking-wide text-white/40">
                              Consumption
                            </p>

                            <p className="mt-1 text-sm font-bold">
                              {result.consumption} kWh
                            </p>
                          </div>

                          <div className="rounded-2xl bg-white/5 p-3">
                            <p className="text-[9px] uppercase tracking-wide text-white/40">
                              Rate Tier
                            </p>

                            <p className="mt-1 text-xs font-bold">
                              {result.rateLabel}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mt-7">
          <div className="overflow-hidden rounded-3xl border border-[#dbe4ef] bg-white shadow-[0_12px_35px_rgba(37,99,235,0.07)]">
            <div className="relative overflow-hidden bg-linear-to-r from-[#172b4d] via-[#1d4ed8] to-[#2563eb] px-6 py-5">
              <div className="pointer-events-none absolute -right-10 -top-16 h-36 w-36 rounded-full border-25 border-white/5" />

              <div className="pointer-events-none absolute -bottom-20 right-32 h-32 w-32 rounded-full bg-blue-300/10 blur-2xl" />

              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 text-blue-100">
                      <Zap className="h-3.5 w-3.5" fill="currentColor" />
                    </span>

                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-blue-200">
                      Reference
                    </p>
                  </div>

                  <h2 className="mt-2 text-lg font-black text-white">
                    Electricity rate tiers
                  </h2>

                  <p className="mt-1 text-[10px] text-blue-100/60">
                    Rates are applied according to total consumption.
                  </p>
                </div>

                <div className="hidden rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-right sm:block">
                  <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-blue-100/50">
                    Unit
                  </p>

                  <p className="mt-0.5 text-xs font-black text-white">
                    PHP / kWh
                  </p>
                </div>
              </div>
            </div>

            <div className="relative p-5 sm:p-6">
              <div className="pointer-events-none absolute left-8 top-10 hidden h-[calc(100%-80px)] w-px bg-[#dbeafe] lg:block" />

              <div className="grid gap-3 lg:grid-cols-4">
                {rates.map((rate, index) => (
                  <div
                    key={rate.range}
                    className="group relative overflow-hidden rounded-2xl border border-[#dce6f2] bg-[#fbfdff] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#93c5fd] hover:bg-[#f5f9ff] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)]"
                  >
                    <div className="absolute right-0 top-0 h-16 w-16 translate-x-7 -translate-y-7 rounded-full bg-[#eff6ff] transition-transform duration-300 group-hover:scale-150" />

                    <div className="relative flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563eb] text-[9px] font-black text-white shadow-[0_5px_12px_rgba(37,99,235,0.18)]">
                        0{index + 1}
                      </div>

                      <span className="rounded-full bg-[#eff6ff] px-2 py-1 text-[8px] font-bold uppercase tracking-wide text-[#2563eb]">
                        Tier
                      </span>
                    </div>

                    <div className="relative mt-5">
                      <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#94a3b8]">
                        Consumption
                      </p>

                      <p className="mt-1 text-sm font-extrabold text-[#334155]">
                        {rate.range}

                        <span className="ml-1 text-[9px] font-semibold text-[#94a3b8]">
                          kWh
                        </span>
                      </p>
                    </div>

                    <div className="relative mt-4 flex items-end justify-between border-t border-[#e7edf5] pt-3">
                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-widest text-[#94a3b8]">
                          Rate
                        </p>

                        <p className="mt-0.5 text-xl font-black text-[#2563eb]">
                          {rate.amount}
                        </p>
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eff6ff] text-[#93c5fd] transition-colors group-hover:bg-[#2563eb] group-hover:text-white">
                        <Zap className="h-3.5 w-3.5" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-[#e2eaf3] bg-[#f8fbff] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#dbeafe] text-[#2563eb]">
                    <Calculator className="h-3.5 w-3.5" />
                  </span>

                  <p className="text-[10px] font-semibold text-[#64748b]">
                    Higher consumption uses the corresponding tiered rate.
                  </p>
                </div>

                <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#2563eb]">
                  4 Rate Tiers
                </span>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-6 flex flex-col gap-2 px-1 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb]" />

            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#94a3b8]">
              React Activity Portal
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#dbe4ef]" />

            <p className="text-[9px] font-semibold text-[#a0aec0]">
              Activity 4 / 5
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default ElectricityBill;