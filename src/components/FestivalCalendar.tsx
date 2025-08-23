import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { festivals } from '../data/festivals';
import { CalendarDay, Festival, Region, Religion } from '../types';

interface FestivalCalendarProps {
  onSelectFestival: (festival: Festival) => void;
}

const FestivalCalendar: React.FC<FestivalCalendarProps> = ({ onSelectFestival }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);
  const [selectedReligions, setSelectedReligions] = useState<Religion[]>([]);

  const regions: Region[] = ['North India', 'South India', 'East India', 'West India', 'Central India', 'Northeast India', 'Pan India'];
  const religions: Religion[] = ['Hindu', 'Muslim', 'Sikh', 'Christian', 'Jain', 'Buddhist', 'Secular'];

  useEffect(() => {
    generateCalendarDays();
  }, [currentDate, selectedRegions, selectedReligions]);

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    const daysInMonth = lastDayOfMonth.getDate();
    const startingDayOfWeek = firstDayOfMonth.getDay();
    
    const today = new Date();
    
    const days: CalendarDay[] = [];
    
    // Add days from previous month
    const previousMonth = new Date(year, month - 1, 1);
    const daysInPreviousMonth = new Date(year, month, 0).getDate();
    
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const day = daysInPreviousMonth - i;
      const date = new Date(previousMonth.getFullYear(), previousMonth.getMonth(), day);
      
      const dayFestivals = filterFestivals(date);
      
      days.push({
        date,
        festivals: dayFestivals,
        isCurrentMonth: false,
        isToday: isSameDay(date, today)
      });
    }
    
    // Add days of current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      
      const dayFestivals = filterFestivals(date);
      
      days.push({
        date,
        festivals: dayFestivals,
        isCurrentMonth: true,
        isToday: isSameDay(date, today)
      });
    }
    
    // Add days from next month to complete the calendar grid
    const daysToAdd = 42 - days.length; // 6 rows of 7 days
    const nextMonth = new Date(year, month + 1, 1);
    
    for (let day = 1; day <= daysToAdd; day++) {
      const date = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), day);
      
      const dayFestivals = filterFestivals(date);
      
      days.push({
        date,
        festivals: dayFestivals,
        isCurrentMonth: false,
        isToday: isSameDay(date, today)
      });
    }
    
    setCalendarDays(days);
  };

  const filterFestivals = (date: Date): Festival[] => {
    return festivals.filter(festival => {
      const festivalDate = new Date(festival.date);
      
      // Filter by date
      const isSameDate = isSameDay(festivalDate, date);
      
      // Filter by region if selected
      const matchesRegion = selectedRegions.length === 0 || 
        festival.region.some(region => selectedRegions.includes(region));
      
      // Filter by religion if selected
      const matchesReligion = selectedReligions.length === 0 || 
        festival.religion.some(religion => selectedReligions.includes(religion));
      
      return isSameDate && matchesRegion && matchesReligion;
    });
  };

  const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const toggleRegion = (region: Region) => {
    if (selectedRegions.includes(region)) {
      setSelectedRegions(selectedRegions.filter(r => r !== region));
    } else {
      setSelectedRegions([...selectedRegions, region]);
    }
  };

  const toggleReligion = (religion: Religion) => {
    if (selectedReligions.includes(religion)) {
      setSelectedReligions(selectedReligions.filter(r => r !== religion));
    } else {
      setSelectedReligions([...selectedReligions, religion]);
    }
  };

  const resetFilters = () => {
    setSelectedRegions([]);
    setSelectedReligions([]);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <button
            onClick={goToPreviousMonth}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <h2 className="text-xl font-bold text-gray-900">
            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h2>
          
          <button
            onClick={goToNextMonth}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Next month"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        <button
          onClick={goToToday}
          className="px-4 py-2 bg-orange-100 text-orange-700 rounded-md hover:bg-orange-200 transition-colors"
        >
          Today
        </button>
      </div>
      
      {/* Filters */}
      <div className="mb-6 space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Filter by Region:</h3>
          <div className="flex flex-wrap gap-2">
            {regions.map(region => (
              <button
                key={region}
                onClick={() => toggleRegion(region)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedRegions.includes(region)
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Filter by Religion:</h3>
          <div className="flex flex-wrap gap-2">
            {religions.map(religion => (
              <button
                key={religion}
                onClick={() => toggleReligion(religion)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedReligions.includes(religion)
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {religion}
              </button>
            ))}
          </div>
        </div>
        
        {(selectedRegions.length > 0 || selectedReligions.length > 0) && (
          <button
            onClick={resetFilters}
            className="text-sm text-gray-600 hover:text-gray-900 underline"
          >
            Reset Filters
          </button>
        )}
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Day headers */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-gray-500 font-medium p-2">
            {day}
          </div>
        ))}
        
        {/* Calendar days */}
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`min-h-[80px] p-1 border rounded ${
              day.isCurrentMonth ? 'bg-white' : 'bg-gray-50'
            } ${day.isToday ? 'border-orange-500' : 'border-gray-200'}`}
          >
            <div className="text-right mb-1">
              <span
                className={`inline-block w-6 h-6 rounded-full text-center leading-6 ${
                  day.isToday
                    ? 'bg-orange-500 text-white'
                    : day.isCurrentMonth
                    ? 'text-gray-900'
                    : 'text-gray-400'
                }`}
              >
                {day.date.getDate()}
              </span>
            </div>
            
            {day.festivals.length > 0 && (
              <div className="space-y-1">
                {day.festivals.map(festival => (
                  <button
                    key={festival.id}
                    onClick={() => onSelectFestival(festival)}
                    className="w-full text-left text-xs p-1 rounded bg-orange-100 text-orange-800 hover:bg-orange-200 transition-colors truncate"
                  >
                    {festival.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FestivalCalendar;