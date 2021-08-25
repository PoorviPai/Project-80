var name_of_guest_array=[];


function submit()
{
    var guest_name=document.getElementById("name_of_the_guest_1").value
    name_of_guest_array.push(guest_name);
    console.log(guest_name);
    console.log(name_of_guest_array);
    var length=name_of_guest_array.length;
    console.log(length);
    document.getElementById("display_names").innerHTML=name_of_guest_array;
}

function sorting()
{
    name_of_guest_array.sort();
    var i=name_of_guest_array.join("<br>");
    console.log(name_of_guest_array);
    document.getElementById("dispay_sorted_name").innerHTML=i;
}

function search()
{
    var s=document.getElementById("search").value;
    var found=0;
    var j;
    for(j=0;j<name_of_guest_array.length;j++)
    {
        if(s==name_of_guest_array[j]){
            found=found+1;
        }
    }
    document.getElementById("display_search_name").innerHTML="name found"+found+"time/s";
    console.log("found name"+found+"time/s");
}

function show(){
    var i=name_of_guest_array.join("<br>");
    console.log(name_of_guest_array);
    document.getElementById("display_proper").innerHTML=i;
    document.getElementById("show_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}




