let balance = 0;

function addTransaction() {
    let desc = document.getElementById("desc").value;
    let amount = parseFloat(document.getElementById("amount").value);

    if (desc === "" || isNaN(amount)) {
        alert("Please enter valid details");
        return;
    }

    balance += amount;
    document.getElementById("balance").innerText = balance;

    let li = document.createElement("li");
    li.innerText = desc + " : ₹" + amount;

    document.getElementById("list").appendChild(li);

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}