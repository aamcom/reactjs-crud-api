import React, { Component } from 'react';
import ReservationItem from './ReservationItem';

class Reservations extends Component {

deleteReservation(id){
    this.props.onDelete(id);
}
  render() {
    let reservationItems;
    let resaNb = this.props.reservations.length;
    if(this.props.reservations){
        reservationItems = this.props.reservations
            .map(reservation => {
                //console.log(reservation);
                return (
                    <ReservationItem onDelete={this.deleteReservation.bind(this)} key={reservation.ID} reservation={reservation} />
                );
            });
    }
    //console.log(this.props);
    return (
      <div className="Reservations">
        <h3>Latest reservation ({resaNb})</h3>
        {reservationItems}
      </div>
    );
  }
}
/*
Reservations.propTypes = {
    reservations: React.propTypes.array,
    onDelete: React.propTypes.func
}
*/
export default Reservations;
