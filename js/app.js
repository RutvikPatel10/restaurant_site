
  const readMoreBtn = $(".read-more-btn1");
  $(readMoreBtn).click(function(){
      $(".pera1").toggleClass("show-more");
      if(readMoreBtn.text() === ">>Read More"){
        $(".read-more-btn1").text(">>Read less");
      }
      else{
        readMoreBtn.text(">>Read More");
      }
    });

  const readMoreBtn2 = $(".read-more-btn2");
  $(readMoreBtn2).click(function(){
      $(".pera2").toggleClass("show-more");
      if(readMoreBtn2.text() === ">>Read More"){
        $(".read-more-btn2").text(">>Read less");
      }
      else{
        readMoreBtn2.text(">>Read More");
      }
    });  