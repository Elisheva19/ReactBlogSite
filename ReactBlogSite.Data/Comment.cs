using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json.Serialization;


namespace ReactBlogSite.Data
{

  public class Comment
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; }
        public int PostId { get; set; }

        [JsonIgnore]
        public Post Post { get; set; }
    }
}

