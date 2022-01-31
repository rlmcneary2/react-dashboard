import { ReactDashboard, WidgetCreator } from "@rlmcneary2/react-dashboard";

export function App() {
  return (
    <div>
      <ReactDashboard activeWidgets={[]}>
        <WidgetCreator availableWidgets={[]} />
      </ReactDashboard>
    </div>
  );
}
