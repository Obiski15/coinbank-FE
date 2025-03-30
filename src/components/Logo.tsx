import Image from "next/image"

export default function Logo() {
  return (
    <div className="space-x-2">
      <Image
        src="/icons/icon.svg"
        className="inline-block"
        alt="icon"
        width={32}
        height={24}
      />
      <Image
        src="/icons/logo-text.svg"
        alt="logo text"
        className="inline-block"
        width={116}
        height={20}
      />
    </div>
  )
}
