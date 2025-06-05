import Image from "next/image"

function Loader({ size = 20 }: { size?: number }) {
  return (
    <Image src="/icons/loading.svg" alt="loader" width={size} height={size} />
  )
}

export default Loader
