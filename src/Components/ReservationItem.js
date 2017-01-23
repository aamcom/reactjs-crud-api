import React, { Component } from 'react';

class ReservationItem extends Component {

deleteReservation(id){
    this.props.onDelete(id);
}
  render() {
      console.log("resa",this.props);
    return (
      <li className="Reservation">
        <a href="#" onClick={this.deleteReservation.bind(this,this.props.reservation.ID)}>X</a> |  
        <strong>{this.props.reservation.ID}</strong>    :    
        {this.props.reservation.scooterName}  :   
        {this.props.reservation.StartDate}  :   
        {this.props.reservation.LastStatus} :   
        {this.props.reservation.EndDate}   | 
        (
            {this.props.reservation.Fleet_name} , 
            {this.props.reservation.Fleet_ID} , 
            {this.props.reservation.Fleet_Status} , 
            {this.props.reservation.Service_name} , 
            {this.props.reservation.Service_ID}
        ) 
      </li>
    );
  }
}

export default ReservationItem;


/*
{
    "username":"nabil_tec@prod",
    "ClientIdBoss":"-1",
    "scooterName":"scoot 434",
    "ID":177215,
    "IDResaBoss":-1,
    "Code":"2225",
    "LastStatus":"PAUSE",
    "Timer":1800,
    "StartDate":"2017-01-09T22:55:37.21",
    "EndDate":null,
    "ScooterId":"286641134",
    "IDResaKM":177215,
    "AccountID":9328,
    "EndPendingDate":"2017-01-09T22:58:43.35",
    "ScooterAzureID":518,
    "Fleet_name":"beta 2",
    "Fleet_ID":12,
    "Fleet_Status":"maintenance",
    "Service_name":"Beta 2",
    "Service_ID":4
}
*/