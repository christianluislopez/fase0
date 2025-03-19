
using Microsoft.EntityFrameworkCore;
using MovieApi.Domain;

namespace MovieApi.Persistence;
public class AppDbContext : DbContext
{
  public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
  {
  }

  public DbSet<Movie> Movies { get; set; }


  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<Movie>()
    .Property(m => m.Title)
    .IsRequired()
    .HasMaxLength(100);
  }

}
