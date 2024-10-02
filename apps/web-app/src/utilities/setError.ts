export const setError = (error: string): string => {
 if(error == 'Invalid credentials'){
  return 'Credenciales invalidas';
 }
 
 if(error == 'accounts validation failed: name: Path `name` is required.'){
  return 'El nombre es requerido';
 }
 
 
 if( error == 'The phone number provided is not valid'){
  return 'El número de teléfono no es valido'
 }
 
 if( error == 'The password provided is not valid'){
  return 'La contraseña no es valida'
 }
 
 return ''
}