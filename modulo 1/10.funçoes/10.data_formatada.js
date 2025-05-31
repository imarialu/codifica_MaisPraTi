// Formate uma data.

let date1 = new Date(2022, 7, 5)

function formataData(date){
    let dia = date.getDate().toString().padStart(2, '0');
    let mes = (date.getMonth() + 1).toString().padStart(2, '0');
    let ano = date.getFullYear().toString();

    return `${dia}/${mes}/${ano}`;
}

console.log(formataData(date1));