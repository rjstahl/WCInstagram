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
function addClickEvents(){
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
}
// Add Error Events to the images incae the image is not available
function addErrorEvents () {
    // Find the img tags inside the .image 
    // Loop through them and add "error" event
    // console.log('Error!') when the event occurs
    
    const images = document.querySelectorAll('.image img')
    images.forEach((image, index) =>{
        image.addEventListener('error', () =>{
           //const next = Math.round(Math.random()*1000)
           //this.src = `http://unsplast.it/300/?image = ${next}`
           image.src = `https://unsplash.it/300/?image = 580`
        })
    })

}
// function showFullImage(id) {  ... OLD WAY
    const showFullImage = id => {
    const fullContainer = document.querySelector('.full')
    const fullImage = fullContainer.querySelector('img')
    // Set the src to the fullImage to a bigger version
    fullImage.src = `https://unsplash.it/600/?image=${id}`
    // remove the hidden class from the fullContainer to show it
    fullContainer.classList.remove('hidden')
}
// Add Click event to the .full DIV so it adds the hidden class when clicked
    const fullContainer = document.querySelector('.full') 
    fullContainer.addEventListener('click',function(){
    fullContainer.classList.add('hidden')
})
/* .catch (error => {
    console.log('something went wrong!!!')
}) */

// Load Data from http://unsplast.it/list
// then convert to JSAON
// Then grab 20 random images 
// then add images to HTML and call addClickEvents
// Use fetch() to load remote data - utilizies promises
    fetch('https://unsplash.it/list')
        // after done loading it does the next step
        .then(result => {
        return result.json() // convert the text to json data
        // can also list as follows - always line within a fetch
        //.then ( result =>.json())
    })
    // next then done
    .then(result => {
        // Now that we have the data, we can work with it
        // create an emtpy array to hold random numbers
        let randoms = []
        // Loop 20 times to get a new random number in the array
        for (let i=0; i<20; i++) {
            // generate random: Math.round(Math.random() * 30).. 
            randoms.push(Math.round(Math.random()*result.length) )
        }
        // Make an images array to store our random images
        let images = result.filter(image => {
            return randoms.includes(image.id)
        })
        // console.log(randoms,images)
      
        populateImages(images)
        addClickEvents()
        addErrorEvents()
    }) // end of fetch

    // This function will all all the images we loaded remotely
    // to the HTML page
    function populateImages(imageArray) {
        // Need a variable for the image container
         const imageContainer = document.querySelector('.images .inner')
        // Then we need to loop though the imageArry
        // maybe just console.log something to make sure it is working
        imageArray.forEach((image, index) =>{
            const html = `<a href="" class="image">
                    <img src="https://unsplash.it/300/?image=${image.id}" alt="${image.author}">
                    <span class="image__cover">View Image</span>
                    </a>`
            imageContainer.innerHTML += html
        })
    } 
    