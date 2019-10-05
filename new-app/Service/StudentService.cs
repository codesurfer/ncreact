using new_app.Entity.Model;
using new_app.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace new_app.Service
{
    public class StudentService : IStudentService
    {
        IStudentRepo studentRepo;
        public StudentService(IStudentRepo studentRepo)
        {
            this.studentRepo = studentRepo;
        }

        public async Task<IEnumerable<Student>> GetStudents()
        {
            return await studentRepo.GetAllStudent();
        }

    }
}
