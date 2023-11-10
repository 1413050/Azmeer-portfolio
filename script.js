$(document).ready(function () {
    // $(window).scroll(function () {
    //   var scroll = $(window).scrollTop();
    //   if (scroll > 300) {
    //     $(".navbar-bg").css("background", "#96DED1");
    //     $(".navbar-bg").addClass('shadow');
    //     $(".nav_Name").text('Azmeer');
    //     $(".nav_Name").addClass('name-font');
    //   } else {
    //     $(".navbar-bg").css("background", "transparent");
    //     $(".nav_Name").text('Portfolio');
    //     $(".nav_Name").removeClass('name-font');
    //   }
    // });




    $('#projects-viewer').click(() => {
      
  let btnText=$('#projects-viewer').text();
        if(btnText=="View All"){
            $('.view-projects').fadeIn();
            $('#projects-viewer').text("View Less");
        } else {
            if(btnText=="View Less"){
                $('.view-projects').fadeOut();
                $('#projects-viewer').text("View All");
            }
        }
    });

     
 
  });




  fetch('./assets/portfolio.json')
    .then(response => response.json())
    .then(data => {
      // Get the portfolio container
      var portfolioContainer = document.getElementById("portfolio-container");

      // Limit the number of items to display (in this case, 6)
      var itemsToDisplay = Math.min(data.length, 8);

      // Loop through the first 6 items in the portfolio data
      for (var i = 0; i < itemsToDisplay; i++) {
        var item = data[i];

        // Create a portfolio item dynamically
        var portfolioItem = document.createElement("div");
        portfolioItem.classList.add("col-md-3");
        portfolioItem.classList.add("my-4");

        portfolioItem.innerHTML = `
          <div class="hovereffect">
            <img class="img-fluid" src="${item.cimg}" alt="portfolio-images"/>
            <div class="overlay">
              <h2 class="shadow">${item.cname}</h2>
              <p class="info gallery-slider">View All</p>
            </div>
          </div>
        `;

        // Append the portfolio item to the portfolio container
        portfolioContainer.appendChild(portfolioItem);
      }
    })
    .catch(error => console.error('Error fetching portfolio data:', error));







  
  'use strict';

  function progressBarAndCountNumber () {
      const progress = document.querySelectorAll('.progress');
      let count = 0;
      // You must put the maximum number in the MAX variable.
      let MAX = 100;
  
      let run = setInterval(() => {
          count++;
          progress.forEach(element => {
              if (count <= element.dataset.progress) {
                  element.parentElement.style.background = `conic-gradient(#ffff ${count}%, #212428 0)`;
                  element.firstElementChild.textContent = `${count}%`;
              };
              if (count == MAX) {
                  clearInterval(run);
              };
          });
      }, 20);
  }
  
  progressBarAndCountNumber();

 
// function emailSend(){
//     let  name = $('#Cname').val();
//     let  mail = $('#Cmail').val();
//     let  sub = $('#Csubject').val();
//     let  msg = $('#Cmessage').val();
  
    
// }

