import React from 'react'

export const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>

export const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>

export default {BoaTarde, BoaNoite} //opcional para usar Multi na chamada, como o BoaTarde em index.js