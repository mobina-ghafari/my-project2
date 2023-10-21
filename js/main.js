$(window) .scroll(function(){
    let position = $(this) .scrollTop();
    if(position >=50){
        $('.my-nav') .addClass('change-navbar')
    }else{
        $('.my-nav') .removeClass('change-navbar')
    }
})