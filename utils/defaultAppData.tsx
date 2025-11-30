import QuickStartGuideIcon from '@/public/QuickStartGuideIcon.ico'
// default applications
import QuickStartGuide from '@/components/homeScreen/applications/QuickStartGuide'
import Image from 'next/image'
export const QuickStartGuideData = {
    id: 'quickstart',
    title: 'Quick Start Guide',
    icon: <Image src={QuickStartGuideIcon} alt='' width={20} height={20} className='w-full'/>,
    content: <QuickStartGuide />
}