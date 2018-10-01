class GetImg {
    constructor(app) {
        this.linkApp = app
        this.type = 'gifs';
        this.textSearch;
        this.offset = 0;
        this.limit = 5;
        this.loading = false;
        this.arrImages = [];
    }


    inquiryImg(dropdown = false) {
        if (this.type === 'favorites') {
            this.linkApp.clearImgContainer();
            this.linkApp.indexedDB.showFavorites();
        }
        else {
            if (this.textSearch) {
                fetch(`https://api.giphy.com/v1/${this.type}/search?q=${this.textSearch}&api_key=3QilPpAzXngyRapI2zVkza4r3Fe0VTpV&limit=${this.limit}&offset=${this.offset}`)
                    .then(data => {
                        return data.json()
                    })
                    .then(data => {
                        if(!dropdown){
                            data.data.forEach(images => {
                                this.linkApp.createImg(images.images.fixed_width.url);
                            })
                            this.offset += 15;
                            this.loading = false;
                        }
                        else{
                            data.data.forEach(images => {
                                this.linkApp.createDropDown(images.images.fixed_width.url);
                            })                                
                        }
                    })
            }
        }
    }
}

export default GetImg;