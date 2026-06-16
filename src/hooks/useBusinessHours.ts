import { useState, useEffect } from 'react';
import { BUSINESS_SCHEDULE } from '../constants/company';

interface BusinessHoursState {
  isOpen: boolean;
  currentPeriod: string | null;
  nextOpenInfo: string;
  todayLabel: string;
}

export function useBusinessHours(): BusinessHoursState {
  const [state, setState] = useState<BusinessHoursState>({
    isOpen: false,
    currentPeriod: null,
    nextOpenInfo: '',
    todayLabel: ''
  });

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const currentDayIndex = now.getDay();
      const currentTime = now.getHours() * 60 + now.getMinutes();

      const todaySchedule = BUSINESS_SCHEDULE.find(s => s.dayIndex === currentDayIndex);
      if (!todaySchedule) return;

      let isOpen = false;
      let currentPeriod: string | null = null;
      let nextOpenInfo = '';

      // Check if open now
      for (const period of todaySchedule.periods) {
        const [openH, openM] = period.open.split(':').map(Number);
        const [closeH, closeM] = period.close.split(':').map(Number);
        const openTime = openH * 60 + openM;
        const closeTime = closeH * 60 + closeM;

        if (currentTime >= openTime && currentTime < closeTime) {
          isOpen = true;
          currentPeriod = `${period.open} - ${period.close}`;
          nextOpenInfo = `Fecha às ${period.close}`;
          break;
        }
      }

      // If closed, find next open time
      if (!isOpen) {
        let foundNext = false;
        
        // Check later today
        for (const period of todaySchedule.periods) {
          const [openH, openM] = period.open.split(':').map(Number);
          const openTime = openH * 60 + openM;
          
          if (currentTime < openTime) {
            nextOpenInfo = `Abre hoje às ${period.open}`;
            foundNext = true;
            break;
          }
        }

        // Check tomorrow
        if (!foundNext) {
          const nextDayIndex = (currentDayIndex + 1) % 7;
          const nextSchedule = BUSINESS_SCHEDULE.find(s => s.dayIndex === nextDayIndex);
          if (nextSchedule && nextSchedule.periods.length > 0) {
            nextOpenInfo = `Abre amanhã às ${nextSchedule.periods[0].open}`;
          }
        }
      }

      setState({
        isOpen,
        currentPeriod,
        nextOpenInfo,
        todayLabel: todaySchedule.day
      });
    };

    updateStatus();
    const intervalId = setInterval(updateStatus, 60000); // Check every minute

    return () => clearInterval(intervalId);
  }, []);

  return state;
}
