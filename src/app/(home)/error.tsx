"use client";

import { use, useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error(props: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(props.error);
  }, []);

  return (
    <div style={{ padding: "10rem" }}>
      <h1>:(</h1>
      <p>Ha ocurrido un error</p>
      <button onClick={props.reset}>Reintentar</button>
    </div>
  );
}
