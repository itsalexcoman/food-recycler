import React from 'react';

class Profile extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <h1>I am a {this.props.type} Fridge</h1>
            </div>
        );
    }
}

export default Profile;
