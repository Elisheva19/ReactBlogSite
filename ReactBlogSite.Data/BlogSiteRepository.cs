using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace ReactBlogSite.Data
{
    public class BlogSiteRepository
    {

        private readonly string _connectionString;

        public BlogSiteRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Post> GetAll(int pgnum)
        {
            using var context = new BlogDataContext(_connectionString);
            return context.Posts.OrderByDescending(p=>p.Date).Skip(pgnum).Take(3).ToList();
        }
        public int GetPostCount()
        {
            using var context = new BlogDataContext(_connectionString);
            return context.Posts.Count();
        }
        public void AddComment(Comment newcmt)
        {
            using var context = new BlogDataContext(_connectionString);
            context.Comments.Add(newcmt);
            context.SaveChanges();

        }
        public void AddPost(Post newpost)
        {
            using var context = new BlogDataContext(_connectionString); 
            context.Posts.Add(newpost);
            context.SaveChanges();

        }
        public Post GetById(int id)
        {
            using var context = new BlogDataContext(_connectionString);
            return context.Posts.Include(p=>p.Comments).FirstOrDefault(p=> p.Id==id);

        }

        public List<Comment> ComentsForPost(int id)
        {
            using var context = new BlogDataContext(_connectionString);
            return context.Comments.Where(c => c.PostId == id).ToList();
        }

        public Post MostRecent()
        {
            using var context = new BlogDataContext(_connectionString);
            return context.Posts.Include(p=> p.Comments).OrderByDescending(p => p.Date).First();
        }


    }
}
    
