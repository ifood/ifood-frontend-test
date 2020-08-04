import React from 'react'
import { FormattedMessage } from 'react-intl'

import * as S from './styles'

const mocks = {
  items: [{
    price: '9.99 ',
    link: 'https://www.spotify.com/us/purchase/products/?country=US'
  }, {
    price: '12.99 ',
    link: 'https://www.spotify.com/us/purchase/offer/duo/?country=US'
  }, {
    price: '14.99 ',
    link: 'https://www.spotify.com/us/purchase/offer/premium-family/?country=US'
  }, {
    price: '4.99 ',
    link: 'https://www.spotify.com/us/student/verification/'
  }]
}

export default function Premium () {
  return (
    <S.Container>
      <S.Content>
        <S.Title><FormattedMessage id='premium.title'/></S.Title>
        <S.Description><FormattedMessage id='premium.description'/></S.Description>
        <S.WrapperCard>
          {mocks.items.map((item, index) => (
            <S.LinkPremium
              key={index}
              href={item.link}
              target='_blank'>
              <S.Card >
                <S.PlanTitle><FormattedMessage id={`premium.plan${index}`}/></S.PlanTitle>
                <S.Price>
                  <FormattedMessage id='premium.price' values={{ price: item.price }}/>
                </S.Price>
              </S.Card>
            </S.LinkPremium>
          ))}
        </S.WrapperCard>
      </S.Content>
    </S.Container>
  )
}
