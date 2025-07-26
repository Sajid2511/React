
function fruit(name){
        alert(name)
}

function Bando(){
    // function fruit(name){
    //     alert(name)
    // }

    return (
        <div>
            <button onClick={()=>fruit("apple")}>Apple</button> 
            <button onClick={()=>fruit("Banana")}>Banana</button>
        </div>
    )
}
export default Bando;