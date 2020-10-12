tipCalculator=()=>{
    var bill = document.getElementById('input-bill').value;
    var rating = document.getElementById('service-rating').value;
    var people = document.getElementById('how-many-people').value;

    if(people<=0){
        alert("You should input correct number of people");
    }
    else if(bill<=0){
        alert("Wrong value of bill");
    }
    else{
        var tip = Math.floor((bill*rating)/people);
    }

    document.getElementById('tip').innerHTML = tip + " PLN";
    document.getElementById('input-bill').value="";
    document.getElementById('service-rating').value="";
    document.getElementById('how-many-people').value="";
}
