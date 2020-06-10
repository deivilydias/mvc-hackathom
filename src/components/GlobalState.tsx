import React, {  FunctionComponent } from 'react';

type Props = {
    addState: (state: object) => void,
    getState: () => {},
}

export default function GlobalStateHOC (Screen : FunctionComponent<Props>)  {
    return class Component extends React.Component {
    
        methods = {
            addState: (state: object) => this.addState(state),
            getState: () : object => this.getState()
        }
    
        addState(value: object) : void {
            this.setState(value)
        }
    
        getState() : object {
            return this.state;
        }
    
        constructor(props: any) {
            super(props)
        }
        
        render() {
            return <Screen {...this.methods} />
        }
    };
} 
