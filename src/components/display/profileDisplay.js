import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProfileSearch from '../functional/profileSearch'
import MasteryCContainer from '../functional/MasteryCContainer'
import '../../componentStyling/profileDisplay.css'

 class ProfileDisplay extends Component {
     render(){
        const { profile } = this.props

        return(
            <div id="profileDisplay">
                <ProfileSearch />
                <div id="profile-container">
                    <div>
                        <img id="picon" src={profile.profileIconId} alt={'hello'}/>
                    </div>
                    <div id="profile-text">
                        <h2>{profile.name}</h2>
                        <h5>Summoner Level: {profile.summonerLevel}</h5>
                    </div>
                </div>
                <MasteryCContainer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    profile: state.profile.user
})

export default connect(mapStateToProps)(ProfileDisplay)

// const ProfileDisplay = ({ potato }) => {

//     const profile = useSelector(state => state.profile)
//     console.log(potato)

//     return <div id="profileDisplay">
//         <ProfileSearch />
//         <img src={profile.user.profileIconId} alt={'hello'}/>
//     </div>
// }

// export default ProfileDisplay