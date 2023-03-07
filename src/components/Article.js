export default function Article() {
  return (
    <>
      {" "}
      {/* fragment: <> -> es kann nur 1 element returned werden*/}
      <article className="article">
        <h2 className="article__title">this is a beautiful h2</h2>
        <label htmlFor="currywurst"></label>
        <input id="currywurst"></input>
        <a
          className="article__link"
          href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"
        >
          Link
        </a>
      </article>
      <p></p>
    </>
  );
}
