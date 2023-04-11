let h1_pt = document.querySelector('.pt')
let bt_começar = document.querySelector('.bt_começar')
let perguntas = document.querySelector('.perguntas')
let xp = document.querySelector('.exp')
let p_pts = document.querySelector('.p_pts')
let exp_pts_ex = document.querySelector('.exp_pts_ex')
let per_1  = document.querySelector('.per_1')
let per_2 = document.querySelector('.per_2')
let per_3 = document.querySelector('.per_3')
let per_4 = document.querySelector('.per_4')
let per_5 = document.querySelector('.per_5')

let res1 = document.getElementsByName('per1')
let res2 = document.getElementsByName('per2')
let res3 = document.getElementsByName('per3')
let res4 = document.getElementsByName('per4')
let res5 = document.getElementsByName('per5')

let acertos = Number(0)
let pt = Number(0)
let xp_pts = Number(0)
let p = Number(0)
function atualizar_pts() {
    h1_pt.innerHTML  = `${pt}`
}

function resetar() {
    perguntas.style.display  = 'none'
    pt = 0
    atualizar_pts()
}

function subir_nivel() {
    if (xp_pts == 200) {
        p++
        xp.style.width = '0px'
        p_pts.innerHTML = `${p}`
        xp_pts = 0
    }
}

function iniciar() {
    bt_começar.style.display = 'none'
    per_1.style.display = 'block'
}

function confirma_per1()  {
    if (res1[0].checked || res1[1].checked || res1[2].checked) {
        per_1.style.display = 'none'
        per_2.style.display = 'block'
        if (res1[2].checked) {
            xp_pts += 50
            acertos += 1
            xp.style.width  = xp_pts + 'px'
            pt += 5 
            exp_pts_ex.innerHTML = `${xp_pts}/200`
        } else {
            pt -= 5
        }
        atualizar_pts()
    } else {
        alert('Por favor marque uma das opções!')
    }
   subir_nivel()
}

function confirma_per2() {
    if (res2[0].checked || res2[1].checked || res2[2].checked) {
        per_2.style.display = 'none'
        per_3.style.display  = 'block'
        if  (res2[0].checked) {
            xp_pts += 50
            acertos += 1
            xp.style.width  = xp_pts + 'px'
            pt  +=  5
            exp_pts_ex.innerHTML = `${xp_pts}/200`
        } else  {
            pt -= 5
        }
        atualizar_pts()
    } else {
        alert('Por favor marque uma das opções!')
    }
    subir_nivel()
}

function confirma_per3() {
    if (res3[0].checked || res3[1].checked || res3[2].checked) {
        per_3.style.display = 'none'
        per_4.style.display = 'block'
        if (res3[0].checked) {
            xp_pts += 50 
            acertos += 1
            xp.style.width  = xp_pts + 'px'
            pt +=  5
            exp_pts_ex.innerHTML = `${xp_pts}/200`
        } else {
            pt -= 5
        }
        atualizar_pts()
    } else {
        alert('Por favor marque uma das opções!')
    }
    subir_nivel()
}

function confirma_per4() {
    if (res4[0].checked || res4[1].checked || res4[2].checked) {
        per_4.style.display = 'none'
        per_5.style.display  = 'block'
        if (res4[2].checked) {
            xp_pts += 50
            acertos += 1
            xp.style.width  = xp_pts + 'px'
            pt  += 5
            exp_pts_ex.innerHTML = `${xp_pts}/200`
        }  else {
            pt -= 5
        }
        atualizar_pts()
    } else {
        alert('Por favor marque uma das opções!')
    }
    subir_nivel()
}

function confirma_per5() {
    if (res1[0].checked || res1[1].checked || res1[2].checked) {
        per_5.style.display = 'none'
        if (res5[1].checked) {
            xp_pts += 50 
            acertos += 1
            xp.style.width  = xp_pts + 'px'
            pt += 5
            exp_pts_ex.innerHTML = `${xp_pts}/200`
        } else {
            pt -= 5
        }
        if (acertos == 5) {
            alert(`Acertos: ${acertos}/5. Parabens você acertou todas as perguntas!`)
        } else if (acertos >= 3 && acertos <= 4) {
            alert(`Acertos: ${acertos}/5. Pontuação aceitavel!`)
        } else if (acertos <= 2) {
            alert(`Acertos: ${acertos}/5. Infelizmente você foi pessimo!`)
        }
        atualizar_pts()
    } else {
        alert('Por favor marque uma das opções!')
    }    
    subir_nivel()
}


