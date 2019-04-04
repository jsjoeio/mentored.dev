import React from 'react'
import styled from '../../utils/styled'

const IMG = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 3px solid ${props => props.theme.neutral.darker};
  margin-right: 1rem;
`
const Avatar: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <IMG src={src} alt={alt} />
)

export default Avatar
