import './button.css';

export const ButtonComponent = ({children='', onClick = ()=>{console.log('crie a função dessa prop no pai')}})=>{
    return <>
    <button class="myButtonComponent" onClick={onClick}>{children}</button>
    </>;
};