import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Employee() {
  const { id } = useParams()
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    async function fetchEmployee(id) {
      try {
        const response = await axios.get(`http://localhost:5001/employees/${id}`);
        setEmployee(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    }
    fetchEmployee(id);
  }, []);


  if (employee === null) {
    return <div>No User Found</div>;
  }

  return (
    
    //use bootstrap to create a card with the above details
    <div>
      <div class='row g-0 overflow-hidden'>
        <div class='col-md-6'>
          <div class='lc-block my-5'>
            <h4 >Employee Details for <span className = "mark">{employee.name}</span></h4>
          </div>
          <div class='lc-block1'>
            <table class='table table-striped' align='center'>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{employee.name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{employee.email}</td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <td>{employee.phone}</td>
                </tr>
                <tr>
                  <th>Job Title</th>
                  <td>{employee.jobTitle}</td>
                </tr>
                <tr>
                  <th>Department</th>
                  <td>{employee.department}</td>
                </tr>
                
                <tr>
                  <th>Shift Start Time</th>
                  {/* <td>{ employee.timeShift && employee.timeShift.shiftIn}</td> */}
                  <td>{ employee.timeShift ? employee.timeShift.shiftIn : "Not Assigned" }</td>
                </tr>
                <tr>
                  <th>Shift End Time</th>
                  <td>{ employee.timeShift ? employee.timeShift.shiftOut : "Not Assigned" }</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
        <div class='col-md-6 row row-cols-1'>
          <div class='col lc-block'>
            <div className='my-5'>
              <h4>Employee Attendance</h4>
            </div>
            {/* accordion */}
            <div class='accordion' id='accordionExample'>
              <div class='accordion-item'>
                <h2 class='accordion-header' id='headingOne'>
                  <button
                    class='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    Month - January
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  class='accordion-collapse collapse show'
                  aria-labelledby='headingOne'
                  data-bs-parent='#accordionExample'
                >
                  {/* <div class='accordion-body'>
                    This is the first item's accordion body.
                  </div> */}

                  <div className='p-3'>Total Present =</div>
                  <div className='p-3'>Late Arrivals =</div>
                  <div className='p-3'>Total Overtime =</div>
                  <div className='p-3'>Total Working Days =</div>
                </div>
              </div>
            </div>
            {/* accordion end */}
          </div>
          <div class='col lc-block my-5'>
            <h4>Employee Payroll {id}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
