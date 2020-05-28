import React, { Component } from 'react';
import { getJWT } from './jwt';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';


// DON"T FORGET TO CHANGE THE LOCAL HOST PORT ON BACKEND TO 5000!
class AuthenticatedComponent extends Component {
    constructor(props) {
        super(props);

        this.state={
            user: undefined
        }
    }

    componentDidMount() {
        const jwt = getJWT();
        if(!jwt) {
            this.props.history.push('/login');
        }
        
        Axios.get('/getUser/', { headers: { Authorization: `Bearer ${jwt}` } }).then(res => this.setState({
                user: res.data
            })).catch(err => {
                localStorage.removeItem('cool-jwt');
                this.props.history.push('/login');
            });
        }
    
    render() {
        if(this.state.user === undefined) {
            return (
                <div><h1>Loading...</h1></div>
            );
        }

        return (
           <div>
               {this.props.children}
           </div>
        )
    }
}

export default withRouter(AuthenticatedComponent);