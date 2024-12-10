import { createSlice, configureStore } from '@reduxjs/toolkit';

const logoSlice = createSlice({
    name: "logo",    
    initialState: {
        value: "https://i.imgur.com/78xnYws.gif"
    },
    reducers: {}, 
});

const menuSlice = createSlice({
    name: "menuList",
    initialState: {
        links: [
            { text: "youtube", url: "https://www.youtube.com/" },
            { text: "main", url: "http://localhost:3000/" },
            { text: "aboba", url: "" },
        ]
    },
    reducers: {}
    
})

const dateSlice = createSlice({
    name: "date",
    initialState:{
        value: new Date()
    },
    reducers: {
        updateTime: (state) => {
            state.value = new Date(); 
        }
    }
})
export const { updateTime } = dateSlice.actions;
const store = configureStore({
    reducer: { 
        logo: logoSlice.reducer,
        menuList: menuSlice.reducer,
        date: dateSlice.reducer
    },
});

export default store;
