let amigo = {nome: 'José',
             sexo: 'm',
             peso: 84.5,
             engordar(peso=0) {
                console.log('engordou')
                this.peso += peso
                return
             }}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} quilos`)