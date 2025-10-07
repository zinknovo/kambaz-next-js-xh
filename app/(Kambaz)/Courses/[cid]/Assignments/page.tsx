'use client';
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaSearch, FaPlus, FaPencilAlt } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Assignments() {
  const params = useParams();
  const cid = params.cid;
  const assignments = [
    { id: "A1", title: "ENV + HTML", course: "CS1234", available: "May 6 at 12:00am", due: "May 13 at 11:59pm", points: 100 },
    { id: "A2", title: "CSS + BOOTSTRAP", course: "CS1234", available: "May 13 at 12:00am", due: "May 20 at 11:59pm", points: 100 },
    { id: "A3", title: "JAVASCRIPT + REACT", course: "CS1234", available: "May 20 at 12:00am", due: "May 27 at 11:59pm", points: 100 },
  ];

  return (
    <div id="wd-assignments" className="p-3">
      {/* Top Controls */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group w-25">
          <span className="input-group-text bg-transparent border-end-0"><FaSearch /></span>
          <input type="text" className="form-control border-start-0" placeholder="Search for Assignment" />
        </div>
        <div className="float-end">
          <Button variant="secondary" className="me-1"><FaPlus className="me-1"/> Group</Button>
          <Button variant="danger" className="me-1"><FaPlus className="me-1"/> Assignment</Button>
          <Button variant="secondary"><IoEllipsisVertical /></Button>
        </div>
      </div>

      {/* Assignments List */}
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {assignments.map((assignment) => (
              <ListGroupItem key={assignment.id} className="wd-lesson p-3 ps-1">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <FaPencilAlt className="me-3 fs-4 text-success" />
                  <div className="flex-grow-1">
                    <Link href={`/Courses/${cid}/Assignments/${assignment.id}`}
                       className="text-dark fw-bold text-decoration-none">
                      {assignment.id} - {assignment.title}
                    </Link>
                    <div className="fs-6 text-muted">
                      <span className="text-danger">Multiple Modules</span> | 
                      <strong> Not available until</strong> {assignment.available} |
                      <strong> Due</strong> {assignment.due} | {assignment.points} pts
                    </div>
                  </div>
                  <LessonControlButtons />
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}