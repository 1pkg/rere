import Axios from 'axios'

import Trigger from './trigger'

export default async trigger => {
    let response = await Axios.post('land', {
        token: trigger.state().token,
    })
    let state = trigger.state()
    trigger.push(Trigger.ACTION_LAND, state)
    return state
}
