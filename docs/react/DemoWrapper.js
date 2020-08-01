import React, { useState, useEffect } from "react";

export default function DemoWrapper(props) {
  return (
    <div className="demo">
      {props.children}
      {props.showConsole ? <DemoConsole /> : null}
    </div>
  );
}

const originalConsole = console.log;

function DemoConsole() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    console.log = function (...args) {
      originalConsole(...args);
      setLogs(logs.concat(...args));
    };

    return () => {
      console.log = originalConsole;
    };
  });

  return (
    <ul className="demo__console">
      {logs.length ? (
        logs.map((log, index) => {
          return <li key={index}>{log}</li>;
        })
      ) : (
        <li />
      )}
    </ul>
  );
}
