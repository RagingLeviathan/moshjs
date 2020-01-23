//method -> obj -- what this references
//example of this rule ---vvvv

var video = {
    title: 'some title',
    play () {
        console.log(this);
    }
};

video.stop = function() {
    console.log(this);
    }

video.play();

//function -> global -- (window, global)

function Video(title) {
    this.title = title;
    console.log(this);
}

var v = new Video('lorem');

//another method 

var videoBeta = {
    title: 'a',
    tags: ['x','y','z'],
    showTags() {
        //this is wrong, this calls Window/global object, because it was a regular, annoymous callback function and this puts this out of scope of videoBeta object
        // this.tags.forEach(function(tag) {
        //     console.log(this,tag);
        // });

        //solution ;
        this.tags.forEach(function(tag) {
            console.log(this.title,tag);
        }, this);
    }
};

videoBeta.showTags();