import * as ReactDOMClient from "react-dom/client";
import Main from "./components/Main";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container!);
root.render(<Main/>);