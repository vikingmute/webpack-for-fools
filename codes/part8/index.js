
import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
  alert(_.camelCase('CAMEL CASE FROM LODASH'))
}).catch(err => console.error('error happens!', err))
