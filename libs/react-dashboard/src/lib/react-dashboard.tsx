import { ReactElement } from "react";
import { WidgetCreatorProps } from "./create/widget-creator";
import { WidgetDisplay, WidgetDisplayProps } from "./display/widget-display";

export function ReactDashboard({ children, ...props }: ReactDashboardProps) {
  return (
    <>
      <WidgetDisplay {...props} />
      {children}
    </>
  );
}

interface ReactDashboardProps extends WidgetDisplayProps {
  children?: ReactElement<WidgetCreatorProps>;
}
