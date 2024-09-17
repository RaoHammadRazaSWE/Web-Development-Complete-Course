const message = 'Hello World!'
const lastMessage = '   Hi , I am Rao.   '
// Trim is uses Remove start and end space 
const finalMessage = lastMessage.trim()
finalMessage.indexOf('I')
finalMessage.replace('H', 'A')

const lastfourdigit = '2354'
const maskedAccountNumber = lastfourdigit.padStart(14 , '*' )

finalMessage.charAt(3)

const capitalMessage = message.toUpperCase()
const bankBalance = 98745

// const templateString = `Last four digit of my account number is ` + lastfourdigit

// using concat method

const templateString = `Last four digit of my account number is `.concat(' ', lastfourdigit)
const lateString = `Last four digit of my account number is ${lastfourdigit.padStart(16, '*')}.`
const templateString2 = `I have PKR${bankBalance} in my account. `