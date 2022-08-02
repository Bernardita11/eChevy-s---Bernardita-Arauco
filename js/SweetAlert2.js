const boton = document.querySelector('#formulario');
boton.addEventListener('submit', aplicar);


function aplicar(e){
    e.preventDefault();
    const valor = document.querySelector('#name', '#sub-name').value;

    if (valor ===""){
        //Show Alert
        Swal.fire({
            title:'Error',
            text: 'Campo Obligatorio',
            icon:'error',
            confirmButtonText: 'Confirmar',
        })
    } else{
        Swal.fire({
            title:`${valor}`,
            text: '¡Bienvenido!',
            icon:'success',
            confirmButtonText: 'Confirmar',
        })
    }
}


const boton1 = document.querySelector('#formulario1');
boton.addEventListener('submit', aplicar);


function aplicar(e){
    e.preventDefault();
    const valor = document.querySelector('#fname').value;

    if (valor ===""){
        //Show Alert
        Swal.fire({
            title:'Error',
            text: 'Campo Obligatorio',
            icon:'error',
            confirmButtonText: 'Confirmar',
        })
    } else{
        Swal.fire({
            title:`${valor}`,
            text: 'Mensaje enviado',
            icon:'success',
            confirmButtonText: 'Confirmar',
        })
    }
}