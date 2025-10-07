'use client';
import Link from "next/link";
import { Form, Button, FormControl, FormLabel, Col, Row } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" style={{ maxWidth: "600px", margin: "auto" }}>
      <h1 className="text-center mb-4">Profile</h1>
      <Form>
        <Form.Group as={Row} className="mb-3 align-items-center">
          <FormLabel column sm={2}>Username</FormLabel>
          <Col sm={10}>
            <FormControl id="wd-username" placeholder="Username" defaultValue="alice" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 align-items-center">
          <FormLabel column sm={2}>Password</FormLabel>
          <Col sm={10}>
            <FormControl id="wd-password" placeholder="Password" type="password" defaultValue="123" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 align-items-center">
          <FormLabel column sm={2}>First Name</FormLabel>
          <Col sm={10}>
            <FormControl id="wd-firstname" placeholder="First Name" defaultValue="Alice" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 align-items-center">
          <FormLabel column sm={2}>Last Name</FormLabel>
          <Col sm={10}>
            <FormControl id="wd-lastname" placeholder="Last Name" defaultValue="Wonderland" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 align-items-center">
          <FormLabel column sm={2}>Date of Birth</FormLabel>
          <Col sm={10}>
            <FormControl id="wd-dob" type="date" defaultValue="2000-01-01" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 align-items-center">
          <FormLabel column sm={2}>Email</FormLabel>
          <Col sm={10}>
            <FormControl id="wd-email" type="email" defaultValue="alice@wonderland.com" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 align-items-center">
          <FormLabel column sm={2}>Role</FormLabel>
          <Col sm={10}>
            <Form.Select id="wd-role" defaultValue="FACULTY">
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <div className="d-grid gap-2 mt-4">
          <Button variant="primary">Update</Button>
          <Button variant="danger" as={Link} href="/Account/Signin">
            Sign out
          </Button>
        </div>
      </Form>
    </div>
  );
}