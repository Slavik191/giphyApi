import GetImg from './GetImg';
import IndexedDB from './IndexedDB'

class App{
    constructor(){
        this.getImg = new GetImg;
        this.IndexedDB = new IndexedDB;
    }
}

export default App;