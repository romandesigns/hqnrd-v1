import { Button, Input } from "antd";
import { signIn } from "../actions";

export default function LoginPage() {
  return (
    <section className="p-2">
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
        <Button formAction={signIn} htmlType="submit">
          Sign In
        </Button>
      </form>
    </section>
  );
}
