import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="row-span-full flex min-h-full w-full items-center justify-center">
      <form className="flex max-w-md flex-col items-center text-left">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <div className="my-4 space-x-2">
          <button className="border p-1 px-4" formAction={login}>
            Log in
          </button>
          <button className="border p-1 px-4" formAction={signup}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
