import React from 'react';
import HeroSection from './components/HeroSection'; 
import AutomaticBilling from './components/AutomaticBilling'
import ElectronicBilling from './components/ElectronicBilling';
import ClientRelations from './components/ClientRelations'
import HelebbaResults from './components/HelebbaResults'
import BusinessNeeds from './components/BusinessNeeds'
import HowCanWeHelp from './components/HowCanWeHelp'
import HelebbaTest from './components/HelebbaTest'
  

const EntrepreneursPage = () => {
  return (
    <div>
      <HeroSection />
      <AutomaticBilling />
      <ElectronicBilling />
      <ClientRelations />
      <HelebbaResults /> 
      <BusinessNeeds />
      <HowCanWeHelp />
      <HelebbaTest />
    </div>
  );
};

export default EntrepreneursPage;