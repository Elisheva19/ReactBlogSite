using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactBlogSite.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlogSite.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPost : ControllerBase
    {
        public readonly string _connectionstring;
        public BlogPost(IConfiguration configuration)
        {
            _connectionstring = configuration.GetConnectionString("ConStr");
        }

        [Route("getall")]
        [HttpGet]
        public List<Post> GetAll(int pgnum)
        {
            var repo = new BlogSiteRepository(_connectionstring);
            return repo.GetAll(pgnum);
        }
        [Route("gettotal")]
        public int GetTotal()
        {
            var repo = new BlogSiteRepository(_connectionstring);
            return repo.GetPostCount();
        }

        [Route("addpost")]
        [HttpPost]
        public void AddPost(Post newpost)
        {
            var repo = new BlogSiteRepository(_connectionstring);
            repo.AddPost(newpost);
        }

        [Route("getbyid")]
        public Post GetById(int id)
        {
            var repo = new BlogSiteRepository(_connectionstring);
            return repo.GetById(id);
        }

        [Route("addcomment")]
        [HttpPost]
        public void AddComment(Comment newcmmt)
        {
            var Cookievalue = Request.Cookies["commenter-name"];
            Response.Cookies.Append("commenter-name", newcmmt.Name);
            var repo = new BlogSiteRepository(_connectionstring);
            repo.AddComment(newcmmt);
        }

        [Route("recent")]
        [HttpGet]
        public Post MostRecent()
        {
            var repo = new BlogSiteRepository(_connectionstring);
            return repo.MostRecent();
        }
        [Route("cookieval")]
        public string Cookie()
        {
            return Request.Cookies["commenter-name"];
        }
    }
}
