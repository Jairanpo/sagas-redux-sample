import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <div>Sorry there was an error</div>
      <div>
        <i>{error.statusText || error.message}</i>
      </div>
    </div>
  );
}
