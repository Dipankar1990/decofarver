$(document).ready(function(){
  $(".show").click(function(){
    $(".popup").show(500)
  });

   $(".fancybox-button").click(function(){
    $(".popup").hide(500)
  });
    
 


$(document.body).on('change', '#farver_kategori' ,function(){
            var selected_val = this.value;
            console.log(selected_val);
          $('.farve').css('display', 'none');
           $('div.farve[type="'+selected_val+'"]').css('display', 'block');
            var i = 0;
            $('div.farve[type="'+selected_val+'"]').each(function(){
                if(i== 0 ){
                  $(this).trigger('click')      
                }
                i++;
            });
  
});

 $(document.body).on('click', '.farve' ,function(){
            var that = $(this);
            var color_id = that.attr('color_id');
            $('.fixedfixed li').css('display', 'none');
            $('.farve').removeClass('selected');
            $('.fixedfixed li[color_id="'+color_id+'"]').css('display', 'block');
            $(that).addClass('selected');
        });


        $('#farver_kategori').val('standard_farver').trigger('change');
        $('.farver_farver[type="standard_farver"]:nth-child(2)').trigger('click');

     
     $(".humb img").click(function(e){
         e.preventDefault();
         $(".img img").attr("src", $(this).attr("src"));
     })


});

