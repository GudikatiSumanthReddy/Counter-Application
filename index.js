let CounterValue = document.getElementById("counterElements");
function Decrease(){
    let previousValue = CounterValue.textContent;
    let updateValue = parseInt(previousValue)-1;
    CounterValue.textContent = updateValue;
    if(updateValue<0){
        CounterValue.style.color="Red";
    }


}

function Reset(){
    let CounterElements = 0;
    CounterValue.textContent = CounterElements;
    CounterValue.style.color="White";
}


function Increase(){
    let previousValue = CounterValue.textContent;
    let updateValue = parseInt(previousValue)+1;
    CounterValue.textContent = updateValue;

    if(updateValue>0){
        CounterValue.style.color="Green";
    }
}