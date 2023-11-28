export function Home( {user, setUser}) {

    const handleLogout = ()=>{
        setUser([])
    }
    return(
        <div>
            <h1>Bienvenido</h1>
            <h2></h2>
            <button onClick={handleLogout}>Cerrar Sesion</button>
        </div>
    )
}
 export default Home;