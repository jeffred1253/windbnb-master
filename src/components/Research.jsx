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
        voile.style = 'background-color: rgba(59, 59, 59, 0.35); position: fixed; bottom: 0px; left:0px; right:0px; top:' + (header.getBoundingClientRect().height + 100) + 'px; @media screen and (max-width: 525px) {top:' + (header.getBoundingClientRect().height + 100) + 'px;}'
        voile.onclick = Reload()
        header.after(part)
        header.appendChild(voile)
        titles(local, 'Location')
        titles(guest, 'Guest')
        var loupe = document.querySelector('.loupe > div')
        loupe.classList.add('loupes')
        loupe.textContent = 'Search'
        loupe.insertAdjacentHTML("afterbegin", "<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'><path d='M12.5006 11.0006H11.7106L11.4306 10.7306C12.6306 9.33063 13.2506 7.42063 12.9106 5.39063C12.4406 2.61063 10.1206 0.390626 7.32063 0.0506256C3.09063 -0.469374 -0.469374 3.09063 0.0506256 7.32063C0.390626 10.1206 2.61063 12.4406 5.39063 12.9106C7.42063 13.2506 9.33063 12.6306 10.7306 11.4306L11.0006 11.7106V12.5006L15.2506 16.7506C15.6606 17.1606 16.3306 17.1606 16.7406 16.7506C17.1506 16.3406 17.1506 15.6706 16.7406 15.2606L12.5006 11.0006ZM6.50063 11.0006C4.01063 11.0006 2.00063 8.99063 2.00063 6.50063C2.00063 4.01063 4.01063 2.00063 6.50063 2.00063C8.99063 2.00063 11.0006 4.01063 11.0006 6.50063C11.0006 8.99063 8.99063 11.0006 6.50063 11.0006Z' fill='#F2F2F2'/></svg>")
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
    li.insertAdjacentHTML("afterbegin", "<svg xmlns='http://www.w3.org/2000/svg' width='14' height='20' viewBox='0 0 14 20' fill='none'><path d='M7 0C3.13 0 0 3.13 0 7C0 11.17 4.42 16.92 6.24 19.11C6.64 19.59 7.37 19.59 7.77 19.11C9.58 16.92 14 11.17 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z' fill='#4F4F4F'/></svg>")
    li.setAttribute('key', value)
    li.style = "display: flex; align-items: center; margin: 10px 30px"
    li.firstElementChild.style = "padding-right: 10px"
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