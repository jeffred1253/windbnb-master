const countries = [
    "Helsinki, Finland",
    "Turku, Finland",
    "Oulu, Finland",
    "Vaasa, Finland",
];

var titles = function (element, value) {
    var title = document.createElement('div')
    title.textContent = value
    element.appendChild(title)
}

var noTitles = function (element) {
    var title = element.querySelector('div')
    title.parentNode.removeChild(title)
}

var active = false

function Select() {
    if (!active) {
        document.querySelector('.header img').classList.add('off')
        //document.querySelector('.body').classList.add('b')
        document.querySelector('.search').classList.add('max')
        var local = document.querySelector('.location')
        local.classList.add('detail')
        local.parentElement.classList.add('option')
        var guest = document.querySelector('.guest')
        guest.classList.add('detail')
        var header = document.querySelector('.header')
        header.classList.add('h')
        var part = document.createElement('div')
        part.style = 'height: 146px'
        var voile = document.createElement('div')
        voile.style = 'background-color: rgba(59, 59, 59, 0.35); position: fixed; bottom: 0px; left:0px; right:0px; top:' + (header.getBoundingClientRect().height + 100) + 'px'
        voile.onclick = Reload()
        header.after(part)
        header.appendChild(voile)
        titles(local, 'Location')
        titles(guest, 'Guest')
        var loupe = document.querySelector('.loupe > div')
        loupe.classList.add('loupes')
        var loupetxt = document.createElement('span')
        loupetxt.textContent = 'Search'
        loupe.appendChild(loupetxt)
        loupe.parentElement.classList.add('space')
        /*if (window.innerWidth < 525) {
            voile.before(loupe)
        }*/
        active = true
    }
}

function list(element, country, value) {
    var li = document.createElement('li')
    li.textContent = country
    li.setAttribute('key', value)
    li.onclick = function () {document.querySelector('.location span').textContent = country}
    element.appendChild(li)
}

var activeL = false
var activeG = false

export function Location() {
    Select()
    closeGuest()
    if (!activeL) {
        var header = document.querySelector('header')
        var local = document.querySelector('.location')
        local.classList.add('details')
        var ul = document.createElement('ul')
        header.appendChild(ul)
        countries.map((country, index) => (list(ul, country, index)))
        activeL = true
    }
}

export function Guest() {
    Select()
    closeLocation()
    if (!activeG) {
        var guest = document.querySelector('.guest')
        guest.classList.add('details')
        const persons = [
            {
                title : 'Adults',
                comment : 'Ages 13 or above'
            },
            {
                title : 'Children',
                comment : 'Ages 2 - 12'
            }
        ]
        persons.map((person, index) => (critere(person.title, person.comment, index)))
        activeG = true
    }
}

function critere(option, level, index) {
    var ul = document.createElement('div')
    ul.style.display = 'block'
    ul.classList.add("g")
    ul.setAttribute('key', `${option}.${index}`)
    var li1 = document.createElement('div')
    var li2 = document.createElement('div')
    var li3 = document.createElement('div')

    var div1 = document.createElement('div')
    var div2 = document.createElement('div')
    var div3 = document.createElement('div')

    li1.textContent = option
    li2.textContent = level
    div1.textContent = '-'
    div2.textContent = 0
    div3.textContent = '+'

    li3.appendChild(div1)
    li3.appendChild(div2)
    li3.appendChild(div3)
    
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    
    document.querySelector('.h').appendChild(ul)

    div1.classList.add('jauge')
    div3.classList.add('jauge')
    div1.onclick = function (){
        if (option === 'Adults') {
            if (div2.textContent == 0) {
                div2.textContent = 13                
            } else if (div2.textContent > 13) {
                div2.textContent--
            }
        }
        if (option === 'Children') {
            if (div2.textContent == 0) {
                div2.textContent = 2                
            } else if (div2.textContent > 2) {
                div2.textContent--
            }
        }
    }
    div3.onclick = function (){
        if (option === 'Adults') {
            if (div2.textContent == 0) {
                div2.textContent = 18
            } else {
                div2.textContent++
            }
        }
        if (option === 'Children') {
            if (div2.textContent == 0) {
                div2.textContent = 12
            } else if (div2.textContent < 12) {
                div2.textContent++
            }
        }
    }
}

function closeLocation() {
    if (activeL) {
        var local = document.querySelector('.location')
        local.classList.remove('details')
        var ul = document.querySelector('header ul')
        ul.parentNode.removeChild(ul)
        activeL = false
    }
}

function closeGuest() {
    if (activeG) {
        var guest = document.querySelector('.guest')
        guest.classList.remove('details')
        var g = document.querySelectorAll('header .g')
        for (let index = 0; index < g.length; index++) {
            g[index].parentNode.removeChild(g[index])
        }
        activeG = false
    }
}

export function Reload() {
    closeLocation()
    closeGuest()
    if (active) {
        document.querySelector('.header img').classList.remove('off')
        document.querySelector('.search').classList.remove('max')
        var local = document.querySelector('.location')
        local.classList.remove('detail')
        local.parentElement.classList.remove('option')
        var guest = document.querySelector('.guest')
        guest.classList.remove('detail')
        document.querySelector('.header').classList.remove('h')
        var vide = document.querySelector('.header + div')
        vide.parentNode.removeChild(vide)
        noTitles(local)
        noTitles(guest)
        var loupe = document.querySelector('.loupe > div')
        loupe.classList.remove('loupes')
        loupe.removeChild(loupe.querySelector('span'))
        loupe.parentElement.classList.remove('space')
        document.querySelector('.body').classList.remove('b')
        document.querySelector('.header > div:last-child').parentNode.removeChild(document.querySelector('.header > div:last-child'))
        active = false
    }
}

const Research = () => {
    return (
        <div>
            
        </div>
    );
};

export default Research;