import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions/userActions'

 class ProfileSearch extends Component {

    state = {
        username: ''
    }

    handleChange = event => {
        // debugger
        this.setState({
            ...this.state,
            username: event.target.value
        })
    }

    profileFinder = (e) => {
        e.preventDefault()
        this.props.fetchUser(this.state.username)
    }

    render(){

        return(
            <div id="profileSearch">

                <form onSubmit={e => this.profileFinder(e)}>
                    <input type="text" minLength="4" onChange={e => this.handleChange(e)} required />
                    <button>Find</button>
                </form>
                
            </div>
        )
    }



}
const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { fetchUser })(ProfileSearch)