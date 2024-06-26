import React from "react";
import { v4 as uuid } from "uuid";
import './OrdersManager.css';

interface Order {
    id: string;
    name: string;
    duration: number;
    status: string;
}

const STATUS = {
    progress: 'progress',
    done: 'done'
}

function OrdersManager() {
    const [duration, setDuration] = React.useState<number | undefined>(undefined);
    const [name, setName] = React.useState<string>("");
    const [orders, setOrders] = React.useState<Order[]>([]);

    const handleAddOrderClick = () => {
        if (duration && name) {
            const newOrder: Order = {
                id: uuid(),
                name,
                duration,
                status: STATUS.progress
            };
            setOrders((prev)=> [...prev, newOrder]);
            setName('');
            setDuration(undefined);

            setTimeout(()=>{
                setOrders((prev)=> prev.map((o)=> o.id === newOrder.id ? {...o, status: STATUS.done} : o));
            },newOrder.duration*1000)
        }
    }

    return (
        <div>
            <h1>Orders Manager</h1>
            <div  className="order-form-container">
                <h2>New Order</h2>
                <div className="order-form">
                    <select
                        value={duration}
                        className="order-form-time"
                        onChange={(e) => setDuration(parseInt(e.target.value))}
                    >
                        <option className="order-form-time-option">Select a time</option>
                        <option className="order-form-time-option" value={1}>1 sec</option>
                        <option className="order-form-time-option" value={2}>2 sec</option>
                        <option className="order-form-time-option" value={3}>3 sec</option>
                        <option className="order-form-time-option" value={10}>10 sec</option>
                    </select>
                    <input value={name} onChange={(e)=>setName(e.target.value)} className="order-form-name" type="text" placeholder="Order Title"/>
                    <button disabled={!duration || !name} onClick={handleAddOrderClick} className="order-form-button">Add order</button>
                </div>
            </div>
            <div className="current-orders-container">
                <h2>Current Orders</h2>
                <div className="orders-box-container">
                    <div className="orders-box">
                        <h3>in progress</h3>
                        <ul className="orders-box-ul">
                            {orders.filter((order)=> order.status === STATUS.progress).map(({id, name}) => <li key={id} className="orders-box-li">{name}</li>)}
                        </ul>
                    </div>
                    <div className="orders-box">
                        <h3>completed</h3>
                        <ul className="orders-box-ul">
                            {orders.filter((order)=> order.status === STATUS.done).map(({id, name}) => <li key={id} className="orders-box-li">{name}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersManager;