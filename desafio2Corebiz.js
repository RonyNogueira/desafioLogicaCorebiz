let funcionarios =[ 
    {
        name: "Gabriel",
        wage:1000,
        sales:"3000",
        bonus:0.15
    },
    {
        name: "Gustavo",
        wage:"1000",
        sales:"2500",
        bonus:0.15
    },
    {
        name: "Jhon",
        wage:1000,
        sales:1500,
        bonus:0.15 
    }
]

const moneyMask = (value) =>{
       return value.toFixed(2).replace(".", ",")
}

const totalReceivable = (contributors)=>{
    let result = []
    
        contributors.map((collaborator)=>{

          let name = collaborator.name
          let bonus = parseFloat(collaborator.sales * collaborator.bonus)
          let wage = parseFloat(collaborator.wage) + bonus
            
          result.push({
              name,
              wage: moneyMask(wage)
          })
        })  

       return console.table(result)
}

totalReceivable(funcionarios)
