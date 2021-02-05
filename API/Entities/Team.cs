using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Teams")]
    public class Team
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int ShortName { get; set; }
        public AppUser AppUser { get; set; }
        public int AppUserId { get; set; }
        
        
        
        
    }
}