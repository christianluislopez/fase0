using MovieApi.Domain;

namespace MovieApi.Persistence.Repositories.Movies;
public interface IMovieRepository 
{
  Task<Movie> Create(Movie movie);
  Task<Movie> Get(int id);
  Task<IEnumerable<Movie>> GetAll();
  Task<Movie> Update(Movie movieChanges);
  Task Delete(int id);
}
