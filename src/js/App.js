import GetImg from './GetImg';
import IndexedDB from './IndexedDB'

class App {
    constructor() {
        this.indexedDB = new IndexedDB(this);
        this.getImg = new GetImg(this);
        this.arrImages = [];
    }

    createImg(url, id = null) {
        let div = document.createElement('div');
        div.className = 'imgContainer';
        let heart = document.createElement('div');
        if(this.getImg.type === 'favorites'){
            div.id = `${id}`;
            heart.style.background = 'red';
            heart.addEventListener('click', event => {
                event.target.style.background = 'inherit'; 
                this.indexedDB.removeFavorite(event.target.parentNode.id);
                imgsContainer.removeChild(event.target.parentNode);
                this.arrImages.slice
                this.arrImages = this.arrImages.filter(tag => {
                    return tag !== event.target.parentNode;
                })
            })
        }
        else{
            heart.addEventListener('click', event => {
                event.target.style.background = 'red';
                this.indexedDB.addFavorit({ url: event.target.parentNode.firstChild.src })
            })
        }
        heart.className = 'heart';
        let img = document.createElement('img');
        img.src = url;
        div.appendChild(img);
        div.appendChild(heart);
        this.arrImages.push(div);
        imgsContainer.appendChild(div);
    }

    createDropDown(url){
        let div = document.createElement('div');
        div.className = 'imgContainer';
        let img = document.createElement('img');
        img.src = url;
        div.appendChild(img);
        this.arrImages.push(div);
        dropdown.appendChild(div);
    }

    clearImgContainer() {
        this.arrImages.forEach(img => {
            imgsContainer.removeChild(img);
        });
        this.arrImages = [];
    }
}

export default App;