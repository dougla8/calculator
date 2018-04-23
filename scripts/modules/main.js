//  custom

var allKeys = document.getElementsByClassName('key'),
    myData = document.getElementById('data'),
    turn = 1,
    valOne,
    valTwo,
    opr,
    pt = false;

for (var i = 0; i < allKeys.length; i++) {
    allKeys[i].addEventListener('click', btnPress);
}

function btnPress(e) {
    switch(turn) {
        case 1:
            if (e.target.tagName === 'DIV'){
                var x = e.target.dataset.calc;
                if (x === 'point') {
                    //  point
                    if(pt === false){
                        var z = '.';
                        y = document.createTextNode(z);
                        myData.appendChild(y);
                        pt = true;
                    }
                } else if(isNaN(x)){
                    //  nan
                    valOne = myData.innerHTML;
                    opr = e.target.dataset.calc;
                    pt = false;
                    myData.innerHTML = '';
                    turn++;
                } else{
                    //  number
                    y = document.createTextNode(x);
                    myData.appendChild(y);
                }
            }
        break;
        case 2:
            if (e.target.tagName === 'DIV'){
                var x = e.target.dataset.calc;
                if (x === 'point') {
                    //  point
                    if(pt === false){
                        var z = '.';
                        y = document.createTextNode(z);
                        myData.appendChild(y);
                        pt = true;
                    }
                } else if(isNaN(x)){
                    //  nan
                    valTwo = myData.innerHTML;
                    if(x === 'equals'){
                        if(opr === 'plus'){
                            var a = parseInt(valOne) + parseInt(valTwo);
                            myData.innerHTML = a;
                        } else if(opr === 'minus'){
                            var a = parseInt(valOne) - parseInt(valTwo);
                            myData.innerHTML = a;
                        } else if(opr === 'times'){
                            var a = parseInt(valOne) * parseInt(valTwo);
                            myData.innerHTML = a;
                        } else if(opr === 'divide'){
                            var a = parseInt(valOne) / parseInt(valTwo);
                            myData.innerHTML = a;
                        }
                    }
                } else{
                    //  number
                    y = document.createTextNode(x);
                    myData.appendChild(y);
                }
            }
        break;
        default:
        break;
    }

}
