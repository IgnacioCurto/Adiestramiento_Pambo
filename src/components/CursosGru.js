import React from 'react'
import '../css/cursos.css'
import foto from '../imgs/perrito-curso2.jpg'

export const CursosGru = () => {
    return(
        <div>
            <div className="cont_curso row">
                <div className="cont_info_curso col-xl-7 col-md-7 col-sm-12">

                    <div className="titulo_curso">Curso grupal de educación básica y obedencia</div> 
                    <div className="cont_cursoInd">
                        <div className="subtitulo_curso">PRESENCIAL</div>
                        <div className="subtitulo_curso">100% ONLINE</div>
                    </div>


                    <div className="programa">
                        <div className="titulo_programa">Contenido del curso:</div>

                        <ul className="ul_programa">
                            <li className="item_programa">Sentado</li>
                            <li className="item_programa">Acostado</li>
                            <li className="item_programa">Quieto</li>
                            <li className="item_programa">Acudir al llamado</li>
                            <li className="item_programa">Orden “No”</li>
                            <li className="item_programa">Alto en las esquinas</li>
                            <li className="item_programa">Olfato</li>
                            <li className="item_programa">Técnicas de correa</li>
                            <li className="item_programa">Reforzamos la sociabilizacion aprendiendo en equipo (humanos y perros)</li>
                        </ul>
                    </div>

                    <div className="titulo_curso">Taller de sociabilizacion y aprendizaje</div>
                    <div className="cont_cursoInd">
                        <div className="subtitulo_curso">PRESENCIAL</div>
                    </div>

                    <div className="texto_taller">En este taller se van a realizar ejercicios de integración, donde el objetivo del mismo es reforzar y mejorar la sociabilizacion entre los perros para crear una mejor convivencia.</div>


                </div>
                    
                <div className="cont_img_curso col-xl-5 col-md-5 col-sm-12">
                    <img className="foto_curso" src={foto} alt="fotoperrito"></img>
                </div>
                
            </div>
        </div>
    )
}