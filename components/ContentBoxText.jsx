export default function ContentBoxText({ children, fontSize }) {
  return <div className={"text-" + fontSize + " space-y-6"}>{children}</div>;
}
