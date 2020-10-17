import Loki from 'lokijs'

export const db = new Loki("notes", {
    autoload: true,
    autoloadCallback: databaseInit,
    autosave: true,
    autosaveInterval: 3000,
    persistenceMethod: 'localStorage'
});

function databaseInit() {
    const notes = db.getCollection("notes");
    if (notes === null) {
        db.addCollection("notes");
    }
}

export function loadTable(tablename) {
    return new Promise((resolve) => {
        console.log("异步动作之前开始执行");
        db.loadDatabase({}, () => {
            const note_table =
                db.getCollection(tablename) || db.addCollection(tablename);
            resolve(note_table);
        });
        console.log("异步动作之前开始之后");
    });
}