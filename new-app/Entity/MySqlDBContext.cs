using Microsoft.EntityFrameworkCore;
using new_app.Entity.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace new_app.Entity
{
    public class MySqlDBContext : DbContext
    {
        public MySqlDBContext(DbContextOptions<MySqlDBContext> options) : base(options)
        {
            //Database.SetCommandTimeout(150000);
        }

        public DbSet<Student> Student { get; set; }

        public override int SaveChanges()
        {
            ChangeTracker.DetectChanges();

            return base.SaveChanges();
        }
    }
}
