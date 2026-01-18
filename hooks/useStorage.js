import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const useStorage = (key, data, dispatch, type) => { 

    useEffect(() => {
        const loadData = async () => {
            try {
                const saved= await AsyncStorage.getItem(key)
                if (saved !== null) {
                    dispatch({ type, payload: JSON.parse(saved) })
                }
            }
            catch (error) {
                console.log('Помилка при завантажені');
            }
        }
        loadData()
    }, []);

    useEffect(() => {
        const saveData = async () => {
            try {
                await AsyncStorage.setItem(key, JSON.stringify(data))
            }
            catch (error) {
                console.log('Помилка при збереженні');
            }
        }
        saveData()
    }, [key, data]);

}

export default useStorage


