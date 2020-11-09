import React , {Component} from 'react';
import axios from 'axios';



class optionstItem extends Component{
    state = {
        users : []
    }


  

    componentDidMount(){
        axios.get("https://api.github.com/users").then(res =>{
            this.setState({
                users : res.data
            })
        })
    }


    /* {* another way to response api *} */

    // componentDidMount(){
    //   fetch('https://api.github.com/users')
    //     .then(response => response.json())
    //     .then(data => {
    //         this.setState({
    //             users : data
    //          })
    //     })
    // }

    render(){
        return(
            <div className="container">
                <div className="form-group">
                    <label className="m-3 font-weight-bold">List Items User</label>
                    {this.state.users.map(user => <select className="form-control m-3"  key={user.id}>
                         <option>{user.login}</option>
                         <option>{user.id}</option>
                         <option>{user.avatar_url}</option>
                         <option>{user.events_url}</option>
                         <option>{user.followers_url}</option>
                         <option>{user.following_url}</option>
                         <option>{user.gists_url}</option>
                         <option>{user.gravatar_id}</option>
                         <option>{user.html_url}</option>
                         <option>{user.login}</option>
                         <option>{user.node_id}</option>
                         <option>{user.organizations_url}</option>
                         <option>{user.received_events_url}</option>
                         <option>{user.repos_url}</option>
                         <option>{user.site_admin}</option>
                         <option>{user.starred_url}</option>
                         <option>{user.subscriptions_url}</option>
                         <option>{user.type}</option>
                         <option>{user.url}</option>
                    </select>
                    )}
         
                </div>
            </div>
        )
    }
}
export default optionstItem