import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAuthUser, loginRequest, registerRequest } from "../services/auth.services";
import { createContext, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => { 
    const queryClient = useQueryClient();

    const fetchUser = async () => { 
        const token = await AsyncStorage.getItem('token');
        if (!token) return null;
        return getAuthUser;
    }

    const { data: user, isLoading } = useQuery({
        queryKey: ['auth-user'],
        queryFn: fetchUser,
    })

    const registerMutation = useMutation({
        mutationFn: registerRequest
    })

    const logout = async () => { 
        await AsyncStorage.removeItem('token');
        queryClient.setQueryData(["auth-user"], null);
    }

    const loginMutation = useMutation({
        mutationFn: loginRequest,
        onSuccess: async (data) => {
            await AsyncStorage.setItem('token', data.token);
            queryClient.setQueryData(["auth-user"], data.user);
        }
    })

    const value = {
      user,
      isLoading,
      isAuth: !!user,
      login: loginMutation.mutateAsync,
      logout,
      register: registerMutation.mutateAsync,
    };

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext) 
