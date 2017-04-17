import React from 'react';
import Header from './components/header';

export default class Application extends React.Component {
    render() {
        return (
            <main className='application'>
                {React.cloneElement(
                    this.props.children,
                    this.props.children.props.route,
                )}
            </main>
        );
    }
}
