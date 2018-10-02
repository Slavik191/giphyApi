class GetImg {
    constructor(app) {
        this.key = '3QilPpAzXngyRapI2zVkza4r3Fe0VTpV';
        this.linkApp = app
        this.type = 'gifs';
        this.textSearch;
        this.offset = 0;
        this.limit = 25;
        this.loading = false;
    }


    inquiryImg(dropdown = false) {
        if (this.type === 'favorites') {
            this.linkApp.clearImgContainer();
            this.linkApp.indexedDB.showFavorites();
        }
        else {
            if (this.textSearch) {
                fetch(`https://api.giphy.com/v1/${this.type}/search?q=${this.textSearch}&api_key=${this.key}&limit=${dropdown ? 5 : this.limit}&offset=${dropdown ? 0 : this.offset}`)
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