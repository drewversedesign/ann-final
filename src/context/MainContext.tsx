"use client"

import React, { useState, useEffect, createContext } from 'react';
import type { Place } from '@/lib/types';
import { places as allPlaces } from '@/lib/data';

type MainContextType = {
    restaurants: Place[];
    hotels: Place[];
    attractions: Place[];
    isLoading: boolean;
};

export const MainContext = createContext<MainContextType | null>(null);

export const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [restaurants, setRestaurants] = useState<Place[]>([]);
    const [hotels, setHotels] = useState<Place[]>([]);
    const [attractions, setAttractions] = useState<Place[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const allRestaurants = allPlaces.filter(p => p.type === 'Restaurant');
        const allHotels = allPlaces.filter(p => p.type === 'Hotel');
        const allAttractions = allPlaces.filter(p => p.type === 'Attraction');

        setRestaurants(allRestaurants);
        setHotels(allHotels);
        setAttractions(allAttractions);

        setIsLoading(false);
    }, []);

    const value = {
        restaurants,
        hotels,
        attractions,
        isLoading,
    };

    return (
        <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
    );
};
