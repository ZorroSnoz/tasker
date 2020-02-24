export let local = {
    setItem (arr) {
        localStorage.setItem('localData', JSON.stringify(arr));
    },
    getItem () {
        return JSON.parse (localStorage.getItem ('localData'));
    }
};