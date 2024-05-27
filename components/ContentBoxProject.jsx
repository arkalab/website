export default function ContentBoxProject({ logo, img, name, url, description }) {
  return (
    <div className="w-full">
      <div className="relative w-full mb-4">
        <img src={img} className="w-full rounded-lg" />
      </div>
    </div>
  )
}
