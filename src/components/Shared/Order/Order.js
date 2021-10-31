import './Order.css';


const Order = (props) =>{

    const {_id, address , location, name, date , orderStatus , persons}= props.order;

    return (
        <div className="col text-start px-2">
            <div className="order-container">
                    <div>
                        <h5>From {address} to {location}</h5>
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-between">
                            <h6> Name: {name}</h6>
                            <h6 className="text-highlight">Order Id: {_id}</h6>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-between">
                            <h6>Flight Date: {date}</h6>
                            {
                                orderStatus === "Pending" ?
                                    <h6>Order Status: <span  className="text-danger">{orderStatus}</span></h6>
                                    :
                                    <h6>Order Status: <span className="text-success">{orderStatus}</span></h6>
                            }
                        </div>
                        <h6>Tickets Booked: {persons}</h6>
                    </div>
                    <div >{props.children}</div>
            </div>
        </div>
    );
};

export default Order;