import React, { Suspense } from "react";
const App = React.lazy(() => import("container/container"));

export default function Component1() {
  return (
    <Suspense fallback={<div> Loading....</div>}>
      <App />
    </Suspense>
  );
}
