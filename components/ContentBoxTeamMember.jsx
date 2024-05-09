import Image from "next/image"

export default function ContentBoxPhoto({ img, name, jobTitle }) {
  return (
    <div>
      <div className="mb-4">
        <img className="rounded-lg grayscale" src={img} />
      </div>
      <div className="text-center">
        <p className="font-extrabold">{name}</p>
        <p className="italic">{jobTitle}</p>
      </div>
    </div>
  )
}
