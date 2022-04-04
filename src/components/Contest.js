import React from 'react';
import "../styles/Contest.css"
import ContestCard from './ContestCard';



const Contest = ({ name, content }) => {
    return (
        <div className="contest">
            <div className="contest_heading">
                <p>{name} = {content.length}</p>
            </div>

            <div className="ContestCards">
                {content.map((data, index) => <ContestCard key={index} name={data.name} url={data.url} start_time={data.start_time} end_time={data.end_time} duration={data.duration} site={data.site} />)}
            </div>
        </div>
    )
}

export default Contest;