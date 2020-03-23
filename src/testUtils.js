import { act } from '@testing-library/react';
import waait from 'waait'; 

export const wait = () => act(() => waait(0));