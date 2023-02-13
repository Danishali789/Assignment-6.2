// $(document).ready(function(){
   // $("#p1").click(function(){
   //    $("#box2").append(function(){
        
   //       return $(".p1").html()
   //    });
   //    $(".p1").remove();
   // });

   // $("#p2").click(function(){
   //    $(".p2").hide();
   //    $("#box2").append(function(){
   //       return $(".p2").html()
   //    });
   // });

   // $("#box1 #p3").click(function(){
   //    var box1Elem=$(".p3 ");
   //    $("#box2").append($(box1Elem).clone());
   //    $(box1Elem).remove();
   // });

   // $("#box2 #p3").click(function(){
   //    var box1Elem=$("#p3");
   //    $("#box1").append($(box1Elem).clone());
   //    $(box1Elem).remove();
   // });
   function moveButton(elem){
      if( $(elem).parent().attr("id")=="box1"){
         $(elem).appendTo("#box2");
      }else{
         $(elem).prependTo("#box1");
      }
   }

// });