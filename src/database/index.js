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
        db.loadDatabase({}, () => {


            const note_table =
                db.getCollection(tablename) || db.addCollection(tablename);

            note_table.insert([{ food: "粉丝蒜蓉娃娃菜" }, { food: "西兰花小丸子" }])
            db.saveDatabase()
            resolve(note_table);
        });
    });
}