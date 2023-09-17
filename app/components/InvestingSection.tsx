export default function InvestingSection() {
  return (
    <section className="relative h-screen bg-cash-app-green bg-investing-pattern bg-cover bg-no-repeat bg-bottom overflow-hidden">
      <h1 className="mt-10 text-center text-white text-6xl tracking-wide leading-relaxed">
        Investing
      </h1>
      <div className="flex justify-between mt-10 mx-10 gap-20">
        <div className="basis-1/4">
          <h2 className="text-2xl tracking-normal leading-relaxed">Stocks</h2>
          <p className="font-sans text-lg">
            Whether you’re an expert or just getting <br />
            started, Cash App is the fastest and most <br />
            accessible way to invest in stocks. Start now <br />
            with as little as $1.
          </p>
        </div>
        <div className="basis-1/4">
          <h2 className="text-2xl tracking-normal leading-relaxed">Bitcoin</h2>
          <p className="font-sans text-lg">
            Cash App is the fastest way to convert <br />
            dollars to bitcoin. From your home screen, <br />
            six taps are all it takes to stack sats, buy an <br />
            entire bitcoin, or just see what it’s all about.
          </p>
        </div>
      </div>
    </section>
  )
}
