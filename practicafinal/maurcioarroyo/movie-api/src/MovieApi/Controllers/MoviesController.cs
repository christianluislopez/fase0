


using Microsoft.AspNetCore.Mvc;
using MovieApi.Domain;
using MovieApi.Persistence.Repositories.Movies;

namespace MovieApi.Controllers;
[ApiController]
[Route("[controller]")]
public class MoviesController(IMovieRepository taskRepository) : ControllerBase
{
  IMovieRepository _taskRepository => taskRepository;

  [HttpPost]
  public async Task<ActionResult> Post(CreateMovieRequest request)
  {
    var movie = request.ToDomain();

    await _taskRepository.Create(movie);

    var response = CreateTaskResponse.FromDomain(movie);
    return CreatedAtAction(actionName: nameof(Get), routeValues: new { id = movie.Id }, value: response);
  }

  [HttpGet("{id}")]
  public async Task<ActionResult> Get(int id)
  {
    var task = await _taskRepository.Get(id);

    var response = CreateTaskResponse.FromDomain(task);
    return Ok(response);
  }

  [HttpGet]
  public async Task<ActionResult> GetAll()
  {
    var movies = await _taskRepository.GetAll();

    var response = movies.Select(m => CreateTaskResponse.FromDomain(m));
    return Ok(response);
  }

  public record CreateMovieRequest(
    string title,
    string author,
    string language,
    string releaseDate,
    string editorialEmail,
    string editorialPhone)
  {

    public Movie ToDomain()
    {
      return new Movie()
      {
        Title = title,
        Author = author,
        Language = language,
        ReleaseDate = DateTime.Parse(releaseDate).ToUniversalTime(),
        EditorialEmail = editorialEmail,
        EditorialPhone = editorialPhone,
      };
    }

    public Movie ToDomain(int id)
    {
      return new Movie() { Id = id, Title = title, };
    }
  }

  public record CreateTaskResponse(
    int id,
    string title,
    string author,
    string language,
    string releaseDate,
    string editorialEmail,
    string editorialPhone)
  {
    public static CreateTaskResponse FromDomain(Movie movie)
    {
      return new CreateTaskResponse(
        movie.Id,
        movie.Title,
        movie.Author,
        movie.Language,
        movie.ReleaseDate.ToString(),
        movie.EditorialEmail,
        movie.EditorialPhone);
    }
  }
}


// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;
// using MyTaskApi.Persistence.Repositories.Tasks;

// namespace MyTaskApi.Controllers;

// [ApiController]
// [Route("[controller]")]
// public class TasksController(ITaskRepository taskRepository) : ControllerBase
// {
//   //CRUD 
//   // POST 
//   // GET 
//   // GET 
//   // PUT 
//   // DELETE
//   ITaskRepository _taskRepository => taskRepository;

//   [HttpPost]
//   public async Task<ActionResult> Post(CreateTaskRequest request)
//   {
//     var task = request.ToDomain();

//     await _taskRepository.Create(task);

//     var response = CreateTaskResponse.FromDomain(task);
//     return CreatedAtAction(actionName: nameof(Get), routeValues: new { id = task.Id }, value: response);
//   }

//   [HttpGet("{id}")]
//   public async Task<ActionResult> Get(int id)
//   {
//     var task = await _taskRepository.Get(id);

//     var response = CreateTaskResponse.FromDomain(task);
//     return Ok(response);
//   }

//   [HttpGet]
//   public async Task<ActionResult> GetAll()
//   {
//     var tasks = await _taskRepository.GetAll();

//     var response = tasks.Select(t => CreateTaskResponse.FromDomain(t));
//     return Ok(response);
//   }

//   [HttpPut("{id}")]
//   public async Task<ActionResult> Put(int id, CreateTaskRequest request)
//   {
//     var task = request.ToDomain(id);

//     await _taskRepository.Update(task);

//     return NoContent();
//   }

//   [HttpDelete("{id}")]
//   public async Task<ActionResult> Delete(int id)
//   {
//     await _taskRepository.Delete(id);
//     return NoContent();
//   }

//   public record CreateTaskRequest(string title, string description)
//   {
//     public Domain.Task ToDomain()
//     {
//       return new Domain.Task() { Title = title, Description = description };
//     }

//     public Domain.Task ToDomain(int id)
//     {
//       return new Domain.Task() { Id = id, Title = title, Description = description };
//     }
//   }

//   public record CreateTaskResponse(int id, string title, string description)
//   {
//     public static CreateTaskResponse FromDomain(Domain.Task task)
//     {
//       return new CreateTaskResponse(task.Id, task.Title, task.Description);
//     }
//   }
// }
