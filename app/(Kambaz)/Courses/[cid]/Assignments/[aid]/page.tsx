'use client';
import { Form, Button, Row, Col, Breadcrumb } from "react-bootstrap";
import Select from 'react-select';
import { useId } from "react";
import { useParams } from "next/navigation";

export default function AssignmentEdit() {
  const params = useParams();
  const { cid, aid } = params;
  const studentOptions = [
    { value: 'everyone', label: 'Everyone' },
    { value: 's101', label: 'Section 101' },
    { value: 's102', label: 'Section 102' },
    { value: 'alice', label: 'Alice' },
    { value: 'bob', label: 'Bob' }
  ];
  const selectId = useId();

  return (
    <div className="p-3">
      <Breadcrumb className="mb-3">
        <Breadcrumb.Item href={`/Courses/${cid}/Home`}>{cid}</Breadcrumb.Item>
        <Breadcrumb.Item href={`/Courses/${cid}/Assignments`}>Assignments</Breadcrumb.Item>
        <Breadcrumb.Item active>{aid}</Breadcrumb.Item>
      </Breadcrumb>

      <div className="d-flex justify-content-end align-items-center mb-3">
        <Button variant="secondary" className="ms-3"> <i className="fa fa-ellipsis-v"></i> </Button>
      </div>
      <hr />

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={4} defaultValue="The assignment is available online. Submit a link to the landing page of your web application." />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control type="number" defaultValue={100} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Assignment Group</Form.Label>
          <Form.Select defaultValue="ASSIGNMENTS">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
            <option>PROJECTS</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Display Grade as</Form.Label>
          <Form.Select defaultValue="Percentage">
            <option>Percentage</option>
            <option>Points</option>
            <option>Letter Grade</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Submission Type</Form.Label>
          <div className="border p-3 rounded">
            <Form.Select defaultValue="Online">
              <option>Online</option>
              <option>On Paper</option>
            </Form.Select>
            <div className="mt-3">
              <Form.Label className="fw-bold">Online Entry Options</Form.Label>
              <div>
                <Form.Check type="checkbox" id="chk-text-entry" label="Text Entry" />
                <Form.Check type="checkbox" id="chk-website-url" label="Website URL" />
                <Form.Check type="checkbox" id="chk-media-recordings" label="Media Recordings" />
                <Form.Check type="checkbox" id="chk-student-annotation" label="Student Annotation" />
                <Form.Check type="checkbox" id="chk-file-uploads" label="File Uploads" />
              </div>
            </div>
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Assign</Form.Label>
          <div className="border p-3 rounded">
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Assign to</Form.Label>
              <Select instanceId={selectId} isMulti options={studentOptions} defaultValue={[studentOptions[0]]} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Due</Form.Label>
              <Form.Control type="date" defaultValue="2025-05-13" />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className="fw-bold">Available from</Form.Label>
                  <Form.Control type="date" defaultValue="2025-05-06" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="fw-bold">Until</Form.Label>
                  <Form.Control type="date" defaultValue="2025-05-20" />
                </Form.Group>
              </Col>
            </Row>
          </div>
        </Form.Group>
      </Form>

      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <Form.Check type="checkbox" label="Notify users that this content has changed" />
        <div>
          <Button variant="secondary" className="me-2">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </div>
    </div>
  );
}