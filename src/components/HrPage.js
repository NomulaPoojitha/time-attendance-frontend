import React from 'react';


const HrPage = () => {
  const HR_DATA = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '555-1234',
      jobTitle: 'Software Engineer',
      department: 'Engineering',
      salary: 80000, shift: 'Day',
      details:"http://localhost:3000/employee-reports/1",
    },
    {
      id: 2,
      name: 'Mary Moe',
      email: 'mary@example.com',
      phone: '555-5678',
      jobTitle: 'Project Manager',
      department: 'Management',
      salary: 90000,
      shift: 'Evening',
      details: "http://localhost:3000/employee-reports/1",
    },
    {
      id: 3,
      name: 'July Dooley',
      email: 'july@example.com',
      phone: '555-9012',
      jobTitle: 'QA Engineer',
      department: 'Quality Assurance',
      salary: 70000, shift: 'Night',
      details: "http://localhost:3000/employee-reports/1",
    },
  ];

  // const Table = styled.table`
  //   width: 100%;
  //   border-collapse: collapse;
  //   font-family: Arial, sans-serif;
  // `;

  // const Th = styled.th`
  //   background-color: #f2f2f2;
  //   color: #333;
  //   padding: 10px;
  //   text-align: left;
  //   border-bottom: 1px solid #ddd;
  // `;

  // const Td = styled.td`
  //   padding: 10px;
  //   text-align: left;
  //   border-bottom: 1px solid #ddd;
  // `;

  // const Button = styled.button`
  //   background-color: #007bff;
  //   color: white;
  //   padding: 5px 10px;
  //   border: none;
  //   border-radius: 4px;
  //   cursor: pointer;
  //   &:hover {
  //     background-color: #0056b3;
  //   }
  // `;

  return (
    <div class = "hr-page">
      <h2 className="my-4">HR Page</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Job Title</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Shift</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {HR_DATA.map((hr) => (
            <tr>
              <td>{hr.id}</td>
              <td>{hr.name}</td>
              <td>{hr.email}</td>
              <td>{hr.phone}</td>
              <td>{hr.jobTitle}</td>
              <td>{hr.department}</td>
              <td>{hr.salary}</td>
              <td>{hr.shift}</td>
              <td>
                <a href={hr.details}>
                <button>Select</button>
                </a>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HrPage;