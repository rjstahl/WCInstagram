          window.addEventListener('scroll',function(){
              var distance = window.pageYOffset || document.documentElement.scrollTop
              var header = document.querySelector('header')
             
              // If the window has scrolled more than 200 pixels, add the header--small
              // Other wise, remove the .header-small class
              if(distance > 200){
                  header.classList.add('header--small')
                 } else {
                    header.classList.remove('header--small')
                 }
            })

            // Add click events to all the images
            const images = document.querySelectorAll('.image')
           images.forEach((image, index) =>{
               // Add a click event to the image
               // have the click event console.log(index)
               image.addEventListener('click',function(e){
                   e.preventDefault() // stop the click event from refreshing
                console.log(index)
               })
           
           })
