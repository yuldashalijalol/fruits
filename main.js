
alert("Xushkelibsis magazinimizga")


let fruits = [
  {
    id: 121 - 34 - 540,
    name: "Olma",
    price: 10000,
    count: 37
  },
  {
    id: 122 - 34 - 542,
    name: "Nok",
    price: 12000,
    count: 36
  },
  {
    id: 123 - 34 - 541,
    name: "Banan",
    price: 14000,
    count: 32
  },
  {
    id: 124 - 34 - 544,
    name: "Shaftoli",
    price: 16000,
    count: 36
  },
  {
    id: 125 - 34 - 545,
    name: "Uzum",
    price: 11000,
    count: 22
  },
  {
    id: 126 - 34 - 546,
    name: "O'rik",
    price: 9000,
    count: 29
  },
  {
    id: 127 - 34 - 547,
    name: "Kiviy",
    price: 20000,
    count: 10
  },
  {
    id: 128 - 34 - 548,
    name: "Limon",
    price: 22000,
    count: 27
  },
  {
    id: 129 - 34 - 549,
    name: "Mandarin",
    price: 18000,
    count: 28
  },
  {
    id: 1201 - 34 - 54,
    name: "Olcha",
    price: 24000,
    count: 32
  },
  {
    id: 1200 - 34 - 54,
    name: "Qulpunoy",
    price: 24000,
    count: 24
  },
  {
    id: 1280 - 34 - 54,
    name: "Giloz",
    price: 24000,
    count: 26
  }
]

let meva = "b"

while (meva) {
  meva = prompt("Qanday meva kerak sizga!!")

  let yes = false
  if(meva) {
    for (let mevalar of fruits) {

      if (mevalar.name?.toLowerCase() == meva?.toLowerCase()) {
  
        yes = true
      }
    }
  }
 

  let kilo = 0

  if (yes) {

    kilo = prompt(`Necha kilogram ${meva} kerak sizga!`)

  }
  else {
    alert("Uzur bizda bunday meva yo'q ekan Boshqa mevalarni qarab ko'ring")
  }

  if(kilo > 0){
    let qiymat = {}

    for (let mevalar of fruits) {

      if (mevalar.name?.toLowerCase() == meva?.toLowerCase()) {
        qiymat = mevalar
      }
    }
    if (qiymat.count >= kilo){
      alert(`Sizdan shuncha ${kilo * qiymat.price} so'm bo'ladi olasimi!!`)
      fruits[qiymat.id -1].count = qiymat.count - kilo
      console.log(qiymat);
    }
    else{
      alert(`Bizda shuncha ${qiymat.count} kilogram bor ekan. ${kilo - qiymat.count} kilogramni boshqa yerdan qarab ko'ring`)
    }

  }
}