"use client"

import {create} from 'zustand'

interface useUrlStoreInterface {
    url:string;
    setUrl:(url:string) => void;
}

export const useUrlStore = create<useUrlStoreInterface>((set) => ({
    url:"",
    setUrl:(newUrl) => set({url:newUrl})
}))