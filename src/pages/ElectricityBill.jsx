import { useState } from "react";

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
      amount = 100 * 10 + 100 * 12 + 100 * 15 + (kwh - 300) * 18;
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

  return (
    <main className="min-h-screen bg-[#f3f6fa] px-5 py-16 text-[#13213a]">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-[#dce2ea] bg-white p-7 shadow-[0_4px_15px_rgba(30,50,80,0.08)]">
          <div className="mb-7 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5038f5]">
              Activity 4
            </span>
            <h1 className="mt-2 text-2xl font-bold">
              Electricity Bill Calculator
            </h1>
            <p className="mt-2 text-sm text-[#60708b]">
              Compute a bill from kWh consumption across tiered rates.
            </p>
          </div>

          <form onSubmit={calculateBill}>
            <label className="mb-2 block text-sm font-semibold">
              Customer Name
            </label>
            <input
              type="text"
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
              placeholder="Enter customer name"
              className="w-full rounded-lg border border-[#d6dce6] px-4 py-3 text-sm outline-none transition focus:border-[#5038f5] focus:ring-2 focus:ring-[#5038f5]/10"
            />

            <label className="mb-2 mt-5 block text-sm font-semibold">
              Consumption
            </label>
            <div className="flex overflow-hidden rounded-lg border border-[#d6dce6] focus-within:border-[#5038f5] focus-within:ring-2 focus-within:ring-[#5038f5]/10">
              <input
                type="number"
                min="0"
                value={consumption}
                onChange={(event) => setConsumption(event.target.value)}
                placeholder="Enter kWh"
                className="w-full px-4 py-3 text-sm outline-none"
              />
              <span className="flex items-center bg-[#f4f6f9] px-4 text-sm text-[#60708b]">
                kWh
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button
                type="submit"
                className="rounded-lg bg-[#5038f5] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#4330df]"
              >
                Calculate Bill
              </button>
              <button
                type="button"
                onClick={clearForm}
                className="rounded-lg border border-[#d6dce6] bg-white px-4 py-3 text-sm font-bold text-[#60708b] transition hover:bg-[#f4f6f9]"
              >
                Clear
              </button>
            </div>
          </form>

          {result && (
            <div
              className={`mt-6 rounded-xl p-5 text-center ${
                result.type === "error"
                  ? "bg-[#fde8e8] text-[#c53030]"
                  : "bg-[#e9e7ff] text-[#4030c8]"
              }`}
            >
              {result.type === "error" ? (
                <p className="text-sm font-semibold">{result.message}</p>
              ) : (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wider">
                    Electricity Bill
                  </p>
                  <p className="mt-1 text-xl font-bold">{result.customerName}</p>
                  <p className="mt-1 text-sm">
                    {result.consumption} kWh, {result.rateLabel}
                  </p>
                  <p className="mt-2 text-2xl font-bold">
                    PHP {result.amount.toFixed(2)}
                  </p>
                </>
              )}
            </div>
          )}

          <div className="mt-6 rounded-xl bg-[#f7f8fb] p-4 text-xs text-[#60708b]">
            <p>0 to 100 kWh: PHP 10/kWh</p>
            <p>101 to 200 kWh: PHP 12/kWh</p>
            <p>201 to 300 kWh: PHP 15/kWh</p>
            <p>Above 300 kWh: PHP 18/kWh</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ElectricityBill;
