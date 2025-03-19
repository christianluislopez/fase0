namespace MovieApi.Domain;
public class Movie 
{
  public int Id {get; set;} 
  public string Title {get; set; } = string.Empty;
  public string Author {get; set; } = string.Empty;
  public string Language {get; set; } = string.Empty;
  public DateTime ReleaseDate {get; set;} = DateTime.Now;
  public string EditorialEmail {get; set; } = string.Empty;
  public string EditorialPhone {get; set; } = string.Empty;
}