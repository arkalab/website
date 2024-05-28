import React from 'react';

export default function ContentBoxText({ children }) {
  const countChildren = React.Children.count(children);
  const fontSize = countChildren > 1 ? "xl" : "2xl"; 

  return <div className={"text-" + fontSize + " space-y-6"}>{children}</div>;
}