$('#send_btn').click(()=>{
    let  name = $('#Cname').val();
    let  mail = $('#Cmail').val();
    let  sub = $('#Csubject').val();
    let  msg = $('#Cmessage').val();
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if(name == "" && mail == "" && msg == "" && sub == ""){
        $('#Cname').addClass('is-invalid');
        $('#error_Cname').show();
        $('#Cmail').addClass('is-invalid');
        $('#error_Cmail').show();
        $('#Csubject').addClass('is-invalid');
        $('#error_Csubject').show();
        $('#Cmessage').addClass('is-invalid');
        $('#error_Cmessage').show();
        return;
    }else{
        if(name == ""){
        $('#Cname').addClass('is-invalid');
        $('#error_Cname').show();
        return;
    }else{
        $('#Cname').removeClass('is-invalid');
        $('#error_Cname').hide();
    }

   
    if (mail === "") {
    $('#Cmail').addClass('is-invalid');
    $('#error_Cmail').show();
    return;
    } else if (!emailRegex.test(mail)) {
    $('#Cmail').addClass('is-invalid');
    $('#error_Cmail').show().text('Invalid Email Format');
    return;
    } else {
    $('#Cmail').removeClass('is-invalid');
    $('#error_Cmail').hide();
    }

    if(sub == ""){
        $('#Csubject').addClass('is-invalid');
        $('#error_Csubject').show();
        return;
    }else{
        $('#Csubject').removeClass('is-invalid');
        $('#error_Csubject').hide();
    }
    if(msg == ""){
        $('#Cmessage').addClass('is-invalid');
        $('#error_Cmessage').show();
        return;
    }else{
        $('#Cmessage').removeClass('is-invalid');
        $('#error_Cmessage').hide();
    }

    let body= `Name: ${name} <br> Email: ${mail} <br> Subject: ${sub} <br> Message: ${msg}`;

    Email.send({
        SecureToken: "c4d4ec6a-72a8-46f1-9f7e-0773ebcdf35f",
        To: 'azmeershah621@gmail.com',
        From: 'azmeershah621@gmail.com',
        Subject: "This is from Azmeer-Portfolio contact form",
        Body: body,
      })
      .then(function (message) {
        alert("Mail sent successfully");
      })
      .catch(function (error) {
        console.error("Error sending email: " + error);
      });
      
      $('.form').submit();
   
    }
    
   
})

$('.home').click(function() {
    $('.sections').css('transform', 'translateX(-0%)');
});

$('.about').click(function() {
    $('.sections').css('transform', 'translateX(-100%)');
  });

$('.skills').click(function() {
    $('.sections').css('transform', 'translateX(-200%)');
});

$('.portfolio').click(function() {
    $('.sections').css('transform', 'translateX(-300%)');
});

$('.contact').click(function() {
    $('.sections').css('transform', 'translateX(-400%)');
});



fetch('./assets/portfolio.json')
    .then(response => response.json())
    .then(data => {
      // Get the slider wrapper
      var sliderWrapper = document.getElementById("portfolio-slider");

      // Loop through the data to create slides
      data.forEach((item, index) => {
        // Create a slide dynamically
        var slide = document.createElement("div");
        slide.classList.add("slides");

        slide.innerHTML = `
          <div class="row align-items-center">
          <div class="col-md-7">
            <img src="${item.cimg}" class="w-100" alt="${item.cname}" />
          </div>
          <div class="col-md-5">
            <h2 class="main-color">${item.cname}</h2>
            <h4 class="mt-md-5 mt-2">Category: <span class="h5">Website</span></h4>
            <h4 class="mt-md-5 mt-2">
              URL: <a class="h5" href="${item.curl}">${item.csite}</a>
            </h4>
            <h4 class="mt-3">About:</h4>
            <p class="text-justify">${item.cdetail}</p>
          </div>
          </div>

        `;

        // Append the slide to the slider wrapper
        sliderWrapper.appendChild(slide);

        
      });
    })
    .catch(error => console.error('Error fetching portfolio data:', error));






     // Fetch the JSON data
  fetch('./assets/portfolio.json')
  .then(response => response.json())
  .then(data => {
    // Get the slides navigation container
    var slidesNavContainer = document.querySelector("#slides_nav .slides-nav");

    // Loop through the data to create navigation slides
    data.forEach((item, index) => {
      // Create a navigation slide dynamically
      var navSlide = document.createElement("div");
      navSlide.classList.add("col", "mx-2");

      navSlide.innerHTML = `
        <img src="${item.cimg}" class="w-100 h-100" alt="${item.cname}" />
      `;

      // Append the navigation slide to the container
      slidesNavContainer.appendChild(navSlide);

      
    });
  })
  .catch(error => console.error('Error fetching portfolio data:', error));


