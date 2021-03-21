import React from 'react';
import { Link } from 'react-router-dom';
function CourseListItem(props) {
  return (
    <div className="course-list-item">
      <Link to="/course">
        <img
          src={props.course.image}
          alt="코스 대표 이미지"
          className="course-img"
        />
      </Link>
      <div className="course-contents">
        <div className="course-title">{props.course.title}</div>
        <div className="course-desc">{props.course.description}</div>
      </div>
    </div>
  );
}

export default CourseListItem;
