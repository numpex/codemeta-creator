import { License } from './types';
import LicensesData from '@/data/licenses.json';

export const Licenses: Array<License> = LicensesData.sort((a, b) => a.variableName < b.variableName ? -1 : 1);
export const DefaultLicense = Licenses.find(({ variableName }) => variableName === 'gpl3+') as License;
