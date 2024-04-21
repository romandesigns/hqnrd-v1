import { Button, Input, Alert } from "antd";

export default function Page() {
  let foo = true;
  if (foo) {
    return (
      <Alert
        message="Incorrect Date Range"
        description="The date range is invalid. Please make sure the check-out date is after the check-in date."
        type="warning"
        showIcon
        closable
      />
    );
  }
  return <p>Hello world</p>;
}
