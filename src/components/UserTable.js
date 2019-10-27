import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import moment from 'moment';

export default () => {
    const details = useSelector((state) => state.users.details);

    return (
        <div>
            <Table bordered striped hover responsive variant="dark">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Hobby</th>
                            <th>Date of Birth</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    {details.map((row, index) => (
                    <tbody key={index}>
                    <tr>
                        <td>{row.data.userId}</td>
                        <td>{row.data.fname}</td>
                        <td>{row.data.lname}</td>
                        <td>{row.data.hobby}</td>
                        <td>{moment(row.data.dob).format('YYYY-MM-DD').toString()}</td>
                        <td>{row.data.age}</td>
                     </tr>
                    </tbody>
                     ))}
             </Table> 
        </div>
    );
}