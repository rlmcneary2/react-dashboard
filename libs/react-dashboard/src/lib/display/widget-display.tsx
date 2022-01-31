import React from "react";
import { Widget } from "../type";

export function WidgetDisplay({
  activeWidgets,
  snapToGrid
}: WidgetDisplayProps) {
  return <div>widgets here...</div>;
}

export interface WidgetDisplayProps {
  activeWidgets: Widget[];
  snapToGrid?: boolean;
}
