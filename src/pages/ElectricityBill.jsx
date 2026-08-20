import { useState } from "react";

function ElectricityBill() {
  const [consumption, setConsumption] = useState("");
  const [bill, setBill] = useState(null);

  const calculateBill = (event) => {
    event.preventDefault();
    const kwh = Number(consumption);

    if (consumption === "" || Number.isNaN(kwh) || kwh < 0) {
      setBill("Please enter a valid kWh consumption.");
      return;
    }

    let amount = 0;

    if (kwh <= 100) {
      amount = kwh * 10;
    } else if (kwh <= 200) {
      amount = 100 * 10 + (kwh - 100) * 12;
    } else if (kwh <= 300) {
      amount = 100 * 10 + 100 * 12 + (kwh - 200) * 15;
    } else {
      amount = 100 * 10 + 100 * 12 + 100 * 15 + (kwh - 300) * 18;
    }

    setBill(amount);
  };

  return (
    <main className="min-h-screen bg-[#f3f6fa] px-5 py-16 text-[#13213a]">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-[#dce2ea] bg-white p-7 shadow-[0_4px_15px_rgba(30,50,80,0.08)]">
          <div className="mb-7 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5038f5]">Activity 4</span>
            <h1 className="mt-2 text-2xl font-bold">Electricity Bill Calculator</h1>
            <p className="mt-2 text-sm text-[#60708b]">Calculate your bill based on electricity consumption.</p>
          </div>

          <form onSubmit={calculateBill}>
            <label className="mb-2 block text-sm font-semibold">Electricity Consumption</label>
            <div className="flex overflow-hidden rounded-lg border border-[#d6dce6] focus-within:border-[#5038f5] focus-within:ring-2 focus-within:ring-[#5038f5]/10">
              <input type="number" min="0" value={consumption} onChange={(event) => setConsumption(event.target.value)} placeholder="Enter kWh" className="w-full px-4 py-3 text-sm outline-none" />
              <span className="flex items-center bg-[#f4f6f9] px-4 text-sm text-[#60708b]">kWh</span>
            </div>

            <button type="submit" className="mt-5 w-full rounded-lg bg-[#5038f5] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#4330df]">Calculate Bill</button>
          </form>

          {bill !== null && <div className={`mt-6 rounded-xl p-5 text-center ${typeof bill === "string" ? "bg-[#fde8e8] text-[#c53030]" : "bg-[#e9e7ff] text-[#4030c8]"}`}>{typeof bill === "string" ? <p className="text-sm font-semibold">{bill}</p> : <><p className="text-xs font-semibold uppercase tracking-wider">Estimated Electricity Bill</p><p className="mt-1 text-2xl font-bold">₱{bill.toFixed(2)}</p></>}</div>}

          <div className="mt-6 rounded-xl bg-[#f7f8fb] p-4 text-xs text-[#60708b]">
            <p>0–100 kWh: ₱10/kWh</p>
            <p>101–200 kWh: ₱12/kWh</p>
            <p>201–300 kWh: ₱15/kWh</p>
            <p>Above 300 kWh: ₱18/kWh</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ElectricityBill;