import React from 'react';

const students = [
  {
    id: 1,
    name: 'Inje',
  },
  {
    id: 2,
    name: 'Steve',
  },
  {
    id: 3,
    name: 'Tom',
  },
  {
    id: 4,
    name: 'Sally',
  },
  {
    id: 5,
    name: 'Bob',
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student, id) => {
        return <li key={id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
