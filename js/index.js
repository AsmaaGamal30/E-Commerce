  $(document).ready(function() {
      $(".loader").fadeOut(1500, function() {
          $(".spiner").fadeOut(500)
          $("body").css("overflow", "auto")
      });

  })



  $("#all").click(function() {
      $("#allPage").removeClass("d-none");
      $("#menPage").addClass("d-none");
      $("#womenPage").addClass("d-none");
      $("#laptopPage").addClass("d-none");
      $("#mopilePage").addClass("d-none");
  });


  $("#men").click(function(e) {
      $("#menPage").removeClass("d-none");


      $("#allPage").addClass("d-none");
      $("#womenPage").addClass("d-none");
      $("#laptopPage").addClass("d-none");
      $("#mopilePage").addClass("d-none");
  });


  $("#women").click(function(e) {
      $("#womenPage").removeClass("d-none");
      $("#allPage").addClass("d-none");
      $("#menPage").addClass("d-none");
      $("#laptopPage").addClass("d-none");
      $("#mopilePage").addClass("d-none");
  });
  $("#laptop").click(function(e) {
      $("#laptopPage").removeClass("d-none");

      $("#allPage").addClass("d-none");
      $("#menPage").addClass("d-none");
      $("#womenPage").addClass("d-none");
      $("#mopilePage").addClass("d-none");

  });
  $("#mopile").click(function(e) {
      $("#mopilePage").removeClass("d-none");

      $("#allPage").addClass("d-none");
      $("#menPage").addClass("d-none");
      $("#womenPage").addClass("d-none");
      $("#laptopPage").addClass("d-none");
  });
  $(".fa-heart ").click(function() {
      $(this).toggleClass("black");
  })



  var allImage = Array.from(document.querySelectorAll("#allPage .card img"))
  var lightBoxContainer = document.getElementById("lightBoxContainer")
  var lightBox = document.getElementById("lightBox")
  var closeBtn = document.getElementById("closeBtn")
  for (var i = 0; i < allImage.length; i++) {
      allImage[i].addEventListener(`click`, function(e) {
          lightBoxContainer.classList.replace("d-none", "d-flex")
          let currentImg = e.target.getAttribute("src")
          let currentproduct = $(this).siblings().text().trim().split("\n");
          $("#textProduct h3").text(currentproduct[0].trim())
          $("#textProduct #colorProduct").text(currentproduct[1].trim())
          $("#textProduct #price").text(currentproduct[2].trim())
          $("#inner").attr("src", currentImg);
      })
  }

  closeBtn.addEventListener(`click`, closeImg)

  function closeImg() {
      lightBoxContainer.classList.replace("d-flex", "d-none")
  }




  var allImageMen = Array.from(document.querySelectorAll("#menPage .card img"))
  var lightBoxContainerMen = document.getElementById("lightBoxContainerMen")
  var lightBoxMen = document.getElementById("lightBoxMen")
  var closeBtnMen = document.getElementById("closeBtnMen")
  for (var i = 0; i < allImageMen.length; i++) {
      allImageMen[i].addEventListener(`click`, function(e) {
          lightBoxContainerMen.classList.replace("d-none", "d-flex")
          var currentImg = e.target.getAttribute("src")
          let currentproduct = $(this).siblings().text().trim().split("\n");
          $("#textProduct h3").text(currentproduct[0].trim())
          $("#textProduct #colorProduct").text(currentproduct[1].trim())
          $("#textProduct #price").text(currentproduct[2].trim())
          $("#menPage #inner").attr("src", currentImg);

      })
  }
  closeBtnMen.addEventListener(`click`, closeImgMen)

  function closeImgMen() {
      lightBoxContainerMen.classList.replace("d-flex", "d-none")
  }


  var allImagelap = Array.from(document.querySelectorAll("#laptopPage .card img"))
  var lightBoxContainerlap = document.getElementById("lightBoxContainerlap")
  var lightBoxlap = document.getElementById("lightBoxlap")
  var closeBtnlap = document.getElementById("closeBtnlap")
  for (var i = 0; i < allImagelap.length; i++) {
      allImagelap[i].addEventListener(`click`, function(e) {
          lightBoxContainerlap.classList.replace("d-none", "d-flex")
          var currentImg = e.target.getAttribute("src")
          let currentproduct = $(this).siblings().text().trim().split("\n");
          $("#textProduct h3").text(currentproduct[0].trim())
          $("#textProduct #colorProduct").text(currentproduct[1].trim())
          $("#textProduct #price").text(currentproduct[2].trim())
          $("#laptopPage #inner").attr("src", currentImg);

      })
  }
  closeBtnlap.addEventListener(`click`, closeImglap)

  function closeImglap() {
      lightBoxContainerlap.classList.replace("d-flex", "d-none")
  }






  var allImageWomen = Array.from(document.querySelectorAll("#womenPage .card img"))
  var lightBoxContainerWomen = document.getElementById("lightBoxContainerWomen")
  var lightBoxWomen = document.getElementById("lightBoxWoWomen")
  var closeBtnWomen = document.getElementById("closeBtnWomen")
  for (var i = 0; i < allImageWomen.length; i++) {
      allImageWomen[i].addEventListener(`click`, function(e) {
          lightBoxContainerWomen.classList.replace("d-none", "d-flex")
          var currentImg = e.target.getAttribute("src")
          let currentproduct = $(this).siblings().text().trim().split("\n");
          $("#textProduct h3").text(currentproduct[0].trim())
          $("#textProduct #colorProduct").text(currentproduct[1].trim())
          $("#textProduct #price").text(currentproduct[2].trim())
          $("#womenPage #inner").attr("src", currentImg);

      })
  }
  closeBtnWomen.addEventListener(`click`, closeImgWomen)

  function closeImgWomen() {
      lightBoxContainerWomen.classList.replace("d-flex", "d-none")
  }




  var allImageMop = Array.from(document.querySelectorAll("#mopilePage .card img"))
  var lightBoxContainerMop = document.getElementById("lightBoxContainerMop")
  var lightBoxMop = document.getElementById("lightBoxMop")
  var closeBtnMop = document.getElementById("closeBtnMop")
  for (var i = 0; i < allImagelap.length; i++) {
      allImageMop[i].addEventListener(`click`, function(e) {
          lightBoxContainerMop.classList.replace("d-none", "d-flex")
          var currentImg = e.target.getAttribute("src")
          let currentproduct = $(this).siblings().text().trim().split("\n");
          $("#textProduct h3").text(currentproduct[0].trim())
          $("#textProduct #colorProduct").text(currentproduct[1].trim())
          $("#textProduct #price").text(currentproduct[2].trim())
          $("#mopilePage #inner").attr("src", currentImg);

      })
  }
  closeBtnMop.addEventListener(`click`, closeImgMop)

  function closeImgMop() {
      lightBoxContainerMop.classList.replace("d-flex", "d-none")
  }