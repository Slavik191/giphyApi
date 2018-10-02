import App from './App';
import '../sass/style.sass';

const app = new App;

app.indexedDB.initialization();



[gifs, stickers, favorites].forEach(button => {
    button.addEventListener('click', (event) => {
        if(app.getImg.type !== event.target.getAttribute('data-type')){
            app.getImg.type = event.target.getAttribute('data-type');
            app.clearImgContainer();
            app.getImg.offset = 0;
            app.getImg.loading = true;
            app.getImg.inquiryImg();
        }
    })
})

search.addEventListener('click', () => {
    if(app.getImg.textSearch !== ''){
        app.clearDropDown();
        app.clearImgContainer();
        app.getImg.offset = 0;
        app.getImg.loading = true;
        app.getImg.textSearch = textSearch.value.split(' ').join('+').trim();
        app.getImg.inquiryImg();
    }
})

document.addEventListener('scroll', event => {
    if(!app.getImg.loading && document.documentElement.scrollTop + document.documentElement.clientHeight === document.body.scrollHeight){
        app.getImg.loading = true;
        app.getImg.inquiryImg();
    }
});

textSearch.addEventListener('keyup',()=>{
    app.clearDropDown();
    app.getImg.textSearch = textSearch.value.split(' ').join('+').trim();
    app.getImg.inquiryImg(true);
})