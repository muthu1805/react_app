import { Button, Table } from 'semantic-ui-react'
import nav from '../Nav';
import React, { useState,useEffect } from 'react'
import axios from 'axios';

export default function Index() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://63873635d9b24b1be3e9835d.mockapi.io/api/v1/users`)
            .then((response) => {
                // console.log(response.data);
                setAPIData(response.data);
            })
    }, [APIData])
   
    useEffect(()=>{},[])
    return (
        <div className='container'> 
        <div className='row'>
            <nav />
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First_Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {APIData.map((data) => {
     return (
       <Table.Row>
          <Table.Cell>{data.first_name}</Table.Cell>
           <Table.Cell>{data.lastname}</Table.Cell>
           <Table.Cell>{data.check_box === true ? <a class="ui green label">Active</a>
 : <a class="ui grey label">Deactive</a>}</Table.Cell>
           <Table.Cell> 
            <Button color='blue'>Edit</Button>
           <Button color='red'>Delte</Button></Table.Cell>
           </Table.Row>
   )})}
            </Table>
            </div>
        </div>
    )
}