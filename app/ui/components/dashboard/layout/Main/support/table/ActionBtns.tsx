import React from "react";
import { Button, Table } from "antd";

export function actionBtns(): React.JSX.Element {
  return (
    <div className="flex gap-3">
      <Button
        type="primary"
        className="!flex items-center justify-center rounded-md !bg-green-400  shadow-md"
        onClick={() => console.log("Start")}
      >
        <span className="text-white">Start</span>
      </Button>
      <Button
        type="primary"
        className="!flex items-center justify-center rounded-md !bg-blue-400  shadow-md"
        onClick={() => console.log("Complete")}
      >
        <span className="text-white">Complete</span>
      </Button>
      <Button
        type="primary"
        className="!flex items-center justify-center rounded-md  !bg-orange-400  shadow-md"
        onClick={() => console.log("Cancel")}
      >
        <span className="text-white">Cancel</span>
      </Button>
      <Button
        type="primary"
        className="!flex items-center justify-center rounded-md  !bg-red-400  shadow-md"
        onClick={() => console.log("Delete")}
      >
        <span className="text-white">Delete</span>
      </Button>
    </div>
  );
}
