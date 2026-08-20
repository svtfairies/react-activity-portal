import { useState } from "react";
import { UserRound, LockKeyhole } from "lucide-react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const cleanUsername = username.trim();
    const cleanPassword = password.trim();

    if (!cleanUsername || !cleanPassword) {
      setLoggedIn(false);
      setMessage("Please enter your username and password.");
      return;
    }

    if (cleanUsername.length < 3) {
      setLoggedIn(false);
      setMessage("Username must be at least 3 characters.");
      return;
    }

    if (cleanPassword.length < 6) {
      setLoggedIn(false);
      setMessage("Password must be at least 6 characters.");
      return;
    }

    setLoggedIn(true);
    setMessage("Login successful!");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    setMessage("");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fff7f9] px-5 py-12 text-[#3a1825] sm:py-16">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#8b1e3f]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-105 w-105 rounded-full bg-[#e85d8e]/12 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b83260]/5 blur-3xl" />

      <div className="relative w-full max-w-245">
        <div className="absolute -inset-3 rounded-3xl bg-linear-to-r from-[#8b1e3f]/10 via-transparent to-[#e85d8e]/10 blur-xl" />

        <div className="relative overflow-hidden rounded-3xl border border-[#f3dce4] bg-white shadow-[0_25px_70px_rgba(104,25,52,0.12)]">
          <div className="grid md:grid-cols-[0.9fr_1.1fr]">
            <section className="relative hidden min-h-142.5 overflow-hidden bg-linear-to-br from-[#a52b52] via-[#8b1e3f] to-[#64152e] p-10 text-white md:flex md:flex-col md:justify-between">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-55 border-white/5" />
              <div className="pointer-events-none absolute -bottom-32 -left-28 h-80 w-80 rounded-full border-60 border-white/5" />
              <div className="pointer-events-none absolute right-16 top-32 h-20 w-20 rounded-full bg-[#ff9fbd]/10 blur-xl" />
              <div className="pointer-events-none absolute bottom-20 right-20 h-32 w-32 rounded-full bg-[#e85d8e]/10 blur-2xl" />

              <div className="relative">
                <div className="mb-12 flex items-center justify-between">
                  <div className="relative flex h-14 w-14 items-center justify-center">
                    <div className="relative flex h-14 w-11 items-center justify-center rounded-b-[14px] rounded-t-[10px] bg-linear-to-b from-[#c9436d] to-[#7a1736] shadow-[0_9px_20px_rgba(122,23,54,0.28)]">
                      <div className="absolute left-0 top-0 h-1.5 w-full rounded-t-[10px] bg-[#f59ab7]/70" />
                      <span className="relative text-lg font-black text-white">
                        R
                      </span>
                      <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45 bg-[#7a1736]" />
                    </div>
                  </div>
                </div>

                <div className="mb-6 flex items-end gap-4">
                  <span className="text-5xl font-black leading-none text-[#f06b96]/25">
                    01
                  </span>

                  <div className="pb-1">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffd4df]/65">
                      Authentication
                    </span>

                    <div className="mt-2 h-1 w-10 rounded-full bg-linear-to-r from-[#f06b96] to-[#c9436d]" />
                  </div>
                </div>

                <h1 className="max-w-75 text-4xl font-black leading-[0.95] tracking-tight lg:text-[46px]">
                  <span className="block text-white">
                    Login
                  </span>

                  <span className="-mt-1 ml-5 block text-[#f06b96]">
                    Authentication
                  </span>
                </h1>

                <p className="mt-6 max-w-75 text-sm leading-7 text-white/70">
                  Practice React state management by building a simple login authentication flow.
                </p>

                <div className="mt-9 max-w-75 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-[0_10px_25px_rgba(60,10,30,0.12)] backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f06b96]/15 text-[#ffb3c9]">
                      <span className="text-lg">
                        ✓
                      </span>
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white">
                        Secure Access
                      </p>

                      <p className="mt-1 text-[10px] leading-5 text-white/50">
                        Enter valid information to continue.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="h-1.5 flex-1 rounded-full bg-[#f06b96]" />
                    <span className="h-1.5 w-8 rounded-full bg-white/10" />
                    <span className="h-1.5 w-4 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="mb-5 h-px w-full bg-white/10" />

                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/45">
                    React Activity Portal
                  </p>

                  <span className="text-xs text-white/40">
                    01 / 05
                  </span>
                </div>
              </div>
            </section>

            <section className="p-7 sm:p-10 lg:p-12">
              {loggedIn ? (
                <div className="mx-auto max-w-105">
                  <div className="relative overflow-hidden rounded-3xl border border-[#efd0dc] bg-linear-to-br from-[#fff8fa] via-[#fff3f6] to-[#fde8ef] p-7 sm:p-8">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#e85d8e]/15 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-20 -left-16 h-36 w-36 rounded-full bg-[#8b1e3f]/10 blur-3xl" />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9b2850]">
                          Login Status
                        </span>

                        <span className="flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1.5 text-[9px] font-bold text-[#16865c] shadow-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#2fa36b]" />
                          Active
                        </span>
                      </div>

                      <div className="mt-7 flex flex-col items-center text-center">
                        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-[#a52b52] to-[#7a1736] shadow-[0_12px_30px_rgba(139,30,63,0.25)]">
                          <div className="absolute inset-2 rounded-full border border-white/20" />

                          <svg viewBox="0 0 24 24" className="h-11 w-11 fill-none stroke-white" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />
                          </svg>

                          <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#fff3f6] bg-[#2fa36b]">
                            <span className="h-2 w-2 rounded-full bg-white" />
                          </span>
                        </div>

                        <span className="mt-6 rounded-full bg-[#f9dce6] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#9b2850]">
                          Successfully Logged In
                        </span>

                        <h2 className="mt-4 text-2xl font-black tracking-tight text-[#3a1825]">
                          Welcome, {username}!
                        </h2>

                        <p className="mx-auto mt-2 max-w-75 text-sm leading-6 text-[#806572]">
                          Your credentials have been verified successfully. You can now continue with the activity.
                        </p>
                      </div>

                      <div className="mt-7 grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-white/80 bg-white/65 p-3">
                          <p className="text-[9px] font-bold uppercase tracking-wide text-[#aa8d98]">
                            Account
                          </p>

                          <p className="mt-1 truncate text-xs font-bold text-[#694653]">
                            {username}
                          </p>
                        </div>

                        <div className="rounded-xl border border-white/80 bg-white/65 p-3">
                          <p className="text-[9px] font-bold uppercase tracking-wide text-[#aa8d98]">
                            Status
                          </p>

                          <p className="mt-1 flex items-center gap-1.5 text-xs font-bold text-[#16865c]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#2fa36b]" />
                            Verified
                          </p>
                        </div>
                      </div>

                      <button type="button" onClick={handleLogout} className="group relative mt-5 w-full overflow-hidden rounded-xl bg-linear-to-r from-[#a52b52] via-[#8b1e3f] to-[#741631] px-4 py-3.5 text-sm font-extrabold text-white shadow-[0_9px_22px_rgba(139,30,63,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_13px_28px_rgba(139,30,63,0.32)]">
                        <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                        <span className="relative flex items-center justify-center gap-2">
                          Logout
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mx-auto max-w-105">
                  <div className="mb-8">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#fde8ef] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8b1e3f]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#c43d68]" />
                        Student Login
                      </span>
                    </div>

                    <h2 className="text-2xl font-black tracking-tight text-[#3a1825] sm:text-3xl">
                      Welcome back
                    </h2>

                    <p className="mt-2 max-w-75 text-sm leading-6 text-[#806572]">
                      Enter your credentials below to complete the authentication activity.
                    </p>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.08em] text-[#694653]">
                        Username
                      </label>

                      <div className="relative">
                        <span className="pointer-events-none absolute left-4 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg bg-[#fde8ef] text-[#8b1e3f]">
                          <UserRound className="h-4 w-4" strokeWidth={2} />
                        </span>

                        <input type="text" value={username} onChange={(event) => { setUsername(event.target.value); setMessage(""); }} placeholder="Enter your username" className="w-full rounded-xl border border-[#ead7de] bg-[#fffafb] py-3.5 pl-14 pr-4 text-sm font-medium text-[#3a1825] outline-none transition duration-200 placeholder:text-[#b39aa4] focus:border-[#b83260] focus:bg-white focus:ring-4 focus:ring-[#b83260]/10" />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.08em] text-[#694653]">
                        Password
                      </label>

                      <div className="relative">
                        <span className="pointer-events-none absolute left-4 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg bg-[#fde8ef] text-[#8b1e3f]">
                          <LockKeyhole className="h-4 w-4" strokeWidth={2.2} />
                        </span>

                        <input type="password" value={password} onChange={(event) => { setPassword(event.target.value); setMessage(""); }} placeholder="Enter your password" className="w-full rounded-xl border border-[#ead7de] bg-[#fffafb] py-3.5 pl-14 pr-4 text-sm font-medium text-[#3a1825] outline-none transition duration-200 placeholder:text-[#b39aa4] focus:border-[#b83260] focus:bg-white focus:ring-4 focus:ring-[#b83260]/10" />
                      </div>
                    </div>

                    {message && (
                      <div className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-semibold ${message === "Login successful!" ? "border-[#efd0dc] bg-[#fff5f8] text-[#9b2850]" : "border-[#f1cfd8] bg-[#fff3f5] text-[#b4234d]"}`}>
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-current/10 text-xs font-black">
                          {message === "Login successful!" ? "✓" : "!"}
                        </span>

                        <span>
                          {message}
                        </span>
                      </div>
                    )}

                    <button type="submit" className="group relative mt-2 w-full overflow-hidden rounded-xl bg-linear-to-r from-[#a52b52] via-[#8b1e3f] to-[#741631] px-4 py-3.5 text-sm font-extrabold text-white shadow-[0_9px_22px_rgba(139,30,63,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_13px_28px_rgba(139,30,63,0.32)]">
                      <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                      <span className="relative flex items-center justify-center gap-2">
                        Login
                      </span>
                    </button>
                  </form>
                </div>
              )}
              <div className="mt-8 border-t border-[#f0dfe5] pt-5">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#a06f7f]">
                    Demo Credentials
                  </p>

                  <span className="rounded-full bg-[#fde8ef] px-2.5 py-1 text-[9px] font-bold text-[#8b1e3f]">
                    For Testing
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-[#ead7de] bg-[#fffafb] px-3.5 py-3">
                    <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#b18c99]">
                      Username
                    </p>

                    <p className="mt-1 text-xs font-bold text-[#694653]">
                      student
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#ead7de] bg-[#fffafb] px-3.5 py-3">
                    <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#b18c99]">
                      Password
                    </p>

                    <p className="mt-1 text-xs font-bold text-[#694653]">
                      react123
                    </p>
                  </div>
                </div>
              </div>
            </section>    
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;