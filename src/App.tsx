import {Outlet} from "react-router";

function App() {

  return (
      <>
          <h1 className="text-3xl font-bold underline">
              Hello world!
          </h1>
         <Outlet />
      </>
  )
}

export default App