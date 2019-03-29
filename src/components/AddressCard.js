import React, { Fragment } from 'react'

import { List, ListItem, ListItemText } from '@material-ui/core'

import ExpandingCard from './ExpandingCard'

import HomeIcon  from '@material-ui/icons/Home'
import MailOutlineIcon  from '@material-ui/icons/MailOutline'

const addressData = [{
  title: 'Business Address',
  icon: <HomeIcon/>,
  data: [
    'Cnr of Rooisand & Frikkie Meyer Street',
    'Heritage Square',
    'Kathu',
    '8446',
    'Northern Cape',
    'South Africa'
  ]
}, {
  title: 'Postal Address',
  icon: <MailOutlineIcon/>,
  data: [
    'Postnet Suite 162',
    'Private Bag X508',
    'Heritage Square',
    'Kathu',
    '8446',
    'Northern Cape',
    'South Africa'
  ]
}]


const liStyle = {
  padding: '4px 0'
}

const AddressCard = () => (
  <Fragment>
    {addressData.map(address => (
      <ExpandingCard
        key={address.title}
        icon={address.icon}
        title={address.title}
      >
        <List dense>
          {address.data.map(line => (
            <ListItem key={line} style={liStyle}>
              <ListItemText>
                {line}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </ExpandingCard>
    ))}
  </Fragment>
)


export default AddressCard
