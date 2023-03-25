import {DetailedHTMLProps} from 'react'

export interface TitleProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  weight: 'bold' | 'regular'
}