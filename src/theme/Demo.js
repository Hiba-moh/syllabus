import React, { useState, useEffect } from "react";

export default function Demo(props) {
  return (
    <div className="demo">
      <div className="demo__wrapper">{props.children}</div>
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

  if (logs.length) {
    return (
      <ul className="demo__console">
        {logs.map((log, index) => {
          return <li key={index}>{log}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
