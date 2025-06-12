import { Navbar } from '@/components/navigation/Navbar';
import { ColorToggler } from '@/components/sections/ColorToggler';
import { Features } from '@/components/sections/Features';
import { FeaturesText } from '@/components/sections/FeaturesText';
import { Footer } from '@/components/sections/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { Impression } from '@/components/sections/Impression';
import { QualityTrust } from '@/components/sections/QualityTrust';
import { QuestionsAndAnswers } from '@/components/sections/QuestionsAndAnswers';
import { StartBuilding } from '@/components/sections/StartBuilding';
import { SubscriptionInfo } from '@/components/sections/SubscriptionInfo';
import { Testimonials } from '@/components/sections/Testimonials';
import { Tools } from '@/components/sections/Tools';
import { getDictionary } from '@/lib/i18n';

export default async function Home({params}) {
  const dict = await getDictionary(params?.locale);

  return (
    <div className='w-full mx-auto'>
      <Navbar data={dict}/>
      <ColorToggler />
      <HeroSection data={dict}/>
      <Tools data={dict}/>
      <Features data={dict}/>
      <FeaturesText data={dict.featuresText} />
      <QualityTrust data={dict.qualityTrust}/>
      <div className='flex-col lg:flex lg:flex-col-reverse'>
        <Testimonials data={dict.testimonials} />
        <Impression data={dict.impression} />
      </div>
      <SubscriptionInfo data={dict.subscription}/>
      <QuestionsAndAnswers data={dict.questionsAndAnswers}/>
      <StartBuilding data={dict}/>
      <Footer data={dict.footer}/>
    </div>
  );
}
