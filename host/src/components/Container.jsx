import React, { Suspense } from "react";
const App = React.lazy(() => import("container/container"));

export default function Container() {
  return (
    <Suspense fallback={<h1> Loading....</h1>}>
      <App />
    </Suspense>
  );
}
