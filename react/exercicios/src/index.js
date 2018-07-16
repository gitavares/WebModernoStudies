import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
// import Multi, { BoaNoite } from './componentes/Multiplos'
// import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// ReactDOM.render(<Primeiro />, document.getElementById('root'))
// ReactDOM.render(<BomDia nome="Giselle"/>, document.getElementById('root'))
// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome="Ana"/>
//         <BoaNoite nome="Bia"/>
//     </div>, document.getElementById('root'))


// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Boa noite" nome ="Mia"/>
//     </div>, document.getElementById('root'))


// ReactDOM.render(
//     <div>
//         <Pai nome="Gilson" sobrenome="Tavares" />
//     </div>, document.getElementById('root')
// )

ReactDOM.render(
    <div>
        <Pai nome="Gilson" sobrenome="Tavares">
            {/* chamando o componente de filhos de maneira independente */}
            <Filho nome="Gi" sobrenome="Tavares" />
            <Filho nome="Gilson" sobrenome="Tavares" />
            <Filho nome="Mia" sobrenome="Tavares" />
        </Pai>
    </div>, document.getElementById('root')
)