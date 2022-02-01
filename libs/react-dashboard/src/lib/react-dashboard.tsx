import React, { ForwardRefExoticComponent, ReactElement } from "react";
import { WidgetProps } from "./widget/widget";
import { WidgetCreatorProps } from "./create/widget-creator";
import { WidgetDisplay, WidgetDisplayProps } from "./display/widget-display";

export function ReactDashboard({ children, ...props }: ReactDashboardProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const widgets: ForwardRefExoticComponent<WidgetProps<any>>[] = [];
  let widgetCreator: ReactElement<WidgetCreatorProps> | null = null;
  0 < React.Children.count(children) &&
    React.Children.forEach(children, child => {
      if (!child) {
        return;
      }

      if (isWidget(child)) {
        widgets.push(child);
      } else if (isWidgetCreator(child)) {
        widgetCreator = child;
      }
    });

  return (
    <>
      {widgetCreator && React.cloneElement(widgetCreator, props)}
      <WidgetDisplay {...props}>{widgets}</WidgetDisplay>
    </>
  );
}

type ChildrenType =
  | ReactElement<WidgetCreatorProps>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | ForwardRefExoticComponent<WidgetProps<any>>;

interface ReactDashboardProps extends WidgetDisplayProps {
  children?: ChildrenType[];
}

function isWidget(
  child: ChildrenType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): child is ForwardRefExoticComponent<WidgetProps<any>> {
  const c = child as JSX.Element;
  return c.type?.render?.name === "WidgetInternal";
}

function isWidgetCreator(
  child: ChildrenType
): child is ReactElement<WidgetCreatorProps> {
  const c = child as JSX.Element;
  return c.type?.name === "WidgetCreator";
}
