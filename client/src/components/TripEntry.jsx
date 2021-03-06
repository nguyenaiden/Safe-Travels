import React, { PropTypes } from 'react';
import RemoveSavedTripButton from './RemoveSavedTripButton';

const propTypes = {
  trip: PropTypes.object.isRequired,
};

const TripEntry = ({trip}) => {
  return (
    <div>
      <div className="restaurant-list-entry col-md-4">
        <div className="card card-block">
          <img className="rounded card-img-top yelp-img" src={trip.imageUrl} alt="restaurant" />
          <div>
            <h4 className="card-title restaurant-li">
              <a href={trip.informationUrl} >{trip.name}</a>
            </h4>
            <h5>Address: {trip.address}</h5>
            <h5>{trip.city}, {trip.state} {trip.zipCode}</h5>
            <p>Hours:
            {
              trip.hours[0].open.map( (trip, index) => (
                <p
                key={index}
                >
                  {trip.day}: {trip.start}-{trip.end}
                </p>
              ))
            }
            </p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

TripEntry.propTypes = propTypes;
export default TripEntry;
