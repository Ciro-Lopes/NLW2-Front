import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/61950037?s=460&u=7ac31ef71a58643743b786080ea3d37aea2e99d2&v=4" alt="Ciro Lopes" />
                <div>
                    <strong>Ciro Lopes</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                    <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200 mil pessoas ja passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Entrar em contato" />
                            Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;