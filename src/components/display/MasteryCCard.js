import React from 'react'
import '../../componentStyling/MasteryCCard.css'

const MasteryCCard = props => {
    const {championMData} = props
    const {championId} = championMData
    const lastPlayed = new Date(championMData.lastPlayTime)
    return (
        // <div className="champion-card-container">
            <div className="title-and-container">
                <div className="name-container">
                    <h2>{championId.name}</h2>
                    <hr/>
                    <h5>{championId.title}</h5>
                </div>
                <div className="card-main">
                    <div className="champion-img-container">
                        <img src={championId.image.loading} alt={'hello'}/>
                    </div>
                    <div className="cm-data-container">
                        <h5>Champion Mastery Level: {championMData.championLevel}</h5>
                        <h5>Last played: {lastPlayed.toDateString()}</h5>
                        <h5>{championMData.chestGranted ? "Chest already earned":"Chest available for this champion"}</h5>
                    </div>
                </div>
            </div>
        // </div>
    )

}


export default MasteryCCard