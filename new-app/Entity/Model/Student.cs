using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace new_app.Entity.Model
{
    [Table("student")]
    public class Student
    {
        [Key]
        public int Id { get; set; }
        [Column("Name")]
        public string Name { get; set; }
        [Column("Address")] 
        public string Address { get; set; }
    }
}
