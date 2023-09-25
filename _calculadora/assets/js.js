function criaCalculadora(){
    return {
        display: document.querySelector(".display"),


        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener("keyup", e =>{
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagar(){
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert("Conta Inválida");
                    return;
                }

                this.display.value = conta;
            } catch{
                alert("Conta Inválida");
                return;
            }
        },

        cliqueBotoes(){
            document.addEventListener("click", e =>{
                const el = e.target;
                if(el.classList.contains("btn-num")){
                    this.btnParaDisplay(el.innerText);
                    
                }
                
                if(el.classList.contains("clear")){
                    this.clearDisplay();
                }

                if(el.classList.contains("apagar")){
                    this.apagar();
                }

                if(el.classList.contains("btn-eq")){
                    this.realizaConta();
                }
            })
        },

        btnParaDisplay(valor){
            this.display.focus();
            this.display.value += valor
        }


    }
}

const calculadora = criaCalculadora();

calculadora.inicia();
