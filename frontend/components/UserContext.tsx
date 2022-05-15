import React from 'react';

type Context = {
    userName: string | undefined
}

export const UserContext = React.createContext<Context>({userName: ""})
