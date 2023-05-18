import { ARButton } from '@react-three/xr'
import React from 'react'

type CustomARButtonProps = {
  isFinish: boolean
  hasEnterAr: boolean
  onStart: () => void
  onExit: () => void
}

const CustomARButton: React.FC<CustomARButtonProps> = ({ isFinish, hasEnterAr, onStart, onExit }) => {
  if (isFinish) {
    return (
      <div
        onClick={onExit}
        style={{
          textAlign: 'center',
          backgroundColor: '#00a6fb',
          borderRadius: '20px',
          border: '0',
          color: '#f3fcec',
          maxWidth: '100%',
          padding: '20px',
          fontWeight: '700',
          fontSize: '20px',
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          right: '20px'
        }}
      >
        Exit AR
      </div>
    )
  }

  if (hasEnterAr) {
    return null
  }

  return (
    <div
      onClick={onStart}
      style={{
        textAlign: 'center',
        backgroundColor: '#00a6fb',
        borderRadius: '20px',
        border: '0',
        color: '#f3fcec',
        maxWidth: '100%',
        padding: '20px',
        fontWeight: '700',
        fontSize: '20px',
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        right: '20px'
      }}
    >
      Enter AR
    </div>
  )
}

export default CustomARButton
