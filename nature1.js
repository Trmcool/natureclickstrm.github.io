function show(bg)
{
    document.getElementById('hey').style.backgroundImage= "url("+bg.src+")";
}


    function grid() {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.msFlex = "25%";  // IE10
            elements[i].style.flex = "25%";
        }
