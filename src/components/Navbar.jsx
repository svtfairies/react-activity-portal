function Navbar({ activePage, onNavigate }) {
  const navigation = [
    { label: "Home", page: "home" },
    { label: "Activity 1", page: "login" },
    { label: "Activity 2", page: "grade" },
    { label: "Activity 3", page: "password" },
    { label: "Activity 4", page: "electricity" },
    { label: "Activity 5", page: "attendance" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent to-[#2f855a]/3" />

      <div className="relative mx-auto flex h-19 max-w-310 items-center justify-between px-5 sm:px-7 lg:px-8">
        <button type="button" onClick={() => onNavigate("home")} className="group flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[15px] bg-linear-to-br from-[#287548] via-[#2f855a] to-[#195c38] shadow-[0_8px_20px_rgba(40,117,72,0.2)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_26px_rgba(40,117,72,0.28)]">
            <span className="absolute -right-3 -top-3 h-8 w-8 rounded-full bg-[#68b684]/30 blur-[1px]" />
            <span className="absolute -bottom-4 -left-3 h-9 w-9 rounded-full bg-[#9de0b4]/15" />
            <span className="absolute inset-1 rounded-xl border border-white/15" />
            <span className="relative text-sm font-black tracking-tight text-white">
              R
            </span>
          </span>

          <span className="hidden items-center gap-2 sm:flex">
            <span className="text-[14px] font-black tracking-tight text-[#18352a] transition-colors duration-200 group-hover:text-[#287548]">
              React Activity Portal
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const isActive = activePage === item.page;

            return (
              <button key={item.page} type="button" onClick={() => onNavigate(item.page)} className={`relative rounded-xl px-4 py-2.5 text-[12px] font-semibold transition-all duration-300 lg:px-5 ${isActive ? "bg-[#e5f4e9] text-[#287548] shadow-[0_4px_12px_rgba(40,117,72,0.08)]" : "text-[#657b6d] hover:bg-[#f3faf5] hover:text-[#287548]"}`}>
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 h-1 w-5 -translate-x-1/2 rounded-full bg-[#3fa968]" />
                )}

                <span className="relative">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="md:hidden">
          <button type="button" onClick={() => onNavigate(activePage === "home" ? "login" : "home")} className="flex h-10 items-center gap-2 rounded-xl bg-[#287548] px-4 text-xs font-bold text-white shadow-[0_6px_15px_rgba(40,117,72,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#195c38]">
            <span>
              {activePage === "home" ? "Activities" : "Home"}
            </span>

            <span>
              {activePage === "home" ? "→" : "←"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;