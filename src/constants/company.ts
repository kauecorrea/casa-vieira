import type { BusinessSchedule } from '../types';

export const COMPANY_INFO = {
  name: 'Casa Vieira Materiais de Construção',
  shortName: 'Casa Vieira',
  address: 'Passagem Sexta Linha, 06 - Tenoné, Belém - PA, CEP 66820-170',
  city: 'Belém',
  neighborhood: 'Tenoné',
  phone: '5591982739017',
  displayPhone: '(91) 98273-9017',
  email: 'contato@casavieira.com.br',
  description: 'Seu material de construção em Belém, com qualidade e preço justo. Do alicerce ao acabamento, conte com a gente para a sua obra.'
};

export const BUSINESS_SCHEDULE: BusinessSchedule[] = [
  {
    day: 'Domingo',
    dayIndex: 0,
    periods: [{ open: '07:30', close: '12:00' }]
  },
  {
    day: 'Segunda-feira',
    dayIndex: 1,
    periods: [{ open: '07:30', close: '12:00' }, { open: '16:00', close: '19:00' }]
  },
  {
    day: 'Terça-feira',
    dayIndex: 2,
    periods: [{ open: '07:30', close: '12:00' }, { open: '16:00', close: '19:00' }]
  },
  {
    day: 'Quarta-feira',
    dayIndex: 3,
    periods: [{ open: '07:30', close: '12:00' }, { open: '16:00', close: '19:00' }]
  },
  {
    day: 'Quinta-feira',
    dayIndex: 4,
    periods: [{ open: '07:30', close: '12:00' }, { open: '16:00', close: '19:00' }]
  },
  {
    day: 'Sexta-feira',
    dayIndex: 5,
    periods: [{ open: '07:30', close: '12:00' }, { open: '16:00', close: '19:00' }]
  },
  {
    day: 'Sábado',
    dayIndex: 6,
    periods: [{ open: '07:00', close: '12:00' }, { open: '15:30', close: '19:00' }]
  }
];
