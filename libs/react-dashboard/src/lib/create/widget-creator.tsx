import { Widget } from "../type";

export function WidgetCreator(props: WidgetCreatorProps) {
  return null;
}

export interface WidgetCreatorProps {
  availableWidgets: Widget[];
  onCreate?: () => void;
}
