import Loki from 'lokijs'

export const db = new Loki("notes", {
    autoload: true,
    autoloadCallback: databaseInit,
    autosave: true,
    autosaveInterval: 6000,
    persistenceMethod: 'localStorage'
});

function databaseInit() {
    const notes = db.getCollection("notes");
    if (notes === null) {
        db.addCollection("notes");
    }
}

export function loadTable(tablename) {
    return new Promise(resolve => {
        db.loadDatabase({}, () => {
            const note_table = db.getCollection(tablename) || db.addCollection(tablename);


            resolve(note_table);
        });
    });
}