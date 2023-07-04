var student = {
    name: "Mohan Kumar",
    Dept: "ISE",
    id: 056
  };
  for(const pop of student)
  {
    console.log(student[pop])
  }
  // Get the keys of the object
  var keys = Object.keys(student);
  
  // Loop through the keys and print the values
  for (var i = 0; i < keys.length; i++) {
    console.log(keys[i] + ", " + student[keys[i]]);
  }
  