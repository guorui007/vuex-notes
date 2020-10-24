import { loadTable, db } from '../database'

/**
 * 模板加载后，获取笔记列表 
 */

export const getNotes = async ({ commit }) => {
    //加载笔记
    const noteslist = await loadTable('notes');

    const notes = noteslist.chain()
        .find()
        .simplesort('$loki', { desc: true })
        .data();



    //排序以后，提交修稿
    commit('setnotes', notes);
}

export const createNote = async ({ dispatch }, note) => {
    const table = await loadTable('notes');

    table.insert(note)
    db.saveDatabase();
    dispatch('getNotes');
}

/**
 * 更新笔记 
 */

export const updateNote = async ({ dispatch }, note) => {
    const table = await loadTable('notes');
    table.update(note);
    db.saveDatabase();

    dispatch("getNotes")


}