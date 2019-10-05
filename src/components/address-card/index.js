import React from 'react'

import {
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'

import ExpandingCard from '../cards/expanding-card'

import addressData from './data'

const AddressCard = () => (
  addressData.map(address => (
    <ExpandingCard
      key={address.title}
      variant={address.variant}
      title={address.title}
    >
      <List dense>
        {address.data.map(line => (
          <ListItem key={line}>
            <ListItemText>
              {line}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </ExpandingCard>
  ))
)


export default AddressCard
