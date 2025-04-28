function Mission() {
  return (
    <div className="flex items-center justify-between gap-32 bg-white px-40 pb-20 pt-[100px]">
      <div className="w-[55%] space-y-4">
        <h2 className="text-display-md font-medium tracking-[-0.025rem] text-black">
          Our Mission
        </h2>
        <p className="text-md tracking-[0.005rem] text-neutral-500">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor.
        </p>
        <p className="cursor-pointer text-sm font-medium text-primary hover:underline">
          Learn More
        </p>
      </div>

      <div className="w-[45%] space-y-6">
        <div className="flex items-center justify-between rounded-2xl border border-primary-200 p-8">
          <p className="text-2xl font-medium tracking-[-0.015rem] text-black">
            1 millions
          </p>
          <p className="text-md font-normal tracking-[-0.005rem] text-neutral-500">
            Average daily volume
          </p>
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-primary-200 p-8">
          <p className="text-2xl font-medium tracking-[-0.015rem] text-black">
            300k+
          </p>
          <p className="text-md font-normal tracking-[-0.005rem] text-neutral-500">
            Transactions per second
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mission
