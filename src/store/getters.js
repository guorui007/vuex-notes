import moment from 'moment'
moment.locale('zh-CN')

export const notes = state => {
    return state.notes.map(note => {
        if (note.meta) {
            note.meta.updated = moment(note.meta.created).fromNow()
        }
        return note
    })
}