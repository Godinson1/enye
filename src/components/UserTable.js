import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import moment from 'moment';

export default () => {
    const details = useSelector((state) => state.users.details);

    return (
        <div>
            {details.map((row, index) => (
               <div key={index}>
                   <Table bordered striped hover responsive variant="dark">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Hobby</th>
                            <th>Date of Birth</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{row.fname}</td>
                        <td>{row.lname}</td>
                        <td>{row.hobby}</td>
                        <td>{moment(row.dob).format('YYYY-MM-DD').toString()}</td>
                        <td>{row.age}</td>
                     </tr>
                    </tbody>
                </Table>
               </div> 
            ))}
        </div>
    );
}