const topCard = document.getElementsByClassName("heading1")[0]
const currencyPlaceholder = document.getElementById("symbol")
const currentBalancePlaceholder = document.getElementById("balance")
const nameHolder = document.getElementById("name");
const incomeRadio = document.getElementById("income");
const expenseRadio = document.getElementById("expense");
const amountHolder = document.getElementById("amount");
const addTransactionButton =  document.getElementById("add_transaction");
const transactionList = document.getElementById("list_of_transactions")
let currencySymbol = "Rs.";
let transactions = [];
let balance = 0
let editing_id = -1;
const saveStatus = () => {
    window.localStorage.setItem("currencySymbol", currencySymbol);
    window.localStorage.setItem("balance", balance);
    window.localStorage.setItem("transactions", JSON.stringify(transactions));
} 
function del(i) {
    transactions = transactions.filter((e,index) => i!=index);
    render();
}
function edit(i){
    transaction = transactions[i]
    editing_id = i
    cancelEditButton.style.display = "block"
    nameHolder.value = transaction.name;
    if(transaction.type == "income"){
        incomeRadio.checked = true;
        expenseRadio.checked = false;
    } else {
        expenseRadio.checked = true;
        incomeRadio.checked = false;
    }
    amountHolder.value = transaction.amount
}
const render = () => {
    transactionList.innerHTML = ``
    balance = 0;
    if(transactions.length == 0){
        transactionList.innerHTML = `<center><h3>No Transactions Found :(</h3><\center>`
    } 
    transactions.forEach((e,i) => {
        transactionList.innerHTML = `
        <li class="transaction ${e.type}">
            <p>${e.name}</p>
            <div class="right">
                <p>${currencySymbol}${e.amount}</p>
                <button class="link" onclick="del(${i})">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
        ` + transactionList.innerHTML;
        if(e.type == "income") balance += e.amount;
        else balance -= e.amount;

    })
    currencyPlaceholder.innerHTML = `${currencySymbol}`
    currentBalancePlaceholder.innerHTML = `${balance}`
    if(balance < 0){
        topCard.classList.add("red")
    } else{
        topCard.classList.remove("red")
    }
}
render();
saveStatus();
let cancelEdit = () => {
    editing_id = -1;
    cancelEditButton.style.display = "none"
    nameHolder.value = "";
    amountHolder.value = "";
    render();
    saveStatus();
}
addTransactionButton.addEventListener("click", () => {
    let name = nameHolder.value;
    let type = incomeRadio.checked ? "income" : "expense"
    let amount = Number(amountHolder.value)
    if(name == "" || amount == 0){
        alert("Name and amount can't be empty");
        return;
    }
    if(amount < 0){
        alert("Negetive amounts are not allowed");
        return;
    }
    let transaction = {
        name,
        amount, 
        type,
    }
    if(editing_id == -1) transactions.push(transaction);
    else{
        transactions[editing_id] = transaction;
        editing_id = -1;
        cancelEditButton.style.display = "none"
    }
    nameHolder.value = "";
    amountHolder.value = "";
    render();
    saveStatus();
})