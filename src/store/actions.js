import { loadTable } from '../database'

/**
 * 模板加载后，获取笔记列表 
 */

export const getNotes = async ({ commit }) => {
    //加载笔记
    const noteslist = await loadTable('notes');


    // noteslist.insert([{ food: "蒜蓉娃娃菜" }, { food: "凉拌西兰花" }])
    // db.saveDatabase()


    const notes = noteslist.chain()
        .find()
        .simplesort('$loki', 'isdesc')
        .data();



    //排序以后，提交修稿
    commit('setnotes', notes)
}