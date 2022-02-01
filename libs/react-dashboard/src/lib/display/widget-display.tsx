import React from "react";

export function WidgetDisplay({
  children
}: React.PropsWithChildren<WidgetDisplayProps>) {
  return <div>{children}</div>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WidgetDisplayProps {}
