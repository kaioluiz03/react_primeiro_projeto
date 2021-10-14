import React from 'react';
import './Login.css';


export default function Login(){

    var mensagem = () =>{
        alert('Desculpe, algo de errado aconteceu tente mais tarde!');
    }

    return(

        <div> 
            <form className='form'>
                <div className='usuario'>
                    <input type='text ' name='username' placeholder='Nome do Usuário' />
                </div>

                <div className='senha'>
                    <input type='password' name='senha' placeholder='Senha' />
                </div>

                <button className='botao' onClick={() => mensagem()}>Login</button>

                <p>Esqueceu sua senha? <a href='https://github.com/kaioluiz03/react_primeiro_projeto.git' target='_blank' rel="noreferrer">Click aqui!</a></p>
            </form>
        </div>
    );
}