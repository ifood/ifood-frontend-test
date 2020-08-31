import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

class Navigation extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div>
            <Menu pointing secondary>
                <Menu.Item
                    color='orange'
                    // className='menu-item'
                    name='Spotifood'
                    active={activeItem === 'Spotifood'}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item

                        className='menu-item'
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        className='menu-item'
                        name='messages'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        className='menu-item'
                        name='friends'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
              
              {/* <Menu.Menu position='right'>
                <Menu.Item
                  name='logout'
                  active={activeItem === 'logout'}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu> */}
            </Menu>
          </div>
        )
    }
}

export default Navigation;
