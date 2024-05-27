export default function ContentBoxTeamMember({ img, name, jobTitle }) {
  return (
    <div>
      <div className="mb-4">
        <img className="w-full rounded-lg" src={img} />
      </div>
      <div className="text-center">
        <p className="font-extrabold">{name}</p>
        <p className="italic">{jobTitle}</p>
      </div>
    </div>
  )
}
