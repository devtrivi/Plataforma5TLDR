// react router
//SPA single page application
//cada vista tiene url definida
<Route path="/about" component={About}/>
//RR es tres librerias
//react-router browser
//react-router-dom browser
//react-router-native mobile
//history
import React from "react"
import ReactDOM from 'react-dom'
import {BroserRouter} from 'react-router-dom'
import App from './App'

ReactDOM.render( //boilerplate!
    <BrowserRouter>
    <App />
    </BrowserRouter>
)
const Home = ()
 => (
     <div> //me traigo los componentes con 
         <h1>Home</h1>
     </div> //estos falsos links
 )
const App = () => (
    <div>
        <nav>
            <ul> //links internos Link=~React href
                <li><Link to="/">Homes</Link></li>
            </ul>
        </nav>
<Switch> //si ya entraste en esa ruta...
<Route exact path="/" component={Home} />
<Route path="/:id" render={(props )=> console.log("esta ruta es un parametro")} /> //agujero negro, morfa todo, va al fondo. id=props.match.params.id "5" ---si pongo {match} me salto un pasito
</Switch> //...solo renderiza esa
    </div>
)
// path es para rutas anidadas 

const Category = ({ id, match }) => {
    <div>
        <ul>
            <li><Link to={`${match.url}/pagina`}>Pagina</Link></li>
        </ul>
        <Route //si usas componenet= te crea una class. moscañon
        path={`${match.path}/:name`}
        render={({ match }) => (
            <div><h3>{match.params.name}</h3></div> 
            
        )}
        />
    </div>
}

<Routepath={``}