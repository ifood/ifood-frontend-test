import * as React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NotFoundScreen } from 'shared/ui/notfound'

import { PlayListScreen } from './playlist'

export default function Authenticated() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="playlist" />} />
      <Route path="/playlist" element={<PlayListScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  )
}
