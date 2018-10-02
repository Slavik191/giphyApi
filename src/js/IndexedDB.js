class IndexedDB {
    constructor(app) {
        this.linkApp = app
        this.db = null;
    }

    initialization() {
        let request = indexedDB.open("MyTestDatabase");
        request.onerror = function (event) {
            console.log("error");
        };
        request.onsuccess = function (event) {
            this.db = event.target.result;
        }.bind(this);        
        request.onupgradeneeded = function (event) {
            let db = event.target.result;

            if (!db.objectStoreNames.contains !== 'favorites'){
                let objectStore = db.createObjectStore("favorites", { keyPath: "id", autoIncrement: true });
                objectStore.createIndex('id', 'id', { unigue: false });
            }               
        };
    }

    addFavorit(favorit) {
        let transaction = this.db.transaction(['favorites'], 'readwrite');
        let store = transaction.objectStore('favorites');
        let request = store.add(favorit);

        request.onerror = function (event) {
            console.log(event.terget.error.name);
        };
        request.onsuccess = function (event) {
            console.log('good')
        };
    }

    showFavorites() {
        let transaction = this.db.transaction(['favorites'], 'readonly');
        let store = transaction.objectStore('favorites');
        let index = store.index('id');

        index.openCursor().onsuccess = function (event) {
            let cursor = event.target.result;
            if (cursor) {
                this.linkApp.createImg(cursor.value.url, cursor.value.id);
                cursor.continue();
            }
        }.bind(this);
    }

    removeFavorite(id){
        let transaction = this.db.transaction(['favorites'], 'readwrite');
        let store = transaction.objectStore('favorites');
        let request = store.delete(+id);

        request.onerror = function (event) {
            console.log(event.terget.error.name);
        };
        request.onsuccess = function (event) {
            console.log('remove')
        };
    }


}

export default IndexedDB;