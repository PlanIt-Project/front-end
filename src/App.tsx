import "./App.css";
import Layout from "./components/Layout";
import Main from "./pages/Main";

export const App = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
        label: "main",
      },
    ],
  },
];

export default App;
