let check = false

let sw_on = new Audio('light-switch-81967.mp3');
let sw_off = new Audio('light-switch-156813.mp3');
function changecolor() {
	const body = document.body
	body.classList.toggle('clicked')
	const promienElement = document.getElementsByClassName('promien')[0]
	const textElement = document.getElementsByClassName('text')[0]
	const swiatloElement = document.getElementsByClassName('swiatlo')[0]

	if (promienElement && textElement && swiatloElement) {
		if (!check) {
			check = true
			promienElement.style.opacity = 1
			textElement.style.opacity = 1
			swiatloElement.style.opacity = 1
            sw_on.play();
		} else {
			check = false
			promienElement.style.opacity = 0
			textElement.style.opacity = 0
			swiatloElement.style.opacity = 0
            sw_off.play()
		}
	} else {
		alert(' ')
	}
}
