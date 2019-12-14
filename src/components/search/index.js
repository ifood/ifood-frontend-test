import React, { useEffect } from 'react'
import {
  // useDispatch,
  useSelector
} from 'react-redux'

// import { getFormFields } from '../../store/ducks/form-fields'

export function Search() {
  const data = useSelector(state => state.formFields)
  // const dispatch = useDispatch();

  console.log('data', data)

  useEffect(() => {
    ;(async () => {
      // const response = await getFormFields()
      // console.log(response.data.filters)
    })()
  }, [])

  return <div>Search</div>
}
