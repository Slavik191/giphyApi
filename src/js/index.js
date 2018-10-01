import App from './App';
import '../sass/style.sass';

const app = new App;

//app.IndexedDB.initialization();

[gifs, stickers, favorites].forEach(button => {
    button.addEventListener('click', (event) => {
        if(app.getImg.type !== event.target.getAttribute('data-type')){
            app.getImg.type = event.target.getAttribute('data-type');
            app.getImg.clearImgContainer();
            app.getImg.offset = 0;
            app.getImg.loading = true;
            app.getImg.inquiryImg();
        }
    })
})

search.addEventListener('click', () => {
    if(app.getImg.textSearch !== textSearch.value.split(' ').join('+').trim()){
        app.getImg.clearImgContainer();
        app.getImg.offset = 0;
        app.getImg.loading = true;
        app.getImg.textSearch = textSearch.value.split(' ').join('+').trim();
        app.getImg.inquiryImg();
    }
})

document.addEventListener('wheel', event => {
    if(!app.getImg.loading && document.documentElement.scrollTop + document.documentElement.clientHeight === document.body.scrollHeight){
        app.getImg.loading = true;
        app.getImg.inquiryImg(textSearch.value);
    }
});