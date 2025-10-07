'use client';
import Link from "next/link";
import { Form, Button, FormControl } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" style={{ maxWidth: "400px", margin: "auto" }}>
      <h1 className="text-center mb-4">Sign up</h1>
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
        <FormControl
          id="wd-verify-password"
          placeholder="Verify Password"
          type="password"
          className="mb-3"
        />
        <Link href="/Account/Profile" passHref legacyBehavior>
          <Button
            id="wd-signup-btn"
            variant="primary"
            className="w-100 mb-3"
            as="a"
          >
            Sign up
          </Button>
        </Link>
        <div className="text-center">
          <Link id="wd-signin-link" href="/Account/Signin">
            Sign in
          </Link>
        </div>
      </Form>
    </div>
  );
}