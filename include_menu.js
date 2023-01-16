$(document).ready(
    function (){
            
        let menu="menu_ajax.html";//passando menu
        $.get(menu,
            function (html) {
                let i=0
                $('.menu').html(html)
                $('#sublist').click(function(){
                    
                    if(i%2==0){
                        $("#submenu").css({"display":"flex","background-color":"#4d68e4"})
                        $("#sublist").css({"background-color":"#4d68e4"})

                    }else{
                        $("#sublist").css({"background-color":"#7c90e7"})
                        $("#submenu").css("display","none")
                    }

                    i++;
                })
            })
        
        let footer="footer_ajax.html"
        $.get(footer,
            function (html) {
                $('footer').html(html)
            })
        
    }
);