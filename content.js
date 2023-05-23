var element = document.createElement("div");
document.body.appendChild(element);
var StringHours = document.querySelector("main.container b");
var StringHoursText = StringHours.textContent;
var numbers = StringHoursText.match(/\d+/g);
var TotalHours = numbers.join('');
console.log(TotalHours);

if (TotalHours > 744)
    TotalHours = 0;
function daysRemainingInMonthNoWeekends() {
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    let days = 0;

    while (today.getMonth() === currentMonth) {
        if (today.getDay() !== 0 && today.getDay() !== 6) {
            days++;
        }

        today.setDate(today.getDate() + 1);
    }

    return days;
}

function daysRemainingInMonth() {
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    let nextMonth = new Date(currentYear, currentMonth + 1, 1);
    let days = Math.ceil((nextMonth - today) / (1000 * 60 * 60 * 24));

    return days;
}

let MaxHours = 151;
let daysRemainingWithWk = daysRemainingInMonth();
let daysRemainingWithoutWk = daysRemainingInMonthNoWeekends();
let hoursWithWk = (MaxHours - TotalHours) / daysRemainingWithWk;
let hoursWithoutWk = (MaxHours - TotalHours) / daysRemainingWithoutWk;
hoursWithWk = Math.round(hoursWithWk);
hoursWithoutWk = Math.round(hoursWithoutWk);
if (TotalHours >= 151)
{
    hoursWithWk = 0;
    hoursWithoutWk = 0;
}
if (hoursWithoutWk >= 151 || hoursWithWk >= 151)
{
    hoursWithoutWk = 0;
    hoursWithWk = 0;
}
const nouveauCodeSource = `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Page Title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            font-family: Cantarell, sans-serif;
            margin: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: #f1f1f1;
        }

        .header {
            padding: 20px;
            text-align: center;
            background: #04809f;
            color: white;
        }

        .header h1 {
            font-size: 40px;
        }

        .navbar {
            overflow: hidden;
            background-color: #333;
            position: sticky;
            position: -webkit-sticky;
            top: 0;
        }

        .navbar a {
            float: left;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 20px;
            text-decoration: none;
        }

        .navbar a.right {
            float: inherit;
        }

        .navbar a:hover {
            background-color: #ddd;
            color: black;
        }

        .navbar a.active {
            background-color: #666;
            color: white;
        }

        .row {
            display: -ms-flexbox; /* IE10 */
            display: flex;
            -ms-flex-wrap: wrap; /* IE10 */
            flex-wrap: wrap;
        }

        .side {
            -ms-flex: 30%; /* IE10 */
            flex: 30%;
            background-color: #f1f1f1;
            padding: 20px;
            text-align: center;
        }

        .main {
            -ms-flex: 70%; /* IE10 */
            flex: 70%;
            background-color: white;
            padding: 20px;
        }

        .footer {
            padding: 20px;
            text-align: center;
            background: #ddd;
            margin-top: auto;
        }

        @media screen and (max-width: 700px) {
            .row {
                flex-direction: column;
            }
        }

        @media screen and (max-width: 400px) {
            .navbar a {
                float: none;
                width: 100%;
            }
        }
    </style>
</head>
<body>

<div class="header">
    <h1>Log Time Badgeuse</h1>
    <p>Avec une <b>touche</b> de CSS.</p>
</div>

<div class="navbar">
    <a href="http://logtime.42angouleme.fr/logout.php" class="right">Deconnexion</a>
</div>

<div class="row">
    <div class="side">
        <h2>Heure réalisées sur le mois en cours:</h2>
        <h3 style="color:#167681;">${TotalHours}h.</h3>
        <h2>Nombre d'heure par jour à faire hors week-end:</h2>
        <h3 style="color:#167681;">${hoursWithoutWk}h.</h3>
        <h2>Nombre d'heure par jour à faire avec week-end:</h2>
        <h3 style="color:#167681;">${hoursWithWk}h.</h3>
    </div>
</div>
<footer class="footer">
    <h2 style="font-family:'Cantarell Light'; font-size: 15px">Basic logtime by ldournoi & doc - Extension by nskiba</h2>
</footer>

</body>
</html>
`;
document.documentElement.innerHTML = nouveauCodeSource;
document.open();
document.write(nouveauCodeSource);
document.close();
