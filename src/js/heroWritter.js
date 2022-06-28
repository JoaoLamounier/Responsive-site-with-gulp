$(document).ready(function(){
    if(window.matchMedia("(max-width: 800px)").matches){
        var html = '<div class="heroTitle">LOREM IPSILUM</div>';
        html += '<div class="heroText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>';
        html += '<img src= "src/images/loremImage.png" class="heroImage">';

        $( ".hero" ).append( html );

        $(".hero").removeClass('hero').addClass('heroMobile');
    } else{
        var html = '<div class="heroTitle">LOREM IPSILUM</div>';
        html += '<div class="heroText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</div>';

        $( ".hero" ).append( html );
    }
});