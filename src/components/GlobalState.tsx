import React from 'react';

interface StoredState {
}

export type GlobalStateProps = {
    addState: (state: StoredState) => void,
    getState: () => {},
}

export default function GlobalStateHOC (Screen : React.ComponentType<GlobalStateProps>)  {
    return class Component extends React.Component<any,StoredState> {
    
        methods = {
            addState: (state: StoredState) : void => this.addState(state),
            getState: () : StoredState => this.getState()
        }
    
        addState(value: StoredState) : void {
            this.setState(value)
        }
    
        getState() : StoredState {
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
