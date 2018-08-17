import Axios from 'axios'

import Trigger from './trigger'

export default async (trigger, type) => {
    let state = trigger.state()
    let oldstatus = state.status
    state.status = Trigger.STATUS_WAIT
    trigger.push(Trigger.ACTION_WAIT, state)

    state = trigger.state()
    await Axios.post('mark', {
        token: state.token,
        type,
    })
    state.task.handled[type] = true
    state.status = oldstatus
    trigger.push(Trigger.ACTION_MARK, state)
    return state
}
