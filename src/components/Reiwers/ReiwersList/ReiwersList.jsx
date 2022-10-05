export default function ReiwersList({ movieReiwers }) {
  const results = movieReiwers.map(({ id, author, content }) => {
    return (
      <li key={id}>
        <h4>author: {author ? author : '...'}</h4>
        <p>{content ? content : '...'}</p>
      </li>
    );
  });

  return <ul>{results}</ul>;
}
