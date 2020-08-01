import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

export default function Pagination ({ totalItems, limit, onSubmitPagination }) {
  const [pages, setPages] = useState([])
  const [indexSelected, setIndexSelected] = useState(0)

  useEffect(() => {
    function handlePages () {
      const numPages = Math.ceil(totalItems / limit)
      const pagesArray = new Array(numPages).fill(0)

      setPages(pagesArray)
    }

    handlePages()
  }, [totalItems, limit])

  function loadPage (page) {
    const offset = (page * limit)

    setIndexSelected(page)
    onSubmitPagination({ offset, limit })
  }

  return (
    <S.Container>
      <S.Content>
        <S.Numbers>
          {pages.map((page, index) => (
            <S.Number
              key={index}
              selected={indexSelected === index}
              onClick={() => loadPage(index)} >
              <S.Text>{index + 1}</S.Text>
            </S.Number>
          ))}
        </S.Numbers>
      </S.Content>
    </S.Container>
  )
}

Pagination.propTypes = {
  totalItems: PropTypes.number,
  limit: PropTypes.number,
  onSubmitPagination: PropTypes.func.isRequired
}

Pagination.defaultProps = {
  totalItems: 0,
  limit: 5
}
