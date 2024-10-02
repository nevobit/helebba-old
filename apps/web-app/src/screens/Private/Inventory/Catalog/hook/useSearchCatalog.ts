import { useState } from "react";


export const useSearchCatalog = () => {
  
  const [search, setSearch] = useState<string>('')
  
  const onSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    console.log(search)
    setSearch('')
  }

  return {
    search,
    onSearch,
    handleSubmit
  }
}
