import { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");

  const getStrength = () => {
    if (!password) {
      return { label: "Enter a password", className: "bg-[#eef1f6] text-[#60708b]" };
    }

    if (password.length < 6) {
      return { label: "Weak", className: "bg-[#fde8e8] text-[#c53030]" };
    }

    if (password.length < 10) {
      return { label: "Moderate", className: "bg-[#fff4d6] text-[#a66b00]" };
    }

    return { label: "Strong", className: "bg-[#e4f7ef] text-[#16865c]" };
  };

  const strength = getStrength();

  return (
    <main className="min-h-screen bg-[#f3f6fa] px-5 py-16 text-[#13213a]">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-[#dce2ea] bg-white p-7 shadow-[0_4px_15px_rgba(30,50,80,0.08)]">
          <div className="mb-7 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5038f5]">Activity 3</span>
            <h1 className="mt-2 text-2xl font-bold">Password Strength Checker</h1>
            <p className="mt-2 text-sm text-[#60708b]">Check your password strength in real time.</p>
          </div>

          <label className="mb-2 block text-sm font-semibold">Password</label>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" className="w-full rounded-lg border border-[#d6dce6] px-4 py-3 text-sm outline-none transition focus:border-[#5038f5] focus:ring-2 focus:ring-[#5038f5]/10" />

          <div className={`mt-5 rounded-xl p-5 text-center ${strength.className}`}>
            <p className="text-xs font-semibold uppercase tracking-wider">Password Strength</p>
            <p className="mt-1 text-xl font-bold">{strength.label}</p>
            {password && <p className="mt-1 text-xs">{password.length} characters</p>}
          </div>

          <div className="mt-5 space-y-2 text-xs text-[#60708b]">
            <p>• Less than 6 characters: Weak</p>
            <p>• 6 to 9 characters: Moderate</p>
            <p>• 10 or more characters: Strong</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PasswordChecker;