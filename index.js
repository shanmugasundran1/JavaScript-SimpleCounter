let welcomeEl = document.getElementById("welcome-el")
let username = "Shan"
let greeting = "Welcome Back Chief, "

let count = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

welcomeEl.textContent = greeting + username

function increment()
{
	count += 1
	countEl.textContent = count
}

function save()
{
	saveString = count + " - "
	saveEl.textContent +=  saveString
	console.log(count)
	countEl.textContent = 0
	count = 0
}