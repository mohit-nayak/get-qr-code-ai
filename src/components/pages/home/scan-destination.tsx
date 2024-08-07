"use client"

import { useCallback, useState } from "react"

import { scanDestinationData, destinationEnum } from "@/constants/destination"
import SelectCard from "@/components/pages/home/select-card"
import ScanDestinationForm from "@/components/pages/home/forms/scan-destination/scan-destination-form"
import { useQrOptions } from "@/hook/useQrOptions"
import { DEFAULT_PLATFORM_URL } from "@/config/platform-config"

interface ScanDestinationProps {}

const ScanDestination = ({}: ScanDestinationProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(destinationEnum?.url)

  const { setQrOptions, options } = useQrOptions((state) => ({
    setQrOptions: state?.setQrOptions,
    options: state?.options,
  }))

  const handleToogleCard = useCallback(
    (value: number) => {
      if (currentIndex === value) return
      setQrOptions({ data: DEFAULT_PLATFORM_URL })
      setCurrentIndex(value)
    },
    [currentIndex],
  )

  return (
    <>
      <div className="my-5">
        <ScanDestinationForm currentIndex={currentIndex} />
      </div>

      <div className="mt-2 grid grid-cols-4 gap-2">
        {scanDestinationData?.map((data) => (
          <SelectCard
            key={data?.id}
            currentIndex={currentIndex}
            data={data}
            handleToogleCard={handleToogleCard}
          />
        ))}
      </div>
    </>
  )
}

export default ScanDestination
