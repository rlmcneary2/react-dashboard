import { WidgetData } from "../type";

export function WidgetCreator(props: WidgetCreatorProps) {
  return <div>widget creator</div>;
}

export interface WidgetCreatorProps {
  availableWidgets: WidgetData[];
  onCreate?: (data: WidgetData) => void;
  snapToGrid?: boolean;
}
