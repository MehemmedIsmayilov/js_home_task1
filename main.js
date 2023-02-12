
const persons = [
    {
      id: 1,
      firstname: "Dan",
      lastname: "Tiger",
      image: "url",
      birthday: "03.18.1990",
      gender: "male",
      hobbie: ["Football", "Reading"],
      nationality: "switzerland",
      friends: [325330, 325334],
      residence: 10041
    },
    {
      id: 2,
      firstname: "Fan",
      lastname: "Tiger",
      image: "url",
      birthday: "03.18.2005",
      gender: "male",
      hobbie: ["Football", "Reading"],
      nationality: "switzerland",
      friends: [325330, 325334],
      residence: 10041
    },
    {
      id: 3,
      firstname: "Frank",
      lastname: "Lion",
      image: "url",
      birthday: "10.05.1991",
      gender: "male",
      hobbie: ["walking", "basketball"],
      nationality: "syria",
      friends: ["", "", ""],
      residence: 10041
    },
    {
      id: 4,
      firstname: "Bilal",
      lastname: "Zakki",
      image: "url",
      birthday: "08.19.1999",
      gender: "female",
      hobbie: ["swimming", "walking"],
      nationality: "canda",
      friends: [325330, 325326],
      residence: 10012
    }
  ]
  
  let resault;
  
  resault=persons.filter((item)=>item.gender=="male"); // 3 item
  resault=persons.some((item)=>item.gender=="male" || "female");  //true
  resault=persons.every((item)=>item.gender=="male"); //false
  resault=persons.every((item)=>item.gender=="male" || "female"); //true
  resault=persons.push(  // sonuna elave
    {
    id: 5,
    firstname: "Mahammad",
    lastname: "Ismayilov",
    image: "url",
    birthday: "08.19.1999",
    gender: "female",
    hobbie: ["swimming", "walking"],
    nationality: "canda",
    friends: [325330, 325326],
    residence: 10012
  });
  resault=persons.unshift(  //evveline elave
    {
    id: 6,
    firstname: "Mahammad",
    lastname: "Ismayilov",
    image: "url",
    birthday: "08.19.1999",
    gender: "female",
    hobbie: ["swimming", "walking"],
    nationality: "canda",
    friends: [325330, 325326],
    residence: 10012
  });
  
  resault=persons.find((item)=>item.id==6);  // 1 item
  
  
  
  console.log(resault);
  console.log(persons);
  
  