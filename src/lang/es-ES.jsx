// Sabores
import sabores from '../img/sabores/sabores.jpg'
import anana from '../img/sabores/anana.png'
import chocolateBlanco from '../img/sabores/chocolateBlanco.png'
import chocolate from '../img/sabores/chocolate.png'
import chocolateAlmendrado from '../img/sabores/chocolateAlmendrado.png'
import dulceDeLeche from '../img/sabores/dulceDeLeche.png'
import durazno from '../img/sabores/durazno.png'
import flanDulceDeLeche from '../img/sabores/flanDulceLeche.png'
import granizado from '../img/sabores/granizado.png'
import limon from '../img/sabores/limon.png'
import mentaGranizada from '../img/sabores/mentaGranizada.jpg'
import naranjaMango from '../img/sabores/naranjaMango.png'
import vainilla from '../img/sabores/vainilla.png'

//Postres
import postres from '../img/postres/postres.jpg'
import postreAlmendrado from '../img/postres/postreAlmendrado.jpg'
import cassata from '../img/postres/postreCassata.jpg'

//Palitos
import palitos from '../img/palitos/palitos.jpg'
import bombon  from '../img/palitos/palitoBombon.jpg'
import cremaAmericana from '../img/palitos/palitoCremosoAmericana.jpg'
import cremaFrutilla from '../img/palitos/palitoCremosoFrutilla.jpg'

//Bombones
import bombones from '../img/bombones/bombones.jpg'
import crocante from '../img/bombones/bombonCrocante.jpg'
import escoces from '../img/bombones/bombonEscoces.jpg'
import split from '../img/bombones/bombonSplit.jpg'
import suizo from '../img/bombones/bombonSuizo.jpg'
import cheesecake from '../img/postres/postreCheesecake.jpg'
import crocantino from '../img/postres/postreCrocantino.jpg'
import delicia from '../img/postres/postreDelicia.jpg'
import lemonPie from '../img/postres/postreLemonpie.jpg'
import semiFrioChoc from '../img/postres/postreSemiFrioChocolate.jpg'
import tiramisu from '../img/postres/postreTiramisu.jpg'
import frutilla from '../img/palitos/palitoFrutalFrutilla.jpg'
import naranja from '../img/palitos/palitoFrutalNaranja.jpg'
import picoDulce from '../img/palitos/PicoDulce.jpg'

export const esp = {
    categorias : [
        {id: 1, name:'sabores', descripcion:"Las mejores 36 experiencias para tu paladar. La fórmula de nuestros sabores tiene la experiencia y conocimiento de los tradicionales heladeros. Su toque artesanal le otorga suntuosidad y delicadeza en cada cucharada.", titulo: "Sabores" , img: sabores},
        {id: 2, name:'postres', descripcion:"Nuestros helados se disfrutan más cuando se comparten. Postres y envasados familiares son elaborados con lo mejor de nuestras cremas heladas para deleitar a toda la familia.", titulo: "Postres" , img: postres},
        {id: 3, name:'palitos', descripcion:"Pensados para complacer tus deseos de algo rico, sano y placentero. Con el sabor que nos destaca, en diversas presentaciones. Prácticos, variados y para ser consumidos al instante.", titulo: "Palitos" , img: palitos},
        {id: 4, name:'bombones', descripcion:"Nuestros bombones se disfrutan más cuando se comparten. Elaborados con lo mejor de nuestras cremas heladas para deleitar a toda la familia y amigos.", titulo: "Bombones" , img: bombones}
    ],
    paginas : [
        {home: "Home"},
        {productos: "Productos"},
        {registrarse: "Registrarse"},
        {contacto: "Contacto"}
    ],
    sabores: [
        {id: 1, name: 'Ananá', img: anana},
        {id: 2, name: 'Chocolate blanco', img: chocolateBlanco},
        {id: 3, name: 'Chocolate', img: chocolate},
        {id: 4, name: 'Chocolate con almendras', img: chocolateAlmendrado},
        {id: 5, name: 'Dulce de leche', img: dulceDeLeche},
        {id: 6, name: 'Durazno', img: durazno},
        {id: 7, name: 'Flan con dulce de leche', img: flanDulceDeLeche},
        {id: 8, name: 'Granizado', img: granizado},
        {id: 9, name: 'Limón', img: limon},
        {id: 10, name: 'Naranja mango', img: naranjaMango},
        {id: 11, name: 'Vainilla', img: vainilla},
        {id: 12, name: 'Menta granizada', img: mentaGranizada}
    ],
    postres: [
        {id: 1, name: 'Almendrado', img: postreAlmendrado},
        {id: 2, name: 'Cassata', img: cassata},
        {id: 3, name: 'Cheesecake', img: cheesecake},
        {id: 4, name: 'Crocantino', img: crocantino},
        {id: 5, name: 'Delicia', img: delicia},
        {id: 6, name: 'Lemon pie', img: lemonPie},
        {id: 7, name: 'Semi frio de chocolate', img: semiFrioChoc},
        {id: 8, name: 'Tiramisú', img: tiramisu}
    ],
    palitos: [
        {id: 1, name: 'Bombón', img: bombon},
        {id: 2, name: 'Cremoso americano', img: cremaAmericana},
        {id: 3, name: 'Cremoso frutilla', img: cremaFrutilla},
        {id: 4, name: 'Frutal frutilla', img: frutilla},
        {id: 5, name: 'Frutal naranja', img: naranja},
        {id: 6, name: 'Pico dulce', img: picoDulce}
    ],
    bombones: [
        {id: 1, name: 'Crocante', img: crocante},
        {id: 2, name: 'Escoces', img: escoces},
        {id: 3, name: 'Split', img: split},
        {id: 4, name: 'Suizo', img: suizo}
    ],
    contactanos: "Contactanos",
    nombre: "Nombre",
    email: "Email",
    mensaje: "Mensaje",
    enviar: "Enviar",
    redes: "Seguinos en nuestras redes sociales",
    nombreApellido: "Nombre y Apellido",
    correo: "Correo Electronico",
    contraseña: "Contraseña",
    repetirContraseña: "Repita su contraseña",
    estoyDeAcuerdo: "Estoy de acuerdo con todos los",
    terminos: "Terminos de servicio",
    derechos: "Todos los derechos reservados",
    nuestrosProductos: "Nuestros productos",
    verMas: "Ver más"
}