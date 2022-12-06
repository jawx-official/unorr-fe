import create from 'zustand';
import { persist } from 'zustand/middleware';

import { IUtils } from './utils.interface';

export const useUtilStore = create(
  persist<IUtils>(
    (set, get) => ({
      description: "",
      title: "",
      keywords: "",
      updateUtils: (payload)=>{
        set({...payload})
      }
    }),
    {
      name: 'util-storage',
      getStorage: () => sessionStorage,
    }
  )
);