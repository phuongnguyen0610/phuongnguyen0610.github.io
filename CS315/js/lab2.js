let add = ()=> {
    let input = document.getElementById("txtInput").value;
    document.getElementById("txtOutput").innerHTML = input;
    document.getElementById("txtInput").value = "";
}

let sum = () =>{
    let firstValue = +(document.getElementById("txtFirstValue").value);
    let secondValue = +(document.getElementById("txtSecondValue").value);
    let result = firstValue + secondValue;
    document.getElementById("result").innerHTML = result;
}

let subtract = () =>{
    let firstValue = +(document.getElementById("txtFirstValue").value);
    let secondValue = +(document.getElementById("txtSecondValue").value);
    let result = firstValue - secondValue;
    document.getElementById("result").innerHTML = result;
}

let multiply = () =>{
    let firstValue = +(document.getElementById("txtFirstValue").value);
    let secondValue = +(document.getElementById("txtSecondValue").value);
    let result = firstValue * secondValue;
    document.getElementById("result").innerHTML = result;
}

let addItem = ()=>{
    let name = document.getElementById("txtName").value;
    let category = document.getElementById("txtCategory").value;
    let quantity = document.getElementById("txtQuantity").value;
    let itemsTable = document.getElementById("itemsTable");
    let index =1;

    let row = itemsTable.insertRow(index);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = category;
    cell3.innerHTML = quantity;

    document.getElementById("txtName").value ="";
    document.getElementById("txtCategory").value = "";
    document.getElementById("txtQuantity").value = "";

    index++;

}