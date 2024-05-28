export default function ContentBoxProject({ logo, img, name, url, description }) {
  return (
    <div className="w-full">
      <div className="relative w-full mb-4">
        <img src={logo} className="absolute left-5 bottom-5 z-10"/>
        <img src={img} className="w-full rounded-lg" />
      </div>
      <div>
        <p className="text-xl">
          <a href={url} target="_blank" className="font-extrabold underline">{name}</a> {description}
        </p>
      </div>
    </div>
  )
}
