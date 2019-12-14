import { getFormFields } from '../../../services'

export const Types = {
  GET_FORM_FIELDS: 'formFields/GET'
}

const initialState = {
  formFields: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_FORM_FIELDS:
      return { ...state, formFields: action.payload }
    default:
      return state
  }
}

export function getFormFieldsData(formFields) {
  console.log('TODO: getPlaylists', getFormFields)
  return {
    type: Types.GET_PLAYLISTS,
    formFields
  }
}
