import React from 'react'
import { Icon, Table } from 'semantic-ui-react'
import { EditButton } from './editButton';
import { DeleteButton } from './deleteButton';
import {failureMessage, loadingMessage, signoutAction, successMessage,} from './authActions';


const TableExamplePositiveNegative = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>#</Table.HeaderCell>
        <Table.HeaderCell>#</Table.HeaderCell>
        <Table.HeaderCell>User ID</Table.HeaderCell>
        <Table.HeaderCell>Order ID</Table.HeaderCell>
        <Table.HeaderCell>Parcel Name</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Date Ordered</Table.HeaderCell>
        <Table.HeaderCell>Order Status</Table.HeaderCell>
        <Table.HeaderCell>PickUp Location</Table.HeaderCell>
        <Table.HeaderCell>Present Location</Table.HeaderCell>
        <Table.HeaderCell>Destination</Table.HeaderCell>
        <Table.HeaderCell>Edit</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Icon name='checkmark' />
          Approved
        </Table.Cell>
        <Table.Cell positive>
          <Icon name='close' />
          Requires call
        </Table.Cell>
        <Table.Cell>${parcel.user_id}</Table.Cell>
        <Table.Cell>${parcel.parcel_id}</Table.Cell>
        <Table.Cell negative>${parcel.parcel_name}</Table.Cell>
        <Table.Cell>${parcel.price}</Table.Cell>
        <Table.Cell>${parcel.date_ordered}</Table.Cell>
        <Table.Cell negative>${parcel.status}</Table.Cell>
        <Table.Cell>${parcel.pickup_location}</Table.Cell>
        <Table.Cell positive>${parcel.present_location}</Table.Cell>
        <Table.Cell>${parcel.destination_location}</Table.Cell>
        <Table.Cell><EditButton /></Table.Cell>
        <Table.Cell><DeleteButton /></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExamplePositiveNegative