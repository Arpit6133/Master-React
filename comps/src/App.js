import React from "react";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./components/Sidebar";
import ButtonPage from './pages/ButtonPage';
import ModalPage from "./pages/ModalPage";
import useNavigation from "./hooks/use-navigation";
import TablePage from "./pages/TablePage";

export default function App() {

  const { currentPath } = useNavigation();

  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar currentPath={currentPath}/>
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  );
}
