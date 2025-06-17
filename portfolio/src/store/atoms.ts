import { atom } from 'recoil';

export const themeState = atom({
  key: 'themeState',
  default: 'dark' as 'light' | 'dark'
});

export const activeTabState = atom({
  key: 'activeTabState',
  default: 'Projects' as 'Projects' | 'Experience' | 'Tools'
});