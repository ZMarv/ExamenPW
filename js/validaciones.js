// Validaciones Contactanos
$(function(){
    $("#miniFormulario").validate({
        rules:{
            txtNombre:{
                required:true,
                minlength:5
            },
            txtFecha:{
                required:true
            },
            txtEmail:{
                required:true
            },
            txtFono:{
                required:true
            }
        },
        messages:{
            txtNombre:{
                required:"El Nombre es un campo Obligatorio",
                minlength:"El minimo de caracteres es 20"
            },
            txtFecha:{
                required:"La fecha es Obligatoria"
            },
            txtEmail:{
                required:"El Email es Obligatorio"
            },
            txtFono:{
                required:"El telefono es Obligatorio",
                minlength:"El minimo de caracteres es 12"
            }
        }
    })
})
// Fin validacion Contactanos

// Validaciones Inicio
$(function(){
    $("#valIni").validate({
        rules:{
            txtCorreo:{
                required:true
            },
            txtPassword:{
                required:true,
                minlength:8
            }
        },
        messages:{
            txtCorreo:{
                required:"El Correo es Obligatorio"
            },
            txtPassword:{
                required:"La Contraseña es Obligatoria",
                minlength:"El minimo de caracteres es 12"

            }
        }
    })
})
// El botóm del html no lo moví al final porsiacaso
// Fin validacion Inicio

// Validacion Registrarse
$(function(){
    $("#valRe").validate({
        rules:{
            txtNombrer:{
                required:true,
                minlength:5
            },
            txtFech:{
                required:true
            },
            txtCorreor:{
                required:true
            },
            txtFonor:{
                required:true
            }
        },
        messages:{
            txtNombrer:{
                required:"El Nombre es un campo Obligatorio"
            },
            txtFech:{
                required:"La fecha es Obligatoria"
            },
            txtCorreor:{
                required:"El Email es Obligatorio"
            },
            txtFonor:{
                required:"El telefono es Obligatorio",
                minlength:"El minimo de caracteres es 12"
            }
        }
    })
})
// Fin valinacion Registrarse