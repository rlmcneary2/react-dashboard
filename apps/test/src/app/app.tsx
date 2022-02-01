import { useRef } from "react";
import {
  ReactDashboard,
  WidgetCreator,
  Widget
} from "@rlmcneary2/react-dashboard";

export function App() {
  const w1 = useRef(null);
  const w2 = useRef(null);

  return (
    <div>
      <ReactDashboard>
        <WidgetCreator availableWidgets={[]} />
        <Widget as="span" ref={w1}>
          #1
        </Widget>
        <Widget ref={w2}>#2</Widget>
      </ReactDashboard>
    </div>
  );
}
