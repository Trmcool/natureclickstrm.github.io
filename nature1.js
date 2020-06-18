function show(bg)
{
    document.getElementById('hey').style.backgroundImage= "url("+bg.src+")";
}

function menu()
{
  var x= document.getElementById('navi').querySelectorAll('a');
  var i;
  for ( i = 0; i < x.length; i++) {
      x[i].style.display="block";
      
  }
}

function nomenu(){
    var z = document.getElementById('navi').querySelectorAll('a');
    var j;
    for (j= 0; j < z.length; j++) {
        z[j].style.display = "none";

    }
}