import {useEffect, useState} from 'react'
import { ProveedorRequest } from '../api/proveedor';



export const useAxios = () => {

  const [data, setData] = useState(null);

  const [error, setError] = useState(null);

  const proveedorConsulta = async() => {
    try {
      const response = await ProveedorRequest();
      setData(response);
    } catch(error) {
      setError(error);
    }
  }

  proveedorConsulta();

  return {data, error};
}