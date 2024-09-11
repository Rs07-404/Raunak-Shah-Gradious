//Zoom out the page to 25% to get full code

codearea = document.getElementsByClassName("ace_layer ace_text-layer")[0];
let lines = codearea.getElementsByClassName("ace_line_group");
mainCode = '';
for(let line of lines){
    let linesofcode = line.getElementsByClassName('ace_line');
    for(let letter of linesofcode){
        let spans = letter.getElementsByTagName('span');
        for(let span of spans){
            if(span.innerHTML === '.' || span.innerHTML === '(' || span.innerHTML === '{' ||span.innerHTML === '[' || span.innerHTML === ')' || span.innerHTML === '}' ||span.innerHTML === ']'){
                mainCode[mainCode.length - 1] = '';
                mainCode = mainCode + span.innerHTML;
            }else{
                    if(span.innerHTML === '&gt;'){
                        mainCode = mainCode + '>';
                    }else if(span.innerHTML === '&lt;'){
                        mainCode = mainCode + '<';
                    }else if(span.innerHTML === '&amp;'){
                        mainCode = mainCode + '&';
                    }else if(span.innerHTML === '&amp;&amp;'){
                        mainCode = mainCode + '&&';
                    }else{
                        mainCode = mainCode + span.innerHTML;
                        mainCode = mainCode + ' ';
                    }
            }
            
        }
        mainCode = mainCode + '\n';
    }
    
    };
console.log(mainCode);
