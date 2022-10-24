import React from 'react';
interface ErrorProps {
  error: string
}
export function Error({ error }: ErrorProps) {
  return (
    <div className='text-center text-red-400'>{error}</div>
  )
}
