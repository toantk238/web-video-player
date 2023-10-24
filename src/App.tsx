import "./App.css";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const param1 = queryParams.get("link");
  console.log(`link = ${param1} -- ${Date.now()}`);

  return <div id="main"></div>;
}
