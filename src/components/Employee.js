import React from 'react'
import { useParams } from 'react-router-dom'

export default function Employee() {

  const {id} = useParams();

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

<div class="row row-cols-1 row-cols-lg-2 g-0 overflow-hidden">
        <div class="col">
            <div class="lc-block">
              <h2>Employee Details Table</h2>
            </div>
            <div class="lc-block">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Employee Departments</th>
                    <th scope="col">Employee Email ID</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Employee Designation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>HR1, HR2, HR3</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
        <div class="col row row-cols-1 g-0">
            <div class="col lc-block">test1</div>
            <div class="col lc-block">test2</div>
        </div>
    </div>
    </div>

  )
}
