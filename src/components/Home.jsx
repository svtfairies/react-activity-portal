function Home({ onNavigate }) {
  const activities = [
    { number: "01", title: "Login Authentication", description: "Validate a username and password while managing login and logout states.", page: "login" },
    { number: "02", title: "Student Grade Evaluation", description: "Enter a student's score and generate the appropriate grade remark.", page: "grade" },
    { number: "03", title: "Password Strength Checker", description: "Evaluate password length and receive instant strength feedback.", page: "password" },
    { number: "04", title: "Hotel Room Reservation", description: "Calculate a hotel booking total using room type, nights, and number of guests.", page: "electricity" },
    { number: "05", title: "Hotel Check-In Status", description: "Check a guest's arrival time and determine the reservation check-in status.", page: "attendance" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4faf6] text-[#18352a]">
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#2f855a]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#68b684]/10 blur-3xl" />

      <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-7 sm:pt-16 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">

            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-[#18352a] sm:text-5xl lg:text-6xl">
              Learn React
              <span className="block text-[#2f855a]">
                through practice.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#657b6d] sm:text-base">
              Explore five practical activities that let you work with state, events, validation, conditions, and calculations.
            </p>
          </div>

          <div className="hidden lg:block">
            <div className="relative h-28 w-44 overflow-hidden rounded-3xl bg-[#287548] p-5 text-white shadow-[0_14px_30px_rgba(40,117,72,0.16)]">
              <span className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#68b684]/25" />

              <span className="relative block text-3xl font-black">
                05
              </span>

              <span className="relative mt-1 block text-[9px] font-bold uppercase tracking-[0.16em] text-white/60">
                Activities
              </span>

              <span className="absolute bottom-5 right-5 h-2 w-2 rounded-full bg-[#9de0b4]" />
            </div>
          </div>
        </div>

        <div className="mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <article key={activity.page} className="group relative flex min-h-62 flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-[0_8px_28px_rgba(38,95,61,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(38,95,61,0.1)]">
              <div className="absolute right-0 top-0 h-28 w-28 translate-x-9 -translate-y-9 rounded-full bg-[#e1f2e6]/70 transition-transform duration-500 group-hover:scale-150" />

              <div className="relative flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e5f4e9] text-xs font-black text-[#287548]">
                  {activity.number}
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#9ab3a2]">
                  Activity
                </span>
              </div>

              <div className="relative mt-7">
                <h2 className="text-[17px] font-black tracking-tight text-[#18352a] transition-colors duration-200 group-hover:text-[#287548]">
                  {activity.title}
                </h2>

                <p className="mt-2 text-xs leading-6 text-[#657b6d]">
                  {activity.description}
                </p>
              </div>

              <div className="relative mt-auto pt-7">
                <button type="button" onClick={() => onNavigate(activity.page)} className="w-full rounded-xl border border-[#cfe4d5] bg-[#f8fcf9] px-4 py-3 text-xs font-bold text-[#287548] transition-all duration-200 hover:border-[#2f855a] hover:bg-[#e5f4e9] hover:shadow-[0_5px_14px_rgba(47,133,90,0.08)]">
                  Open Activity
                </button>
              </div>

              <span className="absolute bottom-0 left-6 h-1 w-0 rounded-full bg-[#3fa968] transition-all duration-300 group-hover:w-14" />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
