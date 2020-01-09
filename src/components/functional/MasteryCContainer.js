import React, { Component } from 'react'
import { connect } from 'react-redux'
import MasteryCCard from '../display/MasteryCCard'
import '../../componentStyling/MasteryCContainer.css'

 class MasteryCContainer extends Component {

    generateChampionCards = () => {
        // console.log(this.props)
        return this.props.championList ? this.props.championList.map((champion) => <MasteryCCard championMData={champion} key={champion.championId.key} /> )
        : <h1>Please search a summoner</h1>

    }

    render(){
        return(
            <div id="champions-container">
                {this.generateChampionCards()}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    championList: state.profile.user.CMList
})

export default connect(mapStateToProps)(MasteryCContainer)