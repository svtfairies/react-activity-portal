import { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);

  const getStrength = () => {
    if (!password) {
      return {
        label: "Enter a password",
        className: "bg-[#eef1f6] text-[#60708b]",
      };
    }

    if (password.length < 6) {
      return {
        label: "Weak Password",
        className: "bg-[#fde8e8] text-[#c53030]",
        status: "Create a stronger password",
        statusClassName: "text-[#c53030]",
      };
    }

    if (password.length < 10) {
      return {
        label: "Medium Password",
        className: "bg-[#fff4d6] text-[#a66b00]",
        status: "Consider creating a longer password",
        statusClassName: "text-[#a66b00]",
      };
    }

    return {
      label: "Strong Password",
      className: "bg-[#e4f7ef] text-[#16865c]",
      status: "You can use this password",
      statusClassName: "text-[#16865c]",
    };
  };

  const handleSubmit = () => {
    const strength = getStrength();

    setResult({
      ...strength,
      length: password.length,
    });
  };

  const handleClear = () => {
    setPassword("");
    setResult(null);
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-[#f3f0ff] via-[#ede9fe] to-[#e0d7fb] px-10 py-20 text-[#13213a]">
      <div className="mx-auto flex max-w-xl rounded-xl bg-linear-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
        <div className="min-h-160 w-full rounded-2xl border border-[#dce2ea] bg-white px-12 pb-12 pt-16 shadow-[0_4px_15px_rgba(30,50,80,0.08)]">
          <div className="mb-7 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#5038f5]">
              Activity 3
            </span>

            <h1 className="mt-2 text-3xl font-bold">
              Password Strength Checker
            </h1>

            <p className="mt-2 text-lg text-[#60708b]">
              Your password strength will be classified as Weak, Medium, or
              Strong.
            </p>
          </div>

          <label className="mb-2 block text-xl font-semibold">
            My Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            className="w-full rounded-lg border border-[#d6dce6] px-4 py-3 text-sm outline-none transition focus:border-[#5038f5] focus:ring-2 focus:ring-[#5038f5]/10"
          />

          <div className="flex w-full flex-col items-center justify-center gap-5 p-5 sm:flex-row">
            <button
              type="button"
              onClick={handleSubmit}
              className="flex w-56 items-center justify-center rounded-lg bg-green-300 px-8 py-4 text-[20px] font-bold text-black shadow transition duration-100 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500/50"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="flex w-56 items-center justify-center rounded-lg border-2 border-green-200 px-8 py-4 text-[30px] font-bold shadow transition duration-100 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500/50"
            >
              Clear
            </button>
          </div>

          {result && (
            <>
              <div
                className={`mt-5 rounded-xl p-5 text-center ${result.className}`}
              >
                <p className="text-xs font-semibold uppercase tracking-wider">
                  Password Strength
                </p>

                <p className="mt-1 text-xl font-bold">
                  {result.label}
                </p>

                <p className="mt-1 text-xs">
                  {result.length} characters
                </p>
              </div>

              {result.status && (
                <div
                  className={`mt-5 text-base ${result.statusClassName}`}
                >
                  <p>
                    <span className="font-semibold">
                      Status: {result.status}
                    </span>
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default PasswordChecker;