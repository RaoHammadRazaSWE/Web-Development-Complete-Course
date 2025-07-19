let text;
switch (new Date().getDate) {
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;

    default:
        text = "Working Day";
}

console.log(text);