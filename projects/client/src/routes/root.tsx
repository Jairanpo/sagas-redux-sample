import { Outlet, Link } from "../../node_modules/react-router-dom/dist/index";
import { ErrorBoundary } from "react-error-boundary";
import FallbackComponent from "../components/errors/FallBackComponent";


export default function Root() {
  
  const handleErrorReset = ()=>{
    window.location.reload()
  }

  return (
    <>
      <div>
        <h1>React/Redux/Sagas</h1>
        <Link to="/about">about</Link>
        <ErrorBoundary
          FallbackComponent={FallbackComponent}
          onReset={handleErrorReset}
        >

        <div>
          <Outlet />
        </div>
        </ErrorBoundary>
      </div>
    </>
  );
}

