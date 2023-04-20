import { FC } from 'react';
import { Select } from '../../components/ui/select/select';
export const AuthPage: FC = () => {

  const opts = [
    {
      value: 'sdfsfsdfds',
      label: 's3423423423'
    },
      {
      value: 'sdfsfsdfds',
      label: 's3423423423'
    }
  ]

  return (
    <div>
      <Select values={opts}></Select>
    </div>
  )
}