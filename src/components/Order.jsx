import useOrders from "../hooks/useOrders";
import usePrototypes from '../hooks/usePrototypes';
import useActions from '../hooks/useActions';
import { useMemo } from "react";

export default function Orders() {
  const orders = useOrders();
  const prototypes = usePrototypes();
  const {remove, removeAll} = useActions();
  //console.log(orders);

  const totalPrice = useMemo(()=>{
    return orders.map((order)=>{
      const {id, quantity} = order;
      const prototype = prototypes.find(p=>p.id === id);

      return prototype.price * quantity;
    })
    .reduce((l,r)=>l+r, 0);
  }, [orders, prototypes]);

  if(orders.length === 0) {
    return(
      <aside>
        <div className="orderList">
          <div className="itemTitle">주문하신 상품이 없습니다.</div>
          <div className="subDesc">+를 누르면 상품이 담김니다.</div>
        </div>
      </aside>
    );
  }

  return (
    <aside>
      <div className="order">
        <div className="body">
          {orders.map((order)=>{
            const {id} = order;
            const prototype = prototypes.find(p=>p.id === id);
            const click = () => {
              remove(id)
            }

            return (
              <div className="item" key={id}>
                <div className="img">
                  <video src={prototype.thumbnail} />
                </div>
                <div className="content">
                  <p className="title">{prototype.title} x {order.quantity}</p>
                </div>
                <div className="action">
                  <p className="price">{prototype.price * order.quantity} 원</p>
                  <button className="btn btnLink" onClick={click}>
                    <i className="icon icon-corss" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">
          <hr />
          <div className="itme">
            <div className="content">Total</div>
            <div className="action">
              <div className="price">{totalPrice} 원</div>
            </div>
            <button className="btn btnLint" onClick={removeAll}>
              <i className="icon icon--delete" />
            </button>
          </div>
          <button className="btn btnSecondary" style={{width:"100%", marginTop:10}}>Checkout</button>
        </div>
      </div>
    </aside>
  );
}