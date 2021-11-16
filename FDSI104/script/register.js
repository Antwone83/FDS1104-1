console.log("Register page");
let house={
    name: "The Photogapher Pet House",
    address:{
        street:"Univeristy",
        number:"1234-G",
        zipcode: "92154",
        state:"CA",
        city:"San Diego",
    },
    hours:{
        open:"9:00 am",
        close:"22:00 pm"
    },
    pets:[
        {
            name:"Sam",
            age:"38",
            gender:"Female",
            breed:"Lab",
            service: "Photoshoots",
            owner: "Tony",
            phone:"555-555-5555"
        },
        {
            name:"Butch",
            age:"36",
            gender:"Male",
            breed:"Poodle",
            service:"Headshots",
            owner:"Karen",
            phone:"555-555-5553"
        },
        {
            name:"Lucky",
            age:"44",
            gender:"Male",
            breed:"Shitzu",
            service:"Headshots",
            owner:"John",
            phone:"555-555-5556"
        },
        {
            name:"Faith",
            age:"22",
            gender:"Female",
            breed:"Pitbull",
            service:"Fashion Shot",
            owner:"Chris",
            phone:"555-555-5559"
        }
   ]
}
console.log(house.address.city);
console.log(house.pets);
alert(house.pets.length+" registered pets");

function simpleDisplay(){
   console.log(house.pets[0].name);
    console.log(house.pets[1].name);
    console.log(house.pets[2].name);
    console.log(house.pets[3].name);
/*for(d=0;d<pets.length;d++){
    console.log(house.pets[d].name);

}*/

}
simpleDisplay();



