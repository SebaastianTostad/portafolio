import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import { IconButton } from '@mui/material'
import { Container, Content } from './NavMenu.styled'

export default function NavMenu() {
  return (
    <Container>
      <Content>
        <IconButton sx={{color: "#B9B8C6"}}>
          <HomeIcon />
        </IconButton>
        <IconButton  sx={{color: "#B9B8C6"}}>
          <PersonIcon />
        </IconButton>
        <IconButton  sx={{color: "#B9B8C6"}}>
          <InsertDriveFileIcon />
        </IconButton>
      </Content>
    </Container>
  )
}
