class GetImg{
    constructor(){
        this.type = 'gifs';
        this.textSearch;
        this.offset = 0;
        this.loading = false;
        this.arrImages = [];
    }


    inquiryImg(){
        fetch(`https://api.giphy.com/v1/${this.type}/search?q=${this.textSearch}&api_key=3QilPpAzXngyRapI2zVkza4r3Fe0VTpV&limit=10&offset=${this.offset}`,
        {crossdomain: true})
            .then(data =>{
                return data.json()
            })
            .then(data => {
                console.log(data)
                data.data.forEach(images => {
                    let div = document.createElement('div');
                    div.className = 'imgContainer';
                    let heart = document.createElement('div');
                    heart.className = 'heart';
                    let img = document.createElement('img');
                    img.src = images.images.fixed_width.url;
                    div.appendChild(img);
                    div.appendChild(heart);
                    this.arrImages.push(div);
                    imgsContainer.appendChild(div);
                })
                this.offset += 10;
                this.loading = false;
            })
    }

    searchInfo(){

    }

    clearImgContainer(){
        this.arrImages.forEach(img => {
            imgsContainer.removeChild(img);
        });
        this.arrImages = [];
    }
}

export default GetImg;