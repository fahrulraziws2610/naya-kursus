const biodata = {
    firstName : "Fahrul",
    lastName : "Razi",
    age : 24,
    address : "jogja",
    hobi : {
        outdor : ["Pantai", "gunung", "kota"],
        indor : ["mall", "cafe", "stretfood"]
    }
}

for (let index in biodata) {
    biodata.age = 50
    delete biodata.lastName
    console.log(biodata[index])
    // console.log(biodata.hobi.outdor[1])
}


function checkjadwal(task) {
    if (task.hasOwnProperty('timework') && task.timework === '08.00') {
      return true;
    } else {
      return false;
    }
  }
  
  const task1 = {
    name: 'Hendi',
    timework: '08.00',
    shift: 'pagi'
  };
  
  const task2 = {
    name: 'robi',
    timework: '15.00',
    shift: 'Beginner'
  };
  
  console.log(checkjadwal(task1));
  console.log(checkjadwal(task2));
  
  


// console.log(biodata.hobi.indor)

//==============================================================

// const laptop = {
//     color: "gold",
//     merk: "asus",
//     shape: "square",
//     total: 20,
//     isUsed: true,
//     "display type": "TN",
//     memories: ["1GB", "2GB", "10GB"],
//     cpu: {
//         name: "intel",
//         gen: 12,
//         codename: "alder lake"
//     }
// };

// // console.log(laptop.memories[2])

// const arrlaptops = [];

// for (let key in laptop){
//     arrlaptops.push(laptop[key]);
//     console.log(laptop[key]);
// }

// // console.log(arrlaptops);

// // console.log(laptop.cpu.name);
// // console.log(laptop.memories);

// const laptops = [
//     {
//         color: "gold",
//         merk: "asus",
//         shape: "square",
//         total: 20,
//         isUsed: true,
//         "display type": "TN",
//         memories: ["1GB", "2GB", "10GB"],
//         cpu: {
//             name: "intel",
//             gen: 12,
//             codename: "alder lake"
//         }
//     },
//     {
//         color: "gold",
//         merk: "HP",
//         shape: "square",
//         total: 20,
//         isUsed: true,
//         "display type": "TN",
//         memories: ["1GB", "2GB", "10GB"],
//         cpu: {
//             name: "intel",
//             gen: 12,
//             codename: "alder lake"
//         }
//     }
// ]

// // console.log(laptops);

// const newLaptop = {
//     color: laptop.color,
//     // merk: laptop.merk,
//     shape: laptop.shape,
//     total: laptop.total,
//     isUsed: laptop.isUsed,
//     "display type": laptop["display type"]
// }

// const laptop2 = {
//     ...laptop,
//     color: "hendi"
// }

// console.log(laptop);
// console.log(laptop2);

// // console.log("new laptop", newLaptop);



// // console.log(laptop);
// // console.log(laptop.merk);
// // console.log(laptop.isUsed);
// // console.log(laptop["color"]);
// // console.log(laptop["display type"]);
// // laptop.keyboard = "qwerty";
// // laptop.color = "silver";
// // console.log(laptop);
// // delete laptop.merk;
// // console.log(laptop);


// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     ssn: '123-456-2356',
//     walking: function(){
//         return this.firstName + " is walking"
//     }
// };


// let job = {
//     jobTitle: 'JavaScript Developer',
//     country: 'USA'
// };

// const employee = Object.assign(person, job, {key:"value"});
// const employee2 ={...person, ...job, key: "value"};
// console.log(employee.walking());
// console.log(employee2);