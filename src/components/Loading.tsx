import "../styles/Loading.css";

export default function Loading() {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="loading">
        <span className="l">L</span>
        <span className="o">o</span>
        <span className="a">a</span>
        <span className="d">d</span>
        <span className="i">i</span>
        <span className="n">n</span>
        <span className="g">g</span>
        <span className="d1">.</span>
        <span className="d2">.</span>
        <div className="load">
          <div className="progress"></div>
          <div className="progress"></div>
          <div className="progress"></div>
          <div className="progress"></div>
        </div>
      </div>
    </section>
  );
}
