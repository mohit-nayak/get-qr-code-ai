"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useCountries } from "@/hook/useCountries"

interface countrySelectInterface {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export const CountrySelect = ({ value, setValue }: countrySelectInterface) => {
  const [open, setOpen] = React.useState(false)
  const { getAll, getByValue } = useCountries()
  const country = getByValue(value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] justify-between"
        >
          {country?.alpha2 + " "}
          {country?.flag + " "}({country?.phoneCode})
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {getAll?.map((data) => (
                <CommandItem
                  className="cursor-pointer opacity-100 data-[disabled]:pointer-events-auto data-[disabled]:opacity-100"
                  key={data?.alpha2}
                  value={data?.phoneCode}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === data?.alpha2 ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {data?.alpha2 + " "}
                  {data?.flag + " "}({data?.phoneCode})
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
