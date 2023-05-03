import { useState, useContext } from 'react';
import './index.css';
import meninoEmocoes from '../../assets/images/meninoEmocoes.png';
import feliz from '../../assets/images/feliz.png';
import animado from '../../assets/images/animado.png';
import ansioso from '../../assets/images/ansioso.png';
import doente from '../../assets/images/doente.png';
import irritado from '../../assets/images/irritado.png';
import triste from '../../assets/images/triste.png';

function Emotions() {

    const [isLoading, setIsLoading] = useState(false);


    return (
        <div className='h-screen bg-rose-100'>

            <div class="grid grid-cols-1 md:grid-cols-3">


                <div class="hidden md:block relative">
                    <img src={meninoEmocoes} className='absolute right-0 bottom-0'></img>

                </div>


                <div className='cardRegister mt-9'>
                    <h2 className='mb-4'>Registro de emoções</h2>
                    <p className='subtituloCadastro font-medium'>Nos conte sobre as suas emoções! Para isso, deslize a barra abaixo ;)</p>


                    <div className="w-full flex justify-between text-xs mt-5">
                        <span><img class="opacity-50 hover:opacity-100 cursor-pointer" src={feliz} /></span>
                        <span><img class="opacity-50 hover:opacity-100 cursor-pointer" src={animado} /></span>
                        <span><img class="opacity-50 hover:opacity-100 cursor-pointer" src={ansioso} /></span>
                        <span><img class="opacity-50 hover:opacity-100 cursor-pointer" src={doente} /></span>
                        <span><img class="opacity-50 hover:opacity-100 cursor-pointer" src={irritado} /></span>
                        <span><img class="opacity-50 hover:opacity-100 cursor-pointer" src={triste} /></span>
                    </div>


                





                    <p className='substituloTextArea mt-8 mb-3'>Se você se sentir confortável, conte o motivo da escolha do emoji acima!</p>
                    <textarea className="textarea textarea-bordered w-full resize-none" rows={4} placeholder="Escreva aqui o que quiser! :)" ></textarea>

                    <button className="btn w-full mt-11 mb-6 bg-rose-300 border-none">Registrar</button>



                </div>
                <div class="hidden md:block">

                </div>
            </div>
        </div>
    );
}

export default Emotions;