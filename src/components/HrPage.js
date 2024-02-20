import React from 'react';
import styled from 'styled-components';

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
      details: <a class="btn btn-info btn-sm" href="#" role="button">Select</a>,
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
      details: <a class="btn btn-info btn-sm" href="#" role="button">Select</a>,
    },
    {
      id: 3,
      name: 'July Dooley',
      email: 'july@example.com',
      phone: '555-9012',
      jobTitle: 'QA Engineer',
      department: 'Quality Assurance',
      salary: 70000, shift: 'Night',
      details: <a class="btn btn-info btn-sm" href="#" role="button">Select</a>,
    },
  ];

  const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
  `;

  const Th = styled.th`
    background-color: #f2f2f2;
    color: #333;
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  `;

  const Td = styled.td`
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  `;

  const Button = styled.button`
    background-color: #007bff;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  `;

  return (
    <div>
      <h2 className="my-4">HR Page</h2>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Job Title</Th>
            <Th>Department</Th>
            <Th>Salary</Th>
            <Th>Shift</Th>
            <Th>Details</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          {HR_DATA.map((hr) => (
            <tr>
              <Td>{hr.id}</Td>
              <Td>{hr.name}</Td>
              <Td>{hr.email}</Td>
              <Td>{hr.phone}</Td>
              <Td>{hr.jobTitle}</Td>
              <Td>{hr.department}</Td>
              <Td>{hr.salary}</Td>
              <Td>{hr.shift}</Td>
              <Td>
                <Button>Select</Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HrPage;