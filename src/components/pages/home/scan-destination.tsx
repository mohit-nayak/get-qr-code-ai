"use client"

import { useCallback, useState } from "react"

import { scanDestinationData, destinationEnum } from "@/constants/destination"
import SelectCard from "@/components/pages/home/select-card"
import ScanDestinationForm from "@/components/pages/home/forms/scan-destination/scan-destination-form"
import { useUrlStore } from "@/hook/useUrlStore"

interface ScanDestinationProps {}

const ScanDestination = ({}: ScanDestinationProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(destinationEnum?.url)

  const { setUrl } = useUrlStore((state) => ({
    setUrl: state.setUrl,
  }))

  const handleToogleCard = useCallback(
    (value: number) => {
      if (currentIndex === value) return
      setUrl("")
      setCurrentIndex(value)
    },
    [currentIndex],
  )

  return (
    <div>
      <div className="mt-2 grid grid-cols-4 gap-2">
        {scanDestinationData?.map((data) => (
          <SelectCard
            currentIndex={currentIndex}
            data={data}
            handleToogleCard={handleToogleCard}
          />
        ))}
      </div>

      <div className="my-5">
        <ScanDestinationForm currentIndex={currentIndex} />
      </div>
    </div>
  )
}

export default ScanDestination
