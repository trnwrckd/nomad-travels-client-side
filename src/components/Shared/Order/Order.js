import './Order.css';


const Order = (props) =>{

    const {address , location, name, date , orderStatus , persons}= props.order;

    return (
        <div className="col">
            <div className="order-container">
                <h5>Destination: {location}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <h5> Name: {name}</h5>
                    <h6> Location:{address}</h6>
                </div>
                <div className="d-flex justify-content-around">
                    <h6>Flight Date: {date}</h6>
                    {
                        orderStatus === "Pending" ?
                            <h6>Order Status: <span  className="text-danger">{orderStatus}</span></h6>
                            :
                            <h6>Order Status: <span className="text-success">{orderStatus}</span></h6>
                    }
                </div>
                <h6>Tickets Booked: {persons}</h6>
                <div>{props.children}</div>
            </div>
        </div>
    );
};

export default Order;