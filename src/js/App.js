import GetImg from './GetImg';
import IndexedDB from './IndexedDB'

class App {
    constructor() {
        this.indexedDB = new IndexedDB(this);
        this.getImg = new GetImg(this);
        this.arrImages = [];
        this.arrImagesSearch = [];
    }

    createImg(url, id = null) {
        let div = document.createElement('div');
        div.className = 'imgContainer';
        let heart = document.createElement('div');
        if(this.getImg.type === 'favorites'){
            div.id = `${id}`;
            heart.className = 'cross';
            heart.addEventListener('click', event => {
                this.indexedDB.removeFavorite(event.target.parentNode.id);
                imgsContainer.removeChild(event.target.parentNode);
                this.arrImages.slice
                this.arrImages = this.arrImages.filter(tag => {
                    return tag !== event.target.parentNode;
                })
            })
        }
        else{
            heart.className = 'heart';
            let add = (() =>{
                let add = true;
                return event => {            
                    if(add){
                        this.indexedDB.addFavorit({ url: event.target.parentNode.firstChild.src })
                        add = false
                    }                   
                }
            })()
            heart.addEventListener('click', add)
        }
        let img = document.createElement('img');
        img.src = url;
        div.appendChild(img);
        div.appendChild(heart);        
        this.arrImages.push(div);
        imgsContainer.appendChild(div);
    }

    createDropDown(url){
        let div = document.createElement('div');
        div.className = 'imgSearchContainer';
        let heart = document.createElement('div');
        heart.className = 'heart';
        let add = (() =>{
            let add = true;
            return event => {            
                if(add){
                    this.indexedDB.addFavorit({ url: event.target.parentNode.firstChild.src })
                    add = false
                }                   
            }
        })()
        heart.addEventListener('click', add)
        let img = document.createElement('img');
        img.src = url;
        div.appendChild(img);
        div.appendChild(heart);
        this.arrImagesSearch.push(div);
        dropdown.appendChild(div);
    }

    clearImgContainer() {
        this.arrImages.forEach(img => {
            imgsContainer.removeChild(img);
        });
        this.arrImages = [];
    }

    clearDropDown() {
        this.arrImagesSearch.forEach(img => {
            dropdown.removeChild(img);
        });
        this.arrImagesSearch = [];
    }
}

export default App;