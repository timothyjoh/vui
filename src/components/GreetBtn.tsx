import type { FC } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import { atom } from 'nanostores'
import { useStore } from '@nanostores/react'

import { Button } from './ui/button'
import { Badge } from './ui/badge'

const message = atom('')

export const GreetBtn: FC = () => {
  const $msg = useStore(message)

  const click = async () => {
    const response: string = await invoke('greet', { name: 'tim' })
    console.log({ response })
    message.set(response)
  }
  return (
    <>
      <Button onClick={click}>Greetings!</Button>
      {$msg && <Badge>{$msg}</Badge>}
    </>
  )
}