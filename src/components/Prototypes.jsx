import usePrototypes from "../hooks/usePrototypes";

export default function Prototypes() {
  const prototypes = usePrototypes();

  return(
    <main>
      <h3 className="subTitle-2">새로 입고된 상품</h3>
      <div className="prototypes">
        {prototypes.map(prototype => {
          const { id, title, price, description, thumbnail, review, url }= prototype;
          return(
            <div className="prototype" key={id}>
              <a href={url} target="_blank" rel="noreferrer">
                <img src={thumbnail} alt={title} className="prototype__thumbnail" />
                <div className="prototype__body">
                  <dl className="prototype__item">
                    <dt className="item__title">{title}</dt>
                    <dd className="item__desc">{description}</dd>
                  </dl>
                  <p className="item__price">{price}원</p>
                  <p className="item__review">리뷰 {review}</p> 
                </div>
                <button className="item__add">
                  <span className="blind">상품 추가하기</span>
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </main>
  );
}