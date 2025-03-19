using Microsoft.EntityFrameworkCore;
using MovieApi.Domain;

namespace MovieApi.Persistence.Repositories.Movies;
public class MovieRepository(AppDbContext appDbContext) : IMovieRepository
{
    AppDbContext _appDbContext => appDbContext;
    
    public async Task<Movie> Create(Movie movie)
    {
        await _appDbContext.AddAsync(movie);
        await _appDbContext.SaveChangesAsync();
        return movie;
    }

    public async Task<Movie> Get(int id)
    {
        return (await _appDbContext.Movies.FindAsync(id))!;
    }

    public async Task<IEnumerable<Movie>> GetAll()
    {
        return await _appDbContext.Movies.ToListAsync();
    }

    public Task<Movie> Update(Movie movieChanges)
    {
        throw new NotImplementedException();
    }

    public Task Delete(int id)
    {
        throw new NotImplementedException();
    }

}
