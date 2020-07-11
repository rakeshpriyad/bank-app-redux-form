import React, { useState, Fragment } from 'react'
import AddCustomerForm from '../../forms/Customers/AddCustomerForm'
import EditCustomerForm from '../../forms/Customers/EditCustomerForm'
import CustomerTable from './CustomerTable'
import CustomersTableSaga from './CustomersTableSaga'
import {loadUsers} from "../../../actions/actions";
import {connect} from 'react-redux';

class CustomerApp extends React.Component {
	// Data

	constructor(props) {
		super(props);
		this.state = {editing: false};
	  }

	/* usersData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette' },
		{ id: 2, name: 'Craig', username: 'siliconeidolon' },
		{ id: 3, name: 'Ben', username: 'benisphere' },
	]

	initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	 addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

    updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	} */ 

	editRow = user => {
		//setEditing(true)
		this.setState({editing: true, user: user})

		//setCurrentUser({ id: user.id, name: user.name, username: user.username })
		console.log("Edit clicked"+ this.state.editing)
	}

	deleteUser = id => {
		console.log("Delete clicked")
	}

	componentDidMount() {
		this.props.loadUsers();
	};
	render() {
		if (this.props.loading) {
			return <div>Loading</div>
		}
		if (this.props.error) {
			return <div style={{color: 'red'}}>ERROR: {this.props.error}</div>
		}
 
		console.log("---data---"+ this.props.data.users)
	return (
		<div className="container">
			<h1>CRUD App with Redux Saga</h1>
			<div className="flex-row">
				<div className="flex-large">
					{this.state.editing
						 ? (
						<Fragment>
							<h2>Edit user</h2>
							 <EditCustomerForm
								users={this.state.user}
					/>  
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddCustomerForm  />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					 <CustomerTable users={this.props.data} editRow={this.editRow} deleteUser={this.deleteUser} />
				</div>
			</div>
		</div>
	);
}
}

const mapStateToProps = state => ({
    data: state.reduxSaga.data,
    loading: state.reduxSaga.loading,
	error: state.reduxSaga.error,
	
});
const mapDispatchToProps = {
   loadUsers
   
};
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(CustomerApp);