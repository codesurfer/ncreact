﻿using new_app.Entity.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace new_app.Interface
{
    public interface IStudentService
    {
        Task<IEnumerable<Student>> GetStudents();
    }
}
