

// borro el div, agrego app y script bundle.js

ReactDOM.render(<Main />, document.getElementById("app"))
// Main.jsx
class Main extends React.Component{
    render(){
        <div>
            <Sidebar />
            <Albums />
            <Footer />
        </div>
    }
} // reactizamos main
// en react html class es className para diff de class js
// ReactComponent.jsx
export default () => {} //asi reactamos divs facilong
<Albums albums={listaDeAlbums}/> //Main en app
export default ({albums}) => { //asi entra la lista al Componente. === props.albums
 {albums.map(album => {
     <div key={album.id}> //wd-40
     {album.name}  
     {album.songs.length}
     <img src={album.imageUrl} />
     </div>
 })}
}
//import axios from "axios" 
//tip: primero libs ext, luego ints
class Main extends React.Component{
    state = { //esto req cmpnnts de babel, hoy no
        albums : [] //llamando al back desde front
    }
    constructor(){
        super();
        this.state = {
            albums: [],
            selectedAlbum: {}
        }  //dejo todo aca para pasarlo a diffs comps
        this.selectAlbum = this.selectAlbum.bind(this)
    }
}

  componentDidMount(){      //hook: carga contenido desp de cajita
    axios.get("/api/albums")
    .then(res => res.data)
    .then(serverAlbums => this.ListeningStateChangedEvent({ albums : serverAlbums}))
  }
//SingleAlbum.jsx
<Albums albums={this.state.albums} selectAlbum={this.selectAlbum} />
<SingleAlbum album={this.state.selectedAlbum} />

selectAlbum (albumId) { //en Main.jsx
console.log("hola")
};
<a href="#" onClick={()=>selectAlbum()}></a>

export default ({ albums, selectAlbum}) => {

}