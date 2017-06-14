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
               // this captures the current image src property
               const source = this.querySelector('img').src 
               // this captures the current image number in the url
               const id = source.split('=')[1]
               showFullImage(id)
               })
          })
          // function showFullImage(id) {  ... OLD WAY
          const showFullImage = id => {
              const fullContainer = document.querySelector('.full')
              const fullImage = fullContainer.querySelector('img')
              // Set the src to the fullImage to a bigger version
              fullImage.src = `http://unsplash.it/600/?image=${id}`
              // remove the hidden class from the fullContainer to show it
            fullContainer.classList.remove('hidden')
          }
          // Add Click event to the .full DIV so it adds the hidden class when clicked
            const fullContainer = document.querySelector('.full') 
            fullContainer.addEventListener('click',function(){
            fullContainer.classList.add('hidden')
            })

