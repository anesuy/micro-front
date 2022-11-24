import React, { Suspense } from "react";
const App = React.lazy(() => import("container/container"));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  //componentDidCatch(error, errorInfo) {
  //  // You can also log the error to an error reporting service
  //  logErrorToMyService(error, errorInfo);
  //}

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1></h1>;
    }

    return this.props.children;
  }
}

export default function GitHub() {
  return (
    <Suspense fallback={<div> Loading....</div>}>
      <ErrorBoundary>
        <App />
        <h1>Microfront</h1>
      </ErrorBoundary>
    </Suspense>
  );
}
