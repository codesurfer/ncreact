using Microsoft.EntityFrameworkCore;
using new_app.Entity;
using new_app.Entity.Model;
using new_app.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace new_app.Repo
{
    public class StudentRepo : IStudentRepo
    {
        private readonly MySqlDBContext _context;
        public StudentRepo(MySqlDBContext mySqlDBContext)
        {
            _context = mySqlDBContext;
        }

        public async Task<IEnumerable<Student>> GetAllStudent()
        {
            var result = await _context.Student.ToListAsync();
            return result;
        }

    }
}
