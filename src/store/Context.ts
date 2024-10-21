import { createContext, useContext } from 'react';
import { ContextProps } from 'src/constants/types';

const Context = createContext<ContextProps | undefined>(undefined);

const useContextProvider = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useContextProvider must be used within a ContextProvider');
    }
    return context;
};

export { Context, useContextProvider };
