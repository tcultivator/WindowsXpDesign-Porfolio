import QuickStartGuideIcon from '@/public/QuickStartGuideIcon.ico'
// default applications
import QuickStartGuide from '@/components/homeScreen/applications/QuickStartGuide'
import Image from 'next/image'
export const QuickStartGuideData = {
    id: 'quickstart',
    title: 'Quick Start Guide',
    icon: <Image src="/QuickStartGuideIcon.ico" alt='' width={500} height={500} className='w-full' />,
    content: <QuickStartGuide />
}