import './Order.css';


const Order = (props) =>{

    const {address , location, name, date , orderStatus , persons}= props.order;

    return (
        <div className="bg-dark m-3 text-light">
            <h3>{address}</h3>
            <h3>{name}</h3>
            <h3>{location}</h3>
            <h3>{date}</h3>
            <h3>{orderStatus}</h3>
            <h3>{persons}</h3>
            <div>{props.children}</div>
        </div>
    );
};

export default Order;