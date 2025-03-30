import Feature from "./Feature"

export default function Feature4() {
  return (
    <Feature className="pb-[100px] bg-home-feature-gradient-4">
      <div className="space-y-4 text-left">
        <h5 className="text-primary font-medium tracking-[0.035rem]">
          FEATURES
        </h5>
        <h3 className="text-black font-medium text-display-md tracking-tight">
          Seamless Trading
        </h3>

        <div className="flex text-justify justify-between items-center gap-16 text-neutral-500 font-normal text-base tracking-[0.005]">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor.s
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor.s
          </p>
        </div>
      </div>

      <div className="grid grid-cols-5 justify-between items-start gap-16">
        <div className="col-span-3 border-2">display chart</div>

        <div className="col-span-2 border-2 space-y-10">
          <div className="flex justify-between items-center gap-4 bg-black border-neutral-200 border rounded-2xl px-8 py-4">
            <div className="flex justify-between items-center gap-12">
              <div className="space-y-1">
                <p className="text-white font-medium text-sm">8888</p>
                <p className="text-neutral-400 font-normal text-xs tracking-[0.0375rem]">
                  Last price
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-white font-medium text-sm">8888.44</p>
                <p className="text-neutral-400 font-normal text-xs tracking-[0.0375rem]">
                  Volume (24h)
                </p>
              </div>
            </div>

            <div className="text-white">select</div>
          </div>
          <div></div>
        </div>
      </div>
    </Feature>
  )
}
