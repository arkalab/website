export default function ContentBoxPartner({ img, url }) {
  return (
    <div className="w-full mb-4">
      <a href={url} target="_blank">
        <img src={img} className="w-full" />
      </a>
    </div>
  );
}
