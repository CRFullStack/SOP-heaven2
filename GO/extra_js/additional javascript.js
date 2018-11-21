// JavaScript source code


// This can be used to preload the images. Still needs a way to loop through the dictionary of images
// to-do: test if the preload script works. This is needed because of the amount of pictures that will be requested
function preloadTopLayerPics() {
    // counter
    var i = 0;
    // create object
    imageObj = new Image();
    // set image list
    images = new Array();
    images[0] = "GO/5-1_IA.png"
    images[1] = "pics/callback.png"
    images[2] = "pics/t&r.png"
    images[3] = "pics/t&rCont.png"
    // start preloading
    for (i = 0; i <= 3; i++) {
        imageObj.src = images[i];
    }
    alert("All images have completed downloading.");
}

// to-do preload all files in the folder of the clicked button
function preloadBottomLayerPics() {
    var i = 0;
    imageObj = new Image(); // create object
    images = new Array(); // set image list
}


