import { loadTable, db } from '../database'

// export const setInnitialdata = state => {
//     loadTable("notes").then((tabledata) => {
//         const _entities = tabledata
//             .chain()
//             .find()
//             .simplesort("$loki", { desc: true })
//             .data();
//         state.entities = _entities;
//         console.log(this.entities);
//     });
// }


export default {
    setInnitialdata(state) {
        loadTable("notes").then((tabledata) => {
            // tabledata.insert([
            //     { food: "青菜萝卜" },
            //     { food: "鲫鱼豆腐汤" },
            //     { food: "红烧芋头" },
            //     { food: "香酥饼" }
            // ])
            // db.saveDatabase()
            const _entities = tabledata
                .chain()
                .find()
                .simplesort("$loki", { desc: true })
                .data();
            state.entities = _entities;
            console.log(this.entities);
        });
    },

    createdata(state) {
        loadTable("notes").then((table) => {
            const entity = table.insert({
                food: "",
            });
            state.entities.unshift(entity);
        });
    },
    updateData(state, entity) {
        loadTable("notes").then((table) => {


            table.update(entity);
            db.saveDatabase();
        });
    }

}