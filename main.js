// Loader
window.addEventListener('load', () => {
    const container_loader = document.querySelector('.container_loader')
    container_loader.style.opacity = 0
    container_loader.style.visibility = 'hidden'
})

// Scramble text
class textScramble {
    constructor(el) {
        this.el = el
        this.chars = '!<>-_//{}[]0-==+*?¡#______'
        this.update = this.update.bind(this)
    }
    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end})
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete ++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}    
// Phrases .scramble
const phrases = [
    'Hola!',
    'Hello!',
    'Salut!',
    'Hallo!',
    'Hei!',
    'Aloha!'
]

const el = document.querySelector('.scramble')
const fx = new textScramble(el)

let counter = 0
const next = () => {
    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 800)
    })
    counter = (counter + 1) % phrases.length
}
next()

// Phrases .scramble_1
const phrases_1 = [
    'Developer',
    'Designer',
    'Front-end',
    'Back-end'
]

const el_1 = document.querySelector('.scramble_1')
const fx_1 = new textScramble(el_1)

let counter_1 = 0
const next_1 = () => {
    fx_1.setText(phrases_1[counter_1]).then(() => {
        setTimeout(next_1, 800)
    })
    counter_1 = (counter_1 + 1) % phrases_1.length
}
next_1()

//  Phrases .scramble_2
const phrases_2 = [
    'Coding!',
    'Design!',
    'Create!',
    ''
]

const el_2 = document.querySelector('.scramble_2')
const fx_2 = new textScramble(el_2)

let counter_2 = 0
const next_2 = () => {
    fx_2.setText(phrases_2[counter_2]).then(() => {
        setTimeout(next_2, 800)
    })
    counter_2 = (counter_2 + 1) % phrases_2.length
}
next_2()

// Phrases .scramble_3
const phrases_3 = [
    'cool',
    'stunning',
    'great',
    'dazzling'
]

const el_3 = document.querySelector('.scramble_3')
const fx_3 = new textScramble(el_3)

let counter_3 = 0
const next_3 = () => {
    fx_3.setText(phrases_3[counter_3]).then(() => {
        setTimeout(next_3, 800)
    })
    counter_3 = (counter_3 + 1) % phrases_3.length
}
next_3()

//  Phrases .scramble_4
const phrases_4 = [
    'like',
    'love',
    'enjoy'
]

const el_4 = document.querySelector('.scramble_4')
const fx_4 = new textScramble(el_4)

let counter_4 = 0
const next_4 = () => {
    fx_4.setText(phrases_4[counter_4]).then(() => {
        setTimeout(next_4, 800)
    })
    counter_4 = (counter_4 + 1) % phrases_4.length
}
next_4()

// Typewriter effect
const typed = new Typed('.typed', {
    strings: [
        'About me',
        'Skills',
        'Abilities',
        'Qualifications'
    ],
    typeSpeed:75,
    startDelay:800,
    backSpeed:75,
    backDelay:1500,
    loop: true
})