var element = document.createElement("div");
document.body.appendChild(element);
var heuresRealisees = document.querySelector("main.container b");
var heuresRealiseesTexte = heuresRealisees.textContent;
var chiffres = heuresRealiseesTexte.match(/\d+/g);
var chiffresConcatenes = chiffres.join('');
console.log(chiffresConcatenes);

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

let totalHours = 151;
let daysRemainingWithWk = daysRemainingInMonth();
let daysRemainingWithoutWk = daysRemainingInMonthNoWeekends();
let hoursWithWk = (totalHours - chiffresConcatenes) / daysRemainingWithWk;
let hoursWithoutWk = (totalHours - chiffresConcatenes) / daysRemainingWithoutWk;
if (chiffresConcatenes >= 151)
{
    hoursWithWk = 0;
    hoursWithoutWk = 0;
}
if (hoursWithoutWk >= 151)
{
    hoursWithoutWk = 0;
}
const nouveauCodeSource = `
<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><link rel="stylesheet" type="text/css" id="u0" href="https://fr.rakko.tools/tools/129/lib/tinymce/skins/ui/oxide/content.min.css"><link rel="stylesheet" type="text/css" id="u1" href="https://fr.rakko.tools/tools/129/lib/tinymce/skins/content/default/content.min.css"></head><body id="tinymce" class="mce-content-body " data-id="content" contenteditable="true" spellcheck="false"><h2 data-mce-style="text-align: center;" style="text-align: center;"><span style="color: rgb(0, 0, 0);" data-mce-style="color: #000000;">Log Time <strong><span style="color: rgb(224, 62, 45);" data-mce-style="color: #e03e2d;"><span style="color: rgb(35, 111, 161);" data-mce-style="color: #236fa1;">Pole Emploi</span> 💼</span></strong></span></h2><h4 data-mce-style="text-align: center;" style="text-align: center;">Parce que le Logtime basique c'est super, mais pas précis.</h4><p style="text-align: center;" data-mce-style="text-align: center;"><br data-mce-bogus="1"></p><h3 data-mce-style="text-align: center;" style="text-align: center;">Heure réalisées sur le mois en cours: <span style="color: rgb(186, 55, 42);" data-mce-style="color: #ba372a;"><strong>${chiffresConcatenes}h</strong></span>.</h3><table style="border-collapse: collapse; width: 100%; height: 44px;" border="1" data-mce-style="border-collapse: collapse; width: 100%; height: 44px;"><tbody><tr style="height: 22px;"><td style="width: 50%; height: 22px; text-align: center;"><strong>Avec les week-end</strong></td><td style="width: 50%; height: 22px; text-align: center;"><strong>Sans les week-end</strong></td></tr><tr style="height: 22px;"><td style="width: 50%; height: 22px; text-align: center;"><strong><span style="color: rgb(186, 55, 42);" data-mce-style="color: #ba372a;">${hoursWithWk}h</span></strong>. / jours</td><td style="width: 50%; height: 22px; text-align: center;"><strong><span style="color: rgb(186, 55, 42);" data-mce-style="color: #ba372a;">${hoursWithoutWk}h</span></strong>. / jours</td></tr></tbody></table><p style="text-align: center;" data-mce-style="text-align: center;"><em>Normal logtime made with ✨Potage Tomate✨ by ldournoi &amp; doc - Extension by nskiba</em></p></body></html>`;

document.documentElement.innerHTML = nouveauCodeSource;
document.open();
document.write(nouveauCodeSource);
document.close();
const elements = document.getElementsByTagName('*');

// Parcourir tous les éléments de la page
for (let i = 0; i < elements.length; i++) {
    // Définir la propriété contentEditable à false
    elements[i].contentEditable = false;
}
