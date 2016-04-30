function Slider() {
    $("#slider #img1").show("fade", 500);
    $("#slider #img1").delay(5500).hide("fade", 500);

    var sc=$("#slider img").size();
    var count=2;

    setInterval(function(){
        $("#slider #img"+count).show("fade",500);
        $("#slider #img"+count).delay(5500).hide("fade", 500);

        if(count==sc){
            count=1;
        }else{
            count = count + 1;  
        }
    },6500);
}