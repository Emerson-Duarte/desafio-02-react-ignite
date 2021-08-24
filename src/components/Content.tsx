import { MovieCard } from "./MovieCard";

interface IContent {
  titleHeader: string,
  items: {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }[],
};

export function Content({ titleHeader, items }: IContent) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {titleHeader}</span></span>
      </header>
      <main>
        <div className="movies-list">
          {items.map(item => (
            <MovieCard key={item.imdbID} title={item.Title} poster={item.Poster} runtime={item.Runtime} rating={item.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
};