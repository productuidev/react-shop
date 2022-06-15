// item data
const prototypes = [
  {
    id : "pp-01",
    title : "조말론 와일드 블루벨 코롱 30ml",
    price : "79,800",
    description : "연보랏빛 샴푸 향기가 주변을 같은 색으로 은은하게 물들이는 아름다움",
    thumbnail : "https://m.perfumegraphy.com/web/product/big/202107/639949a623bbb6daf4c293fdf1d29558.jpg",
    review : "84",
    url : "https://www.perfumegraphy.com/product/%EC%A1%B0%EB%A7%90%EB%A1%A0-%EC%99%80%EC%9D%BC%EB%93%9C-%EB%B8%94%EB%A3%A8%EB%B2%A8-%EC%BD%94%EB%A1%B1-30ml/1557/category/375/display/1/",
  },
  {
    id : "pp-02",
    title : "킬리안 롤링 인 러브 오 드 퍼퓸 50ml",
    price : "275,000",
    description : "글라스 볼에 올려진 바닐라 아이스크림 한 스쿱과 그 위를 천천히 녹이는 따스한 아몬드 밀크",
    thumbnail : "https://m.perfumegraphy.com/web/product/medium/202206/027aa511da39f43e88d584990f4559d5.jpg",
    review : "26",
    url : "https://perfumegraphy.com/product/%ED%82%AC%EB%A6%AC%EC%95%88-%EB%A1%A4%EB%A7%81-%EC%9D%B8-%EB%9F%AC%EB%B8%8C-%EC%98%A4-%EB%93%9C-%ED%8D%BC%ED%93%B8-50ml/2432/category/375/display/1/",
  },
  {
    id : "pp-03",
    title : "에트로 라자스탄 오 드 퍼퓸 100ml",
    price : "143,000",
    description : "자유를 찾아 유랑하는 집시,보헤미안 스타일의 묵직한 앰버와 미모사 그리고 머스크의 폭닥한 향기",
    thumbnail : "https://m.perfumegraphy.com/web/product/medium/202206/989d152fd78e144ce0404c47503e98d6.jpg",
    review : "43",
    url : "https://perfumegraphy.com/product/%EC%97%90%ED%8A%B8%EB%A1%9C-%EB%9D%BC%EC%9E%90%EC%8A%A4%ED%83%84-%EC%98%A4-%EB%93%9C-%ED%8D%BC%ED%93%B8-100ml/2430/category/375/display/1/",
  },
  {
    id : "pp-04",
    title : "퍼퓸드말리 사파나드 75ml",
    price : "295,000",
    description : "석양의 차분함을 닮은 오렌지 블라썸에 차분하게 녹아드는 일랑일랑과 바닐라",
    thumbnail : "https://m.perfumegraphy.com/web/product/medium/202012/93ddd25240b7737b5924eafee90e6a39.jpg",
    review : "51",
    url : "https://perfumegraphy.com/product/%ED%8D%BC%ED%93%B8%EB%93%9C%EB%A7%90%EB%A6%AC-%EC%82%AC%ED%8C%8C%EB%82%98%EB%93%9C-75ml/1961/category/375/display/1/",
  },
  {
    id : "pp-05",
    title : "퍼퓸 드 말리 델리나 75ml",
    price : "310,000",
    description : "엄친딸 포스 나는 예쁘고 달콤한 리치 바닐라와 피오니의 사기적인 향기",
    thumbnail : "https://m.perfumegraphy.com/web/product/medium/202107/9d4b20d5dfd3db7e6df245b51bfda799.jpg",
    review : "22",
    url : "https://perfumegraphy.com/product/%ED%8D%BC%ED%93%B8-%EB%93%9C-%EB%A7%90%EB%A6%AC-%EB%8D%B8%EB%A6%AC%EB%82%98-75ml/1957/category/375/display/1/",
  },
  {
    id : "pp-06",
    title : "퍼퓸드말리 달시 오 드 퍼퓸 75ml",
    price : "264,000",
    description : "퍼퓸드말리 여성향수, 달시",
    thumbnail : "https://m.perfumegraphy.com/web/product/medium/202011/018a94b80b430dc04b9f741f40d95ec7.jpg",
    review : "37",
    url : "https://perfumegraphy.com/product/%ED%8D%BC%ED%93%B8%EB%93%9C%EB%A7%90%EB%A6%AC-%EB%8B%AC%EC%8B%9C-%EC%98%A4-%EB%93%9C-%ED%8D%BC%ED%93%B8-75ml/1974/category/375/display/1/",
  },
  {
    id : "pp-07",
    title : "메종마르지엘라 플라워마켓 100ml",
    price : "145,000",
    description : "자취가 아련하게 남아 반응 좋은 촉촉한 가든 플라워 향기",
    thumbnail : "https://m.perfumegraphy.com/web/product/medium/201903/75370cfa1ac0b0465e8732719b4b36fb.jpg",
    review : "6",
    url : "https://perfumegraphy.com/product/%EB%A9%94%EC%A2%85%EB%A7%88%EB%A5%B4%EC%A7%80%EC%97%98%EB%9D%BC-%ED%94%8C%EB%9D%BC%EC%9B%8C%EB%A7%88%EC%BC%93-100ml/1547/category/375/display/1/",
  },
  {
    id : "pp-08",
    title : "딥디크 로드네롤리 오 드 뚜왈렛 100ml",
    price : "175,000",
    description : "밝은 햇살을 머금은 비터 오렌지가 싱그럽게 흔들리는 네롤리의 푸른 잎사귀에 스며드는 순간",
    thumbnail : "https://m.perfumegraphy.com/web/product/medium/202206/74ecb8dcfc6e0763b17aad00420d0c2b.jpg",
    review : "6",
    url : "https://perfumegraphy.com/product/%EB%94%A5%EB%94%94%ED%81%AC-%EB%A1%9C%EB%93%9C%EB%84%A4%EB%A1%A4%EB%A6%AC-%EC%98%A4-%EB%93%9C-%EB%9A%9C%EC%99%88%EB%A0%9B-100ml/2422/category/375/display/1/",
  },
  {
    id : "pp-09",
    title : "딥디크 오 모헬리 오 드 뚜왈렛 100ml",
    price : "175,000",
    description : "샛노란 꽃들 사이로 허브향을 싣고 불어오는 산들바람, 그리고 일랑일랑의 향기",
    thumbnail : "https://m.perfumegraphy.com/web/product/medium/202205/b9dc8ae38a2be7bd20f980c0e74e27ea.jpg",
    review : "9",
    url : "https://perfumegraphy.com/product/%EB%94%A5%EB%94%94%ED%81%AC-%EC%98%A4-%EB%AA%A8%ED%97%AC%EB%A6%AC-%EC%98%A4-%EB%93%9C-%EB%9A%9C%EC%99%88%EB%A0%9B-100ml/2413/category/375/display/1/",
  },
  {
    id : "pp-10",
    title : "산타마리아 노벨라 아쿠아 디 콜로니아 프리지아 100ml",
    price : "152,000",
    description : "새하얀 수건을 개어놓은 듯한 고혹적인 비누향기",
    thumbnail : "https://m.perfumegraphy.com/web/product/medium/202205/43e3417cc92df451523559c6a8760a18.jpg",
    review : "483",
    url : "https://perfumegraphy.com/product/%EC%82%B0%ED%83%80%EB%A7%88%EB%A6%AC%EC%95%84-%EB%85%B8%EB%B2%A8%EB%9D%BC-%EC%95%84%EC%BF%A0%EC%95%84-%EB%94%94-%EC%BD%9C%EB%A1%9C%EB%8B%88%EC%95%84-%ED%94%84%EB%A6%AC%EC%A7%80%EC%95%84-100ml/1380/category/375/display/1/",
  },
  {
    id : "pp-11",
    title : "프레데릭말 윈로즈 30ml",
    price : "192,000",
    description : "야생화 기운을 받은 로즈, 그 치명적인 매력의 생장미 향기",
    thumbnail : "https://m.perfumegraphy.com/web/product/medium/202201/6bae15c1e133beba623da1bf89af431c.jpg",
    review : "29",
    url : "https://perfumegraphy.com/product/%ED%94%84%EB%A0%88%EB%8D%B0%EB%A6%AD%EB%A7%90-%EC%9C%88%EB%A1%9C%EC%A6%88-30ml/1601/category/375/display/1/",
  },
  {
    id : "pp-12",
    title : "딥디크 도손 오 드 퍼퓸 75ml",
    price : "198,000",
    description : "쌉싸름한 깨끗함에 바닐라를 섞은, 아이보리색 튜베로즈 향기",
    thumbnail : "https://m.perfumegraphy.com/web/product/medium/202108/16e4196e2357d1763772c4ac1dcf138e.jpg",
    review : "323",
    url : "https://perfumegraphy.com/product/%EB%94%A5%EB%94%94%ED%81%AC-%EB%8F%84%EC%86%90-%EC%98%A4-%EB%93%9C-%ED%8D%BC%ED%93%B8-75ml/1369/category/375/display/1/",
  },
  {
    id : "pp-13",
    title : "불리 오 트리플 다마스크 로즈 75ml",
    price : "170,000",
    description : "장미 본연의 분위기, 온전한 아름다움으로 모두를 납득시키는 유려함",
    thumbnail : "https://m.perfumegraphy.com/web/product/medium/202108/16e4196e2357d1763772c4ac1dcf138e.jpg",
    review : "13",
    url : "https://perfumegraphy.com/product/%EB%B6%88%EB%A6%AC-%EC%98%A4-%ED%8A%B8%EB%A6%AC%ED%94%8C-%EB%8B%A4%EB%A7%88%EC%8A%A4%ED%81%AC-%EB%A1%9C%EC%A6%88-75ml/2116/category/375/display/1/",
  },
];

export default function Prototypes() {
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