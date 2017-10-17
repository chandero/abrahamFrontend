import Vue from 'Vue'
import {GET_TIPOS_DOCUMENTO, SET_TIPOS_DOCUMENTO} from '../mutations-types'

const solicitud = {
  tiposDocumento: [],
  tiposPersona: [],
  tiposGenero: [],
  tiposVinculacion: [],
  persona: {
    documento: {
      tipo: 0,
      numero: '',
      expedicion: {
        lugar: '',
        fecha: ''
      }
    },
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    datos: {
      tipo: 0,
      genero: 0,
      estadoCivil: 0,
      nacimiento: {
        fecha: '',
        lugar: '',
        provincia: '',
        departamento: '',
        pais: ''
      },
      tipoVinculacion: 0,
      email: '',
      fechaAfiliacion: '',
      escolaridad: 0,
      estrato: 0,
      tipoVivienda: 0
    },
    conyuge: {
      documento: {
        tipo: 0,
        numero: ''
      },
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: ''
    },
    laboral: {
      tipo: 0,
      otro: {
        fechaUltimoBalance: '',
        ventasAnuales: 0.00,
        numeroEmpleados: 0
      },
      madreCabezaFamilia: false,
      tipoContrato: 0,
      descripcionContrato: '',
      ocupacion: '',
      empresa: '',
      cargo: '',
      fechaIngreso: '',
      ciiu: 0,
      renta: false,
      retefuente: true
    },
    balance: {
      ingreso: {
        principal: 0.00,
        otros: 0.00,
        origen: ''
      },
      egreso: {
        arriendo: 0.00,
        transporte: 0.00,
        servicios: 0.00,
        alimentos: 0.00,
        deudas: 0.00,
        otros: 0.00,
        origen: ''
      },
      direccion: [],
      referencia: [],
      beneficiario: [],
      hijos: {
        numero: 0,
        personasACargo: 0,
        relacion: []
      }
    }
  }
}

const getters = {
  getTiposDocumento: state => {
    return state.tiposDocumento
  }
}

const mutations = {
  [SET_TIPOS_DOCUMENTO] (state, getters, data) {
    state.solicitud.tiposDocumento = data
  }
}

const actions = {
  [GET_TIPOS_DOCUMENTO] (context) {
    Vue.axios.get('/tdocget').then((response) => {
      console.log(response.data)
      context.commit('setTiposDocumento', response.data)
    })
    .catch(e => {
      console.log(e)
    })
  }
}

export default {
  state: solicitud,
  getters,
  mutations,
  actions
}
