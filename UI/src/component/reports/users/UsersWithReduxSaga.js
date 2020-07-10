import * as React from 'react';
import {connect} from 'react-redux';
import {loadUsers} from "../../../actions/actions";
class UsersWithReduxSaga extends React.Component {
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

       console.log("---data---"+ this.props.data)
       return (
           <table>
               <thead>
                   <tr>
                       <th>First Name</th>
                       <th>Last Name</th>
                       <th>Active?</th>
                       <th>Posts</th>
                       <th>Messages</th>
                   </tr>
               </thead>
               <tbody>
                   {this.props.data.map(u =>
                       <tr key={u.id}>
                           <td>{u.userName}</td>
                           <td>{u.mailAddress}</td>
                           <td>{u.tel}</td>
                           <td>{u.content}</td>
                           <td>{u.messages}</td>
                       </tr>
                   )}
               </tbody>
           </table>
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
)(UsersWithReduxSaga);