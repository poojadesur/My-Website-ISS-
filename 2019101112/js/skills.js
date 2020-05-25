window.onscroll = function() {
    myFunction()
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// form functions

/*let skillsArray = [];

let skills;

if(localStorage.getItem('skills')) 
{
    skills = JSON.parse(localStorage.getItem('skills'));
} else {
    skills = [];
}   

localStorage.setItem('skills',JSON.stringify(skillsArray));
const data = JSON.parse(localStorage.getItem('skills'));

e.preventDefault();

skillsArray.push(input.value);
localStorage.setItem('skills',JSON.stringify(itemsArray));

data.forEach(item =>) {

} */

function add()
{

    var formdata = document.getElementById("fo");
    var returned = localStorage.getItem("key");
    var data = JSON.parse(returned);
    var count = localStorage.getItem("c");

    if(count === null){

            count=0;

    }

    if(data === null){

        data = [];

    }

    for(var i=0;i<4;i++)
    {
        data[count] = formdata.elements[i].value;
        count++;

    }

    localStorage.setItem("key",JSON.stringify(data));
    localStorage.setItem("c",count);
    return false;
}

function table_upd()
{

    var tab=document.getElementById("skill");
    var table_count=tab.rows.length;
    while(table_count > 1){

            tab.deleteRow(table_count - 1);
            table_count--;

    }




var count_2 = localStorage.getItem("c");
var returned_2 = localStorage.getItem("key");
var data_2 = JSON.parse(returned_2);
for(var h=0;h<count_2;h++)
{

    if(h%4 === 0)
    {
            var row = tab.insertRow((h/4)+1);
            var cell = row.insertCell(h%4);
            cell.innerHTML = data_2[h];
            continue;
    }

    var cell = row.insertCell(h%4);
    cell.innerHTML = data_2[h];


}

}

function ResetForm() {
    document.getElementById("fo").reset();
}

