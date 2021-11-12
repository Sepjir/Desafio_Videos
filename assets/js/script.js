//IIFE que contiene una funcion privada que imprime en el iframe del DOM la URL del video según ID de la categoría
const IIFE = (() => {

    function mostrarTodo (url, id) {
            id.setAttribute("src", url)
    }
    return {mostrarTodo}


})()

//Clases Padre (Multimedia) e Hija (Reproductor) para crear instancias de videos, las cuales contienen elementos privados con #
class Multimedia {
    #url
    constructor (url) {
        this.#url = url
    }
    get url() {
        return this.#url
    }
    setInicio() {
        return `Este metodo es para realizar un cambio en la URL`
    }
}

class Reproductor extends Multimedia {
    #id
    constructor (url, id) {
        super(url)
        this.#id = id
    }
    get id () {
        return this.#id
    }
    playMultimedia() {
        IIFE.mostrarTodo(this.url, this.id)
    }
    setInicio(tiempo) {
        this.id.setAttribute("src",`${this.url}?start=${tiempo}`)
    }
}

//Iframes del DOM
const musica = document.querySelector("#musica")
const pelicula = document.querySelector("#pelicula")
const serie = document.querySelector("#serie")

//botones del DOM de cada categoria
let btn_m = document.querySelector("#btn_musica")
let btn_p = document.querySelector("#btn_pelicula")
let btn_s = document.querySelector("#btn_serie")

//Función número al azar
const numeroRandomEntero = (min, max) => Math.floor(Math.random() * (max - min)) + min

//Instancias base
const m1 = new Reproductor("https://www.youtube.com/embed/0m9QUoW5KnY", musica)
m1.playMultimedia()
const s1 = new Reproductor("https://www.youtube.com/embed/HhesaQXLuRY", serie)
s1.playMultimedia()
const p1 = new Reproductor("https://www.youtube.com/embed/jEFTyAXOJ58", pelicula)
p1.playMultimedia()

//Funcion que arroja un video al azar para música
let videoRandomMusica = (e) => {
    e.preventDefault()
    const numeroR = numeroRandomEntero(0,5)
    if (numeroR == 1) {
        const m2 = new Reproductor("https://www.youtube.com/embed/vMDWoqCzkCg", musica)
        m2.playMultimedia()
    } if (numeroR == 2) {
        const m3 = new Reproductor("https://www.youtube.com/embed/YODCM26JXOY", musica)
        m3.playMultimedia()
    } if (numeroR == 3) {
        const m4 = new Reproductor("https://www.youtube.com/embed/Lm77VCkf_do", musica)
        m4.playMultimedia()
    } if (numeroR == 4) {
        const m5 = new Reproductor("https://www.youtube.com/embed/cG8YdwCVZSc", musica)
        m5.playMultimedia()
    } if (numeroR == 0) {
        m1.playMultimedia()
    }
}

//Función que arroja un video al azar para Pelicula
let videoRandomPelicula = (e) => {
    e.preventDefault()
    const numeroR = numeroRandomEntero(0,5)
    if (numeroR == 1) {
        const p2 = new Reproductor("https://www.youtube.com/embed/MKxCpJBcuDU", pelicula)
        p2.playMultimedia()
    } if (numeroR == 2) {
        const p3 = new Reproductor("https://www.youtube.com/embed/Pzwyn32KHUM", pelicula)
        p3.playMultimedia()
    } if (numeroR == 3) {
        const p4 = new Reproductor("https://www.youtube.com/embed/qjnMK9YFUwk", pelicula)
        p4.playMultimedia()
    } if (numeroR == 4) {
        const p5 = new Reproductor("https://www.youtube.com/embed/eOrSeFGLrRU", pelicula)
        p5.playMultimedia()
    } if (numeroR == 0) {
        p1.playMultimedia()
    }
}

//Función que arroja un video al azar para Serie
let videoRandomSerie = (e) => {
    e.preventDefault()
    const numeroR = numeroRandomEntero(0,5)
    if (numeroR == 1) {
        const s2 = new Reproductor("https://www.youtube.com/embed/7D4ggoPf1qY", serie)
        s2.playMultimedia()
    } if (numeroR == 2) {
        const s3 = new Reproductor("https://www.youtube.com/embed/Vu-6iZjREZU", serie)
        s3.playMultimedia()
    } if (numeroR == 3) {
        const s4 = new Reproductor("https://www.youtube.com/embed/CC4dWgEJq_0", serie)
        s4.playMultimedia()
    } if (numeroR == 4) {
        const s5 = new Reproductor("https://www.youtube.com/embed/VftMccvBNkE", serie)
        s5.playMultimedia()
    } if (numeroR == 0) {
        s1.playMultimedia()
    }
}


//Listener para botón Música, pelicula y serie
btn_m.addEventListener("click", videoRandomMusica)
btn_p.addEventListener("click", videoRandomPelicula)
btn_s.addEventListener("click", videoRandomSerie)

console.log("Cada una de las categorias tiene un boton que aleatoriza 4 sugerencias");

