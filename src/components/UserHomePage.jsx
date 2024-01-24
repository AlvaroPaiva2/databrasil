import React from 'react'
import { View } from "react-native-web";
import CadEmployer from './CadEmployer';
import CepFinder from './CepFinder';
import EmployerTable from './EmployerTable';

export default function UserHomePage() {
  return (
    <View>
      <CepFinder />
      <CadEmployer />
      <EmployerTable />
    </View>
  )
}

