export const logger = store => next => action => {
  console.log(action)
  next(action)
}

// export const counted = store => next => actionInfo => {
//   const fixed = actionInfo.payload.map(country => ({
//     ...country,
//     nombre: `COUN - ${country.nombre}`
//   }))

//   const udpdatedAction = {
//     ...actionInfo.action,
//     action: { ...actionInfo, payload: fixed }
//   }
//   next(udpdatedAction)
// }
