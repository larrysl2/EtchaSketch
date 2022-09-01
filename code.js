const button = document.querySelector(".button");
button.addEventListener("click", adddivs);
const clean = document.querySelector(".clear");
clean.addEventListener("click", clear);
let numberofsquares =0;
let counter =0;
function adddivs (j) 
{
    
    // parameters are function squaresize and prompt which will get user input and ss will calculate square sizes
 // create a new div element
    let x=0;
    do
    {
    let numsquares = parseInt(prompt("Enter number of squares on side of board with whole number less than 100"));
    if (numsquares<101 && Number.isInteger(numsquares)==true)
    {
    x=1;
    numberofsquares = numsquares;
    }
    }while(x!=1);
    
    console.log(numberofsquares);
    let squaresizes = squaresize(); //store return values in variables
	console.log(squaresizes);
    for(var i=0;i<numberofsquares;i++)//loop through number of sq on side divs
    {
        
        let divcontainer = document.createElement("div");//create a variable divcontain and create/store a div in it
        divcontainer.classList.add("divcontainer"+i);//add class divcontainer to this div
        divcontainer.style.display ='flex'; //make small divs flex to take up entire width
        divcontainer.style.outline= "1px solid black";
        divcontainer.style.width="100%";
        divcontainer.style.height=1/numberofsquares*100+'%';
        divcontainer.style.gap=0;
        const theboard = document.getElementById("board"); //get board
        theboard.appendChild(divcontainer); //add container to board

        for(j=0;j<numberofsquares;j++) // loop through number of squares needed to create
        {
                let smalldivs = document.createElement("span"); //create div and call smalldivs
                smalldivs.classList.add("smalldivs"); //create div and store in smalldivs
                smalldivs.style.width = squaresizes/960*100+'%'; //set width to sss
                smalldivs.style.height = '100%'; //set height to ss
                smalldivs.style.display ='Inline-Flex'; //set to inline flex so can stay in a row
                smalldivs.style.outline= "1px solid black";
                const container = document.getElementsByClassName("divcontainer"+i); 
                container[0].appendChild(smalldivs); //append divs to collection //add ss to container
                const hover = document.getElementsByClassName("smalldivs"); 

        }
    }
    hover();
    
 }
function squaresize()
{
	let hxw = 960/numberofsquares;
	return hxw;
}
function hover()
{
    let smallsquares = document.querySelectorAll("span.smalldivs")
    smallsquares.forEach(smalldivs => {
        smalldivs.addEventListener('mouseenter', function() { 
            smalldivs.style.background = 'black';
        })
    })
}
function clear()
{
    let grid = document.querySelectorAll("span.smalldivs");
    
    grid.forEach(smalldivs => {
            // smalldivs.classList.remove("smalldivs");
            smalldivs.style.background = 'white';
        })
}

