import React from 'react'
import { Drawer, useMediaQuery, useTheme } from '@mui/material'

import { ISidebarProps } from '../config/types'

export const Sidebar = ({
  children,
  open,
  onClose,
  sidebarWidth = 624,
}: ISidebarProps) => {
  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down(sidebarWidth))

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      {children}
    </Drawer>
  )
}
