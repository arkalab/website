export default function ContentBoxTeamMember({ img, name, jobTitle, url }) {
  return (
    <div>
      <div className="mb-4">
        <img src={img} className="w-full rounded-lg" />
      </div>
      <div className="text-lg text-center">
        {url === "" ? (
          <p className="font-extrabold">{name}</p>
        ) : (
          <a href={url} target="_blank">
            <p className="font-extrabold">{name}</p>
          </a>
        )}
        <p>{jobTitle}</p>
      </div>
    </div>
  );
}
