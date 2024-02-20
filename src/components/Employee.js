import React from 'react'
import { useParams } from 'react-router-dom'

export default function Employee() {
  const { id } = useParams()

  //total attendance for month
  //total overtime
  //total late arrival
  //payroll with late arrival and overtime
  //hr departments and details

  return (
    //use bootstrap to create a card with the above details
    <div>
      {/* <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>Employee Reports</h1>
          </div>
          <div className='col-12'>
            <h3>Employee ID : {id}</h3>
          </div>
          <div className='col-12'>
            <h3>Total Attendance for the month : 30</h3>
          </div>
          <div className='col-12'>
            <h3>Total Overtime : 10 hours</h3>
          </div>
          <div className='col-12'>
            <h3>Total Late Arrival : 5 hours</h3>
          </div>
          <div className='col-12'>
            <h3>Payroll with late arrival and overtime : 10000</h3>
          </div>
          <div className='col-12'>
            <h3>HR Departments and details : HR1, HR2, HR3</h3>
          </div>
        </div>
      </div> */}

      {/* employee name , employee departments , employee email id , phone number , employee designation, */}

      <div class='row g-0 overflow-hidden'>
        <div class='col-md-6'>
          <div class='lc-block my-5'>
            <h4>Employee Details Table {id}</h4>
          </div>
          <div class='lc-block1'>
            <table class='table table-striped'>
              <tbody>
                <tr>
                  <th>Row</th>
                  <td>1</td>
                </tr>
                <tr>
                  <th>First Name</th>
                  <td>John</td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>Carter</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>johncarter@mail.com</td>
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
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  class='accordion-collapse collapse show'
                  aria-labelledby='headingOne'
                  data-bs-parent='#accordionExample'
                >
                  <div class='accordion-body'>
                    This is the first item's accordion body.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='col lc-block py-5'>
            <h4>Employee Payroll {id}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
