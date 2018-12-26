import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 3000 //3s
})

Vue.toasted.register(
    'defaultSuccess', 
    'Successfully done',
    { type: 'success', icon: 'check' }
)

Vue.toasted.register(
    'defaultError',
    payload => !payload.msg ? 'Opss.. Something went wrong' : payload.msg,
    { type: 'error', icon: 'times' }
)
