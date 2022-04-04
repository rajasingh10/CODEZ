import React from 'react';
import "../styles/ContestCard.css"

const ContestCard = ({ name, url, start_time, end_time, duration, site }) => {
    const convertTime = (duration) => {
        var sec = Number(duration);
        var hr = Math.floor(sec / 3600);
        return hr > 24 ? Math.floor(hr / 24).toString() + " days" : hr == 1 ? hr.toString() + " hr" : hr.toString() + " hrs";
    }


    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    function IndianDate(date_str) {
        var dt = new Date(date_str);
        return dt.toString();
    }

    function IndianTime(date_str) {
        var dt = new Date(date_str);
        return dt.toLocaleString();
    }

    return (
        <a href={url} target="_blank" className="contestCard">
            <div >
                <div className="contestCard_content">
                    <div className="heading">
                        <h3>{name}</h3>
                    </div>
                    <div className="details">
                        <p className="start_time"><span>{IndianDate(start_time).substring(0, 15)}<br /><span>{IndianTime(start_time).split(',')[1].split(':')[0]}:{IndianTime(start_time).split(',')[1].split(':')[1]} {IndianTime(start_time).split(',')[1].split(' ')[2]}</span></span></p>
                        <p className="end_time"><span>{IndianDate(end_time).substring(0, 15)}<br /><span>{IndianTime(end_time).split(',')[1].split(':')[0]}:{IndianTime(start_time).split(',')[1].split(':')[1]} {IndianTime(start_time).split(',')[1].split(' ')[2]}</span></span></p>
                        <p className="duration">{convertTime(duration)}</p>
                    </div>

                </div>
                <div className="contestCard_name">
                    <p>{site}</p>
                </div>
            </div>
        </a>
    )
}

export default ContestCard;