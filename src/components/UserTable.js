import React, { Component } from 'react';
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap'
const TableHeader = () => { 
    return (
        
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Hobby</th>
                <th>Date of Birth</th>
                <th>Age</th>
            </tr>
        </thead>
        
    );
}

const TableBody = props => { 
    const rows = props.userDetails.map((row, index) => {

        return (
            <tr key={index}>
                <td>{row.fname}</td>
                <td>{row.lname}</td>
                <td>{row.hobby}</td>
                <td>{moment(row.dob).format('YYYY-MM-DD').toString()}</td>
                <td>{row.age}</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class UserTable extends Component {
    render() {
        const { userDetails } = this.props;

        return (
            <div style={{textAlign: 'center', display: 'inlineBlock', position: 'relative'}}>
            <Table bordered striped hover responsive variant="dark">
                <TableHeader />
                <TableBody userDetails={userDetails} />
            </Table>
            </div>
        
        );
    }
}

export default UserTable;