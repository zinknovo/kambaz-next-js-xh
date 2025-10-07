'use client';
import Link from "next/link";
import { Form, Button, FormControl } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen" style={{ maxWidth: "400px", margin: "auto" }}>
      <h1 className="text-center mb-4">Sign in</h1>
      <Form>
        <FormControl
          id="wd-username"
          placeholder="Username"
          className="mb-3"
        />
        <FormControl
          id="wd-password"
          placeholder="Password"
          type="password"
          className="mb-3"
        />
        <Button
          id="wd-signin-btn"
          variant="primary"
          className="w-100 mb-3"
          as={Link}
          href="/Account/Profile"
        >
          Sign in
        </Button>
        <div className="text-center">
          <Link id="wd-signup-link" href="/Account/Signup">
            Sign up
          </Link>
        </div>
      </Form>
    </div>
  );
}