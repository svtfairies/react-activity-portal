import { useState } from "react";

function ElectricityBill() {
  const [roomType, setRoomType] = useState("standard");
  const [nights, setNights] = useState("");
  const [guests, setGuests] = useState("");
  const [total, setTotal] = useState(null);

  const roomRates = {
    standard: { label: "Standard Room", rate: 2500 },
    deluxe: { label: "Deluxe Room", rate: 4200 },
    suite: { label: "Executive Suite", rate: 6800 },
  };

  const calculateReservation = (event) => {
    event.preventDefault();
    const numberOfNights = Number(nights);
    const numberOfGuests = Number(guests);

    if (
      nights === "" ||
      guests === "" ||
      Number.isNaN(numberOfNights) ||
      Number.isNaN(numberOfGuests) ||
      numberOfNights <= 0 ||
      numberOfGuests <= 0
    ) {
      setTotal("Please enter valid reservation details.");
      return;
    }

    const selectedRoom = roomRates[roomType];
    const extraGuestFee =
      numberOfGuests > 2 ? (numberOfGuests - 2) * 750 * numberOfNights : 0;
    const amount = selectedRoom.rate * numberOfNights + extraGuestFee;

    setTotal({
      amount,
      room: selectedRoom.label,
      nights: numberOfNights,
      guests: numberOfGuests,
      extraGuestFee,
    });
  };

  return (
    <main className="min-h-screen bg-[#f3f6fa] px-5 py-16 text-[#13213a]">
      <div className="mx-auto max-w-xl">
        <div className="rounded-2xl border border-[#dce2ea] bg-white p-7 shadow-[0_4px_15px_rgba(30,50,80,0.08)]">
          <div className="mb-7 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5038f5]">
              Activity 4
            </span>
            <h1 className="mt-2 text-2xl font-bold">Hotel Room Reservation</h1>
            <p className="mt-2 text-sm text-[#60708b]">
              Calculate the estimated cost of a hotel booking.
            </p>
          </div>

          <form onSubmit={calculateReservation} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold">Room Type</label>
              <select
                value={roomType}
                onChange={(event) => setRoomType(event.target.value)}
                className="w-full rounded-lg border border-[#d6dce6] px-4 py-3 text-sm outline-none transition focus:border-[#5038f5] focus:ring-2 focus:ring-[#5038f5]/10"
              >
                <option value="standard">Standard Room - PHP 2,500/night</option>
                <option value="deluxe">Deluxe Room - PHP 4,200/night</option>
                <option value="suite">Executive Suite - PHP 6,800/night</option>
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Number of Nights
                </label>
                <input
                  type="number"
                  min="1"
                  value={nights}
                  onChange={(event) => setNights(event.target.value)}
                  placeholder="Enter nights"
                  className="w-full rounded-lg border border-[#d6dce6] px-4 py-3 text-sm outline-none transition focus:border-[#5038f5] focus:ring-2 focus:ring-[#5038f5]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Number of Guests
                </label>
                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(event) => setGuests(event.target.value)}
                  placeholder="Enter guests"
                  className="w-full rounded-lg border border-[#d6dce6] px-4 py-3 text-sm outline-none transition focus:border-[#5038f5] focus:ring-2 focus:ring-[#5038f5]/10"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#5038f5] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#4330df]"
            >
              Calculate Reservation
            </button>
          </form>

          {total !== null && (
            <div
              className={`mt-6 rounded-xl p-5 text-center ${
                typeof total === "string"
                  ? "bg-[#fde8e8] text-[#c53030]"
                  : "bg-[#e9e7ff] text-[#4030c8]"
              }`}
            >
              {typeof total === "string" ? (
                <p className="text-sm font-semibold">{total}</p>
              ) : (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wider">
                    Estimated Reservation Total
                  </p>
                  <p className="mt-1 text-2xl font-bold">
                    PHP {total.amount.toLocaleString()}.00
                  </p>
                  <p className="mt-2 text-sm">
                    {total.room} for {total.nights} night
                    {total.nights > 1 ? "s" : ""}, {total.guests} guest
                    {total.guests > 1 ? "s" : ""}
                  </p>
                  {total.extraGuestFee > 0 && (
                    <p className="mt-1 text-xs">
                      Includes PHP {total.extraGuestFee.toLocaleString()}.00
                      extra guest fee.
                    </p>
                  )}
                </>
              )}
            </div>
          )}

          <div className="mt-6 rounded-xl bg-[#f7f8fb] p-4 text-xs text-[#60708b]">
            <p>Standard Room: PHP 2,500 per night</p>
            <p>Deluxe Room: PHP 4,200 per night</p>
            <p>Executive Suite: PHP 6,800 per night</p>
            <p>Extra guest fee after 2 guests: PHP 750 per guest/night</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ElectricityBill;
