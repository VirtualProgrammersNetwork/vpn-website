const InitialDecorate = ({ initial }: { initial: string }): JSX.Element => (
  <div className="inline text-6xl text-blue-600">{initial}</div>
);

const IndexHero = (): JSX.Element => (
  <div className="">
    {/* 横幅が小さい時, `V``P``N`が縦に並ぶようにする */}
    <h1 className="h-48 flex justify-center items-center">
      <i className="drop-shadow">
        <InitialDecorate initial="V" />
        irtual&ensp;
        <InitialDecorate initial="P" />
        rogrammers&apos;&ensp;
        <InitialDecorate initial="N" />
        etwork
      </i>
    </h1>
  </div>
);

export default IndexHero;
