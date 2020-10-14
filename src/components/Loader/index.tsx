import React from 'react'
import ReactLoading from 'react-loading';

import { LoaderWrapper } from './styles'

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ReactLoading 
        type='cylon' 
        color='#ac53f2' 
        height={480} 
        width={188} />
    </LoaderWrapper>
  )
}
