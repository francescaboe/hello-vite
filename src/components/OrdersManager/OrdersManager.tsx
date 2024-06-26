import './OrdersManager.css';

function OrdersManager() {
    return (
        <div>
            <h1>Orders Manager</h1>
            <div  className="order-form-container">
                <h2>New Order</h2>
                <div className="order-form">
                    <select className="order-form-time">
                        <option className="order-form-time-option">Select a time</option>
                        <option className="order-form-time-option" value={1}>1 min</option>
                        <option className="order-form-time-option" value={2}>2 min</option>
                        <option className="order-form-time-option" value={3}>3 min</option>
                    </select>
                    <input className="order-form-name" type="text" placeholder="Order Title"/>
                </div>
            </div>
            <div className="current-orders-container">
                <h2>Current Orders</h2>
                <div className="orders-box-container">
                    <div className="orders-box">
                        <h3>in progress</h3>
                        <ul className="orders-box-ul">
                            <li className="orders-box-li">Order 1</li>
                            <li className="orders-box-li">Order 2</li>
                        </ul>
                    </div>
                    <div className="orders-box">
                        <h3>completed</h3>
                        <ul className="orders-box-ul">
                            <li className="orders-box-li">Order 1</li>
                            <li className="orders-box-li">Order 2</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersManager;