function tabelaMult() { 
  
    let x = [];

    for (let i = 0; i <= 10; i++) {
       
           x.push([])
          for (let j = 0; j <= 10; j++){
                x[i].push(i * j);
                                                            
          }                                   
       
    }console.table(x)

}
    tabelaMult();