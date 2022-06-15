export default function Header() {
  return (
    <header>
      <div className="headerContainer">
        <h1 className="mainTitle">Perfume Graphy</h1>
        <h2 className="subTitle">오늘 당신은 어떤 향기를 입고 있나요?</h2>
        <p className="subText">
          '나의 향수는 나의 일부가 되고 아무도 그것을 모방할 수 없다.'<br /><br />
          현대 사회에서 향수란 나의 정체성을 의미합니다.<br />
          나에게 맞는 향수를 찾아가는 것은 나의 정체성을 찾아가는 과정이기도 합니다.
        </p>
        <h2 className="subTitle">지금, 당신은 스스로에게 만족스러운 향수를 사용하고 있나요?</h2>
        <p className="subText">
          전 세계 수만 개의 향수 중 당신의 향수를 찾는 것은 운명과도 같습니다.<br />
          그렇기에 퍼퓸그라피는 오늘도 향기와 사람을 잇는 매개체가 되어<br />
          새로운 향수들을 끊임없이 탐구하는 일을 멈추지 않습니다.<br /><br />
          당신의 일부가 되는 최적의 향수를 찾는 일, 그것이 퍼퓸그라피가 존재하는 이유입니다.
        </p>
        <div className="btnArea">
          <a href="https://perfumegraphy.com/" target="_blank" rel="noreferrer">
            <button>Try It Yourself</button>
          </a>
        </div>
      </div>
    </header>
  );
}