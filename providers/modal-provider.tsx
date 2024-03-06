"use client";

import { StoreModal } from "@/components/modals/store-modal";
import { useEffect, useState, } from "react";

// Définition du composant ModalProvider
export const ModalProvider = () => {
    // État local pour suivre si le composant est monté ou non
    const [isMounted, setIsMounted] = useState(false);

    // Effet useEffect qui se déclenche une seule fois au montage du composant
    useEffect(() => {
        // Met à jour l'état pour indiquer que le composant est monté
        setIsMounted(true);
    }, []); // Le tableau vide [] indique que cet effet se déclenche uniquement au montage du composant

    // Si le composant n'est pas monté, retourne null (ne rend rien)
    if (!isMounted) {
        return null;
    }
    // Si le composant est monté, le rendu suivant sera effectué

    return (
        <>
        <StoreModal />
        </>
    )
}

/*
Ce code semble être un moyen de s'assurer que le composant ModalProvider 
ne rend rien avant d'être monté, 
évitant ainsi des problèmes potentiels lors du rendu côté serveur. 
Il peut être utilisé pour gérer des cas spécifiques où certaines opérations 
ne doivent être effectuées que du côté client.
*/ 
