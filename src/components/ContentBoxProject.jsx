export default function ContentBoxProject({ logo, img, name, url, description }) {
  return (
    <div className="w-full mb-6 sm:mb-0">
      <div className="relative w-full mb-4">
        <img src={logo} alt="Project logo" className="absolute w-4/6 sm:w-1/2 left-5 bottom-5 z-10"/>
        <a href={url} target="_blank">
          <img src={img} alt="Visit the project page" className="w-full rounded-lg"/>
        </a>
      </div>
      <div>
        <p className="text-xl">
          <a href={url} target="_blank" className="font-extrabold underline">{name}</a> {description}
        </p>
      </div>
    </div>
  )
}
