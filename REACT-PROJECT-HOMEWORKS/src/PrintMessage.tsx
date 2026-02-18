interface Props {
    message?: string;  
    suma?: number;
}
function PrintMessage({message, suma}: Props) {   
    return (<> 
        <h3> {message}</h3>
        <h3> {suma}</h3>
    </>);
}

export default PrintMessage;
