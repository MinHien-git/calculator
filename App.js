var result = []
var memory =[] // result [1,2,3,(4)] result.length = 4 => [[1 2 3],4]

const calculator = (value) => {
    if(value === "del")
    {
        result.pop();   
        document.getElementById('result').innerHTML = updateCal()
    }
    else if(value === "-"||value === "+"||value === "*"||value === "/" || value === "=")
    {
        updateCal() !== ''?memory.push(updateCal()): true; 
        memory.push(value)
        result =[]
    }

    else{
        result.push(value)
        document.getElementById('result').innerHTML = updateCal()
    }

    if(memory.length === 4) {
        if(memory[3] === '='){
            switch (memory[1])
            {
                case '+':
                    memory = [parseFloat(memory[0]) + parseFloat(memory[2])]
                    document.getElementById('result').innerHTML = memory[0]
                    break;
                case '-':
                    memory = [parseFloat(memory[0]) - parseFloat(memory[2])]
                    document.getElementById('result').innerHTML = memory[0]
                    break;
                case '*':
                    memory = [parseFloat(memory[0]) * parseFloat(memory[2])]
                    document.getElementById('result').innerHTML = memory[0]
                    break;
                case '/':
                    memory = [parseFloat(memory[0]) / parseFloat(memory[2])]
                    document.getElementById('result').innerHTML = memory[0]
                    break;
            }
            /*memory = [parseFloat(memory[0]) + parseFloat(memory[2])]
            document.getElementById('result').innerHTML = memory[0]*/
        }
        
        else {
            switch (memory[1])
            {
                case '+':
                    memory = [parseFloat(memory[0]) + parseFloat(memory[2]),memory[1]]
                    document.getElementById('result').innerHTML = memory[0]
                    break;
                case '-':
                    memory = [parseFloat(memory[0]) - parseFloat(memory[2]),memory[1]]
                    document.getElementById('result').innerHTML = memory[0]
                    break;
                case '*':
                    memory = [parseFloat(memory[0]) * parseFloat(memory[2]),memory[1]]
                    document.getElementById('result').innerHTML = memory[0]
                    break;
                case '/':
                    memory = [parseFloat(memory[0]) / parseFloat(memory[2]),memory[1]]
                    document.getElementById('result').innerHTML = memory[0]
                    break;
            }
            /*memory = [parseFloat(memory[0]) + parseFloat(memory[2]),memory[1]]
            document.getElementById('result').innerHTML = memory[0]*/
        }
    }
    else if(memory.length ==2)
    {
        if(memory[1] === '=')
        {
            memory =[memory[0]];
        }
        else if(!isNaN(memory[2]) ) {

        }
        
    }
    else if(memory.length == 3){
        if(!isNaN(memory[1]))
        {
            memory =[memory[1]];
        }
        else if(isNaN(memory[1]) && isNaN(memory[2]))
        {
            memory =[memory[0],memory[2]]
        }    
    }
    console.log(memory)
}

const updateCal = () => {
    let num = '';
    for(let i = 0; i < result.length;i ++)
    {
        num += result[i];
    }
    return num;

}

const reset = () => {
    result = [];
    memory =[];
    document.getElementById('result').innerHTML = updateCal()
}

const theme = () => {
    var x = document.querySelector('input[name="theme"]:checked').value;
    if(x == "theme1")
    {
        document.getElementById('cal').style.backgroundColor = '#232C43';
        document.getElementById('del').style.backgroundColor = '#637097';
        document.getElementById('reset').style.backgroundColor = '#637097';
        document.getElementById('grid').style.backgroundColor = '#404E72';
        document.getElementById('equal').style.backgroundColor = '#D03F2F';
        document.body.style.backgroundColor ="#3A4764";
        Array.from(document.querySelectorAll('.normal')).map(btn => btn.style.backgroundColor = '#e5e4e1')
        Array.from(document.querySelectorAll('.normal')).map(btn => btn.style.color = '#000000')

        document.getElementById('del').style.color = '#fff';
        document.body.style.color = "#fff"

    }
    if(x == "theme2")
    {
        document.getElementById('cal').style.backgroundColor = '#fff';
        document.getElementById('del').style.backgroundColor = '#377F86';
        document.getElementById('reset').style.backgroundColor = '#377F86';
        document.getElementById('grid').style.backgroundColor = '#eae3dc';
        document.getElementById('equal').style.backgroundColor = '#ca5502';
        document.body.style.backgroundColor = '#f4f3f3';
        Array.from(document.querySelectorAll('.normal')).map(btn => btn.style.backgroundColor = '#e5e4e1')
        Array.from(document.querySelectorAll('.normal')).map(btn => btn.style.color = '#000000')

        document.body.style.color = '#000000';
        document.getElementById('del').style.color = '#fff';
        document.getElementById('reset').style.color = '#fff';
        document.getElementById('equal').style.color = '#fff';

    }
    if(x == "theme3")
    {
        document.getElementById('cal').style.backgroundColor = '#58077D';
        document.getElementById('del').style.backgroundColor = '#871C9C';
        document.getElementById('reset').style.backgroundColor = '#871C9C';
        document.getElementById('grid').style.backgroundColor = '#58077D';
        document.getElementById('equal').style.backgroundColor = '#00E0D1';
        document.body.style.backgroundColor = '#1D0934';
        Array.from(document.querySelectorAll('.normal')).map(btn => btn.style.backgroundColor = '#BC15F4')
        Array.from(document.querySelectorAll('.normal')).map(btn => btn.style.color = '#E1E446')

        document.body.style.color = '#E1E446';
        document.getElementById('del').style.color = '#fff';
        document.getElementById('reset').style.color = '#fff';
        document.getElementById('equal').style.color = '#000000';
    }
}