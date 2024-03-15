import { login, signup } from "./actions";
import { Input, Button } from "antd";

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <Input size="middle" id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <Input
        size="middle"
        id="password"
        name="password"
        type="password"
        required
      />
      <Button type="primary" htmlType="submit" formAction={login}>
        Log in
      </Button>
      <Button formAction={signup} htmlType="submit">
        Sign up
      </Button>
    </form>
  );
}
