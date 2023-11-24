const regexNombre = /^[a-zA-Z0-9\sáéíóúüñÁÉÍÓÚÜÑ]{3,25}$/
const regexDificultad = /^[0-5]$/
const regexDuracion = /^(1?[0-9]|2[0-4])$/
const regexTemporada = /^[a-zA-ZñÑ]+$/

const validate = input => {
  let errors = {}
  const { nombre, dificultad, duracion, temporada, pais } = input
  if (!nombre || !regexNombre.test(nombre)) {
    errors.nombre =
      'El nombre de la actividad debe ser mayor a 3 caracteres y menor a 25 caracteres'
  }
  if (!dificultad || !regexDificultad.test(dificultad)) {
    errors.dificultad = 'La dificultad debe ser un numero entero entre 0 y 5'
  }
  if (!duracion || !regexDuracion.test(duracion)) {
    errors.duracion = 'La duracion deber ser un número entero entre 0 y 24'
  }
  if (!regexTemporada.test(temporada) || temporada === 'seleccionar') {
    errors.temporada = 'seleccione una temporada'
  }

  if (!pais || pais === 'seleccionar') {
    errors.pais = 'seleccione un pais'
  }
  return errors
}

export default validate

// const validation = (input, errors, setErrors, name) => {
//   switch (name) {
//     case 'name':
//       if (!input.name || input.name.length < 3 || input.name.length > 25) {
//         setErrors({
//           ...errors,
//           name: 'El nombre no es valido. Debe contener máximo 25 carácteres y mínimo 3'
//         })
//       } else {
//         setErrors({
//           ...errors,
//           name: ''
//         })
//       }
//       break
//     case 'dificult':
//       if (!input.dificult || input.dificult < 1 || input.dificult > 5) {
//         setErrors({
//           ...errors,
//           dificult: 'La dificultad de la actividad debe estar entre 1 y 5'
//         })
//       } else {
//         setErrors({
//           ...errors,
//           dificult: ''
//         })
//       }
//       break

//     case 'duration':
//       if (!input.duration || input.duration > 49 || input.duration < 1) {
//         setErrors({
//           ...errors,
//           duration: 'la duración debe estar entre 1 y 48 horas'
//         })
//       } else {
//         setErrors({
//           ...errors,
//           duration: ''
//         })
//       }
//       break
//     case 'season':
//       if (!input.season || input.season == 'seleccionar') {
//         setErrors({
//           ...errors,
//           season: 'Por favor seleccione una temporada'
//         })
//       } else {
//         setErrors({
//           ...errors,
//           season: ''
//         })
//       }
//       break

//     case 'country':
//       if (!input.country || input.country == 'seleccionar') {
//         setErrors({
//           ...errors,
//           country: 'Por favor seleccione un pais'
//         })
//       } else {
//         setErrors({
//           ...errors,
//           country: ''
//         })
//       }
//       break
//     default:
//       setErrors({
//         ...errors
//       })
//       break
//   }
// }
// export default validation
