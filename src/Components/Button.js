export default function TabButton({children, ClickHandler}){
return(
<button onClick = {ClickHandler}> {children} </button>

);

}