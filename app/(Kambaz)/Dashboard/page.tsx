'use client';
import { Button, Card, Col, Row } from "react-bootstrap";
import Link from "next/link";

export default function Dashboard() {
  const courses = [
    { id: "CS1234", name: "React JS", description: "Full Stack software developer", image: "reactjs.jpg" },
    { id: "CS1235", name: "Node.js", description: "Backend Development", image: "nodejs.jpg" },
    { id: "CS1236", name: "Python", description: "Data Science and AI", image: "python.jpg" },
    { id: "CS1237", name: "HTML/CSS", description: "Web Design Fundamentals", image: "html-css.jpg" },
    { id: "CS1238", name: "JavaScript", description: "Interactive Web Programming", image: "javascript.jpg" },
    { id: "CS1239", name: "Java", description: "Object-Oriented Programming", image: "java.jpg" },
    { id: "CS1240", name: "Database", description: "SQL and NoSQL Systems", image: "database.jpg" },
  ];

  return (
    <div id="wd-dashboard" className="p-3">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
          {courses.map((course) => (
            <Col key={course.id} style={{ width: "300px" }}>
              <Card className="h-100">
                <Link href={`/Courses/${course.id}/Home`} className="text-decoration-none text-dark">
                  <Card.Img variant="top" src={`/images/${course.image}`} width="100%" height={160} style={{ objectFit: 'contain' }} />
                  <Card.Body>
                    <Card.Title className="text-nowrap overflow-hidden" style={{fontWeight: 'bold'}}>{course.id} {course.name}</Card.Title>
                    <Card.Text className="overflow-hidden" style={{ height: "50px" }}>
                      {course.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
