"use client"
export const getDefautlTheme = () => {
    if (typeof window !== 'undefined') {
       if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    } else {
        return 'light';
    }
      }
      
    
}